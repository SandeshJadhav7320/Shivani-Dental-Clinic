import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/symbol.jpeg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About Us",
    dropdown: [
      { name: "About Doctor", path: "/about-doctor" },
      { name: "About Clinic", path: "/about-clinic" },
    ],
  },
   {
    name: "Services",
    dropdown: [
      { name: "Aligners & Gum Surgery", path: "/aligners" },
      { name: "Crowns and Bridges", path: "/crowns" },
      { name: "Dental Checkup & X-Rays", path: "/checkup" },
      { name: "Dental Implants", path: "/implants" },
      { name: "Orthodontics (Braces)", path: "/braces" },
      { name: "Root Canal Specialist", path: "/root-canal" },
      { name: "Specialised Kids Dentistry", path: "/kids-dentistry" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Clinic Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
          <h1 className="text-lg md:text-xl font-bold text-blue-600 leading-tight">
            Dr. Shivani’s Dental
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
{navLinks.map((link) => (
  <div key={link.name} className="relative">

    {/* Normal Link */}
    {!link.dropdown && (
      <Link
        to={link.path}
        className={`font-medium ${
          location.pathname === link.path
            ? "text-blue-600"
            : "text-gray-700 hover:text-blue-600"
        }`}
      >
        {link.name}
      </Link>
    )}

    {/* Dropdown */}
    {link.dropdown && (
      <>
        <button
          onClick={() =>
            setOpenDropdown(openDropdown === link.name ? null : link.name)
          }
          className="font-medium text-gray-700 hover:text-blue-600"
        >
          {link.name} ▾
        </button>

        {openDropdown === link.name && (
          <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg z-50">
            {link.dropdown.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setDropdownOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </>
    )}

  </div>
))}
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition">
          Book Appointment
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
{navLinks.map((link) => (
  <div key={link.name}>
    
    {link.dropdown && (
  <>
    <p className="font-semibold text-gray-700">
      {link.name}
    </p>

    {link.dropdown.map((item) => (
      <Link
        key={item.name}
        to={item.path}
        onClick={() => setIsOpen(false)}
        className="block ml-4 mt-2 text-gray-600"
      >
        {item.name}
      </Link>
    ))}
  </>
)}
  </div>
))}

          <button className="w-full bg-blue-600 text-white py-2 rounded-full mt-2">
            Book Appointment
          </button>
        </div>  
      )}
    </nav>
  );
}

export default Navbar;