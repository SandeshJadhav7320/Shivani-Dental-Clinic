import ServiceTemplate from "../../components/ServiceTemplate";
import kidsImg from "../../assets/kidsdentistry.jpg";
import doctorImg from "../../assets/DrShivani.jpg";

import {
  FaChild,
  FaSmile,
  FaTooth,
  FaHandsHelping,
  FaShieldAlt,
  FaStar,
  FaUserMd,
  FaAward,
} from "react-icons/fa";

import {
  MdHealthAndSafety,
  MdOutlineFamilyRestroom,
} from "react-icons/md";

function Kidsdentistry() {

  const benefitIcons = [
    FaChild,
    FaSmile,
    FaTooth,
    FaHandsHelping,
    MdOutlineFamilyRestroom,
    FaShieldAlt,
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
      title="Specialised Kids Dentistry"
      subtitle="Gentle Care for Little Smiles, Big Smiles for the Future"
      image={kidsImg}
      doctorImage={doctorImg}

      benefitIcons={benefitIcons}
      whyIcons={whyIcons}

      introduction={`A child’s first dental experiences shape their attitude toward oral health for life. At Dr. Shivani’s Dental & Aesthetic, we offer specialised kids dentistry focused on gentle care, patience, and trust—so every child feels safe, comfortable, and confident in the dental chair.

We understand that children are not just small adults. Their dental needs, emotional comfort, and developmental stages are unique. Our approach is designed to make dental visits a positive and stress-free experience for both children and parents.`}

      benefits={[
        "Promotes healthy chewing and nutrition",
        "Supports clear speech development",
        "Guides proper eruption of permanent teeth",
        "Encourages healthy oral habits early",
        "Prevents cavities through early detection",
        "Builds confidence and lifelong dental comfort",
      ]}

      process={[
        {
          title: "Child-Friendly Consultation",
          description:
            "We create a comfortable environment and gently examine your child’s teeth, gums, and oral development.",
        },
        {
          title: "Preventive & Early Care",
          description:
            "Routine checkups, cleanings, fluoride applications, and sealants help prevent future dental issues.",
        },
        {
          title: "Treatment & Monitoring",
          description:
            "Cavities, dental injuries, and growth concerns are treated using gentle and minimally invasive techniques.",
        },
        {
          title: "Long-Term Smile Development",
          description:
            "Regular follow-ups and orthodontic guidance ensure healthy growth and confident smiles.",
        },
      ]}

      whyChooseUs={[
        "Gentle and child-friendly approach",
        "Safe and comfortable treatment environment",
        "Focus on preventive dental care",
        "Early diagnosis and growth monitoring",
        "Parent education and guidance",
        "Positive experiences that build confidence",
      ]}
    />
  );
}

export default Kidsdentistry;