import React, { useState, useEffect } from "react";

const BasicForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Password: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    // console.log("Name: ", formData.Name);
    // console.log("Email: ", formData.Email);
    // console.log("Phone: ", formData.Phone);
    // console.log("Password: ", formData.Password);
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev,[name]: value,}));
  };


  useEffect(() => {
      console.log("I am function 12");
    },[formData.Name]);
  
  return (
    <>
      <div className="conatiner w-50 mx-auto my-5 p-4 rounded bg-light">
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            name="Name"
            placeholder="Enter your Name"
            value={formData.Name}
            onChange={handelChange}
            className="form-control my-3"
          />
          <input
            type="email"
            name="Email"
            placeholder="Enter your Email"
            value={formData.Email}
            onChange={handelChange}
            className="form-control my-3"
          />
          <input
            type="number"
            name="Phone"
            placeholder="Enter your Phone"
            value={formData.Phone}
            onChange={handelChange}
            className="form-control my-3"
          />
          <input
            type="password"
            name="Password"
            placeholder="Enter your password"
            value={formData.Password}
            onChange={handelChange}
            className="form-control my-3"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default BasicForm;
