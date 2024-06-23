import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Menubar = () => {
      const [menu, setMenu] = useState(false);
      const { user } = UseAuth();
      // console.log(user);

      const handleMenu = () => {
            setMenu(!menu)
      }

      return (
            <div className="bg-[#4C4C4C] w-full rounded mt-2 mb-8">
                  <div className="max-w-7xl mx-auto p-2">
                        <div className="flex justify-end items-center gap-2">
                              <div>
                                    <h3 onClick={handleMenu} className="cursor-pointer flex justify-end items-center text-[#FFFFFF] bg-black w-fit px-4 py-1 rounded-lg gap-2 text-xl text-end"><span>
                                          {menu ? <HiOutlineX></HiOutlineX>
                                                :
                                                <HiMenu></HiMenu>}
                                    </span>Menu</h3>
                              </div>


                              {
                                    user && <div className="dropdown dropdown-end">

                                          <div tabIndex={0} className="w-12 rounded-full">
                                                <img src={user.photoURL} className="rounded-full" />
                                          </div>
                                          <ul tabIndex={0} className="dropdown-content z-[1] p-3 shadow bg-base-100 rounded-box w-fit">
                                                <li><a className="text-blue mb-2">{user.displayName}</a></li>
                                                <li><a className="text-blue">{user.email}</a></li>
                                          </ul>
                                    </div>
                              }

                        </div>
                        <ul className={`${menu ? 'flex flex-col' : 'hidden'} text-[#FFF] font-medium mt-3`}>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/' ><li className="py-3 px-8 text-sm h-full ">HOME</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/addProducts' ><li className="py-3 px-8 text-sm h-full">Add Products</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/myCart' ><li className="py-3 px-8 text-sm h-full">My Cart</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/register' ><li className="py-3 px-8 text-sm h-full">Register</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/login' ><li className="py-3 px-8 text-sm h-full">Login</li></NavLink>
                        </ul>
                  </div>
            </div>
      );
};

export default Menubar;