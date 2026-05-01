import clinicImg from "../../assets/hospitalimage.jpg"; // add clinic image
import vision from "../../assets/vision.jpg";
import mission from "../../assets/mission.jpg";
import motto from "../../assets/motto.jpg";
import hospitalimage2 from "../../assets/hospitalimage2.jpg";


function AboutClinic() {
  return (
    <div className="bg-gray-100">

      {/* HERO SECTION */}
      <div className="bg-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          About Our Clinic
        </h1>
        <p className="mt-4 text-lg">
          Advanced & painless dental care for your perfect smile
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src={clinicImg}
            alt="Clinic"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-blue-600">
            SSmileVille Braces & Dental Care
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed text-xl">
            Our clinic is equipped with modern dental technology to provide
            high-quality, painless, and personalized treatments. We focus on
            patient comfort and long-lasting results.
          </p>

          <p className="mt-4 text-gray-700 text-xl">
            Located in Ravet, Pradhikaran, we offer a wide range of dental
            services under one roof.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-9xl mx-auto px-6 py-10 bg-blue-600">
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white p-14 rounded-3xl shadow-xl text-center">
            <div className="flex justify-center mb-4">
                          <img
                            src={vision}
                            alt="care"
                            className="w-28 h-28 rounded-full object-cover shadow-2xl"
                          />
            </div>
            <h3 className="text-3xl font-bold text-blue-500">
              Vision
            </h3>
            <p className="mt-4 text-gray-600 text-sm">
              To be the most trusted dental care provider, creating confident and healthy smiles.
            </p>
          </div>

          <div className="bg-white p-12 rounded-2xl shadow-xl text-center">

             <div className="flex justify-center mb-4">
                          <img
                            src={mission}
                            alt="care"
                            className="w-28 h-28 rounded-full object-cover shadow-2xl"
                          />
              </div>

            <h3 className="text-3xl font-bold text-blue-500">
              Mission
            </h3>
            <p className="mt-2 text-gray-600 text-sm ">
              To offer exceptional, patient-centric dental care with advanced technology and personalized treatments.
            </p>
          </div>

          <div className="bg-white p-14 rounded-3xl shadow-xl text-center">

            <div className="flex justify-center mb-4">
                          <img
                            src={motto}
                            alt="care"
                            className="w-28 h-28 rounded-full object-cover shadow-2xl"
                          />
            </div>

            <h3 className="text-3xl font-bold text-blue-500">
              Motto
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Creating beautiful, healthy smiles with expert care, compassion, innovation, and lasting results.
            </p>
          </div>

        </div>
      </div>

      <div className="relative w-full">

          {/* Background Image */}
          <img
            src={hospitalimage2}
            alt="clinic"
            className="w-full h-[550px] object-cover"
          />

          {/* Overlay Card */}
          <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 
                          w-full max-w-5xl px-6">

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">

              {/* Heading */}
              <p className="text-center text-xs tracking-widest text-gray-500">
                TESTIMONIAL
              </p>

              <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-500 mt-2">
                What They Say
              </h2>

              {/* Content */}
              <div className="grid md:grid-cols-3 gap-6 mt-8 items-center">

                {/* Rating */}
                <div className="text-center">
                  <h3 className="font-bold text-lg">EXCELLENT</h3>
                  <div className="text-yellow-400 text-xl mt-2">★★★★★</div>
                  <p className="text-sm text-gray-500 mt-1">
                    Based on 62 reviews
                  </p>
                  <p className="text-blue-500 font-bold mt-2">Google</p>
                </div>

                {/* Review 1 */}
                <div className="bg-gray-50 p-4 rounded-xl shadow">
                  <h4 className="font-bold">Sneha</h4>
                  <p className="text-yellow-500 text-2xl">★★★★★</p>
                  <p className="text-sm text-gray-600 mt-2">
                    I got tooth colour filling
                  </p>
                </div>

                {/* Review 2 */}
                <div className="bg-gray-50 p-4 rounded-xl shadow">
                  <h4 className="font-bold">Kartik</h4>
                  <p className="text-yellow-500 text-2xl">★★★★★</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Root canal done smoothly, very nice doctor and team.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>


      {/* CTA */}
      <div className="text-center py-12 bg-blue-600 text-white mt-40">
        <h2 className="text-3xl font-bold">
          Book Your Appointment Today
        </h2>

        <button className="mt-6 bg-pink-500 px-6 py-3 rounded-lg hover:bg-pink-600">
          Get Appointment
        </button>
      </div>

    </div>
  );
}

export default AboutClinic;