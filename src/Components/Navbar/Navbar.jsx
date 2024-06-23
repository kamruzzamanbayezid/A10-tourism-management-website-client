import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";

const Navbar = () => {

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

      return (
            <div className="lg:my-4">
                  <div>
                        <div className="flex justify-between items-center max-w-7xl mx-auto">
                              <div className="flex items-center">

                                    <div className="flex">
                                          <Link to='/'>
                                                <h2 className="text-blue font-medium text-3xl font-josefin">ExploreAsia</h2>
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
                                          <NavLink to="/all"
                                                className={({ isActive }) => isActive ? 'text-yellow' : 'text-blue'}
                                          >
                                                All Tourists Spot
                                          </NavLink>
                                    </li>
                                    <li className="hover:border-b hover:border-[#FFC800] text-base font-josefin transition delay-200">
                                          <NavLink to="/add"
                                                className={({ isActive }) => isActive ? 'text-yellow' : 'text-blue'}
                                          >
                                                Add Tourists Spot
                                          </NavLink>
                                    </li>
                                    <li className="hover:border-b hover:border-[#FFC800] text-base font-josefin transition delay-200">
                                          <NavLink to="/my"
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
                                          user && <div className="dropdown dropdown-end">

                                                <div tabIndex={0} className="">
                                                      <img src={user.photoURL} className="rounded-full w-12 h-12" />
                                                </div>
                                                <ul tabIndex={0} className="dropdown-content z-[1] p-3 shadow bg-base-100 rounded-box w-fit ">
                                                      <li><a className="text-blue mb-2">{user.displayName}</a></li>
                                                      <li><a className="text-blue">{user.email}</a></li>
                                                </ul>
                                          </div>
                                    }

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