import { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/symbol.jpeg";
 import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 80) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
    <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isHome && !scrolled
            ? "bg-transparent"
            : "bg-white shadow-md"
        }`}
      >
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}>

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Clinic Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
          <h1 className={`text-lg md:text-xl font-bold ${
              scrolled ? "text-blue-600" : "text-gray-500"
            }`}>
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
          ? "text-orange-400"
          : scrolled
          ? "text-gray-700 hover:text-blue-600"
          : "text-grey-600 hover:text-orange-300"
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
          className={`font-medium ${
          scrolled
            ? "text-gray-700 hover:text-blue-600"
            : "text-grey-600 hover:text-orange-300"
        }`}
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
       <HashLink
          smooth
          to="/contact#appointment-form"
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
        >
          Book Appointment
        </HashLink>

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

         

          <HashLink
            smooth
            to="/contact#appointment-form"
            className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Book Appointment
          </HashLink>
        </div>  
      )}
    </nav>
  );
}

export default Navbar;