import { ReactNode } from "react";

export interface StaticModalI {
  children: ReactNode;
  className?: string;
  customWidth?: string;
  open?:boolean;
}
const StaticModal: React.FC<StaticModalI> = ({ children,className,customWidth }) => {
  return (
    <section className={`h-full w-screen bg-opacity-40 bg-black/50 z-50  fixed top-0 left-0  px-6 md:px-10 pointer-events-auto transition-all ease-in-out duration-700`}>
      <div style={{ maxHeight: 'calc(100vh - 4rem)' }} className="min-h-screen flex flex-col md:items-center justify-center  md:p-3 no-modal-scroll-track">  
       <div className=" ">
       <div
          className={`w-full ${customWidth ? customWidth : 'md:w-[32rem] md:max-w-4xl md:mx-auto'}  ${className} relative bg-white shadow-sm shadow-[#f2f2f2] rounded-3xl px-4 md:px-8 py-6  transition-all ease-in-out duration-500`}
        >
          {children}
        </div>
       </div>
      </div>
    </section>
  );
};



export default StaticModal;

