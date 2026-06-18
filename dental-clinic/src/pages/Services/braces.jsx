import ServiceTemplate from "../../components/ServiceTemplate";
import bracesImg from "../../assets/braces.jpg";
import doctorImg from "../../assets/DrShivani.jpg";

import {
  FaSmile,
  FaTooth,
  FaTeeth,
  FaChild,
  FaCommentMedical,
  FaShieldAlt,
  FaUserMd,
  FaAward,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

import { MdHealthAndSafety } from "react-icons/md";

function Braces() {

  const benefitIcons = [
    FaSmile,
    FaTooth,
    FaCommentMedical,
    FaShieldAlt,
    FaTeeth,
    FaCheckCircle,
  ];

  const whyIcons = [
    FaUserMd,
    MdHealthAndSafety,
    FaAward,
    FaChild,
    FaShieldAlt,
    FaStar,
  ];

  return (
    <ServiceTemplate
      title="Orthodontics (Braces)"
      subtitle="Straightening Smiles. Improving Function. Building Confidence."
      image={bracesImg}
      doctorImage={doctorImg}

      benefitIcons={benefitIcons}
      whyIcons={whyIcons}

      introduction={`A well-aligned smile is not just about aesthetics—it plays a vital role in oral health, speech, chewing efficiency, and long-term dental stability. At Dr. Shivani’s Dental & Aesthetic, we provide comprehensive orthodontic treatments for children, teenagers, and adults, helping patients achieve healthier and more confident smiles through personalized and evidence-based care.`}

      benefits={[
        "Improved smile aesthetics and confidence",
        "Better chewing efficiency and speech",
        "Easier oral hygiene maintenance",
        "Reduced risk of cavities and gum disease",
        "Balanced bite and jaw comfort",
        "Long-term dental stability",
      ]}

      process={[
        {
          title: "Initial Consultation & Evaluation",
          description:
            "Detailed examination, digital scans, dental impressions, and X-rays to assess tooth alignment and jaw position.",
        },
        {
          title: "Customized Treatment Plan",
          description:
            "A personalized orthodontic treatment plan is created based on your dental condition, age, and lifestyle.",
        },
        {
          title: "Active Treatment Phase",
          description:
            "Braces or aligners are placed and adjusted regularly to guide teeth into ideal positions.",
        },
        {
          title: "Retention Phase",
          description:
            "Retainers are provided after treatment to maintain alignment and prevent relapse.",
        },
      ]}

      whyChooseUs={[
        "Personalized orthodontic treatment plans",
        "Advanced diagnostic technology",
        "Evidence-based treatment approach",
        "Orthodontic care for children and adults",
        "Comfort-focused patient experience",
        "Long-lasting and predictable results",
      ]}
    />
  );
}

export default Braces;