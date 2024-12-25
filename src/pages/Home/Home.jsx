import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";
import Status from "./Status";
import LanguageCategory from "../../components/LanguageCategory";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import InteractiveTools from "./InteractiveTools";

const Home = () => {
  const { theme } = useOutletContext();

  return (
    <div>
      <Banner theme={theme} />
      <LanguageCategory></LanguageCategory>
      <Status></Status>
      <Testimonials></Testimonials>
      <InteractiveTools></InteractiveTools>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;
