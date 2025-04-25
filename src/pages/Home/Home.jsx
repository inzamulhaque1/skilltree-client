import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";
import Status from "./Status";
import LanguageCategory from "../../components/LanguageCategory";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import InteractiveTools from "./InteractiveTools";
import PricingPlans from "./PricingPlans";
import ContactSection from "./ContactSection";
import Newsletter from "./Newsletter";

const Home = () => {
  const { theme } = useOutletContext();

  return (
    <div>
      <Banner theme={theme} />
      <LanguageCategory></LanguageCategory>
      <Status></Status>
      <PricingPlans></PricingPlans>
      <Testimonials></Testimonials>
      <InteractiveTools></InteractiveTools>
      <Newsletter></Newsletter>
      <ContactSection></ContactSection>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
