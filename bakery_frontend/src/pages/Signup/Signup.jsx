import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import pic1 from "../../assets/home/img/pic1.png";
import pic2 from "../../assets/home/img/pic2.png";
import pic3 from "../../assets/home/img/pic3.png";
import pic4 from "../../assets/home/img/pic4.png";
import pic5 from "../../assets/home/img/pic5.png";
import pic6 from "../../assets/home/img/pic6.png";
import pic7 from "../../assets/home/img/pic7.png";
import pic8 from "../../assets/home/img/pic8.png";
import pic9 from "../../assets/home/img/pic9.png";
import pic10 from "../../assets/home/img/pic10.png";
import pic11 from "../../assets/home/img/pic11.png";
import pic12 from "../../assets/home/img/pic12.png";
import pic13 from "../../assets/home/img/pic13.png";
import pic14 from "../../assets/home/img/pic14.png";
import pic15 from "../../assets/home/img/pic15.png";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form:", formData); // ← Log user input

    try {
      const response = await axios.post(
        "http://localhost:5050/signup",
        formData
      );
      console.log("Signup success:", response.data);

      toast.success("Signup successful! Redirecting to login...", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log("Signup error", error);
      toast.error("Signup failed. Try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="bg-cream p-6 min-h-screen flex flex-col justify-center items-center">
      <ToastContainer />
      {/* <img
        src={pic1}
        alt="sweet"
        className="absolute top-30 left-10 w-24 rotate-20 opacity-20 animate-pulse"
      />
      <img
        src={pic2}
        alt="sweet"
        className="absolute top-25 left-80 w-28 -rotate-12 opacity-20 animate-pulse"
      />
      <img
        src={pic3}
        alt="sweet"
        className="absolute bottom-30 left-65 w-30 rotate-15 opacity-20 animate-pulse"
      />
      <img
        src={pic4}
        alt="sweet"
        className="absolute top-25 -rotate-10 right-20 w-24 opacity-20 animate-pulse"
      />
      <img
        src={pic5}
        alt="sweet"
        className="absolute bottom-10 rotate-10 right-52 w-28 opacity-20 animate-pulse"
      />
      <img
        src={pic6}
        alt="sweet"
        className="absolute top-100 right-80 w-24 opacity-20 animate-pulse"
      />
      <img
        src={pic7}
        alt="sweet"
        className="absolute bottom-60 left-30 w-24 -rotate-25 opacity-20 animate-pulse"
      />
      <img
        src={pic8}
        alt="sweet"
        className="absolute top-35 right-100 w-28 opacity-20 animate-pulse"
      />
      <img
        src={pic9}
        alt="sweet"
        className="absolute top-70 right-60 w-20 -rotate-45 opacity-20 animate-pulse"
      />
      <img
        src={pic9}
        alt="sweet"
        className="absolute top-120 right-40 w-15 rotate-45 opacity-20 animate-pulse"
      />
      <img
        src={pic9}
        alt="sweet"
        className="absolute top-70 right-105 w-10 -rotate-6 opacity-20 animate-pulse"
      />
      <img
        src={pic9}
        alt="sweet"
        className="absolute top-70 left-50 w-15 -rotate-6 opacity-20 animate-pulse"
      />
      <img
        src={pic10}
        alt="sweet"
        className="absolute bottom-90 left-80 w-28 -rotate-10 opacity-20 animate-pulse"
      />
      <img
        src={pic11}
        alt="sweet"
        className="absolute bottom-15 left-10 w-28 -rotate-6 opacity-20 animate-pulse"
      />
      <img
        src={pic12}
        alt="sweet"
        className="absolute bottom-40 right-80 w-35 -rotate-20 opacity-20 animate-pulse"
      />

      <img
        src={pic13}
        alt="sweet"
        className="absolute bottom-100 right-10 w-25 -rotate-6 opacity-20 animate-pulse"
      />

      <img
        src={pic14}
        alt="sweet"
        className="absolute bottom-90 left-5 w-35 rotate-20 opacity-20 animate-pulse"
      />

      <img
        src={pic15}
        alt="sweet"
        className="absolute bottom-25 right-10 w-25 rotate-20 opacity-20 animate-pulse"
      /> */}

      <div className="bg-choco text-white rounded-xl shadow-lg p-10 space-y-6 max-w-md w-full">
        <h2 className="text-center text-3xl font-bold">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="text-xl">
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter firstname"
              autoComplete="given-name"
              className="bg-cream text-choco rounded p-2 w-full mt-1 focus:ring-5 focus:ring-caramel"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastname" className="text-xl">
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter lastname"
              autoComplete="family-name" 
              className="bg-cream text-choco rounded p-2 w-full mt-1 focus:ring-5 focus:ring-caramel"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-xl">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              autoComplete="email" 
              className="bg-cream text-choco rounded p-2 w-full mt-1 focus:ring-5 focus:ring-caramel"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="mobilenumber" className="text-xl">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobilenumber"
              name="mobilenumber"
              placeholder="Enter mobile number"
              autoComplete="tel" 
              className="bg-cream text-choco rounded p-2 w-full mt-1 focus:ring-5 focus:ring-caramel"
              value={formData.mobilenumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              autoComplete="new-password"
              className="bg-cream text-choco rounded p-2 w-full mt-1 focus:ring-5 focus:ring-caramel"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-caramel text-center p-2 mt-5 rounded-3xl text-xl w-full transition-tansform hover:scale-95"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="text-center text-xl">
          Already have an account?{" "}
          <Link to="/login" className="text-caramel hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
