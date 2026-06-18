import ServiceTemplate from "../../components/ServiceTemplate";
import checkupImg from "../../assets/checkup.jpg";
import doctorImg from "../../assets/DrShivani.jpg";

import {
  FaSearch,
  FaTooth,
  FaXRay,
  FaShieldAlt,
  FaHeartbeat,
  FaUserCheck,
  FaUserMd,
  FaAward,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

import { MdHealthAndSafety } from "react-icons/md";

function Checkup() {

  const benefitIcons = [
    FaSearch,
    FaTooth,
    FaXRay,
    FaShieldAlt,
    FaHeartbeat,
    FaUserCheck,
  ];

  const whyIcons = [
    FaUserMd,
    MdHealthAndSafety,
    FaAward,
    FaXRay,
    FaShieldAlt,
    FaStar,
  ];

  return (
    <ServiceTemplate
      title="Dental Checkup & X-Rays"
      subtitle="Early Detection. Accurate Diagnosis. Better Dental Health."

      image={checkupImg}
      doctorImage={doctorImg}

      benefitIcons={benefitIcons}
      whyIcons={whyIcons}

      introduction={`At Dr. Shivani’s Dental & Aesthetic, Wakad – near Hinjewadi, Pune, a comprehensive dental checkup is the foundation of long-term oral health. Regular dental examinations help detect problems early—often before pain or visible symptoms begin—saving time, cost, and discomfort later.`}

      benefits={[
        "Early detection of dental problems",
        "Prevention of major dental issues",
        "Healthy gums and stronger teeth",
        "Accurate diagnosis using digital X-rays",
        "Suitable for children, adults and seniors",
        "Simple and less invasive treatment planning",
      ]}

      process={[
        {
          title: "Comprehensive Oral Examination",
          description:
            "Detailed assessment of teeth, gums, oral tissues, bite alignment, and jaw joints.",
        },
        {
          title: "Digital Dental X-Rays",
          description:
            "Safe low-radiation X-rays help identify hidden cavities, infections, bone loss, and impacted teeth.",
        },
        {
          title: "Diagnosis & Treatment Planning",
          description:
            "Findings are explained clearly and a personalized treatment plan is prepared.",
        },
        {
          title: "Preventive Guidance",
          description:
            "Oral hygiene instructions and preventive care recommendations are provided for long-term dental health.",
        },
      ]}

      whyChooseUs={[
        "Thorough dental examinations",
        "Advanced digital X-ray technology",
        "Honest and transparent advice",
        "Comfortable and hygienic clinic environment",
        "Patient-focused preventive care",
        "Trusted dental care near Hinjewadi",
      ]}
    />
  );
}

export default Checkup;