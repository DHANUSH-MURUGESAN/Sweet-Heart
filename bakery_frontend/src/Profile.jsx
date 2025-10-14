import React, { useState, useContext, useEffect } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { AuthContext } from "./contexts/AuthContext";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";
import { FaBoxOpen, FaHeart, FaRegUser } from "react-icons/fa";
import { UserContext } from "./contexts/UserContext";
import axios from "axios";
import { MdLogout } from "react-icons/md";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  // const { user } = useContext(UserContext);
  const id = localStorage.getItem("id");
  const savedProfilePhoto = localStorage.getItem("profilePhoto") || "";
  const [user, setUser] = useState({
    profilePhoto: savedProfilePhoto
  });

  const getuser = async (id) => {
    try {
      const Userdata = await axios.get(`http://localhost:5050/getuser/${id}`);
      if (!Userdata) return window.alert("user not exits");
      console.log(Userdata?.data?.existUser, "profile user");
      setUser(Userdata?.data?.existUser);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getuser(id);
  }, []);

  const handleLogout = () => {
    logout();
    try {
      localStorage.clear();
      toast.success("Logout successfull! Redirecting to login...", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed: " + (error?.message || ""), {
        position: "top-right",
        autoClose: 4000,
        theme: "colored",
      });
    }
    // localStorage.removeItem("authToken");
    // navigate("/login");
  };

  // Profile image/letter logic
  const renderProfileIcon = () => {
    if (user?.profilePhoto) {
      // Google login → profile pic
      return (
        <img
          src={`http://localhost:5050/files/${user.profilePhoto}`}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
      );
    } else if (user?.displayName) {
      // Normal login → first letter of name
      return (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-caramel text-white font-bold">
          {user.displayName.charAt(0).toUpperCase()}
        </div>
      );
    } else if (user?.email) {
      // Fallback → first letter of email
      return (
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-caramel text-white font-bold">
          {user.email.charAt(0).toUpperCase()}
        </div>
      );
    } else {
      return <FaRegUser className="w-8 h-8" />;
    }
  };

  return (
    <div className="relative">
      {/* Profile button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-cream text-choco p-[1px] rounded-full hover:scale-95 transition"
      >
        {renderProfileIcon()}
        {open ? (
          <BiChevronUp className="hidden" />
        ) : (
          <BiChevronDown className="hidden" />
        )}
      </button>

      {/* Dropdown menu */}
      {open && (
        <ul className="absolute right-0 mt-2 w-36 rounded-lg bg-cream text-dark shadow-lg">
          <li className="w-full px-4 py-2 hover:bg-peach rounded-t-lg inline-flex gap-2 items-center">
            <div>
              <FaRegUser className="size-5" />
            </div>
            <Link to="/update-profile">My Profile</Link>
          </li>
          <li className="w-full px-4 py-2 hover:bg-peach inline-flex gap-2 items-center">
            <div>
              <FaBoxOpen className="size-5" />
            </div>
            <Link to="/orders">My Orders</Link>
          </li>
          <li className="w-full px-4 py-2 hover:bg-peach inline-flex gap-2 items-center">
            <div>
              <FaHeart className="size-5" />
            </div>
            <Link to="/wishlist">My Wishlist</Link>
          </li>
          <li
            onClick={handleLogout}
            className="w-full px-4 py-2 hover:bg-peach rounded-b-lg cursor-pointer inline-flex gap-2 items-center"
          >
            <div>
              <MdLogout className="size-5" />
            </div>
            <div>Logout</div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
