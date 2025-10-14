import React, { useEffect } from "react";
import { FaBirthdayCake, FaGift, FaTruck, FaBoxOpen } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import Nav from "../../Nav";
import Footer from "../../Footer";
import { useNavigate } from "react-router";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="text-center py-16 px-4 lg:mt-18 sm:pt-30 sm:px-6 lg:px-20 bg-cream">
          <h1 className="text-3xl md:text-5xl font-bold text-dark mb-6 leading-snug">
            Crafting Sweet Memories, One Service at a Time
          </h1>
          <p className="text-base md:text-xl text-choco max-w-3xl mx-auto">
            At <span className="font-semibold text-caramel">Sweet Heart</span>,
            we don’t just make sweets and savories—we create experiences.
            Whether it’s a grand wedding, a festive celebration, or a simple
            craving, our services are designed to add love, flavor, and joy to
            your moments.
          </p>
          <button
            onClick={() => navigate("/menu")}
            className="mt-6 w-full sm:w-auto bg-gradient-to-r from-choco to-caramel transition-transform text-white px-6 py-3 rounded-full hover:scale-95"
          >
            Explore Menu
          </button>
        </section>

        {/* Services Grid */}
        <section className="bg-beige py-16 px-4 sm:px-6 lg:px-20">
          <h1 className="text-3xl md:text-5xl text-center font-bold text-dark">
            Our Sweet Services
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-10 max-w-6xl mx-auto">
            {/* Custom Orders */}
            <div className="p-6 rounded-2xl hover:shadow-lg bg-gradient-to-r from-choco to-caramel transition-transform shadow-2xl">
              <FaBirthdayCake className="text-caramel text-4xl mb-4" />
              <h3 className="text-xl text-cream font-semibold mb-2">
                Custom Orders
              </h3>
              <p className="text-cream">
                From personalized mithai boxes to custom-designed cakes, we
                create treats tailored perfectly for your style, flavor, &
                occasion.
              </p>
            </div>

            {/* Event Catering */}
            <div className="p-6 rounded-2xl shadow-2xl hover:shadow-lg bg-gradient-to-r from-choco to-caramel transition-transform">
              <MdEvent className="text-caramel text-4xl mb-4" />
              <h3 className="text-xl text-cream font-semibold mb-2">
                Event Catering
              </h3>
              <p className="text-cream">
                Make weddings, birthdays, and festive gatherings unforgettable
                with our handcrafted sweets and savory platters.
              </p>
            </div>

            {/* Corporate Gifting */}
            <div className="p-6 rounded-2xl shadow-2xl hover:shadow-lg bg-gradient-to-r from-choco to-caramel transition-transform">
              <FaGift className="text-caramel text-4xl mb-4" />
              <h3 className="text-xl text-cream font-semibold mb-2">
                Corporate Gifting
              </h3>
              <p className="text-cream">
                Delight your employees, clients, and partners with beautifully
                packed hampers filled with premium sweets and snacks.
              </p>
            </div>

            {/* Online Ordering */}
            <div className="p-6 rounded-2xl shadow-2xl hover:shadow-lg bg-gradient-to-r from-choco to-caramel transition-transform">
              <FaTruck className="text-caramel text-4xl mb-4" />
              <h3 className="text-xl text-cream font-semibold mb-2">
                Online Ordering
              </h3>
              <p className="text-cream">
                Order your favorites online with ease, and enjoy fast, reliable
                delivery right to your home or office.
              </p>
            </div>

            {/* Festival Specials */}
            <div className="p-6 rounded-2xl shadow-2xl hover:shadow-lg bg-gradient-to-r from-choco to-caramel transition-transform">
              <FaBoxOpen className="text-caramel text-4xl mb-4" />
              <h3 className="text-xl text-cream font-semibold mb-2">
                Festival Specials
              </h3>
              <p className="text-cream">
                From Diwali ladoos to Christmas cakes, every festival is
                sweeter with our seasonal specials crafted just for the
                occasion.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-cream py-12 sm:py-16 px-4 sm:px-6 lg:px-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
            Why Choose Sweet Heart?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-6 max-w-6xl mx-auto text-dark">
            {[
              "Authentic recipes with a modern twist",
              "Premium ingredients, prepared with love & hygiene",
              "Sweets, savories & cakes are from traditional to trenditional ",
              "Quick delivery & customer-first service",
            ].map((item, index) => (
              <li
                key={index}
                className="p-4 sm:p-6 bg-gradient-to-r from-lavender to-pink rounded-xl shadow-2xl hover:scale-105 transition-transform leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action */}
        <section className="bg-beige py-12 sm:py-16 px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            Bring Sweetness to Every Moment
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-choco mb-6 max-w-2xl mx-auto px-2 leading-relaxed">
            No matter the occasion, Sweet Heart is here to serve happiness on a
            platter. Explore our services today and let us sweeten your
            memories.
          </p>
          <button className="w-full sm:w-auto bg-gradient-to-r from-choco to-caramel text-white px-6 sm:px-8 py-3 rounded-full hover:scale-95 transition-transform">
            Contact Us
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
