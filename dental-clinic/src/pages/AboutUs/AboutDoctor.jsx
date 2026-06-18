import doctorImg from "../../assets/DrShivani.jpg";
import doctorImg2 from "../../assets/aboutdoctor2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaTooth,
  FaSmile,
  FaTeeth,
  FaUserMd,
  FaGraduationCap,
  FaAward,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  MdOutlineHealthAndSafety,
  MdMedicalServices,
} from "react-icons/md";

function AboutDoctor() {

 const services = [
  {
    title: "Root Canal Treatment",
    icon: <FaTooth />,
  },
  {
    title: "Smile Designing",
    icon: <FaSmile />,
  },
  {
    title: "Dental Implants",
    icon: <MdMedicalServices />,
  },
  {
    title: "Clear Aligners",
    icon: <FaTeeth />,
  },
  {
    title: "Orthodontic Braces",
    icon: <FaUserMd />,
  },
  {
    title: "Full Mouth Rehabilitation",
    icon: <MdOutlineHealthAndSafety />,
  },
];
  return (
    <div>

      {/* HERO SECTION */}
  
      <section className="relative overflow-hidden bg-white">
        {/* Animated Background Blobs */}

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"
        />

        {/* Floating Particles */}

        <div className="absolute inset-0 overflow-hidden">

          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 left-20 w-3 h-3 bg-white rounded-full opacity-60"
          />

          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-32 w-4 h-4 bg-pink-300 rounded-full opacity-50"
          />

          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-200 rounded-full opacity-50"
          />

          <motion.div
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 9, repeat: Infinity }}
            className="absolute bottom-20 right-1/4 w-5 h-5 bg-white rounded-full opacity-30"
          />

        </div>

        {/* Main Content */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="uppercase tracking-[5px] text-pink-400 font-semibold"
              >
                Best Dentist in Wakad | Hinjewadi Pune
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold mt-4 leading-tight"
              >
                Dr. Shivani Sopan Bhamare
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl mt-4 font-medium"
              >
                BDS (Gold Medalist & Class Valedictorian)
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-lg text-blue-500 leading-8"
              >
                Dedicated to providing advanced, ethical, and personalized
                dental care. Helping patients achieve healthy, confident,
                and beautiful smiles through modern dentistry.
              </motion.p>

              {/* Statistics */}

              <div className="flex flex-wrap gap-8 mt-10">

                <div>
                  <h2 className="text-4xl font-bold">5+</h2>
                  <p>Years Experience</p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold">1000+</h2>
                  <p>Happy Patients</p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold">90%</h2>
                  <p>RCT Success</p>
                </div>

              </div>

              {/* Buttons */}

              <div className="flex gap-4 mt-10">

                  {/* Book Appointment */}
                  <a
                    href="https://wa.me/919699929896?text=Hi Doctor, I would like to book an appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-pink-500 px-8 py-4 rounded-xl font-semibold">
                      Book Appointment
                    </button>
                  </a>

                  {/* Call Now */}
                  <a href="tel:+919082526482">
                    <button
                      className="
                      bg-pink-500
                      backdrop-blur-md
                      border border-white/30
                      px-8 py-4
                      rounded-xl
                      font-semibold
                      hover:bg-white/30
                      hover:scale-105
                      transition duration-300"
                    >
                      Call Now
                    </button>
                  </a>

                </div>

            </motion.div>

            {/* RIGHT IMAGE */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="relative flex justify-center"
            >

              {/* Background Shape */}

              <div
                className="
                  absolute
                  top-6
                  left-10
                  w-[380px]
                  h-[500px]
                  bg-pink-100
                  rounded-[60px]
                  rotate-6
                "
              />

              {/* Second Shape */}

              <div
                className="
                  absolute
                  bottom-0
                  right-8
                  w-[380px]
                  h-[500px]
                  bg-blue-100
                  rounded-[60px]
                  -rotate-6
                "
              />

              {/* Doctor Image */}

              <motion.img
                src={doctorImg2}
                alt="Doctor"
                whileHover={{
                  scale: 1.03,
                }}
                className="
                  relative
                  z-10
                  w-[380px]
                  h-[500px]
                  object-cover
                  rounded-t-[220px]
                  rounded-b-[40px]
                  border-8
                  border-white
                  shadow-2xl
                "
              />

            </motion.div>

          </div>

        </div>

      </section>


      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {[
            ["5+", "Years Experience"],
            ["1000+", "Happy Patients"],
            ["90%", "RCT Success Rate"],
            ["100%", "Patient Satisfaction"],
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-50 p-8 rounded-2xl text-center shadow"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {item[0]}
              </h2>

              <p className="mt-2">{item[1]}</p>
            </motion.div>
          ))}

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={doctorImg}
            alt=""
            className="rounded-3xl shadow-xl"
          />

          <div>

            <h2 className="text-4xl font-bold text-blue-600">
              Your Friendly Neighborhood Dentist
            </h2>

            <p className="mt-6 text-gray-700 leading-8">
              Dr. Shivani Sopan Bhamare is a highly skilled and
              compassionate dentist with over 5 years of clinical
              experience in comprehensive dentistry.
            </p>

            <p className="mt-4 text-gray-700 leading-8">
              A Gold Medalist and Class Valedictorian from SMBT
              Institute of Dental Sciences & Research, she combines
              advanced clinical expertise with a patient-first
              approach.
            </p>

          </div>

        </div>
      </section>

      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-blue-600">
            Education & Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
              <FaGraduationCap className="text-5xl text-blue-600 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold">
                BDS
              </h3>
              <p className="mt-3">
                SMBT Institute of Dental Sciences & Research
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
              <FaAward className="text-5xl text-pink-500 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold">
                Gold Medalist
              </h3>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
              <FaAward className="text-5xl text-yellow-500 mx-auto" />
              <h3 className="mt-4 text-2xl font-bold">
                Class Valedictorian
              </h3>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 bg-white">

            <div className="max-w-6xl mx-auto">

              <h2 className="text-4xl font-bold text-center text-blue-600">
                Areas of Expertise
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mt-12">

                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                    }}
                    className="bg-gray-50 p-8 rounded-3xl shadow-lg
                              hover:shadow-2xl transition-all duration-500
                              text-center"
                  >

                    {/* BIG ICON */}
                    <div className="flex justify-center">
                      <div className="bg-blue-100 p-5 rounded-full">
                        <span className="text-6xl text-blue-600">
                          {service.icon}
                        </span>
                      </div>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-gray-800">
                      {service.title}
                    </h3>

                  </motion.div>
                ))}

              </div>

            </div>

          </section>

        <section className="bg-gray-100 py-20">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
              Professional Journey
            </h2>

            <div className="space-y-8">

              {[
                {
                  title: "Dr. Rai's Smile Studio",
                  color: "from-pink-500 to-rose-400",
                },
                {
                  title: "Shree Multispeciality Dental Clinic",
                  color: "from-blue-500 to-cyan-400",
                },
                {
                  title: "Dr. Shivani's Dental Care, Kalyan (2022–2025)",
                  color: "from-purple-500 to-indigo-500",
                },
                {
                  title: "Dr. Shivani's Dental & Aesthetic, Wakad",
                  color: "from-green-500 to-emerald-400",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                  }}
                  className={`bg-gradient-to-r ${item.color}
                              text-white
                              p-8
                              rounded-3xl
                              shadow-xl
                              hover:shadow-2xl
                              transition-all
                              duration-500
                              cursor-pointer`}
                >
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>
                </motion.div>
              ))}

            </div>

          </div>
        </section>

         <section className="py-20 bg-white">

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >

                <div
                  className="
                  bg-gradient-to-r
                  from-blue-600
                  via-blue-500
                  to-cyan-400
                  text-white
                  p-10
                  rounded-3xl
                  shadow-2xl"
                >

                  <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-center"
                  >
                    Contact Details
                  </motion.h2>

                  <div className="grid md:grid-cols-3 gap-6 mt-10">

                    {/* Phone */}
                    <a href="tel:+919082526482">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -10 }}
                        className="bg-white/20 backdrop-blur-md p-6 rounded-2xl text-center cursor-pointer"
                      >
                        <FaPhoneAlt className="text-5xl mx-auto text-pink-300" />

                        <h3 className="mt-4 text-xl font-bold">
                          Call Doctor
                        </h3>

                        <p className="mt-2">
                          +91 90825 26482
                        </p>
                      </motion.div>
                    </a>

                   <a href="mailto:shivanib522@gmail.com">
                      <motion.div
                        whileHover={{ scale: 1.05, y: -10 }}
                        className="bg-white/20 backdrop-blur-md p-6 rounded-2xl text-center cursor-pointer"
                      >
                        <FaEnvelope className="text-5xl mx-auto text-yellow-300" />

                        <h3 className="mt-4 text-xl font-bold">
                          Email Us
                        </h3>

                        <p className="mt-2">
                          shivanib522@gmail.com
                        </p>
                      </motion.div>
                    </a>
                    <a
                        href="https://maps.google.com/?q=Dr Shivani Dental and Aesthetic Wakad Pune"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, y: -10 }}
                          className="bg-white/20 backdrop-blur-md p-6 rounded-2xl text-center cursor-pointer"
                        >
                          <FaMapMarkerAlt className="text-5xl mx-auto text-red-300" />

                          <h3 className="mt-4 text-xl font-bold">
                            Visit Clinic
                          </h3>

                          <p className="mt-2">
                            Wakad | Hinjewadi, Pune
                          </p>
                        </motion.div>
                      </a>

                  </div>

                </div>

              </motion.div>

            </section>

        <section className="bg-blue-600 text-white text-center py-20">

            <h2 className="text-5xl font-bold">
              Your Smile Deserves Precision,
              Care & Confidence
            </h2>

            <p className="mt-6 text-xl">
              Book your appointment today.
            </p>

            <button className="mt-8 bg-pink-500 px-8 py-4 rounded-xl">
              Book Appointment
            </button>

          </section>

    </div>
  );
}

export default AboutDoctor;