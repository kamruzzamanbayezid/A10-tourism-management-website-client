
// import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
// import { AuthContent } from "../../Provider/AuthProvider/AuthProvider";
// import toast from "react-hot-toast";

const Navbar = () => {

      // const { user, logOut } = useContext(AuthContent);

      // const handleLOgOut = () => {
      //       logOut()
      //             .then(() => {
      //                   toast.success('SUccessfully Logged Out')
      //             })
      //             .catch(error => {
      //                   toast.error(error.message)
      //             })
      // }

      return (
            <div className="lg:my-4">
                  <div>
                        <div className="flex justify-between items-center max-w-7xl mx-auto">
                              <div className="flex items-center">

                                    <div className="flex">
                                          <h2 className="text-blue font-medium text-3xl font-josefin">ExploreAsia</h2>
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
                                    <li className="hover:border-b hover:border-[#FFC800] text-base font-josefin transition delay-200">
                                          <NavLink to="/login"
                                                className={({ isActive }) => isActive ? 'text-yellow' : 'text-blue'}
                                          >
                                                Login
                                          </NavLink>
                                    </li>
                                    <li className="hover:border-b hover:border-[#FFC800] text-base font-josefin transition delay-200">
                                          <NavLink to="/register"
                                                className={({ isActive }) => isActive ? 'text-yellow' : 'text-blue'}
                                          >
                                                Register
                                          </NavLink>
                                    </li>

                                    <li className="common-bg flex items-center gap-2 rounded px-6 py-3 text-base font-josefin">
                                          <FaPhoneAlt />
                                          <span>+8807882888860</span>
                                    </li>

                                    {/* {
                                          !user && <NavLink className={({ isActive }) => isActive ? 'bg-[#E7AB3C]' : ''} to='/register' ><li className="py-4 px-8  border border-[#4C4C4C] h-full">Register</li></NavLink>
                                    } */}

                                    {/* {
                                          user ?
                                                <li onClick={handleLOgOut} className="py-4 px-8 cursor-pointer  border border-[#4C4C4C] h-full">Log out</li>
                                                :
                                                < NavLink className={({ isActive }) => isActive ? 'bg-[#E7AB3C]' : ''} to='/login' ><li className="py-4 px-8  border border-[#4C4C4C] h-full">Login</li></NavLink>


                                    } */}
                              </ul>
                        </div>

                  </div>

            </div >
      );
};

export default Navbar;