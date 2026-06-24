import ServiceTemplate from "../../components/ServiceTemplate";
import implantImg from "../../assets/implants.jpg";
import doctorImg from "../../assets/DrShivani.jpg";

import {
  FaTooth,
  FaSmile,
  FaCheckCircle,
  FaHeartbeat,
  FaShieldAlt,
  FaUserMd,
  FaAward,
  FaStar,
} from "react-icons/fa";

import {
  MdHealthAndSafety,
  MdOutlineVerified,
} from "react-icons/md";

function Implants() {

  const benefitIcons = [
    FaTooth,
    FaSmile,
    FaCheckCircle,
    FaHeartbeat,
    MdOutlineVerified,
    FaShieldAlt,
  ];

  const whyIcons = [
    FaUserMd,
    MdHealthAndSafety,
    FaAward,
    FaTooth,
    FaShieldAlt,
    FaStar,
  ];

  return (
    <ServiceTemplate
      title="Dental Implants"
      subtitle="A Permanent, Natural-Looking Solution for Missing Teeth"
      image={implantImg}
      doctorImage={doctorImg}

      benefitIcons={benefitIcons}
      whyIcons={whyIcons}

      introduction={`Losing a tooth can affect much more than just your appearance. It can impact how you eat, speak, smile, and even how confident you feel in everyday life. At Dr. Shivani’s Dental & Aesthetic, we offer advanced dental implant treatments designed to restore not just missing teeth, but comfort, function, and confidence—naturally and permanently.

Dental implants are considered the gold standard for tooth replacement. They closely mimic natural teeth in look, feel, and function, making them one of the most reliable and long-lasting solutions available in modern dentistry.`}

      benefits={[
        "Natural appearance and feel",
        "Long-lasting and durable solution",
        "Preserves jawbone and facial structure",
        "No damage to neighboring teeth",
        "Improved chewing efficiency and speech",
        "Enhanced comfort and confidence",
      ]}

      process={[
        {
          title: "Comprehensive Consultation & Planning",
          description:
            "Detailed examination, digital X-rays, and assessment of bone quality, gum health, bite alignment, and oral condition.",
        },
        {
          title: "Implant Placement",
          description:
            "A titanium implant is precisely placed into the jawbone using a minimally invasive surgical procedure.",
        },
        {
          title: "Healing & Integration",
          description:
            "The implant naturally fuses with the jawbone through osseointegration, creating a strong foundation.",
        },
        {
          title: "Final Restoration",
          description:
            "A custom-made crown, bridge, or prosthesis is attached to restore appearance and function.",
        },
      ]}

      whyChooseUs={[
        "Ethical and patient-focused dentistry",
        "Advanced diagnostic and planning technology",
        "Evidence-based implant procedures",
        "High-quality implant systems",
        "Strict sterilization and safety protocols",
        "Long-term functional and aesthetic results",
      ]}
    />
  );
}

export default Implants;