// import alignerImg from "../../assets/aligners.jpg";

function Aligners() {
  return (
    <div className="bg-gray-100">

      {/* HERO SECTION */}
      <div className="bg-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Aligners & Gum Surgery
        </h1>
        <p className="mt-4 text-lg">
          Straighten your teeth with invisible and comfortable aligners
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        {/* <div>
          <img
            src={alignerImg}
            alt="Aligners"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div> */}

        {/* Content */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600">
            What are Aligners?
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Aligners are transparent trays used to straighten teeth without
            the need for traditional metal braces. They are removable,
            comfortable, and almost invisible.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ Nearly invisible appearance</li>
            <li>✔ Comfortable and removable</li>
            <li>✔ No food restrictions</li>
            <li>✔ Easy to maintain oral hygiene</li>
          </ul>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Benefits of Aligners
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">

          <div className="p-6 shadow rounded-xl text-center">
            <h3 className="text-xl font-semibold text-blue-500">
              Invisible Look
            </h3>
            <p className="mt-2 text-gray-600">
              Clear trays that are hardly noticeable
            </p>
          </div>

          <div className="p-6 shadow rounded-xl text-center">
            <h3 className="text-xl font-semibold text-blue-500">
              Comfortable Fit
            </h3>
            <p className="mt-2 text-gray-600">
              No wires or brackets causing pain
            </p>
          </div>

          <div className="p-6 shadow rounded-xl text-center">
            <h3 className="text-xl font-semibold text-blue-500">
              Removable
            </h3>
            <p className="mt-2 text-gray-600">
              Remove anytime for eating or cleaning
            </p>
          </div>

        </div>
      </div>

      {/* TREATMENT STEPS */}
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Treatment Process
        </h2>

        <div className="max-w-4xl mx-auto mt-10 space-y-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-500">
              Step 1: Consultation
            </h3>
            <p className="text-gray-600">
              Doctor evaluates your teeth and suggests treatment
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-500">
              Step 2: 3D Scan
            </h3>
            <p className="text-gray-600">
              Digital scan of your teeth for accurate planning
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-500">
              Step 3: Custom Aligners
            </h3>
            <p className="text-gray-600">
              Custom trays are created for your teeth
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-blue-500">
              Step 4: Smile Transformation
            </h3>
            <p className="text-gray-600">
              Gradual improvement with regular usage
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold">
          Start Your Smile Journey Today
        </h2>

        <button className="mt-6 bg-pink-500 px-6 py-3 rounded-lg hover:bg-pink-600">
          Book Appointment
        </button>
      </div>

    </div>
  );
}

export default Aligners;