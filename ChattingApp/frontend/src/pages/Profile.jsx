import React, { use, useEffect } from "react";
import photo from "../assets/Steve-jobs.webp";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import backend from "../config/api";
import { useAuth } from "../context/authContext";
import toast from "react-hot-toast";
import Loading from "../assets/infinite-spinner.svg";

const Profile = () => {
  const { setUser, setIsLogin } = useAuth();
  const [data, setData] = useState(
    JSON.parse(sessionStorage.getItem("user")) || {
      fullName: "Steve Jobs",
      email: "email@example.com",
    }
  );

  const [preview, setPreview] = useState("");
  const [photo, setPhoto] = useState("");

  const [loading, setLoading] = useState(false);

  const handlePhotoChange = (e) => {
    const fileURL = URL.createObjectURL(e.target.files[0]);
    setPreview(fileURL);
    setPhoto(e.target.files[0]);
    console.log("Change photo button clicked");
  };

  const handleChange = (e) => {
    //every time i am writing anything in the input the function is called and everything is stored
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value })); //...prev thing
  };

  const handelSave = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.fullName);
    formData.append("email", data.email);
    formData.append("photo", photo);

    try {
      const res = await backend.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      sessionStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      setIsLogin(true);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-[90vh] p-10 flex items-center justify-center flex-col bg-gray-100">
        <div className="w-full max-w-md bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col gap-8">
          <h1 className="text-4xl font-bold text-[#1A3C5A] text-center mb-2">
            Profile
          </h1>
          <div className="flex items-center justify-center relative">
            <img
              src={preview || data.profilePicture || photo}
              alt="profilepicture"
              className="w-50 h-50 object-cover border rounded-full"
            />
            <label className="absolute bottom-3 right-1/4 bg-white border h-10 w-10 p-2 rounded-full flex justify-center items-center hover:bg-[#FF4081] group">
              <FaCamera className=" text-[#FF4081] group-hover:text-white text-lg" />
              <input
                type="file"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </label>
          </div>

          <div className="flex flex-col items-center gap-4">
            <input
              type="text"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
              className="text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-[#FF4081] bg-transparent"
            />

            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-[#FF4081] bg-transparent"
            />
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="w-full py-3 bg-[#1A3C5A] text-white font-bold rounded-lg hover:bg-[#FF4081] transition-colors duration-200"
              onClick={handelSave}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <img src={Loading} alt="" className="h-[1em]" />
                  <span>Saving ...</span>
                </div>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
