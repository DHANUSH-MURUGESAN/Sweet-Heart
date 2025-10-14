// import React from "react";
// import logo from "./assets/home/img/Group 29.png";
// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { Link } from "react-router";
// const Footer = () => {
//   return (
//     <div>
//       <footer className="bg-choco text-cream px-15 py-5 w-full">
//         <div className="flex flex-col-4 gap-40">
//           <div>
//             <img src={logo} className="w-60" />
//             <div className="w-65 mt-5">
//               From our heart to yours, spreading sweetness in every treat.
//             </div>
//           </div>
//           <div>
//             <h1 className="font-bold mb-2">USEFUL LINKS</h1>
//             <div className="space-y-1">
//               <h1>About Us</h1>
//               <h1>Events</h1>
//               <h1>Blogs</h1>
//               <h1>FAQ</h1>
//             </div>
//           </div>
//           <div>
//             <h1 className="font-bold mb-2">MAIN MENU</h1>
//             <div className="space-y-1">
//               <Link to="/">Home</Link>
//               <h1>Offers</h1>
//               <h1>Menus</h1>
//               <h1>Reservation</h1>
//             </div>
//           </div>
//           <div>
//             <h1 className="font-bold mb-2">CONTACT US</h1>
//             <div className="space-y-1">
//               <h1>sweetheartbakes@gmail.com</h1>
//               <h1>+91 8122595789</h1>
//             </div>
//           </div>
//         </div>
//       </footer>
//       <footer className="px-15 py-2 bg-dark text-cream flex flex-col-2 justify-between items-center w-full">
//         <h1>Copyright © 2025 - All right reserved</h1>
//         <div className="inline-flex gap-5">
//             <FaInstagram size="30"/>
//             <FaLinkedin size="30"/>
//             <FaFacebook size="30"/>
//             <FaXTwitter size="30"/>
//             <FaYoutube size="30"/>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import logo from "./assets/home/img/Group 29.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      {/* Top Footer */}
      <footer className="bg-choco text-cream px-4 sm:px-10 lg:px-20 py-10 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
          {/* Logo + About */}
          <div>
            <Link to="/"><img src={logo} className="w-40 sm:w-52 mb-4" alt="Sweet Heart Logo" /></Link>
            <p className="text-sm leading-relaxed max-w-xs">
              From our heart to yours, spreading sweetness in every treat.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h1 className="font-bold mb-3">USEFUL LINKS</h1>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>Events</li>
              <li>Blogs</li>
              <li><Link to="/faq">FAQs</Link></li>
            </ul>
          </div>

          {/* Main Menu */}
          <div>
            <h1 className="font-bold mb-3">MAIN MENU</h1>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h1 className="font-bold mb-3">CONTACT US</h1>
            <ul className="space-y-2 text-sm">
              <li>sweetheartbakes@gmail.com</li>
              <li>+91 8122595789</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <footer className="px-4 sm:px-10 lg:px-20 py-3 bg-dark text-cream flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
        <h1 className="text-sm text-center sm:text-left">
          Copyright © 2025 - All rights reserved
        </h1>
        <h1 className="text-sm italic">
          Designed & Engineered by <a href="https://www.linkedin.com/in/dhanush-murugesan-stm/" className="font-bold">Dhanush</a>
        </h1>
        <div className="inline-flex gap-4">
          <FaInstagram size="24" className="hover:text-peach cursor-pointer" />
          <FaLinkedin size="24" className="hover:text-peach cursor-pointer" />
          <FaFacebook size="24" className="hover:text-peach cursor-pointer" />
          <FaXTwitter size="24" className="hover:text-peach cursor-pointer" />
          <FaYoutube size="24" className="hover:text-peach cursor-pointer" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;