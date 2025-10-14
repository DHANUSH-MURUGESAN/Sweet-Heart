import React, { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";
import Nav from "../../Nav";
import axios from "axios";
// import { UserContext } from "../../contexts/UserContext";

const UpdateProfile = () => {
  // const { user, update, setUpdate } = useContext(UserContext);
  // console.log(update, "update");

  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const id = localStorage.getItem("id");
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

  // Wait for user to load
  if (!user) {
    return <div className="font-bold text-4xl text-choco">Loading profile...</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = user?._id || user?.uid || localStorage.getItem("id");

    if (!userId) {
      console.error("No user ID found, cannot update profile");
      alert("User ID missing. Please log in again.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("username", username);
      if (photo) formData.append("photo", photo);

      await axios.put(
        `http://localhost:5050/update-profile/${userId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      getuser(userId);  
      // setUpdate(true);
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Profile update error:", error);
    }
  };
  return (
    <div>
      <Nav />
      <div className="h-188 flex justify-center items-center bg-cream sm:h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-choco text-white rounded-xl shadow-2xl p-10 space-y-6 max-w-md w-full"
        >
          <h2 className="text-center text-3xl font-bold">
            Update Your Profile
          </h2>

          <div>
            {photo && (
              <img
                src={URL.createObjectURL(photo)}
                alt="Preview"
                className="w-24 h-24 mx-auto rounded-full mt-2"
              />
            )}
          </div>

          {/* Username */}
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your fullname"
            className="bg-cream text-choco rounded p-2 w-full mt-2 mb-5 focus:ring-5 focus:ring-caramel"
            required
          />

          {/* Profile Photo */}
          <label htmlFor="photo">Profile Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="bg-cream text-choco rounded p-2 w-full mt-2 mb-5 focus:ring-5 focus:ring-caramel"
          />
          <button
            type="submit"
            className="bg-caramel text-center p-2 mt-5 rounded-3xl text-xl w-full transition-transform hover:scale-95"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
