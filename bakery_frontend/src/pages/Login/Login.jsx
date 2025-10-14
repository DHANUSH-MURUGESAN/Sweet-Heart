import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import pic1 from "../../assets/home/img/pic1.png";
// import pic2 from "../../assets/home/img/pic2.png";
// import pic3 from "../../assets/home/img/pic3.png";
// import pic4 from "../../assets/home/img/pic4.png";
// import pic5 from "../../assets/home/img/pic5.png";
// import pic6 from "../../assets/home/img/pic6.png";
// import pic7 from "../../assets/home/img/pic7.png";
// import pic8 from "../../assets/home/img/pic8.png";
// import pic9 from "../../assets/home/img/pic9.png";
// import pic10 from "../../assets/home/img/pic10.png";
// import pic11 from "../../assets/home/img/pic11.png";
// import pic12 from "../../assets/home/img/pic12.png";
// import pic13 from "../../assets/home/img/pic13.png";
// import pic14 from "../../assets/home/img/pic14.png";
// import pic15 from "../../assets/home/img/pic15.png";
import { FaEye, FaEyeSlash, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const navigate = useNavigate();
  // const { _, setUser } = useContext(UserContext);
  const { _, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [role, setRole] = useState("user");

  const [showPassword, setshowPassword] = useState(true);

  const { signupWithGmail } = useContext(AuthContext);

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
        "http://localhost:5050/login",
        formData
      );
      console.log("Login success:", response.data);

      const token = response.data?.token || response.data?.data?.token;
      const user = response.data?.user;
      if (token) {
        localStorage.setItem("authToken", token); // save token
        localStorage.setItem("id", response?.data?.user?._id); // save _id
        localStorage.setItem("role", response.data?.user.role);
        setUser({
          email: formData.email,
          displayName:
            response.data?.user?.name || formData.email.split("@")[0],
          photoURL: null, // fallback handled in Profile.jsx
          role: user.role,
        });
      }

      if (response.data?.user.role === "admin") {
        toast.success("Login successful! Redirecting to admin-dashboard...", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/admin-dashboard");
        }, 2000);
      } else {
        toast.success("Login successful! Redirecting to home...", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      // setTimeout(() => {
      //   if (response.data?.user.role === "admin") {
      //     navigate("/admin-dashboard");   //Admin goes admin-dahboard
      //   } else {
      //     navigate("/");   //Normal user goes home
      //   }
      // }, 2000);
    } catch (error) {
      console.log("Login error", error);
      toast.error("Login failed. Try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  {
    /*Google Login handler (async/await + toasts + navigation)*/
  }
  const handleLogin = async () => {
    try {
      const result = await signupWithGmail();
      const user = result.user;
      console.log("Google login successfull:", user);
      toast.success("Google login successfull!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error);
      toast.error("Google login failed: " + (error?.message || ""), {
        position: "top-right",
        autoClose: 4000,
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
        <h2 className="text-center text-3xl font-bold">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4 mb-4 justify-center items-center">
            <button
              type="button"
              onClick={() => setRole("user")}
              className={`px-4 py-2 rounded-3xl ${
                role === "user"
                  ? "bg-gradient-to-r from-lavender to-caramel text-white"
                  : "bg-cream text-choco"
              }`}
            >
              User
            </button>
            <button
              type="button"
              onClick={() => setRole("admin")}
              className={`px-4 py-2 rounded-3xl ${
                role === "admin"
                  ? "bg-gradient-to-r from-caramel to-lavender text-white"
                  : "bg-cream text-choco"
              }`}
            >
              Admin
            </button>
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

          <div className="relative">
            <label htmlFor="password" className="text-xl">
              Password
            </label>
            <input
              type={showPassword ? "password" : "text"}
              id="password"
              name="password"
              placeholder="Enter password"
              autoComplete="current-password"
              className="bg-cream text-choco rounded p-2 w-full my-1 focus:ring-5 focus:ring-caramel"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setshowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1.5 text-choco"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <Link to="/" className="hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* <div>
            <button
              type="submit"
              className="bg-caramel text-center p-2 mt-5 rounded-3xl text-xl w-full transition-tansform hover:scale-95"
            >
              Login
            </button>
          </div> */}
          <div>
            <button
              type="submit"
              className="bg-caramel text-center p-2 mt-5 rounded-3xl text-xl w-full transition-tansform hover:scale-95"
            >
              Login as {role === "admin" ? "Admin" : "User"}
            </button>
          </div>
        </form>

        <p className="text-center text-xl">
          Register your details?
          <Link to="/signup" className="text-caramel hover:underline mx-1">
            SignUp
          </Link>
        </p>
        {/* <div className="grid grid-cols-3 justify-items-center mx-30">
          <FaGoogle
            className="border-2 rounded-full h-8 w-8 p-1 hover:text-caramel cursor-pointer"
            onClick={handleLogin}
          />
          <FaFacebook className="border-2 rounded-full h-8 w-8 p-1 hover:text-caramel" />
          <FaGithub className="border-2 rounded-full h-8 w-8 p-1 hover:text-caramel" />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
