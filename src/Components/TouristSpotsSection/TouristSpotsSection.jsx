import { useEffect, useState } from "react";
import TouristSpot from "../TouristSpot/TouristSpot";

const TouristSpotsSection = () => {

      const [touristSpots, setTouristSpots] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5000/touristSpots')
                  .then(res => res.json())
                  .then(data => setTouristSpots(data))
      }, [])

      return (
            <div className="my-10 lg:my-20 py-10 lg:py-20 bg-[#f3f4f9]">
                  <div className="max-w-[1170px] mx-auto p-4 lg:p-0">

                        <h2 className="text-blue font-sans font-medium w-fit font-josefin text-4xl md:text-5xl mb-20">Popular Tour Packages!</h2>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                              {
                                    touristSpots?.map((touristSpot, idx) => <TouristSpot key={idx} touristSpot={touristSpot}></TouristSpot>)
                              }
                        </div>
                  </div>

            </div>
      );
};

export default TouristSpotsSection;