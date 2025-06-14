import React, { useEffect, useState } from "react";
import axios from "../config/api";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [userdata, setUserdata] = useState();
  const [preview, setPreview] = useState();
  const [photo, setPhoto] = useState();

  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const response = await axios.get("/api/auth/user");
      console.log(response.data);
      setUserdata(response.data);
    } catch (e) {
      console.log("Uanble to fetch Data from Server");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelPhotoChnage = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const uploadPhoto = async () => {
    const data = new FormData();
    data.append("file", photo);
    data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    data.append("folder", "sample-login");
  
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
  
      const result = await response.json();
      return result.secure_url;  
    } catch (e) {
      console.log("Photo upload failed:", e);
      return null;
    }
  };
  

  const handelSubmit = async (e) => {
    e.preventDefault();
  
    let updatedPhotoURL = userdata.profilePhoto; // fallback to existing
  
    if (photo) {
      const uploadedURL = await uploadPhoto();
      if (uploadedURL) {
        updatedPhotoURL = uploadedURL;
      }
    }
  
    const payload = {
      ...userdata,
      profilePhoto: updatedPhotoURL,
    };
  
    try {
      const response = await axios.post("/api/auth/update", payload);
      console.log(response.data);
      alert(response.data.message);
      navigate("/profile"); // optional redirect after success
    } catch (e) {
      console.log("Unable to update profile", e);
      alert(e.response?.data?.message || "Something went wrong");
    }
  };
  

  useEffect(() => {
    getUserData();
  }, []);

  console.log(preview);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Update Profile
          </h2>

          {!userdata ? (
            <span>User Not Found</span>
          ) : (
            <div className="flex flex-col items-center gap-5">
              <div className="border w-[15rem] h-[15rem] rounded-full overflow-hidden">
                <img
                  src={preview || userdata.profilePhoto}
                  alt="ProfilePic"
                  className="object-cover"
                />
              </div>
              <input
                type="file"
                name="photo"
                className="w-full p-3 border rounded mb-4"
                onChange={handelPhotoChnage}
              />
              <input
                type="name"
                name="name"
                placeholder="Name"
                className="w-full p-3 border rounded mb-4"
                value={userdata.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full p-3 border rounded mb-4"
                value={userdata.phone}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="flex gap-3 justify-center">
            <button
              className="rounded bg-green-500 text-white p-3 mt-8"
              onClick={handelSubmit}
            >
              Update
            </button>
            <button
              className="rounded bg-gray-500 text-white p-3 mt-8"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
