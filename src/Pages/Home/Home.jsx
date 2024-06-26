import Banner from "../../Components/Banner/Banner";
import Countries from "../../Components/Countries/Countries";
import Slider from "../../Components/Slider/Slider";
import TourGuide from "../../Components/TourGuide/TourGuide";
import TouristSpotsSection from "../../Components/TouristSpotsSection/TouristSpotsSection";

const Home = () => {
      return (
            <div>
                  <Banner />
                  <Slider />
                  <TouristSpotsSection />
                  <Countries />
                  <TourGuide />
            </div>
      );
};

export default Home;