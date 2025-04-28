import React, { ReactNode} from "react";
import DashboardNavbar from "../../widgets/DashboardNavbar";
import DashboardSidebar from "../../widgets/DashboardSidebar";


interface LayoutI {
  children: ReactNode;
}
const DashboardLayout: React.FC<LayoutI> = ({ children }) => {
  return (
    <div className="flex flex-row">
      <div className="hidden lg:block md:w-[260px] bg-white max-h-screen no-modal-scroll-track ">
        <DashboardSidebar />
      </div>
      <div className="group w-full relative md:flex-1 h-screen overflow-x-hidden overflow-y-scroll bg-[#c4c1c1]">
        <div className="sticky top-0 z-30">
        {/* <DashboardNavbar openSideNav={() => setOpenSideNav(true)} /> */}
        <DashboardNavbar/>
        </div>
        <div className="pb-3 md:pb-5 pl-4 pr-4 md:pr-8 pt-5 ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
