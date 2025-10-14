import React, { useEffect, useState } from "react";
import Nav from "../../Nav";
import Footer from "../../Footer";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const userId = localStorage.getItem("userId") || "12345";

  // useEffect(() => {
  //   fetch(`http://localhost:5050/orders/${userId}`) // replace 12345 with userId
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data.orders || []))
  //     .catch((err) => console.error("Error fetching orders:", err));
  // }, []);
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // from login
    if (!token) return;
    axios
      .get("http://localhost:5050/orders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setOrders(res.data.orders))
      .catch((err) => console.error("Error fetching orders", err));
  }, []);

  const handleCancel = async (orderId) => {
    try {
      const res = await axios.delete(`http://localhost:5050/orders/${orderId}`);

      if (res.data.success) {
        toast.success("Order cancelled successfully!", { autoClose: 2000 });
        // Remove cancelled order from state
        setOrders((prev) => prev.filter((order) => order._id !== orderId));
      } else {
        toast.error(res.data.message || "Failed to cancel order");
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <>
      <Nav />
      <div className="p-10 bg-cream min-h-screen mt-18 sm:mt-16">
        <h1 className="text-3xl font-bold text-dark mb-6">My Orders</h1>

        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white shadow-md p-6 rounded-xl"
              >
                <h2 className="font-bold text-lg mb-2">
                  Order #{order.orderId}
                  {/* #{order._id.slice(-6).toUpperCase()} */}
                </h2>
                <p>Status: {order.status}</p>
                <p>Total: ₹ {order.totalPrice}</p>
                <p>Payment: {order.paymentMethod}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {order.items.map((item) => (
                    <div
                      key={item._id}
                      className="border p-3 rounded-lg text-center"
                    >
                      <img
                        src={`http://localhost:5050/files/${item.image}`}
                        alt={item.recipe}
                        className="h-20 mx-auto mb-2 object-contain"
                      />
                      <p>{item.recipe}</p>
                      <p>Qty: {item.quantity}</p>
                      <p>₹ {item.price}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-right">
                  <button
                    onClick={() => handleCancel(order._id)}
                    disabled={
                      order.status === "Shipped" || order.status === "Delivered"
                    }
                    className={`px-4 py-2 rounded-lg transition ${
                      order.status === "Shipped" || order.status === "Delivered"
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    Cancel Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Orders;
