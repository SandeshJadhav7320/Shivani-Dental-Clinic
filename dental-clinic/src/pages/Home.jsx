
import { motion, AnimatePresence  } from "framer-motion";

import {
  FaTooth,
  FaSmile,
  FaChild,
  FaTeeth,
  FaUserMd,
  FaNotesMedical,
} from "react-icons/fa";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";

import { GiToothbrush } from "react-icons/gi";
import img1 from "../assets/dental-care-5.jpg";
import img2 from "../assets/dental-care-6.jpg";
import img3 from "../assets/tooth-2.jpg";
import homeabout from "../assets/DrShivani.jpg";
import '../App.css'
import Footer from "../components/Footer.jsx";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";


function Home() {

  const images = [
    hero1,
    hero2,
    hero3,
    hero4,
    hero5
  ];

  const [currentImage, setCurrentImage] = useState(0);

      useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) =>
          prev === images.length - 1 ? 0 : prev + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }, []);

    const texts = [
      "Best Dental Clinic in Pune",
      "Advanced Dental Care",
      "Braces & Aligners Specialist",
      "Root Canal Expert",
      "Your Smile, Our Priority"
    ];

  const services = [
  {
    title: "Aligners & Gum Surgery",
    description:
      "Advanced aligner treatments and gum care solutions for a healthy and confident smile.",
    icon: <FaSmile />,
  },

  {
    title: "Crowns and Bridges",
    description:
      "Restore damaged or missing teeth with durable and natural-looking crowns and bridges.",
    icon: <FaTeeth />,
  },

  {
    title: "Dental Checkup & X-Rays",
    description:
      "Comprehensive dental examinations and digital X-rays for accurate diagnosis and treatment.",
    icon: <FaNotesMedical />,
  },

  {
    title: "Dental Implants",
    description:
      "Permanent and natural-looking tooth replacement solutions with modern implant technology.",
    icon: <FaTooth />,
  },

  {
    title: "Orthodontics (Braces)",
    description:
      "Straighten teeth and improve smiles with advanced braces and orthodontic treatments.",
    icon: <GiToothbrush />,
  },

  {
    title: "Root Canal Specialist",
    description:
      "Painless root canal treatments to save infected teeth and restore oral health.",
    icon: <FaUserMd />,
  },

];
  return (
    <div>
      <div className="animated-bg min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-screen overflow-hidden">

        <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${images[currentImage]})`,
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
        

        {/* Center Glass Card */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto w-full px-10">
              <div className="max-w-4xl">
            
            <TypeAnimation
              sequence={[
                "Dr. Shivani’s Dental & Aesthetic",
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
              repeat={0}
            />

            <TypeAnimation
              key={currentImage}
              sequence={[texts[currentImage]]}
              speed={50}
              wrapper="h1"
              repeat={0}
              className="text-lg md:text-2xl lg:text-3xl text-white mt-6"
            />

            <p className="text-black mt-8 text-4xl">
              Your Smile, Our Passion! Advanced & Painless Dental Care
            </p>

            <div className="mt-10 flex gap-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition">
                Book Appointment
              </button>

              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition">
                Learn More
              </button>
            </div>

            {/* <button className="mt-8 bg-pink-500 text-white px-10 py-6 rounded-full shadow hover:bg-pink-600 transition">
              Discover More
            </button> */}
          </div>
        </div>
       </div>

        {/* DOWNWARD CURVE */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

              <svg
                viewBox="0 0 1440 320"
                className="w-full h-32"
                preserveAspectRatio="none"
              >
                <path
                  fill="#ffffff"
                  d="M0,96L80,117.3C160,139,320,181,480,197.3C640,213,800,203,960,176C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>
              </svg>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                  <span className="text-black text-3xl">
                    ↓
                  </span>
                </div>
            </div>
      </section>

     {/* CARDS SECTION */}
      <div className="bg-white py-6 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg text-center
                        hover:shadow-2xl hover:-translate-y-4
                        transition-all duration-500"
>
            
                <div className="flex justify-center mb-4">
                  <img
                    src={img1}
                    alt="care"
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-pink-500">
                  Exceptional Care
                </h3>

                <p className="text-blue-600 mt-2 text-2xl">
                  Painless, advanced & personalized treatments
                </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              whileHover={{
                scale: 1.05,
                rotate: 1
              }}
              className="bg-white  backdrop-blur-xl p-10 rounded-2xl
                        shadow-2xl text-center max-w-md transform
                        hover:scale-105 transition "
              >
            
                <div className="flex justify-center mb-4">
                  <img
                    src={img3}
                    alt="smile"
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-pink-500">
                  Perfect Smiles
                </h3>

                <p className="text-blue-600 mt-2 text-2xl">
                  Transforming smiles with expert precision
                </p>
          </motion.div>

          {/* Card 3 (Highlighted) */}
          <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-400 p-7 rounded-2xl shadow-lg text-center
                        hover:shadow-2xl hover:-translate-y-4
                        transition-all duration-500
                        md:-mt-40 relative z-30"
            >

            <div className="flex justify-center mb-4">
              <img
                src={img2}
                alt="contact"
                className="w-full h-full rounded-full object-cover "
              />
            </div>

            <h3 className="text-4xl font-bold mt-6">
              +91 90825 26482
            </h3>

            <p className="mt-6 text-4xl font-bold">
              Get connected with us!
            </p>

      </motion.div> 

        </div>
      </div>

      {/* ABOUT US SECTION */}
        <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Circle Background */}
          <div className="absolute -left-24 top-0 w-[600px] h-[600px] bg-gray-100 rounded-full z-0"></div>

          {/* Image */}
          <img
            src={homeabout}
            alt="Doctor"
            className="relative z-10 w-full max-w-xl mx-auto rounded-lg shadow-xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[4px] text-blue-600 font-semibold font-serif">
            About Us
          </p>

          <h2 className="text-5xl font-bold text-gray-800 mt-4 leading-tight">
            Compassionate Care <br />
            For Your Perfect Smile
          </h2>

          <div className="w-20 h-1 bg-blue-500 mt-6 mb-8"></div>

          <p className="text-gray-600 text-lg leading-8">
            Dr. Shivani’s Dental & Aesthetic is dedicated to providing
            advanced, painless and personalized dental care.
            Your smile is our passion and commitment.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-8">

            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-3xl">
                🦷
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-600">
                  Advanced Technology
                </h3>

                <p className="text-gray-600">
                  Modern equipment for precise treatments.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-3xl">
                🛡️
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-600">
                  Safe & Hygienic
                </h3>

                <p className="text-gray-600">
                  Highest standards of sterilization and safety.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-3xl">
                👨‍⚕️
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-600">
                  Expert Team
                </h3>

                <p className="text-gray-600">
                  Experienced professionals dedicated to your smile.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* STATS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 bg-white shadow-xl rounded-3xl p-8"
      >
        <div className="grid md:grid-cols-3 text-center">

          <div>
            <h3 className="text-5xl font-bold text-blue-600">15+</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-600">5000+</h3>
            <p className="text-gray-600 mt-2">Happy Patients</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-blue-600">1000+</h3>
            <p className="text-gray-600 mt-2">Successful Treatments</p>
          </div>

        </div>
      </motion.div>
    </section>

        {/* OUR SERVICES */}
          <section className="bg-white py-24 px-6">

            {/* HEADING */}
            <div className="text-center max-w-3xl mx-auto">

              <p className="text-pink-500 uppercase tracking-[4px] font-bold text-4xl">
                Our Services
              </p>

              <h2 className="text-3xl font-bold text-blue-600 mt-3">
                Complete Dental Care Solutions
              </h2>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Advanced, painless, and personalized dental treatments
                for healthy and confident smiles.
              </p>

            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mt-16">

                {services.map((service, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className={`bg-white rounded-3xl p-10 shadow-lg
            hover:shadow-2xl transition-all duration-500
            text-center group animate-float
            ${index % 3 === 0 ? "float-delay-1" : ""}
            ${index % 3 === 1 ? "float-delay-2" : ""}
            ${index % 3 === 2 ? "float-delay-3" : ""}`}
                  >

                    {/* ICON */}
                    <div className="flex justify-center">

                      <div className="bg-blue-100 p-5 rounded-full
                                      group-hover:bg-pink-100 transition">

                        <div className="text-5xl text-blue-600
                                        group-hover:text-pink-500 transition">

                          {service.icon}

                        </div>

                      </div>

                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl font-bold text-gray-800 mt-6">
                      {service.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 mt-4 leading-7">
                      {service.description}
                    </p>

                  </motion.div>

                ))}

              </div>

          </section>
         
      </div>
       <Footer />
    </div>
  );
}

export default Home;