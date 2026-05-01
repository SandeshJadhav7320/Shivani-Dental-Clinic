import heroImg from "../assets/hero.jpg";
import { motion } from "framer-motion";
import { FaTooth, FaSmile, FaPhone } from "react-icons/fa";
import img1 from "../assets/dental-care-5.jpg";
import img2 from "../assets/dental-care-6.jpg";
import img3 from "../assets/tooth-2.jpg";

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

        {/* Center Glass Card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-2xl text-center max-w-md transition hover:scale-105">
            
            <p className="text-sm text-gray-700 font-semibold tracking-wide">
              Dr. Shivani’s Dental & Aesthetic
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mt-3 leading-tight">
              Best Dental Clinic in  Wakad | Hinjewadi, Pune
            </h1>

            <p className="text-gray-700 mt-3 text-sm">
              Your Smile, Our Passion! Advanced & Painless Dental Care
            </p>

            <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition">
              Discover More
            </button>
          </div>
        </div>

        {/* Curve Bottom */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 500 80" className="w-full h-20">
            <path
              d="M0,40 C150,80 350,0 500,40 L500,80 L0,80 Z"
              className="fill-gray-100"
            ></path>
          </svg>
        </div>
      </section>

     {/* CARDS SECTION */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-20 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
            
            <div className="flex justify-center mb-4">
              <img
                src={img1}
                alt="care"
                className="w-38 h-38 rounded-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold text-pink-500">
              Exceptional Care
            </h3>

            <p className="text-blue-600 mt-2 text-2xl">
              Painless, advanced & personalized treatments
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-20 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
            
            <div className="flex justify-center mb-4">
              <img
                src={img2}
                alt="smile"
                className="w-38 h-38 rounded-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-semibold text-pink-500">
              Perfect Smiles
            </h3>

            <p className="text-blue-600 mt-2 text-2xl">
              Transforming smiles with expert precision
            </p>
          </div>

          {/* Card 3 (Highlighted) */}
          <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white p-20 rounded-2xl shadow-xl text-center transform hover:scale-105 transition">
            
            <div className="flex justify-center mb-4">
              <img
                src={img3}
                alt="contact"
                className="w-38 h-38 rounded-full border-4 border-white"
              />
            </div>

            <h3 className="text-2xl font-bold">
              +91 8408899118
            </h3>

            <p className="mt-2 text-2xl">
              Get connected with us!
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;