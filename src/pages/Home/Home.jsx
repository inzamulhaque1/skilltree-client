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
import SpecialOffers from "./SpecialOffers";
import ReferralProgram from "./ReferralProgram";
import CommunityForums from "./CommunityForums";

const Home = () => {
  const { theme } = useOutletContext();

  return (
    <div>
      <Banner theme={theme} />
      <LanguageCategory></LanguageCategory>
      <Status></Status>
      <PricingPlans></PricingPlans>
      <SpecialOffers></SpecialOffers>
      <Testimonials></Testimonials>
      <InteractiveTools></InteractiveTools>
      <Newsletter></Newsletter>
      <CommunityForums></CommunityForums>
      <ContactSection></ContactSection>
      <ReferralProgram></ReferralProgram>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
