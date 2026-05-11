import ServiceTemplate from "../../components/ServiceTemplate";
import alignerImg from "../../assets/aligners.jpg";
import scanImg from "../../assets/scanimage.jpg";
import alignerStepImg from "../../assets/alignerstepimage.jpg";
import smileImg from "../../assets/smileimage.jpg";

function Crowns() {
  return (
    <ServiceTemplate
      title="Crowns & Bridges"
      subtitle="Restore damaged or missing teeth with confidence"
      image={alignerImg}
      description="Crowns and bridges are advanced dental restorations used to
      repair damaged teeth and replace missing teeth. They improve
      chewing ability, appearance, and overall oral health while
      giving you a natural-looking smile."
      benefits={[
        "Natural tooth appearance",
        "Improves chewing and speaking",
        "Long-lasting solution",
        "Protects weak teeth",
        "Restores smile confidence",
      ]}
      steps={[
              {
                title: "Tooth Preparation",
                description: "The damaged tooth is reshaped carefully for crown placement.",
                image: scanImg,
              },
              {
                title: "Crown / Bridge Fitting",
                description: "Custom-made crowns or bridges are fitted comfortably.",
                image: alignerStepImg,
              },
              {
                title: "Beautiful Smile",
                description: "Enjoy a stronger bite and natural-looking confident smile.",
                image: smileImg,
              },
            ]}
    />
  );
}

export default Crowns;