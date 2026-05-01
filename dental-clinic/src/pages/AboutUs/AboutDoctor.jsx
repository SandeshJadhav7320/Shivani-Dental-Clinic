import doctorImg from "../../assets/doctorimage.jpg";
import { motion } from "framer-motion";

function AboutDoctor() {
  return (
    <div className="bg-gray-100 py-10 px-6">
      {/* HERO SECTION */}
      <div className="bg-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Our Doctor
        </h1>
        <p className="mt-4 text-lg">
          Educated & experienced doctor for your perfect smile
        </p>
      </div><br></br><br></br>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* LEFT SECTION */}
        <motion.div
          className="md:col-span-2 space-y-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Heading */}
          <div>
            <h1 className="text-4xl md:text-4xl font-bold text-blue-600">
              Your Trusted Aligner & Braces Specialist
            </h1>

            <p className="mt-4 text-gray-700 leading-relaxed text-2xl">
              Dr. Shivani is a highly experienced dentist specializing in
              Orthodontics and Dentofacial Orthopedics. She provides expert
              care for a healthier and more confident smile.
            </p><br></br>

            <p className="mt-4 text-gray-700 leading-relaxed text-2xl">
              As a aligner & braces specialist, she provides expert orthodontic care at SSmileVille Braces
               and Dental Care in Ravet, Pradhikaran. She is also a faculty member at a reputed dental college, 
               where she shares her advanced knowledge with aspiring dentists.
            </p>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-500">Education</h2>
            <p className="mt-4 text-gray-700 leading-relaxed text-xl">
              Dr. Sujata A. Yerawadekar has received her dental education from a reputed institution and 
              continues to stay updated with the latest advancements in dentistry with an <b>15 years Experience.</b>
            </p><br></br>
            <ul className="mt-4 space-y-2 grid grid-cols-2 gap-6 text-gray-700 text-xl font-sans">
              <li>✔ MDS - Orthodontics and Dentofacial Orthopaedics - Dr. D Y Patil Vidyapeeth, Pune, 2014</li>
              <li>✔ BDS - Dr. D Y Patil Vidyapeeth, Pune, 2010</li>
            </ul>
          </motion.div>

          {/* Specializations */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <h2 className="text-3xl font-bold text-blue-500">
              Specializations
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed text-xl">
              Dr. Sujata A. Yerawadekar holds a specialization in Orthodontics and Dentofacial Orthopedics, backed by extensive education and training from a reputed dental institution
            </p><br></br>

            <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-700 text-xl">
              <li>✔ Orthodontist</li>
              <li>✔ Dentist</li>
              <li>✔ Dental Surgeon</li>
              <li>✔ Cosmetic Dentist</li>
            </ul>
          </motion.div>

          {/* Awards */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            <h2 className="text-2xl font-bold text-blue-500">Awards</h2>
            <p className="mt-4 text-gray-700 leading-relaxed text-xl">
              Dr Sujata Yerawadekar is a recognized professional in the field of dentistry, actively associated with reputed dental organizations and officially registered with the state dental council since 2011
            </p><br></br>

            <ul className="mt-4 space-y-2 text-gray-700 text-xl grid grid-cols-2">
              <li>✔ Indian Orthodontic Society</li>
              <li>✔ Indian Dental Association</li>
              <li>✔ Maharashtra Dental Council</li>
            </ul>
          </motion.div>
        <p className="mt-4 text-gray-700 leading-relaxed text-xl">
          Book an appointment today and take the first step towards a <b>beautiful, confident smile!</b>
        </p>
          {/* Button */}
          <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600"
            >
              Get Appointment
            </motion.button>
        </motion.div>

        {/* RIGHT SECTION (Doctor Card) */}
        <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 text-center h-fit sticky top-60"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

          {/* Image */}
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={doctorImg}
            alt="Doctor"
            className="w-full h-72 object-cover rounded-2xl"
          />

          {/* Name */}
          <h2 className="text-2xl font-bold text-blue-600 mt-4">
            Dr. Shivani Patil
          </h2>

          <p className="text-gray-600 text-2xl font-bold">
            MDS - Orthodontics
          </p>

          <hr className="my-4" />

          {/* Schedule */}
          <h3 className=" text-gray-700 font-bold text-2xl">
            Doctor Schedule
          </h3>

          <p className="mt-2 text-blue-600 font-bold text-2xl">
            Mon - Sat
          </p>

          <p className="text-gray-700 text-2xl font-bold ">
            10:00 AM - 08:00 PM
          </p>
      </motion.div>

      </div>
    </div>
  );
}

export default AboutDoctor;