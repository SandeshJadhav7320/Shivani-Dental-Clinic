import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white pt-16 pb-8 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* CLINIC INFO */}
        <div>
          <h2 className="text-3xl font-bold">
            Dr. Shivani’s Dental Clinic
          </h2>

          <p className="mt-4 text-gray-200 leading-7">
            Advanced and painless dental care with modern technology
            and personalized treatment solutions.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">

            <div className="bg-white text-blue-600 p-3 rounded-full
                            hover:bg-pink-500 hover:text-white
                            transition duration-300 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="bg-white text-blue-600 p-3 rounded-full
                            hover:bg-pink-500 hover:text-white
                            transition duration-300 cursor-pointer">
              <FaInstagram />
            </div>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-200">

            <li>
                <Link to="/" className="hover:text-pink-300">
                Home
                </Link>
            </li>

            <li>
                <Link to="/about-doctor" className="hover:text-pink-300">
                About
                </Link>
            </li>

            <li className="hover:text-pink-300 cursor-pointer">
              Services
            </li>

            <li className="hover:text-pink-300 cursor-pointer">
              Contact
            </li>

          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Services
          </h3>

          <ul className="space-y-3 text-gray-200">

            <li>Dental Implants</li>
            <li>Root Canal</li>
            <li>Braces & Aligners</li>
            <li>Kids Dentistry</li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-200">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-2 text-pink-300 text-5xl" />

              <p>
                B-10, 2nd Floor, B wing, Zinnia Elegans Vinode nagar, Laxmi Chowk Rd, Wakad, Pune, Maharashtra 411057
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-300 text-xl" />

              <p>
                91 90825 26482
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-300 text-xl" />

              <p>
                shivanib522@gmail.com
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-200">
            Powered by{" "}

            <a
                href="https://wordlanetech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 hover:text-white font-semibold transition"
            >
                Word Lane Tech
            </a>

            {" "}© 2026 Dr. Shivani’s Dental. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;