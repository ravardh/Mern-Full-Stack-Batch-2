import React, { useState } from "react";

const BasicForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ",name);
    console.log("Email: ",email);
    console.log("Phone: ",phone);
    console.log("Password: ",password);
  };

  return (
    <>
      <div className="conatiner w-50 mx-auto my-5 p-4 rounded bg-light">
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control my-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control my-3"
          />
          <input
            type="number"
            name="phone"
            placeholder="Enter your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control my-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
