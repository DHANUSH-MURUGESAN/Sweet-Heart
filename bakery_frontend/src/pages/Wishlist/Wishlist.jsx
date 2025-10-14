// import React, { useEffect, useState } from "react";
// import Nav from "../../Nav";
// import Footer from "../../Footer";
// import { Link } from "react-router";
// import { FaTrash } from "react-icons/fa";
// import axios from "axios";

// const Wishlist = () => {
//   const [wishlist, setWishlist] = useState([]);
//   // const [wishlist, setWishlist] = useState(() => {
//   //   const saved = localStorage.getItem("wishlist");
//   //   return saved ? JSON.parse(saved) : [];
//   // });

//   // // Persist wishlist to localStorage
//   // useEffect(() => {
//   //   localStorage.setItem("wishlist", JSON.stringify(wishlist));
//   // }, [wishlist]);

//   // const removeFromWishlist = (id) => {
//   //   setWishlist((prev) => prev.filter((item) => item._id !== id));
//   // };

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);
//   const userId = localStorage.getItem("id");

//   const fetchWishlist = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5050/wishlist/${userId}`);
//       setWishlist(res.data);
//     } catch (err) {
//       console.error("Error fetching wishlist:", err);
//     }
//   }; 
//   //  Fetch wishlist
//   useEffect(() => {
//     fetchWishlist();
//   }, [userId]);

//   //  Remove item,""
//   const removeFromWishlist = async(itemId) => {
//     try {
//       const res = await axios.put("http://localhost:5050/wishlist/remove",{data: { userId, itemId }});
//       setWishlist(res.data.wishlist.items);
//     } catch (err) {
//       console.log("Error removing:", err);
//     }
//   };

//   return (
//     <>
//       <Nav />
//       <div className="p-10 bg-cream min-h-screen mt-18 sm:mt-16">
//         <h1 className="text-3xl font-bold text-dark mb-6">My Wishlist</h1>

//         {wishlist.length === 0 ? (
//           <p className="text-lg text-dark">Your wishlist is empty.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-6">
//             {wishlist.map((item) => (
//               <div
//                 key={item._id}
//                 className="bg-mint shadow-md rounded-xl p-4 flex flex-col"
//               >
//                 {/* <Link to={`/menu/${item._id}`}> */}
//                {
//                 item.items.map((item)=>(
//                    <Link to={`/menu/${item.itemId}`}>
//                   <img
//                     src={`http://localhost:5050/files/${item.image}`}
//                     alt={item.recipe}
//                     className="h-40 object-contain mx-auto"
//                   />
//                   <h2 className="text-choco text-lg font-bold mt-2">
//                     {item.recipe}
//                   </h2>
//                   <p className="text-pink-500 font-semibold">₹ {item.price}</p>
//                 </Link>
//                 ))
//                }
//                 <button
//                   // onClick={() => removeFromWishlist(item._id)}
//                   onClick={() => removeFromWishlist(item.items[0].itemId)}
//                   className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600"
//                 >
//                   <FaTrash /> Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Wishlist;



import React, { useEffect, useState } from "react";
import Nav from "../../Nav";
import Footer from "../../Footer";
import { Link } from "react-router";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const userId = localStorage.getItem("id");

  // Fetch wishlist
  const fetchWishlist = async () => {
    try {
      const res = await axios.get(`http://localhost:5050/wishlist/${userId}`);
      setWishlist(res.data || []);
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [userId]);

  // Remove item
  const removeFromWishlist = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5050/wishlist/remove/${userId}/${itemId}`, {
        data: { userId, itemId },
      });
      // Refresh after delete
      fetchWishlist();
    } catch (err) {
      console.error("Error removing from wishlist:", err);
    }
  };

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <>
      <Nav />
      <div className="p-10 bg-cream min-h-screen lg:mt-16 xl:mt-10 sm:pt-20 md:mt-16">
        <h1 className="text-3xl font-bold text-dark mb-6">My Wishlist</h1>

        {wishlist.length === 0 ? (
          <p className="text-lg text-dark">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div
                key={item._id}
                className="bg-mint shadow-md rounded-xl p-4 flex flex-col"
              >
                <Link to={`/menu/${item.itemId}`}>
                  <img
                    src={`http://localhost:5050/files/${item.image}`}
                    alt={item.recipe}
                    className="h-40 object-contain mx-auto"
                  />
                  <h2 className="text-choco text-lg font-bold mt-2">
                    {item.recipe}
                  </h2>
                  <p className="text-pink-500 font-semibold">₹ {item.price}</p>
                </Link>
                <button
                  onClick={() => removeFromWishlist(item.itemId)}
                  className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg flex justify-center items-center gap-2 hover:bg-red-600"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;