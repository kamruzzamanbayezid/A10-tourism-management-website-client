import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Menubar from "../Components/Menubar/Menubar";

const MainLayout = () => {
      return (
            <div>
                  <Navbar />
                  <div className="flex lg:hidden">
                        <Menubar />
                  </div>
                  <Outlet />
            </div>
      );
};

export default MainLayout;