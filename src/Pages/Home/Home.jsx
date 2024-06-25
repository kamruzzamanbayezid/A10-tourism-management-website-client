import Banner from "../../Components/Banner/Banner";
import Countries from "../../Components/Countries/Countries";
import Slider from "../../Components/Slider/Slider";
import TouristSpotsSection from "../../Components/TouristSpotsSection/TouristSpotsSection";

const Home = () => {
      return (
            <div>
                  <Banner />
                  <Slider />
                  <TouristSpotsSection />
                  <Countries />
            </div>
      );
};

export default Home;