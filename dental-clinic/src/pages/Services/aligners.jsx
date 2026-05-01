import ServiceTemplate from "../../components/ServiceTemplate";
import alignerImg from "../../assets/aligners.jpg";
import scanImg from "../../assets/scanimage.jpg";
import alignerStepImg from "../../assets/alignerstepimage.jpg";
import smileImg from "../../assets/smileimage.jpg";

function Aligners() {
  return (
    <ServiceTemplate
      title="Aligners & Gum Surgery"
      subtitle="Straighten your teeth comfortably"
      image={alignerImg}
      description="Aligners are transparent trays used to straighten teeth without metal braces."
      benefits={[
        "Invisible appearance",
        "Comfortable fit",
        "Removable trays",
        "Easy cleaning",
      ]}
      steps={[
              {
                title: "3D Scan",
                description: "Digital scan for accurate planning",
                image: scanImg,
              },
              {
                title: "Custom Aligners",
                description: "Transparent trays are created",
                image: alignerStepImg,
              },
              {
                title: "Smile Transformation",
                description: "Get your perfect smile gradually",
                image: smileImg,
              },
            ]}
    />
  );
}

export default Aligners;