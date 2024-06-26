import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Navbar = () => {

      const [theme, setTheme] = useState('light');
      const { user, logOut } = UseAuth();

      const handleLOgOut = () => {
            logOut()
                  .then(() => {
                        toast.success('SUccessfully Logged Out')
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      useEffect(() => {
            localStorage.setItem('theme', theme);
            const localTheme = localStorage.getItem('theme');

            document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])

      // toggle event handler
      const handleToggleTheme = (e) => {
            console.log(e.target.checked);
            if (e.target.checked) {
                  setTheme('dark')
            }
            else {
                  setTheme('light')
            }
      }

      return (
            <div className="lg:my-4 px-4 lg:px-0 pt-4 lg:pt-0">
                  <div>
                        <div className="flex justify-between items-center max-w-7xl mx-auto">
                              <div className="flex items-center">

                                    <div className="flex">
                                          <Link to='/'>
                                                <h2 className="text-blue font-medium text-3xl font-josefin dark:text-white">ExploreAsia</h2>
                                          </Link>
                                    </div>
                              </div>

                              <ul className="text-[#FFF] font-medium hidden lg:flex gap-6 items-center">
                                    <li className="hover:border-b hover:border-[#FFC800] text-base font-josefin transition delay-200">
                                          <NavLink to="/"
                                                className={({ isActive }) => isActive ? 'text-yellow' : 'text-blue'}
                                          >
                                                Home
                                          </NavLink>
                                    </li>
                                    <li className="hover:border-b hover:border-[#FFC800] text-base font-josefin transition delay-200">
                                          <NavLink to="/allTouristSpots"
                                                className={({ isActive }) => isActive ? 'text-yellow' : 'text-blue'}
                                          >
                                                All Tourists Spot
                                          </NavLink>
                                    </li>
                                    <li className="hover:border-b hover:border-[#FFC800] text-base font-josefin transition delay-200">
                                          <NavLink to="/addTouristSpot"
                                                className={({ isActive }) => isActive ? 'text-yellow' : 'text-blue'}
                                          >
                                                Add Tourists Spot
                                          </NavLink>
                                    </li>
                                    <li className="hover:border-b hover:border-[#FFC800] text-base font-josefin transition delay-200">
                                          <NavLink to="/myList"
                                                className={({ isActive }) => isActive ? 'text-yellow' : 'text-blue'}
                                          >
                                                My List
                                          </NavLink>
                                    </li>

                                    {
                                          user ?
                                                <button onClick={handleLOgOut} className="px-5 py-2.5 relative rounded group overflow-hidden font-medium  inline-block bg-[#00095E] text-white">
                                                      <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 common-bg group-hover:h-full opacity-90"></span>
                                                      <span className="relative group-hover:text-white">Log Out</span>
                                                </button>
                                                :
                                                <li className="hover:border-b hover:border-[#FFC800] text-base font-josefin transition delay-200">
                                                      <NavLink to="/login"
                                                            className={({ isActive }) => isActive ? 'text-yellow' : 'text-blue'}
                                                      >
                                                            Login
                                                      </NavLink>
                                                </li>


                                    }
                                    {
                                          !user && <li className="hover:border-b hover:border-[#FFC800] text-base font-josefin transition delay-200">
                                                <NavLink to="/register"
                                                      className={({ isActive }) => isActive ? 'text-yellow' : 'text-blue'}
                                                >
                                                      Register
                                                </NavLink>
                                          </li>
                                    }

                                    {
                                          user && <div className=" tooltip tooltip-bottom dropdown-end" data-tip={user?.displayName}>

                                                <div>
                                                      <img src={user.photoURL} className="rounded-full w-12 h-12" />
                                                </div>
                                          </div>
                                    }

                                    {/* Toggler */}
                                    <input onChange={handleToggleTheme} type="checkbox" className="toggle toggle-warning" />

                                    <li className="common-bg flex items-center gap-2 rounded px-6 py-3 text-base font-josefin">
                                          <FaPhoneAlt />
                                          <span>+8807882888860</span>
                                    </li>
                              </ul>
                        </div>

                  </div>

            </div >
      );
};

export default Navbar;