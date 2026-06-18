import { motion } from "framer-motion";
import {
  FaSmile,
  FaShieldAlt,
  FaCheckCircle,
  FaCalendarCheck,
  FaMagic,
  FaTooth,
  FaUserMd,
  FaClinicMedical,
  FaHeartbeat,
  FaAward,
  FaMicroscope,
  FaStar,
} from "react-icons/fa";

function ServiceTemplate({
  title,
  subtitle,
  image,
  doctorImage,
  introduction,
  benefits,
  benefitIcons,
  process,
  whyChooseUs,
  whyIcons,
}) {
  return (
    <div className="bg-white">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight">
              {title}
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              {introduction}
            </p>

            <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700">
              Book Consultation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <img
              src={image}
              alt={title}
              className="w-[450px] h-[450px] object-cover rounded-full shadow-2xl border-8 border-white"
            />
          </motion.div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="bg-blue-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold text-blue-700">
            Benefits of Treatment
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {benefits.map((item, index) => {
  const Icon = benefitIcons[index];

  return (
    <motion.div
      key={index}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group bg-white p-8 rounded-3xl shadow-lg
      hover:shadow-blue-200 transition-all duration-500
      border border-transparent hover:border-blue-200"
    >
      <div className="w-16 h-16 rounded-2xl bg-blue-100
      flex items-center justify-center  mx-auto mb-5
      group-hover:bg-pink-100 transition-all duration-500">

        <Icon
          className="text-4xl text-blue-600
          group-hover:text-pink-500
          transition-all duration-500"
        />

      </div>

      <h3 className="text-xl font-semibold text-gray-800 text-center">
        {item}
      </h3>
    </motion.div>
  );
})}

          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold text-blue-700">
            Treatment Process
          </h2>

          <div className="mt-16">

            {process.map((step, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex gap-8 mb-12"
              >
                <div className="flex flex-col items-center">

                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>

                  {index !== process.length - 1 && (
                    <div className="w-1 h-28 bg-blue-300"></div>
                  )}

                </div>

                <div className="bg-white shadow-xl p-8 rounded-3xl flex-1">

                  <h3 className="text-2xl font-bold text-blue-600">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {step.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold text-blue-700">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {whyChooseUs.map((item, index) => {
  const Icon = whyIcons[index];

  return (
    <motion.div
      key={index}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group relative overflow-hidden
      bg-white rounded-3xl p-8 shadow-xl"
    >

      <div
        className="absolute inset-0
        bg-gradient-to-r
        from-blue-600
        to-pink-500
        translate-y-full
        group-hover:translate-y-0
        transition-all duration-500"
      />

      <div className="relative z-10">

        <div
          className="w-16 h-16 rounded-2xl
          bg-blue-100 flex items-center justify-center mx-auto mb-5
          group-hover:bg-white/20 transition-all duration-500"
        >

          <Icon
            className="text-4xl text-blue-600
            group-hover:text-white transition-all duration-500 text"
          />

        </div>

        <h3
          className="text-xl font-semibold text-gray-800
          group-hover:text-white transition-all duration-500"
        >
          {item}
        </h3>

      </div>

    </motion.div>
  );
})}

          </div>

        </div>

      </section>

      {/* TESTIMONIAL */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto text-center px-6">

          <FaSmile className="mx-auto text-6xl text-blue-600" />

          <h2 className="text-4xl font-bold mt-6">
            Hear From Our Happy Patients
          </h2>

          <p className="mt-8 text-xl text-gray-600 italic">
            "Professional, painless treatment and amazing results.
            Highly recommended!"
          </p>

        </div>

      </section>

      {/* CTA SECTION */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="bg-blue-700 rounded-[60px] overflow-hidden">

            <div className="grid lg:grid-cols-2 items-center">

              <div className="p-12 text-white">

                <h2 className="text-5xl font-bold">
                  Book An Appointment
                </h2>

                <p className="mt-6 text-lg">
                  Let us help you achieve a healthy,
                  confident and beautiful smile.
                </p>

                <button className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold">
                  Book Now
                </button>

              </div>

              <div className="flex justify-center">
                <img
                  src={doctorImage}
                  alt=""
                  className="h-[420px] object-contain"
                />
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ServiceTemplate;