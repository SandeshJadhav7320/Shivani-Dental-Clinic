import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n7ykig6", // Your Service ID
        "template_un1n2es", // Your Template ID
        form.current,
        "s7uz6wlqfR00ta4LD" // Your Public Key
      )
      .then(() => {
        alert("Message Sent Successfully!");

        const name = form.current.from_name.value;
        const phone = form.current.phone.value;
        const email = form.current.from_email.value;
        const message = form.current.message.value;

        const whatsappMessage = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`;

        window.open(
          `https://wa.me/9699929896?text=${encodeURIComponent(
            whatsappMessage
          )}`,
          "_blank"
        );

        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <div className="bg-gray-100 overflow-hidden">

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-blue-600 text-white py-24 px-6 text-center"
      >
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-white rounded-full blur-3xl opacity-10"></div>

        <h1 className="text-5xl md:text-6xl font-bold">
          Contact Us
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          We're here to help you achieve your perfect smile.
        </p>
      </motion.section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10">

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-8">
              Send Us a Message
            </h2>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                className="w-full p-4 rounded-xl border focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="w-full p-4 rounded-xl border focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-4 rounded-xl border focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-xl border focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
              ></textarea>

              <button
                type="submit"
                className="bg-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-600 hover:scale-105 transition duration-300"
              >
                Send Message
              </button>

            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaPhoneAlt className="text-blue-600 text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Phone</h3>
                  <p className="text-gray-600">
                    +91 8408899118
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-4 rounded-full">
                  <FaEnvelope className="text-pink-500 text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p className="text-gray-600">
                    smilevilleclinic@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMapMarkerAlt className="text-blue-600 text-3xl" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">Address</h3>
                  <p className="text-gray-600">
                    Ravet, Pradhikaran, Pune
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-4 rounded-full">
                  <FaClock className="text-pink-500 text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Working Hours
                  </h3>

                  <p className="text-gray-600">
                    Monday - Saturday
                  </p>

                  <p className="text-gray-600">
                    10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        

      </section>

        <Footer />
      
    </div>
  );
}

export default Contact;