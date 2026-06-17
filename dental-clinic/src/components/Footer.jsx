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
            Dr. Shivani's Dental & Aesthetic
          </h2>

          <p className="mt-4 text-gray-200 leading-7">
            Advanced and painless dental care with modern technology
            and personalized treatment solutions for healthy and
            confident smiles.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="bg-white text-blue-600 p-3 rounded-full
                         hover:bg-pink-500 hover:text-white
                         transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-white text-blue-600 p-3 rounded-full
                         hover:bg-pink-500 hover:text-white
                         transition duration-300"
            >
              <FaInstagram />
            </a>

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
              <Link
                to="/about-doctor"
                className="hover:text-pink-300"
              >
                About Doctor
              </Link>
            </li>

            <li>
              <Link
                to="/about-clinic"
                className="hover:text-pink-300"
              >
                About Clinic
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-pink-300"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-200">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-pink-300 text-2xl" />

              <p>
                B-10, 2nd Floor, B Wing,
                Zinnia Elegans Vinode Nagar,
                Laxmi Chowk Rd, Wakad,
                Pune - 411057
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-300 text-xl" />

              <p>+91 90825 26482</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-pink-300 text-xl" />

              <p>shivanib522@gmail.com</p>
            </div>

          </div>
        </div>

        {/* MAP SECTION - RIGHT SIDE */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Find Us
          </h3>

          <div
            className="overflow-hidden rounded-xl shadow-xl
                       border-2 border-white
                       hover:scale-105 transition duration-300"
          >
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3784049772753!2d73.74013117491964!3d18.602042166681027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe4a2096a07%3A0xe4f6c01bd6f2d117!2sDr.%20Shivani%E2%80%99s%20Dental%20%26%20Aesthetics!5e0!3m2!1sen!2sin!4v1781682901302!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>

          <p className="mt-3 text-sm text-gray-200">
            Wakad, Pune, Maharashtra
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-gray-200">

        Powered by{" "}

        <a
          href="https://wordlanetech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-300 hover:text-white font-semibold"
        >
          Word Lane Tech
        </a>

        {" "}© 2026 Dr. Shivani's Dental & Aesthetic.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;