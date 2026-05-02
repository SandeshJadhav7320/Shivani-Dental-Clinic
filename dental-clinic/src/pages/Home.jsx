import heroImg from "../assets/hero.jpg";
import { motion } from "framer-motion";
import {
  FaTooth,
  FaSmile,
  FaChild,
  FaTeeth,
  FaUserMd,
  FaNotesMedical,
} from "react-icons/fa";

import { GiToothbrush } from "react-icons/gi";
import img1 from "../assets/dental-care-5.jpg";
import img2 from "../assets/dental-care-6.jpg";
import img3 from "../assets/tooth-2.jpg";
import homeabout from "../assets/homeabout.jpg";
import '../App.css'
import Footer from "../components/Footer.jsx";


function Home() {
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
      <section
        className="relative h-[110vh] bg-cover bg-center "
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

        {/* Center Glass Card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className=" backdrop-blur-xl p-8 rounded-2xl shadow-2xl text-center max-w-md transition hover:scale-105 bg-transparent duration-500 animate-float">
            
            <p className="text-xl text-black font-semibold tracking-wide">
              Dr. Shivani’s Dental & Aesthetic
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-orange-300 mt-3 leading-tight">
              Best Dental Clinic in  Wakad | Hinjewadi, Pune
            </h1>

            <p className="text-black mt-3 text-sm">
              Your Smile, Our Passion! Advanced & Painless Dental Care
            </p>

            <button className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition">
              Discover More
            </button>
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
                    className="w-38 h-38 rounded-full object-cover"
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
              className="bg-white  backdrop-blur-xl p-10 rounded-2xl
                        shadow-2xl text-center max-w-md transform
                        hover:scale-105 transition "
              >
            
                <div className="flex justify-center mb-4">
                  <img
                    src={img3}
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
        <div className="w-full mx-auto px-6 py-20 bg-white">

          <div className="grid md:grid-cols-2 gap-2 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <img
                src={homeabout}
                alt="Dental Clinic"
                className="w-full max-w-md h-[500px] object-cover
           rounded-md shadow-xl border-2 border-blue-400
           hover:scale-105 transition duration-500
           animate-float"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>

              {/* SMALL TITLE */}
              <p className="text-pink-400 uppercase tracking-[4px] font-semibold">
                About Us
              </p>

              {/* MAIN HEADING */}
              <h2 className="text-5xl font-bold text-blue-400 leading-tight mt-2">
                Best Dental Clinic in Wakad 
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-700 leading-9 mt-8 text-justify">
                Dr. Shivani’s Dental Braces and Dental Care takes pleasure in introducing
                itself as one of the exclusive, professionally managed, well-equipped
                dental care centers in Ravet, Pradhikaran area.
              </p>

              <p className="text-gray-700 leading-9 mt-4 text-lg">
                We believe in delivering the best results with advanced technology,
                personalized care, and expert dental treatments for healthy and
                confident smiles.
              </p>

              {/* BUTTON */}
              <button
                className="mt-10 bg-pink-400 text-white px-8 py-4 rounded-md
                          font-semibold shadow-lg
                          hover:bg-pink-500 hover:scale-105
                          transition duration-300"
              >
                Discover More
              </button>

            </div>

          </div>
        </div>

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