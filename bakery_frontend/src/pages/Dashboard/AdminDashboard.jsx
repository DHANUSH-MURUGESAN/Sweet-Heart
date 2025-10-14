import React, { useEffect, useRef, useState } from "react";
import Nav from "../../Nav";
import axios from "axios";
import { FiSearch } from "react-icons/fi";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("catalog"); // ✅ Sidebar state
  const [menu, setmenu] = useState([]);
  const [orders, setOrders] = useState([]);
  const fileInputRef = useRef(null);
  const [formData, setformData] = useState({
    image: "",
    recipe: "",
    description: "",
    category: "",
    price: "",
    ratings: "",
  });
  const [buttonStatus, setbuttonStatus] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  // handleChange
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setformData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setformData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Create Menu
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("image", formData.image);
      data.append("recipe", formData.recipe);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("price", formData.price);
      data.append("ratings", formData.ratings);

      const response = await axios.post("http://localhost:5050/create", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setmenu((pre) => [...pre, response.data.data]);
      setformData({
        image: "",
        recipe: "",
        description: "",
        category: "",
        price: "",
        ratings: "",
        ingredients: ""
      });
    } catch (error) {
      console.log("Menu is not created", error.message);
    }
  };

  // Get Menu
  const getMenu = async () => {
    try {
      const response = await axios.get("http://localhost:5050/display");
      setmenu(response.data.data);
    } catch (error) {
      console.log("Menu is not displayed", error.message);
    }
  };
  // Filter the table
  const filteredMenu = menu.filter((item) =>
    item.recipe.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get Orders
  const getOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5050/orders");
      setOrders(response.data.orders || []);
    } catch (error) {
      console.log("Orders not fetched", error.message);
    }
  };

  // Edit Menu
  const handleEdit = (list) => {
    setformData(list);
    setbuttonStatus(false);
  };

  const handleCancel = () => {
    setbuttonStatus(true);
    setformData({
      image: "",
      recipe: "",
      description: "",
      category: "",
      price: "",
      ratings: "",
      ingredients: ""
    });
  };

  // Delete Menu
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/delete/${id}`);
      setmenu((menu) => menu.filter((list) => list._id !== id));
    } catch (error) {
      console.log("Menu is not deleted", error.message);
    }
  };

  // Update Menu
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      fd.append("recipe", formData.recipe);
      fd.append("price", formData.price);
      fd.append("description", formData.description);
      fd.append("ratings", formData.ratings);
      fd.append("ingredients", formData.ingredients);
      fd.append("category", formData.category);
      if (formData.image instanceof File) {
        fd.append("image", formData.image);
      }

      const response = await axios.put(
        `http://localhost:5050/update/${formData._id}`,
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      const updateData = response.data.data;
      setmenu((menu) =>
        menu.map((list) => (list._id === updateData._id ? updateData : list))
      );
      handleCancel();
    } catch (error) {
      console.log("Error in put api", error.message);
    }
  };

  useEffect(() => {
    getMenu();
    getOrders();
  }, []);

  return (
    <>
      <Nav />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-caramel fixed top-0 left-0 h-screen text-white p-6 lg:mt-18 sm:mt-10">
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <ul className="space-y-4">
            <li
              className={`cursor-pointer px-4 py-2 rounded-lg transition 
        ${
          activeTab === "catalog"
            ? "bg-white text-caramel font-bold border-2 border-white"
            : "hover:bg-white hover:text-caramel hover:border-2 hover:border-white"
        }`}
              onClick={() => setActiveTab("catalog")}
            >
              Catalog
            </li>
            <li
              className={`cursor-pointer px-4 py-2 rounded-lg transition 
        ${
          activeTab === "orders"
            ? "bg-white text-caramel font-bold border-2 border-white"
            : "hover:bg-white hover:text-caramel hover:border-2 hover:border-white"
        }`}
              onClick={() => setActiveTab("orders")}
            >
              Order Details
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-10 bg-cream h-screen overflow-y-auto lg:mt-18 sm:mt-18">
          {activeTab === "catalog" && (
            <>
              {/* ---------- Catalog Section ---------- */}
              <h1 className="text-3xl text-choco font-bold mb-6">
                Catalog Management
              </h1>

              <form onSubmit={handleSubmit} className="grid space-y-5">
                <div>
                  <label htmlFor="image">Image</label>
                  <input
                    type="file"
                    name="image"
                    className="border-2 p-3 ml-22"
                    ref={fileInputRef}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="recipe">Recipe Name</label>
                  <input
                    type="text"
                    className="border-2 p-3 ml-10"
                    name="recipe"
                    value={formData.recipe}
                    placeholder="Enter the recipe name"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="description">Description</label>
                  <textarea
                    type="text"
                    className="border-2 p-3 w-200 ml-13"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter the recipe description"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="category">Category</label>
                  <select
                    className="border-2 p-3 ml-17"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Category --</option>
                    <option value="Signature Sweets">Signature Sweets</option>
                    <option value="Savory Bites">Savory Bites</option>
                    <option value="Cakes & Pastries">Cakes & Pastries</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    className="border-2 p-3 ml-24"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter the recipe price"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="ratings">Ratings</label>
                  <input
                    type="number"
                    className="border-2 p-3 ml-20"
                    name="ratings"
                    value={formData.ratings}
                    onChange={handleChange}
                    placeholder="Enter the recipe ratings"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="ingredients">Ingredients</label>
                  <textarea
                    type="text"
                    className="border-2 p-3 w-200 ml-13"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    placeholder="Enter the ingredients"
                    required
                  />
                </div>

                {buttonStatus ? (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-choco to-caramel transition-transform hover:scale-105 text-white h-10 w-30 mx-20 my-5 rounded-3xl"
                  >
                    Submit
                  </button>
                ) : (
                  <div className="flex gap-5">
                    <button
                      className="border-2 bg-yellow-400 p-3 rounded-3xl"
                      onClick={handleUpdate}
                    >
                      Update
                    </button>
                    <button
                      className="border-2 bg-red-400 p-3 rounded-3xl"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>

              <div className="inline-flex justify-center mt-10 ml-200">
                <form className="mb-4 flex bg-white px-4 py-2 rounded-3xl w-90">
                <input
                  type="text"
                  placeholder="Search by recipe, category, or ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full outline-none text-choco"
                />
                <button type="submit" className="text-choco hover:text-peach">
                  <FiSearch size={20} />
                </button>
              </form>
              </div>


              {/* Table */}
              <div className="overflow-x-auto mt-10">
                <table className="table-auto w-full border border-choco border-collapse">
                  <thead>
                    <tr className="bg-caramel text-center text-white">
                      <th className="border px-4 py-2">Image</th>
                      <th className="border px-4 py-2">Recipe</th>
                      <th className="border px-4 py-2">Description</th>
                      <th className="border px-4 py-2">Category</th>
                      <th className="border px-4 py-2">Price</th>
                      <th className="border px-4 py-2">Ratings</th>
                      <th className="border px-4 py-2">Ingredients</th>
                      <th className="border px-4 py-2">Edit</th>
                      <th className="border px-4 py-2">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {menu.length > 0 ? (
                      menu.map((list, index) => ( */}
                    {filteredMenu.length > 0 ? (
                      filteredMenu.map((list, index) => (
                        <tr key={index}>
                          <td className="border px-4 py-2">
                            {list.image ? (
                              <img
                                src={`http://localhost:5050/files/${list.image}`}
                                alt={list.recipe}
                                className="w-16 h-16 object-cover rounded"
                              />
                            ) : (
                              "No Image"
                            )}
                          </td>
                          <td className="border px-4 py-2">{list.recipe}</td>
                          <td className="border px-4 py-2">
                            {list.description}
                          </td>
                          <td className="border px-4 py-2">{list.category}</td>
                          <td className="border px-4 py-2 text-center">
                            {list.price}
                          </td>
                          <td className="border px-4 py-2 text-center">
                            {list.ratings}
                          </td>
                          <td className="border px-4 py-2 text-center">
                            {list.ingredients}
                          </td>
                          <td className="border px-4 py-2 text-center">
                            <button
                              className="h-10 w-20 text-white bg-green-400 rounded-3xl"
                              onClick={() => handleEdit(list)}
                            >
                              Edit
                            </button>
                          </td>
                          <td className="border px-4 py-2 text-center">
                            <button
                              className="h-10 w-20 text-white bg-red-400 rounded-3xl"
                              onClick={() => handleDelete(list._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="8"
                          className="border px-4 py-2 text-center text-choco"
                        >
                          Data not found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === "orders" && (
            <>
              <h1 className="text-3xl text-choco font-bold mb-6">
                Order Details
              </h1>
              <div className="overflow-x-auto">
                <table className="table-auto w-full border border-choco border-collapse">
                  <thead>
                    <tr className="bg-caramel text-center text-white">
                      <th className="border px-4 py-2">Order ID</th>
                      <th className="border px-4 py-2">Receiver</th>
                      <th className="border px-4 py-2">Mobile</th>
                      <th className="border px-4 py-2">Total</th>
                      <th className="border px-4 py-2">Payment Method</th>
                      <th className="border px-4 py-2">Items</th>
                      <th className="border px-4 py-2">Status</th>
                      <th className="border px-4 py-2">Delivery Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length > 0 ? (
                      orders.map((order) => (
                        <tr key={order._id}>
                          <td className="border px-4 py-2">{order.orderId}</td>
                          <td className="border px-4 py-2">
                            {order.deliveryDetails?.receiverName}
                          </td>
                          <td className="border px-4 py-2">
                            {order.deliveryDetails?.mobile}
                          </td>
                          <td className="border px-4 py-2">
                            ₹ {order.totalPrice}
                          </td>
                          <td className="border px-4 py-2">
                            {order.paymentMethod || "-"}
                          </td>

                          <td className="border px-4 py-2">
                            {order.items && order.items.length > 0 ? (
                              <ul className="list-disc pl-4">
                                {order.items.map((item, index) => (
                                  <li key={index}>
                                    {item.recipe} × {item.quantity}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              "-"
                            )}
                          </td>

                          {/*Editable status*/}
                          <td className="border px-4 py-2">
                            <select
                              value={order.status}
                              onChange={async (e) => {
                                try {
                                  const res = await axios.put(
                                    `http://localhost:5050/orders/${order._id}/status`,
                                    { status: e.target.value }
                                  );
                                  setOrders((prev) =>
                                    prev.map((ord) =>
                                      ord._id === order._id
                                        ? { ...ord, status: res.data.status }
                                        : ord
                                    )
                                  );
                                } catch (error) {
                                  console.log(
                                    "Error updating status",
                                    error.message
                                  );
                                }
                              }}
                              className="border p-2 rounded"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                          </td>

                          <td className="border px-4 py-2">
                            {order.deliveryDetails?.doorNo},
                            {order.deliveryDetails?.address},
                            {order.deliveryDetails?.city} -{" "}
                            {order.deliveryDetails?.pincode},
                            {order.deliveryDetails?.state}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="6"
                          className="border px-4 py-2 text-center"
                        >
                          No Orders Found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
