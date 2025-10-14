// import React from "react";
// import { useState } from "react";
// import { FaHeart, FaStar } from "react-icons/fa";
// import { Link } from "react-router";

// const SpecialDishesCards = ({ item }) => {
//   const [isHeartFill, setHeartFill] = useState(false);

//   const handleHeart = () => {
//     setHeartFill(!isHeartFill);
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-4 w-300">
//         <div className="bg-pink rounded-4xl p-5 relative">
//           <div
//             className={`rating gap-1 absolute right-0 top-0 p-4 heartStar bg-choco`}
//             onClick={handleHeart}
//           >
//             <FaHeart className={`h-5 w-5 cursor-pointer transition-all duration-300 ${
//               isHeartFill ? "text-rose-500 scale-125" : "text-white"
//             }`} />
//           </div>
//           <Link to={`/menu/${item._id}`}>
//             <img
//               src={item.image}
//               className="h-50 mx-auto object-contain transition-all hover:scale-110 duration-200"
//             />
//           </Link>
//           <div>
//             <Link to={`/menu/${item._id}`}><h1 className="text-choco font-bold">{item.name}</h1></Link>
//             <p className="font-semibold text-dark">{item.description}</p>
//             <div className="flex justify-between">
//               <h1 className="font-medium text-caramel">₹ {item.price}</h1>
//               <p className="text-pink-500 font-semibold flex flex-col-2 gap-1">
//                 <FaStar className="mt-[2px]" />
//                 {item.ratings}
//               </p>
//             </div>
//           </div>
//           <button className="mt-4 w-full bg-choco text-white py-2 rounded-xl font-semibold hover:bg-caramel transition duration-300">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpecialDishesCards;

//---------------------------------------------------------------------------------

import React, { useContext, useState, useEffect } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Howl } from "howler";
import { Link } from "react-router";
import { CartContext } from "../../contexts/CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import heartSoundFile from "../../assets/home/bubblepop.mp3";
import axios from "axios";
// import { WishlistContext } from "../../contexts/WishlistContext";

const SpecialDishesCards = ({ item }) => {
  const [isHeartFill, setHeartFill] = useState(false);
  const { addToCart } = useContext(CartContext);
  // const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  // console.log("error", addToWishlist)

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const userId = localStorage.getItem("id");

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    AOS.init({
      duration: 300, // animation duration
      once: false, // if true, animation happens only once
    });
    AOS.refresh(); // important to recalc positions after refresh
  }, []);

  // useEffect(() => {
  //   // if item is in wishlist, then heart should be active
  //   const alreadyLiked = wishlist.some((i) => i._id === item._id);
  //   setHeartFill(alreadyLiked);
  // }, [wishlist, item._id]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await axios.get(`http://localhost:5050/wishlist/${userId}`);
        const wishlistItems = res.data || [];
        const alreadyLiked = wishlistItems.some((i) => i.itemId === item._id);
        setHeartFill(alreadyLiked);
      } catch (err) {
        console.log("Error checking wishlist:", err);
      }
    };
    fetchWishlist();
  }, [item._id, userId]);

  const sound = new Howl({ src: [heartSoundFile] });

  // const handleHeart = () => {
  //   // setHeartFill(!isHeartFill);
  //   setHeartFill(prev => !prev);
  //   if (!isHeartFill) sound.play();
  // };
  //   const handleHeart = () => {
  //   setHeartFill(prev => {
  //     const newState = !prev;
  //     if (newState) {
  //       addToWishlist(item);
  //       sound.play();
  //     } else {
  //       removeFromWishlist(item._id);
  //     }
  //     return newState;
  //   });
  // };


  // const handleHeart = async () => {
  //   setHeartFill((prev) => {
  //     const newState = !prev;
  //     if (newState) {
  //       setWishlist((prevList) => {
  //         if (!prevList.some((i) => i._id === item._id))
  //           return [...prevList, item];
  //         return prevList;
  //       });
  //       const data = {
  //         userid: localStorage.getItem("id"),
  //         item,
  //       };
  //       axios
  //         .post("http://localhost:5050/wishlist/add", data)
  //         .then((res) => console.log("response", res.data))
  //         .catch((err) => console.log(err));
  //       sound.play();
  //     } else {
  //       setWishlist((prevList) => prevList.filter((i) => i._id !== item._id));
  //     }
  //     return newState;
  //   });
  // };


  const handleHeart = async (itemId) => {
  const newState = !isHeartFill;
  setHeartFill(newState);

  if (newState) {
    // Add to wishlist
    try {
      await axios.post("http://localhost:5050/wishlist/add", {
        userid: userId,
        item,
      });
      sound.play();
    } catch (err) {
      console.error("Error adding to wishlist:", err);
    }
  } else {
    // Remove from wishlist
    try {
      await axios.delete(`http://localhost:5050/wishlist/remove/${userId}/${itemId}`, {
        data: { userId, itemId: item._id },
      });
    } catch (err) {
      console.error("Error removing from wishlist:", err);
    }
  }
};

  return (
    <div className="w-full sm:w-68 md:w-68 lg:w-68 xl:w-74 ">
      <div
        className="bg-pink rounded-3xl p-5 relative shadow-md hover:shadow-xl transition-all duration-300"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-out"
        data-aos-delay="700"
        data-aos-offset="0"
      >
        {/* Heart Icon */}
        <div
          className={`rating gap-1 absolute right-0 top-0 p-4 heartStar bg-choco cursor-pointer`}
          onClick={() => handleHeart(item._id)}
        >
          <FaHeart
            className={`h-5 w-5 transition-transform duration-300 ${
              isHeartFill ? "text-rose-500 scale-125" : "text-white"
            }`}
          />
        </div>

        {/* Image */}
        <Link to={`/menu/${item._id}`}>
          <img
            src={`http://localhost:5050/files/${item.image}`}
            alt={item.recipe}
            className="h-40 mx-auto object-contain transition-transform hover:scale-110 duration-200"
          />
        </Link>

        {/* Content */}
        <div className="mt-4 space-y-2">
          <Link to={`/menu/${item._id}`}>
            <h1 className="text-choco font-bold text-lg line-clamp-1">
              {item.recipe}
            </h1>
          </Link>
          <p className="font-medium text-dark text-sm line-clamp-2">
            {item.description}
          </p>

          {/* Price and Ratings */}
          <div className="flex items-center justify-between mt-2">
            <h1 className="font-semibold text-pink-500">₹ {item.price}</h1>
            <p className="text-caramel font-semibold flex items-center gap-1">
              <FaStar className="text-amber-400" /> {item.ratings}
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => addToCart(item)}
          className="mt-5 w-full bg-choco text-white py-2 rounded-xl font-semibold hover:bg-caramel transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SpecialDishesCards;
