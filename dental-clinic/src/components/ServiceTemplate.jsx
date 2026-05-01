
function ServiceTemplate({
  title,
  subtitle,
  image,
  description,
  benefits,
  steps,
}) {
  return (
    <div className="bg-gray-100">

      {/* HERO */}
      <div className="bg-blue-600 text-white text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          {title}
        </h1>

        <p className="mt-4 text-lg">
          {subtitle}
        </p>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Description */}
        <div>
          <h2 className="text-3xl font-bold text-blue-600">
            About Treatment
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {description}
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            {benefits.map((benefit, index) => (
              <li key={index}>✔ {benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* STEPS */}
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Treatment Process
        </h2>

        <div className="w-full mx-auto mt-10 space-y-6 ">
          <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                    <div
                    key={index}
                    className="bg-white shadow-xl overflow-hidden grid md:grid-cols-2 hover:scale-105 rounded-3xl "
                    >

                    {/* Image */}
                    <div>
                        <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-[380px] object-cover rounded-3xl"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-blue-600">
                        Step {index + 1}: {step.title}
                        </h3>

                        <p className="mt-4 text-gray-700 leading-relaxed">
                        {step.description}
                        </p>
                    </div>

                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white text-center py-12">
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

export default ServiceTemplate;