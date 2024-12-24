import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";
import Status from "./Status";
import LanguageCategory from "../../components/LanguageCategory";

const Home = () => {
  const { theme } = useOutletContext();

  return (
    <div>
      <Banner theme={theme} />
      {/* Add other sections for the Home page here */}
      <Status></Status>
      <LanguageCategory></LanguageCategory>
    </div>
  );
};

export default Home;
