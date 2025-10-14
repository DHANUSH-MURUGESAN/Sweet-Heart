// import React, { useEffect, useState } from "react";
// import Nav from "../../Nav";
// import Footer from "../../Footer";
// import SpecialDishesCards from "../Home/SpecialDishesCards";

// const All = () => {
//   const [menu, setMenu] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [selectedCatagory, setSelectedCatagory] = useState("all");
//   const [sortOption, setSortOption] = useState("default");

//   //loading data
//   useEffect(() => {
//     //fetch data from backend
//     const fetchData = async () => {
//       try {
//         const res = await fetch("/menu.json");
//         const data = await res.json();
//         //
//         setMenu(data);
//         setFilteredItems(data);
//       } catch (error) {
//         console.log("Error while fetching data", error);
//       }
//     };
//     //call the function
//     fetchData();
//   }, []);

//   //filtering data based on catagory
//   const filterItems = (catagory) => {
//     const filtered =
//       catagory === "all"
//         ? menu
//         : menu.filter((items) => items.catagory === catagory);
//     setFilteredItems(filtered);
//     setSelectedCatagory(catagory);
//   };

//   //show all data functions
//   const showAll = () => {
//     setFilteredItems(menu)
//     setSelectedCatagory("all")
//   }

//   //Sorting based on A-Z, Z-A, Low-High pricing
//   const handleSortChange = (option) => {
//     setSortOption(option);
//     let sortedItems = [...filteredItems]
//     //logic
//     switch(option){
//         case "A-Z":
//             sortedItems.sort((a, b) => a.name.localeCompare(b.name));
//             break;
//         case "Z-A":
//             sortedItems.sort((a, b) => b.name.localeCompare(a.name));
//             break;
//         case "low-to-high":
//             sortedItems.sort((a, b) => a.price - b.price);
//             break;
//         case "high-to-low":
//             sortedItems.sort((a, b) => b.price - a.price);
//             break;
//     }
//     setFilteredItems(sortedItems);
//   }

//   return (
//     <div>
//       <Nav />
//       <section className="relative bg-cream px-15 py-30 text-center overflow-hidden">
//         <div className="space-y-5">
//           <h1 className="text-5xl font-bold text-dark">
//             Dive into the Magic of <span>Sweetness & Savouries</span>
//           </h1>
//           <p className="text-xl text-dark">
//             Where every bite is a celebration of love, taste, and tradition.
//           </p>
//           <button className="border-caramel bg-caramel text-white px-5 py-2 rounded-3xl transition-transform hover:scale-95 hover:shadow-choco hover:shadow-xl">
//             Order Now
//           </button>
//         </div>
//       </section>
//       {/*filter and sort items*/}
//       <section className="bg-beige px-15 py-20">
//         <div className="flex flex-row justify-start gap-5 flex-wrap mb-5">
//             {/*All category buttons*/}
//             <button onClick={showAll}>All</button>
//             <button onClick={() => filterItems("Signature Sweets")}>Sweets</button>
//             <button onClick={() => filterItems("Savory Bites")}>Savories</button>
//             <button onClick={() => filterItems("Cakes & Pastries")}>Cakes & Pastries</button>
//         </div>
//         {/*Cards*/}
//         <div className="grid grid-cols-4 gap-5">
//             {
//                 filteredItems.map((item) => (
//                     <SpecialDishesCards key={item._id} item={item}/>
//                 ))
//             }
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default All;

// import React, { useEffect, useState } from "react";
// import Nav from "../../Nav";
// import Footer from "../../Footer";
// import SpecialDishesCards from "../Home/SpecialDishesCards";
// import { FaFilter } from "react-icons/fa";
// import axios from "axios";

// const All = () => {
//   const [menu, setMenu] = useState([]);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [sortOption, setSortOption] = useState("default");
//   const [currentPage, setcurrentPage] = useState(1);
//   const [itemsPerPage] = useState(12);

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://localhost:5050/display");
//         console.log("Fetched data", res.data);
//         const data = res.data.data || [];
//         // const res = await fetch("/menu.json");
//         // const data = await res.json();
//         setMenu(data);
//         setFilteredItems(data);
//       } catch (error) {
//         console.log("Error while fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const filterItems = (category) => {
//     const filtered =
//       category === "all"
//         ? menu
//         : menu.filter((item) => item.category === category);
//     setFilteredItems(filtered);
//     setSelectedCategory(category);
//     setcurrentPage(1);
//   };

//   const showAll = () => {
//     setFilteredItems(menu);
//     setSelectedCategory("all");
//     setcurrentPage(1);
//   };

//   const handleSortChange = (option) => {
//     setSortOption(option);
//     let sortedItems = [...filteredItems];
//     switch (option) {
//       case "A-Z":
//         sortedItems.sort((a, b) => a.recipe.localeCompare(b.recipe));
//         break;
//       case "Z-A":
//         sortedItems.sort((a, b) => b.recipe.localeCompare(a.recipe));
//         break;
//       case "low-to-high":
//         sortedItems.sort((a, b) => a.price - b.price);
//         break;
//       case "high-to-low":
//         sortedItems.sort((a, b) => b.price - a.price);
//         break;
//       default:
//         sortedItems = [...menu];
//         break;
//     }
//     setFilteredItems(sortedItems);
//     setcurrentPage(1);
//   };

//   {
//     /*Pagination Logic*/
//   }
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
//   const paginate = (pageNumber) => setcurrentPage(pageNumber);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Nav />

//       {/* Hero Section */}
//       <section className="relative bg-cream px-6 py-20 text-center overflow-hidden">
//         <div className="space-y-5 max-w-4xl mx-auto">
//           <h1 className="text-3xl sm:text-5xl font-bold text-dark">
//             Dive into the Magic of <span>Sweetness & Savouries</span>
//           </h1>
//           <p className="text-lg sm:text-xl text-dark">
//             Where every bite is a celebration of love, taste, and tradition.
//           </p>
//           <button className="border-caramel bg-caramel text-white px-5 py-2 rounded-3xl transition-transform hover:scale-95 hover:shadow-choco hover:shadow-xl">
//             Order Now
//           </button>
//         </div>
//       </section>

//       {/* Filter & Sort */}
//       <section className="bg-beige px-20 py-16">
//         <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-6">
//           <button
//             onClick={showAll}
//             className={`px-4 py-2 rounded-2xl font-semibold ${
//               selectedCategory === "all"
//                 ? "bg-caramel text-white"
//                 : "bg-white text-choco"
//             }`}
//           >
//             All
//           </button>
//           <button
//             onClick={() => filterItems("Signature Sweets")}
//             className={`px-4 py-2 rounded-2xl font-semibold ${
//               selectedCategory === "Signature Sweets"
//                 ? "bg-caramel text-white"
//                 : "bg-white text-choco"
//             }`}
//           >
//             Sweets
//           </button>
//           <button
//             onClick={() => filterItems("Savory Bites")}
//             className={`px-4 py-2 rounded-2xl font-semibold ${
//               selectedCategory === "Savory Bites"
//                 ? "bg-caramel text-white"
//                 : "bg-white text-choco"
//             }`}
//           >
//             Savories
//           </button>
//           <button
//             onClick={() => filterItems("Cakes & Pastries")}
//             className={`px-4 py-2 rounded-2xl font-semibold ${
//               selectedCategory === "Cakes & Pastries"
//                 ? "bg-caramel text-white"
//                 : "bg-white text-choco"
//             }`}
//           >
//             Cakes & Pastries
//           </button>

//           {/* Sort Dropdown */}
//           <div className="flex flex-row gap-2 ml-auto">
//             <div>
//               <FaFilter className="h-10 w-6 text-choco" />
//             </div>
//             <select
//               name="sort"
//               id="sort"
//               value={sortOption}
//               onChange={(e) => handleSortChange(e.target.value)}
//               className="ml-auto px-4 py-2 rounded-2xl border border-choco bg-caramel text-white"
//             >
//               <option value="default">Default</option>
//               <option value="A-Z">Name A-Z</option>
//               <option value="Z-A">Name Z-A</option>
//               <option value="low-to-high">Price Low-High</option>
//               <option value="high-to-low">Price High-Low</option>
//             </select>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {/* {filteredItems.map((item) => ( */}
//           {currentItems.map((item) => (
//             <SpecialDishesCards key={item._id} item={item} />
//           ))}
//         </div>
//       </section>

//       {/*Pagination Section*/}
//       <section className="bg-cream px-20 py-3">
//         <div className="flex justify-center my-8">
//           {Array.from({
//             length: Math.ceil(filteredItems.length / itemsPerPage),
//           }).map((_, index) => (
//             <button
//               key={index + 1}
//               onClick={() => paginate(index + 1)}
//               className={`mx-2 px-3 py-1 rounded-full ${
//                 currentPage === index + 1
//                   ? "bg-choco text-white transition-transform hover:scale-105 hover:shadow-xl hover:shadow-choco"
//                   : "bg-white text-choco transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500"
//               }`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default All;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Nav from "../../Nav";
import Footer from "../../Footer";
import SpecialDishesCards from "../Home/SpecialDishesCards";
import { FaFilter } from "react-icons/fa";
import axios from "axios";

const categories = [
  { name: "all", label: "All", path: "/menu" },
  { name: "Signature Sweets", label: "Sweets", path: "/menu/signature-sweets" },
  { name: "Savory Bites", label: "Savories", path: "/menu/savory-bites" },
  {
    name: "Cakes & Pastries",
    label: "Cakes & Pastries",
    path: "/menu/cakes-pastries",
  },
];

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const location = useLocation();
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5050/display");
      const data = res.data.data || [];
      setMenu(data);
      setFilteredItems(data);
    } catch (err) {
      console.log(err);
    }
  };
  // Fetch menu items
  useEffect(() => {
    fetchData();
  }, []);
  console.log(menu, "menu");

  // Set category based on URL
  useEffect(() => {
    const category = categories.find((c) => c.path === location.pathname);
    if (category) {
      setSelectedCategory(category.name);
      filterItems(category.name);
    }
  }, [location.pathname, menu]);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.recipe.localeCompare(b.recipe));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.recipe.localeCompare(a.recipe));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        sortedItems = [...menu];
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      {/* Hero Section */}
      <section className="relative bg-cream px-6 py-20 lg:mt-18 md:mt-16 text-center overflow-hidden">
        <div className="space-y-5 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold text-dark">
            Dive into the Magic of <span>Sweetness & Savouries</span>
          </h1>
          <p className="text-lg sm:text-xl text-dark">
            Where every bite is a celebration of love, taste, and tradition.
          </p>
          <button className="border-caramel bg-caramel text-white px-5 py-2 rounded-3xl transition-transform hover:scale-95 hover:shadow-choco hover:shadow-xl">
            Order Now
          </button>
        </div>
      </section>

      {/* Filter & Sort */}
      <section className="bg-beige px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 md:py-16">
        {/* Categories + Sort */}
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                filterItems(cat.name);
                navigate(cat.path);
              }}
              className={`px-4 py-2 rounded-2xl font-semibold transition-colors duration-200 ${
                selectedCategory === cat.name
                  ? "bg-caramel text-white"
                  : "bg-white text-choco hover:bg-caramel hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}

          {/* Sort Dropdown */}
          <div className="flex flex-col sm:flex-row gap-2 sm:ml-auto w-full sm:w-auto mt-4 sm:mt-0">
            <div className="flex items-center sm:justify-center">
              <FaFilter className="h-6 w-6 text-choco" />
            </div>
            <select
              value={sortOption}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-4 py-2 rounded-2xl border border-choco bg-caramel text-white w-full sm:w-auto"
            >
              <option value="default">Default</option>
              <option value="A-Z">Name A-Z</option>
              <option value="Z-A">Name Z-A</option>
              <option value="low-to-high">Price Low-High</option>
              <option value="high-to-low">Price High-Low</option>
            </select>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentItems.map((item) => (
            <SpecialDishesCards key={item._id} item={item} />
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="bg-cream px-20 py-3">
        <div className="flex justify-center my-8">
          {Array.from({
            length: Math.ceil(filteredItems.length / itemsPerPage),
          }).map((_, idx) => (
            <button
              key={idx + 1}
              onClick={() => paginate(idx + 1)}
              className={`mx-2 px-3 py-1 rounded-full ${
                currentPage === idx + 1
                  ? "bg-choco text-white transition-transform hover:scale-105 hover:shadow-xl hover:shadow-choco"
                  : "bg-white text-choco transition-transform hover:scale-105 hover:shadow-xl hover:shadow-gray-500"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
