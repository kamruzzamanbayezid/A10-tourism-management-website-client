import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import SpecificCountry from "./SpecificCountry";

const SpecificCountries = () => {

      const loadedSpecificCountry = useLoaderData();

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
                                          <Link to='/'>Home</Link> <MdKeyboardDoubleArrowRight className="text-yellow text-2xl" /> Explore Beauty Of World

                                    </span>

                              </div>
                        </div>
                  </div>

                  {
                        loadedSpecificCountry?.length === 0 ?
                              <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
                                    <img className="h-full" src="https://i.ibb.co/3FVgSYq/3009287.jpg" alt="" />
                              </div>
                              :
                              <div className="max-w-[1170px] mx-auto">

                                    <div className=''>
                                          {
                                                loadedSpecificCountry?.map((specificCountry, idx) => <SpecificCountry
                                                      key={idx}
                                                      specificCountry={specificCountry}
                                                ></SpecificCountry>)
                                          }
                                    </div>
                              </div>
                  }

            </div>
      );
};

export default SpecificCountries;