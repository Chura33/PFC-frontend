
import { successicon } from "../../../assets";
import Button from "../button";
import StaticModal from "../transitions/static-modal";
import { FaQuestion, FaTimes } from "react-icons/fa";
import TextArea from "../text-area";

import { useState } from "react";
export interface ConfirmationModalI {
  title: string;
  desc: string | TrustedHTML;
  btnLabel: string;
  handleClick: () => void;
  handle2Click?: () => void;
  enableTwoBtn?: boolean;
  btn2Label?: string;
  btn2Style?: string;
  icon?:string,
  iconColor?:string
  showMessageArea?:boolean
  value?:string
  onChange?: (val:string) => void 
  studentStatus?:string
  droppedImage?:string 
  setDroppedImage?:any
  setDocumentType?:any
  documentType?:any
  onClose?:any
}
const ConfirmationModal: React.FC<ConfirmationModalI> = ({
  value,
  onChange,
  onClose,
  documentType,
  title,
  desc,
  btnLabel,
  btn2Style,
  handleClick,
  handle2Click,
  enableTwoBtn,
  btn2Label,
  iconColor,
  icon,
  showMessageArea,
  studentStatus
}) => {
  const[imageName,setImageName] = useState('')
  

  return (
    <StaticModal className="w-full md:w-[700px] md:max-h-screen  flex flex-col justify-center">
      <section className=" no-modal-scroll-track max-h-[80vh]">
      {
        onClose && <div className="flex justify-end items-end ">
        <div onClick={onClose} className="p-3 bg-[grey]/5 size-10 cursor-pointer flex flex-col justify-center items-center rounded-full">
        <FaTimes className="text-red-500"/>
        </div>
      </div>
      }
      <section className="flex flex-col gap-y-8 justify-center items-center ">
        
        <div className={`flex flex-col justify-center p-3 items-center w-28 h-28 rounded-full ${iconColor ? iconColor : 'bg-[#f2f4f5]'}`}>
          {
            icon ? <img src={icon ? icon : successicon} alt="success icon" className="w-16 h-16"/> : <FaQuestion className="text-red-500" size={29}/>
          }
        </div>
        <div>
          <h2 className="text-center text-xl font-semibold text-[#042B2D]">
            {title}
          </h2>
          <p className="text-center text-sm max-w-[20rem] mt-3 text-grey-200"  dangerouslySetInnerHTML={{ __html: desc }}/>
            {/* {desc} */}
          
        </div>
        
      </section>
      {
          showMessageArea && <TextArea label="" placeholder="Enter reason for unapproval" value={value} onChange={onChange}/>
        }

      <div className="py-4">
       
      </div>

      {enableTwoBtn ? (
        <div className="mt-8 grid grid-cols-2 items-center gap-x-3">
           
         <div onClick={() => setImageName('')}>
         <Button
            onClick={handleClick}
            label={btnLabel}
            className="w-full py-2 rounded-[10px] text-black bg-white/20 shadow-[grey] shadow-2xl "
          />
         </div>
           <Button
           disabled={(value?.length as number) < 10 && showMessageArea || (imageName?.length as number < 2 && studentStatus === 'name-approval-required') || (documentType?.length as number  < 2) }
            onClick={handle2Click}
            label={btn2Label}
            className={`w-full py-2 rounded-[10px] ${btn2Style} `}
          />
        
        </div>
      ) : (
        <div className="mt-8">
          <Button
            onClick={handleClick}
            label={btnLabel}
            className="w-full py-2 bg-[#042B2D] text-white"
          />
        </div>
      )}
      </section>
    </StaticModal>
  );
};

export default ConfirmationModal;
