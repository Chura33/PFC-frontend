import { ComponentProps, JSXElementConstructor, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

export interface TextInputI {
  label?: string;
  errMessage?: string;
  err?: boolean;
  type?: string;
  name: string;
  placeHolder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
  props?: ComponentProps<JSXElementConstructor<any>>;
  disabled?: boolean;
  maxLength?: number;
}
const TextInput = ({
  err,
  errMessage,
  label,
  type,
  name,
  placeHolder,
  onChange,
  value,
  className,
  maxLength,
  props,
}: TextInputI) => {
  const [isDisclose, setIsDisclose] = useState(false);
  return (
    <div className="flex flex-col mt-2 mb-3">
      {label && <label className="font-semibold mb-1">{label}</label>}
      <div
        className={`${
          type === "password" &&
          `flex items-center pr-2 justify-between ${
            err
              ? "border  border-red-500 "
              : "border border-[#EEEEEE] focus-within:border-2 focus-within:border-[#0A7B7B]"
          } `
        } rounded-xl ${
          name === "phoneNumber" || name === "phone_number" &&
          "flex items-center border border-[#EEEEEE] focus-within:border-2 focus-within:border-[#0A7B7B]"
        } `}
      >
        {name === "phoneNumber" || name === "phone_number" && <p className="px-2 text-grey-200">+234</p>}
        <input
          type={isDisclose ? "text" : type || "text"}
          name={name}
          className={[
            `py-2 outline-none px-2 bg-white rounded-xl ${
              type !== "password" ||
              (name === "phoneNumber" || name === "phone_number" &&
                `focus-within:border-2 focus-within:border-[#0A7B7B] `)
            } w-full ${name !== "phoneNumber" && name !== "phone_number"  && " border-[#EEEEEE]"} `,
            className,
            err
              ? "border border-red-500"
              : " hover:border-[hsl(0, 0%, 80%)] border-[hsl(0, 0%, 70%)]",
          ].join()}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          {...props}
        />
        {type === "password" && (
          <div
            className="cursor-pointer pl-1"
            onClick={() => setIsDisclose(!isDisclose)}
          >
            {isDisclose ? <FaEyeSlash /> : <FiEye />}
          </div>
        )}
      </div>
      {err && <p className={`${err ? 'h-auto' :'h-0'} text-red-500 transition-all ease-in-out duration-500`}> {errMessage} </p>}
    </div>
  );
};

export default TextInput;
