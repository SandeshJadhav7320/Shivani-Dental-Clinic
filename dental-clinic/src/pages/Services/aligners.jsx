import ServiceTemplate from "../../components/ServiceTemplate";
import alignerImg from "../../assets/aligners.jpg";
import doctorImg from "../../assets/DrShivani.jpg";
import {
  FaMagic,
  FaSmile,
  FaCalendarCheck,
  FaTooth,
  FaCheckCircle,
  FaHeartbeat,
  FaUserMd,
  FaAward,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

import { MdHealthAndSafety } from "react-icons/md";
import { FaTeeth } from "react-icons/fa";

function Aligners() {

  const benefitIcons = [
  FaMagic,
  FaSmile,
  FaCalendarCheck,
  FaTooth,
  FaCheckCircle,
  FaHeartbeat,
];

const whyIcons = [
  FaUserMd,
  MdHealthAndSafety,
  FaAward,
  FaTeeth,
  FaShieldAlt,
  FaStar,
];
  return (
    <ServiceTemplate
  title="Aligners & Gum Surgery"
  subtitle="Healthy Gums. Beautiful Smile."
  image={alignerImg}
  doctorImage={doctorImg}

  benefitIcons={benefitIcons}
  whyIcons={whyIcons}

  introduction={`A healthy, confident smile depends on both properly aligned teeth and healthy gums.
  At Dr. Shivani's Dental & Aesthetic, we offer advanced clear aligners and gum surgery
  treatments designed to improve aesthetics, comfort, and long-term oral health.`}

  benefits={[
    "Nearly invisible appearance",
    "Comfortable fit",
    "Removable for eating and brushing",
    "Better oral hygiene",
    "Fewer clinic visits",
    "Predictable tooth movement",
  ]}

  process={[
    {
      title: "Consultation & Digital Planning",
      description:
        "Detailed examination, digital scans, and X-rays to create a customized treatment plan.",
    },
    {
      title: "Custom Aligner Trays",
      description:
        "A series of transparent aligners are fabricated specifically for your teeth.",
    },
    {
      title: "Gradual Tooth Movement",
      description:
        "Aligners gently move teeth into ideal positions over time.",
    },
    {
      title: "Retention Phase",
      description:
        "Retainers help maintain your beautiful new smile.",
    },
  ]}

  whyChooseUs={[
    "Honest treatment recommendations",
    "Advanced digital planning",
    "Evidence-based dental care",
    "Personalized treatment plans",
    "Comfort-focused procedures",
    "Long-term oral health outcomes",
  ]}
/>
  );
}

export default Aligners;