import { useOutletContext } from "react-router-dom";
import Banner from "./Banner";

const Home = () => {
  const { theme } = useOutletContext();

  return (
    <div>
      <Banner theme={theme} />
      {/* Add other sections for the Home page here */}
    </div>
  );
};

export default Home;
