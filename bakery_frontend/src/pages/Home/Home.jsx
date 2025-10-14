// import React, { useEffect, useRef, useState } from "react";
// import sweetgirl from "../../assets/home/img/heroimage.png";
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
// import Catagories from "./Catagories";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import SpecialDishesCards from "./SpecialDishesCards";
// import Nav from "../../Nav";
// import Footer from "../../Footer";
// import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
// import chef from "../../assets/home/testimonials/testimonialHome.png";
// import customer1 from "../../assets/home/testimonials/customers/customer1.png";

// const Home = () => {
//   const [recipes, setRecipes] = useState([]);
//   const slider = useRef(null);

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth", // or "auto" if you don't want animation
//     });
//   }, []);

//   useEffect(() => {
//     fetch("/menu.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const specials = data.filter(
//           (item) => item.catagory === "Signature Sweets"
//         );
//         // console.log("Special Recipes:", specials)
//         setRecipes(specials);
//       });
//   }, []);

//   const NextArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "" }}
//         onClick={onClick}
//       >
//         NEXT
//       </div>
//     );
//   };

//   const PreviousArrow = (props) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "" }}
//         onClick={onClick}
//       >
//         BACK
//       </div>
//     );
//   };

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],

//     nextArrow: <NextArrow />,
//     previousArrow: <PreviousArrow />,
//   };
//   return (
//     <>
//       <div className="">
//         <Nav />
//         <section className="relative bg-cream flex flex-col-2 justify-between px-15 py-30 items-center overflow-hidden">
//           <img
//             src={pic1}
//             alt="sweet"
//             className="absolute top-10 left-20 w-24 rotate-20 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic2}
//             alt="sweet"
//             className="absolute top-25 left-80 w-28 -rotate-12 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic3}
//             alt="sweet"
//             className="absolute bottom-30 left-65 w-30 rotate-15 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic4}
//             alt="sweet"
//             className="absolute top-5 -rotate-10 right-20 w-24 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic5}
//             alt="sweet"
//             className="absolute bottom-10 rotate-10 right-42 w-28 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic6}
//             alt="sweet"
//             className="absolute top-1/3 right-150 w-24 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic7}
//             alt="sweet"
//             className="absolute bottom-20 left-230 w-24 -rotate-25 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic8}
//             alt="sweet"
//             className="absolute top-10 right-120 w-28 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic9}
//             alt="sweet"
//             className="absolute top-10 left-150 w-20 -rotate-45 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic10}
//             alt="sweet"
//             className="absolute bottom-50 right-180 w-28 -rotate-10 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic11}
//             alt="sweet"
//             className="absolute bottom-15 left-10 w-28 -rotate-6 opacity-20 animate-pulse"
//           />
//           <img
//             src={pic12}
//             alt="sweet"
//             className="absolute bottom-20 left-130 w-35 rotate-20 opacity-20 animate-pulse"
//           />
//           <div className="flex flex-col gap-10 w-140">
//             <h1 className="text-5xl font-bold text-dark">
//               Dive into the Magic of <span>Sweetness & Savouries</span>
//             </h1>
//             <p className="text-xl text-dark">
//               Where every bite is a celebration of love, taste, and tradition.
//             </p>
//             <button className="mr-110 border-caramel bg-caramel text-white px-5 py-2 rounded-3xl transition-transform hover:scale-95 hover:shadow-choco hover:shadow-xl">
//               Order Now
//             </button>
//           </div>
//           <div className="rounded-full w-110 h-110 bg-caramel inline-flex items-center">
//             <div className="rounded-full w-100 h-100 bg-choco m-auto shadow-xl shadow-choco">
//               <img
//                 src={sweetgirl}
//                 alt="Sweet Girl"
//                 className="w-full h-120 pb-16 object-contain rounded-full"
//               />
//             </div>
//           </div>
//         </section>
//         <section className="bg-beige px-15 py-20">
//           <div className="text-center">
//             <p className="text-xl font-medium text-choco mb-5">
//               CUSTOMER FAVOURITES
//             </p>
//             <h1 className="text-5xl font-bold text-dark">Popular Categories</h1>
//             <Catagories />
//           </div>
//         </section>
//         <section className="bg-cream px-15 py-20">
//           <div className="text-left">
//             <p className="text-xl font-medium text-choco mb-5">
//               SPECIAL DISHES
//             </p>
//             <div className="flex flex-col-2 justify-between">
//               <h1 className="text-5xl font-bold text-dark">
//                 Standout Sweets & Savories <br />
//                 from Our Menu
//               </h1>
//               <div>
//                 <button
//                   onClick={() => slider?.current?.slickPrev()}
//                   className="border-choco p-1 rounded-full border-4 ml-5 hover:shadow-md hover:shadow-choco"
//                 >
//                   <FaAngleLeft className="w-8 h-8 p-1 text-choco" />
//                 </button>
//                 <button
//                   onClick={() => slider?.current?.slickNext()}
//                   className="border-choco bg-choco p-2 rounded-full ml-5 hover:shadow-md hover:shadow-choco"
//                 >
//                   <FaAngleRight className="w-8 h-8 p-1 text-cream" />
//                 </button>
//               </div>
//             </div>
//             <Slider ref={slider} {...settings} className="mt-10">
//               {recipes.map((item, index) => (
//                 <SpecialDishesCards key={index} item={item} />
//               ))}
//             </Slider>
//           </div>
//         </section>
//         <section className="bg-beige px-15 py-20">
//           <div className="text-left flex flex-col-2 items-center justify-between">
//             <div className="w-1/2">
//               <img src={chef} className="h-150 mx-auto object-contain" />
//             </div>
//             <div className="w-1/2">
//               <p className="text-xl font-medium text-choco mb-5">
//                 TESTIMONIALS
//               </p>
//               <div className="">
//                 <h1 className="text-5xl font-bold text-dark">
//                   What Our Sweet Lovers Say <br />
//                   About Us
//                 </h1>
//               </div>
//               <p className="text-gray-500 mt-5">
//                 “Sweet Heart is my go-to for every occasion! Their rasgullas and
//                 samosas are unmatched. Every bite feels like home with fresh,
//                 flavorful, and crafted with so much love. From melt-in-mouth
//                 sweets to crispy savouries, every dish tells a story of
//                 tradition and taste. Whether it’s a festive celebration, a quick
//                 snack, or a family gathering, Sweet Heart never fails to add
//                 that extra sweetness and joy to the moment. Truly, it’s not just
//                 food, it’s an experience worth sharing.”
//               </p>
//               <div className="flex flex-row mt-5 gap-25">
//                 <div className="flex flex-row">
//                   <img
//                     src={customer1}
//                     className="border-4 border-beige rounded-full"
//                   />
//                   <img
//                     src={customer1}
//                     className="border-4 border-beige rounded-full absolute right-165"
//                   />
//                   <img
//                     src={customer1}
//                     className="border-4 border-beige rounded-full absolute right-155"
//                   />
//                 </div>
//                 <div className="flex flex-col">
//                   <h1 className="text-dark text-[20px] font-semibold">
//                     Customer Feedback
//                   </h1>
//                   <p className="font-medium inline-flex text-choco">
//                     <FaStar className="mt-[2px] mr-1 text-amber-300" />
//                     4.9
//                     <span className="text-gray-500 ml-2">(18.6K Reviews)</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="bg-cream px-15 py-20">
//           <div className="flex flex-col-2 justify-between">
//             <div className="text-left">
//               <p className="text-xl font-medium text-choco mb-5">
//                 OUR STORY & SERVICES
//               </p>
//               <div className="flex flex-col-2 justify-between">
//                 <h1 className="text-5xl font-bold text-dark">
//                   Our Sweet Story & Special Services
//                 </h1>
//               </div>
//               <p className="font-medium inline-flex text-[18px] text-choco mt-5">
//                 At Sweet Heart, we blend tradition with taste. From authentic
//                 Indian sweets to crispy savouries, <br/>every delicacy is handcrafted
//                 with love. Whether it’s a festival, celebration, or just your
//                 sweet craving, <br/>we’re here to serve you happiness.
//               </p>
//               <button className="mr-110 border-caramel bg-caramel text-white px-5 py-2 rounded-3xl transition-transform hover:scale-95 hover:shadow-choco hover:shadow-xl mt-10">
//                 Explore
//               </button>
//             </div>
//             <div className="grid grid-cols-2 gap-5 text-center">
//               <div className="grid grid-rows-2 gap-5">
//                 <div className="border-2 border-caramel rounded-3xl shadow-xl bg-caramel text-choco p-5 space-y-3 hover:border-choco">
//                   <h1 className="text-xl font-bold">Custom Orders</h1>
//                   <p>Tailored sweets & snacks for every celebration</p>
//                 </div>
//                 <div className="border-2 border-caramel rounded-3xl shadow-xl bg-caramel text-choco p-5 space-y-3 hover:border-choco">
//                   <h1 className="text-xl font-bold">Party Catering</h1>
//                   <p>Make your events sweeter with us</p>
//                 </div>
//               </div>
//               <div className="grid grid-rows-2 gap-5">
//                 <div className="border-2 border-caramel rounded-3xl shadow-xl bg-caramel text-choco p-5 space-y-3 hover:border-choco">
//                   <h1 className="text-xl font-bold">Fast Delivery</h1>
//                   <p>Fresh treats delivered to your doorstep</p>
//                 </div>
//                 <div className="border-2 border-caramel rounded-3xl shadow-xl bg-caramel text-choco p-5 space-y-3 hover:border-choco">
//                   <h1 className="text-xl font-bold">Gift Boxes</h1>
//                   <p>Share love with premium sweet & snack hampers</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Home;

// // Product/Other Sections

// // Background: Alternating White (#FFFFFF) and Soft Beige (#FAF3E0) for readability

// // Cards: Light pastel shades (Pink, Mint, Lavender) with soft shadows

// // Text: Dark Brown (#4A2C2A) for contrast


import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import sweetgirl from "../../assets/home/img/heroimage.png";
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
import Catagories from "./Catagories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SpecialDishesCards from "./SpecialDishesCards";
import Nav from "../../Nav";
import Footer from "../../Footer";
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import chef from "../../assets/home/testimonials/testimonialHome.png";
import customer1 from "../../assets/home/testimonials/customers/customer1.png";
import { Link, useNavigate } from "react-router";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  // const [slider,setSlider] = useState(null);
  const slider = useRef(null)
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration
    once: true,     // whether animation should happen only once
  });
}, []);

  useEffect(() => {
    fetch("http://localhost:5050/display")
    .then((res) => res.json())
    .then((resData) => {
      const items = resData.data || []; 
      const topRated = [...items]
        .sort((a, b) => b.ratings - a.ratings)
        .slice(0, 8);
      setRecipes(topRated);
    })
    .catch((err) => console.error("Error fetching specials:", err));
}, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="relative bg-cream flex flex-col lg:flex-row justify-between items-center px-6 pt-24 md:px-12 lg:px-20 pb-16 lg:py-28 lg:mt-18">
        {/* Background floating sweets (hidden on small screens for better UX) */}
        <div className="hidden lg:block">
          <img src={pic1} alt="sweet" className="absolute top-10 left-20 xl:left-10 w-24 xl:w-24 lg:w-20 lg:-rotate-35 opacity-20 animate-pulse" />
          <img src={pic2} alt="sweet" className="absolute top-20 left-1/3 lg:left-70 w-28 xl:w-28 xl:left-60 xl:top-10 lg:w-20 lg:rotate-30 opacity-20 animate-pulse" />
          <img src={pic3} alt="sweet" className="absolute bottom-20 left-1/2 lg:left-50 xl:bottom-5 w-28 xl:w-28 lg:w-25 lg:-rotate-40 opacity-20 animate-pulse" />
          <img src={pic4} alt="sweet" className="absolute top-5 lg:top-15 right-20 w-24 xl:w-24 lg:w-20 lg:rotate-20 opacity-20 animate-pulse" />
          <img src={pic5} alt="sweet" className="absolute bottom-10 right-40 xl:right-20 lg:right-20 w-28 xl:w-28 lg:w-20 lg:-rotate-20 opacity-20 animate-pulse" />
          <img src={pic6} alt="sweet" className="absolute top-1/3 right-60 xl:right-20 xl:top-70 lg:top-60 lg:right-100 w-24 xl:w-20 lg:w-15 lg:-rotate-25 opacity-20 animate-pulse" />
          <img src={pic7} alt="sweet" className="absolute bottom-20 left-2/3 xl:left-200 xl:bottom-5 lg:bottom-10 lg:left-160 w-24 xl:w-24 lg:w-20 lg:-rotate-35 xl:rotate-25 opacity-20 animate-pulse" />
          <img src={pic8} alt="sweet" className="absolute top-10 right-80 xl:right-80 xl:top-5 lg:right-60 w-28 xl:w-28 lg:w-20 lg:-rotate-3 opacity-20 animate-pulse" />
          <img src={pic9} alt="sweet" className="absolute top-10 left-2/4 xl:left-115 lg:left-120 w-20 lg:w-15 xl:w-20 lg:rotate-15 opacity-20 animate-pulse" />
          <img src={pic9} alt="sweet" className="xl:absolute xl:top-40 xl:left-160 xl:w-15 xl:-rotate-40 xl:opacity-20 xl:animate-pulse lg:opacity-0" />
          <img src={pic10} alt="sweet" className="absolute bottom-40 right-96 w-28 xl:w-28 xl:right-155 xl:rotate-15 lg:w-20 lg:-rotate-35 2xl:right-180 opacity-20 animate-pulse" />
          <img src={pic11} alt="sweet" className="absolute bottom-10 left-10 w-28 xl:w-28 lg:w-22 lg:rotate-30 xl:rotate-20 opacity-20 animate-pulse" />
          <img src={pic12} alt="sweet" className="absolute bottom-20 left-1/3 xl:left-90 xl:bottom-30 lg:left-80 lg:bottom-38 w-32 xl:w-32 lg:w-25 lg:rotate-20 xl:-rotate-15 opacity-20 animate-pulse" />
          <img src={pic13} alt="sweet" className="absolute bottom-20 left-1/3 xl:left-160 xl:top-5 lg:left-95 lg:bottom-5 w-32 xl:w-28 lg:w-22 lg:rotate-20 xl:-rotate-15 opacity-20 animate-pulse" />
          <img src={pic14} alt="sweet" className="absolute bottom-20 left-1/3 xl:left-140 xl:bottom-3 lg:left-4 lg:bottom-65 w-32 xl:w-32 lg:w-25 lg:rotate-20 xl:-rotate-5 opacity-20 animate-pulse" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 max-w-xl text-center items-start sm:items-center sm:justify-center lg:text-left lg:items-start xl:items-start" data-aos="fade-right">
          <h1 className="text-3xl md:text-5xl font-bold text-dark">
            Dive into the Magic of <span className="text-caramel">Sweetness & Savouries</span>
          </h1>
          <p className="text-base md:text-xl text-dark">
            Where every bite is a celebration of love, taste, and tradition.
          </p>
          <Link to="/menu" className="border-caramel bg-caramel text-white px-6 py-2 rounded-3xl hover:scale-95 hover:shadow-choco transition-transform">
            Order Now
          </Link>
        </div>

        {/* Hero image */}
        <div className="rounded-full w-80 h-80 sm:w-96 sm:h-96 lg:h-80 lg:w-80 xl:m-auto bg-caramel flex items-center justify-center mt-10 lg:mt-20" data-aos="zoom-in">
          <div className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:h-72 lg:w-72 bg-choco shadow-xl shadow-choco flex items-center justify-center">
            <img src={sweetgirl} alt="Sweet Girl" className="w-full h-97 lg:h-80 object-contain rounded-full" />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-beige px-6 md:px-12 lg:px-20 py-16">
        <div className="text-center">
          <p className="text-lg md:text-xl font-medium text-choco mb-5">CUSTOMER FAVOURITES</p>
          <h1 className="text-3xl md:text-5xl font-bold text-dark">Popular Categories</h1>
          <Catagories />
        </div>
      </section>

      {/* SPECIAL DISHES */}
      <section className="bg-cream px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div className="sm:flex sm:flex-col sm:text-center md:text-left" data-aos="fade-right"> 
            <p className="text-lg md:text-xl font-medium text-choco mb-3">SPECIAL DISHES</p>
            <h1 className="text-3xl md:text-5xl font-bold text-dark">
              Standout Sweets & Savories <br className="hidden md:block" /> from Our Menu
            </h1>
          </div>
          <div className="flex gap-4" data-aos="fade-left">
            <button onClick={() => slider?.current?.slickPrev()} className="border-4 border-choco p-2 rounded-full hover:shadow-choco">
              <FaAngleLeft className="w-6 h-6 text-choco" />
            </button>
            <button onClick={() => slider?.current?.slickNext()} className="border-4 border-choco bg-choco p-2 rounded-full hover:shadow-choco">
              <FaAngleRight className="w-6 h-6 text-cream" />
            </button>
          </div>
        </div>
        <Slider ref={slider} {...settings} className="mt-10">
          {recipes.map((item, index) => (
            <SpecialDishesCards key={index} item={item} />
          ))}
        </Slider>
      </section>
      {/* <section className="bg-cream px-6 md:px-12 lg:px-20 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
        <div className="sm:flex sm:flex-col sm:text-center md:text-left">
          <p className="text-lg md:text-xl font-medium text-choco mb-3">
            SPECIAL DISHES
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-dark">
            Standout Sweets & Savories <br className="hidden md:block" /> from
            Our Menu
          </h1>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => slider?.slickPrev()} // ✅ directly use slider
            className="border-4 border-choco p-2 rounded-full hover:shadow-choco"
          >
            <FaAngleLeft className="w-6 h-6 text-choco" />
          </button>
          <button
            onClick={() => slider?.slickNext()} // ✅ directly use slider
            className="border-4 border-choco bg-choco p-2 rounded-full hover:shadow-choco"
          >
            <FaAngleRight className="w-6 h-6 text-cream" />
          </button>
        </div>
      </div>
      {/* ✅ Capture slider instance using setSlider */}
      {/* <Slider ref={(sliderInstance) => setSlider(sliderInstance)} {...settings} className="mt-10">
        {recipes.map((item, index) => (
          <SpecialDishesCards key={index} item={item} />
        ))}
      </Slider>
    </section> */}

      {/* TESTIMONIALS */}
      <section className="bg-beige px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={chef} className="h-80 md:h-96 lg:h-130 object-contain" data-aos="fade-up" data-aos-anchor-placement="center-bottom"/>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
            <p className="text-lg md:text-xl font-medium text-choco mb-5">TESTIMONIALS</p>
            <h1 className="text-3xl md:text-5xl font-bold text-dark">What Our Sweet Lovers Say About Us</h1>
            <p className="text-gray-500 mt-5 text-base md:text-lg">
              “Sweet Heart is my go-to for every occasion! Their rasgullas and samosas are unmatched. Every bite feels like home with fresh, flavorful, and crafted with so much love. From melt-in-mouth sweets to crispy savouries, every dish tells a story of tradition and taste. Whether it’s a festive celebration, a quick snack, or a family gathering, Sweet Heart never fails to add that extra sweetness and joy to the moment. Truly, it’s not just food, it’s an experience worth sharing.”
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-row lg:mx-auto items-center mt-6 gap-5 sm:mx-35">
              <div className="flex -space-x-4">
                <img src={customer1} className="w-12 h-12 rounded-full border-4 border-beige" />
                <img src={customer1} className="w-12 h-12 rounded-full border-4 border-beige" />
                <img src={customer1} className="w-12 h-12 rounded-full border-4 border-beige" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-dark">Customer Feedback</h1>
                <p className="inline-flex items-center text-choco font-medium">
                  <FaStar className="mr-1 text-amber-300" /> 4.9
                  <span className="text-gray-500 ml-2">(18.6K Reviews)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-cream px-6 md:px-12 lg:px-20 py-16">
        <div className="flex flex-col lg:flex-row sm:flex-col sm:text-center justify-between items-start gap-10">
          {/* Text */}
          <div className="w-full lg:w-1/2 lg:text-left" data-aos="fade-right">
            <p className="text-lg md:text-xl font-medium text-choco mb-5">OUR STORY & SERVICES</p>
            <h1 className="text-3xl md:text-5xl font-bold text-dark">Our Sweet Story & Special Services</h1>
            <p className="text-choco mt-5 text-base md:text-lg">
              At Sweet Heart, we blend tradition with taste. From authentic Indian sweets to crispy savouries, every delicacy is handcrafted with love. Whether it’s a festival, celebration, or just your sweet craving, we’re here to serve you happiness.
            </p>
            <button onClick={() => navigate("/services")} className="border-caramel bg-caramel text-white px-6 py-2 rounded-3xl mt-6 hover:scale-95 hover:shadow-choco transition-transform">
              Explore
            </button>
          </div>
          {/* Services */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Custom Orders", desc: "Tailored sweets & snacks for every celebration" },
              { title: "Party Catering", desc: "Make your events sweeter with us" },
              { title: "Fast Delivery", desc: "Fresh treats delivered to your doorstep" },
              { title: "Gift Boxes", desc: "Share love with premium sweet & snack hampers" },
            ].map((service, index) => (
              <div
                key={index}
                className="border-2 border-caramel rounded-3xl shadow-lg bg-caramel text-choco p-5 hover:border-choco"
                data-aos="fade-up" 
                data-aos-anchor-placement="center-bottom"
              >
                <h1 className="text-lg md:text-xl font-bold">{service.title}</h1>
                <p className="text-sm md:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
