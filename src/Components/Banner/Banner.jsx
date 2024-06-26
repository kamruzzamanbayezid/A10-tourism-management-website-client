
const Banner = () => {
      return (
            <div className="max-w-7xl mx-auto lg:h-[500px] flex items-center flex-col gap-4 justify-center w-[90%] md:w-[750px] text-center">
                  <h1 className="text-blue font-bold text-3xl md:text-6xl font-josefin lg:leading-[70px] relative z-20">Lifelong memories just a few seconds away</h1>
                  <span className="-mt-8 md:-mt-12 mb-4 h-2 md:h-3 w-[250px] md:w-[500px] common-bg relative z-0"></span>
                  <p className="text-blue md:text-xl mb-5">Lets start your journey with us, your dream will come true.</p>

                  <button className="px-7 md:px-10 py-4 md:py-5 relative rounded group overflow-hidden font-medium  inline-block bg-[#00095E] text-white">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 common-bg group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white">Explores Destinations</span>
                  </button>
            </div>
      );
};

export default Banner;