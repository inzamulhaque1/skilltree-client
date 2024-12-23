import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";
import Status from "./Status";

const Home = () => {
  const { theme } = useOutletContext();

  return (
    <div>
      <Banner theme={theme} />
      {/* Add other sections for the Home page here */}
      <Status></Status>
    </div>
  );
};

export default Home;
