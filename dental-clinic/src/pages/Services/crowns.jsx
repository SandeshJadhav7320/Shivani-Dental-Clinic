import ServiceTemplate from "../../components/ServiceTemplate";
import crownsImg from "../../assets/crowns.jpg";
import doctorImg from "../../assets/DrShivani.jpg";

import {
  FaTooth,
  FaSmile,
  FaShieldAlt,
  FaCheckCircle,
  FaTeeth,
  FaUserMd,
  FaAward,
  FaStar,
} from "react-icons/fa";

import {
  MdHealthAndSafety,
  MdOutlineMedicalServices,
} from "react-icons/md";

function Crowns() {
  const benefitIcons = [
    FaTooth,
    FaSmile,
    FaShieldAlt,
    FaCheckCircle,
    FaTeeth,
    FaAward,
  ];

  const whyIcons = [
    FaUserMd,
    MdHealthAndSafety,
    FaAward,
    MdOutlineMedicalServices,
    FaShieldAlt,
    FaStar,
  ];

  return (
    <ServiceTemplate
      title="Crowns & Bridges"
      subtitle="Restore Strength, Function & Confidence"
      image={crownsImg}
      doctorImage={doctorImg}
      benefitIcons={benefitIcons}
      whyIcons={whyIcons}

      introduction={`Damaged, weakened, or missing teeth can affect your ability to chew comfortably, speak clearly, and smile with confidence. At Dr. Shivani’s Dental & Aesthetic, we offer custom-made dental crowns and bridges designed to restore the strength, appearance, and function of your teeth while maintaining a natural, balanced smile.

Our approach focuses on precision, aesthetics, and long-term durability, ensuring results that feel comfortable and look natural.`}

      benefits={[
        "Restore chewing efficiency and speech",
        "Improve appearance and smile harmony",
        "Protect weakened teeth",
        "Prevent shifting of surrounding teeth",
        "Long-lasting fixed solution",
        "Boost confidence and oral health",
      ]}

      process={[
        {
          title: "Evaluation & Planning",
          description:
            "Detailed examination of teeth, gums, bite, and X-rays to determine the best crown or bridge solution.",
        },
        {
          title: "Tooth Preparation",
          description:
            "The affected tooth is carefully shaped to ensure accurate fitting and comfort.",
        },
        {
          title: "Impressions & Temporary Restoration",
          description:
            "Digital scans or impressions are taken, and a temporary restoration is provided.",
        },
        {
          title: "Final Placement",
          description:
            "Your custom-made crown or bridge is fitted, adjusted, and cemented securely.",
        },
      ]}

      whyChooseUs={[
        "Honest treatment recommendations",
        "Advanced digital diagnostics",
        "Natural-looking restorations",
        "Precision-driven treatment planning",
        "Comfort-focused dental care",
        "Long-term durable results",
      ]}
    />
  );
}

export default Crowns;