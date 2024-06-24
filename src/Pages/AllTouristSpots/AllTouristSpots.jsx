import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import SingleTouristSpot from "./SingleTouristSpot";

const AllTouristSpots = () => {

      const loadedAllTouristSpots = useLoaderData();
      console.log(loadedAllTouristSpots);

      return (
            <div>
                  <div className="lg:my-10 mb-10">

                        <div className='relative'>
                              <div className='absolute inset-0' style={{
                                    backgroundImage: `url('https://i.ibb.co/Zxr0MQZ/2149153256.jpg')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: -1,
                                    width: '100%'
                              }}></div>
                              <div className='absolute inset-0 z-0'></div>
                              <div className='location relative z-10 home-slider-place flex flex-col justify-center items-center h-[70vh] md:h-[60vh]  mx-auto'>
                                    <h1 className='text-white text-center font-medium lg:text-6xl mb-4 animate__animated animate__zoomIn font-josefin'>Live Your Life Through Travel</h1>
                                    <span className='text-lg text-white flex items-center gap-2 mb-4'>
                                          <Link to='/'>Home</Link> <MdKeyboardDoubleArrowRight className="text-yellow text-2xl" /> All Tourist Spots

                                    </span>

                              </div>
                        </div>
                  </div>

                  <div className="max-w-[1170px] mx-auto">

                        <div className=''>
                              {
                                    loadedAllTouristSpots?.map((touristSpot, idx) => <SingleTouristSpot key={idx} touristSpot={touristSpot}></SingleTouristSpot>)
                              }
                        </div>
                  </div>

            </div>
      );
};

export default AllTouristSpots;