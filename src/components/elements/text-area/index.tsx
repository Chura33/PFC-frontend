import React from 'react';

interface TextAreaProps {
  name?: string;
  id?:string;
  placeholder?: string;
  label: string;
  value?: string;
  onChange: any;
  ref?: string;
  textAreaName?: string;
  error?: boolean;
  message?: string;
  required?:boolean
  className?:string
}
const TextArea: React.FC<TextAreaProps> = ({
  required,
  placeholder,
  label,
  id,
  value,
  onChange,
  textAreaName,
  className,
  error,
  message,
}) => {
  return (
    <div>
      <div>
        <div className="mb-1">
        {label && <label className={`${
            error ? 'text-red-500' : null}
              font-semibold mb-3`}>{label || ""}</label>
        }
        </div>

        <textarea
          placeholder={placeholder}
          className={[
            error
              ? 'bg-[#fd3d3d0f] text-red-500'
              : 'bg-white focus:bg-white/90',
            'outline-none rounded-lg px-4 border py-4 w-full  h-[10.125rem] focus:bg-white/90 transition-all duration-200 ease-in-out',
            className
          ].join(' ')}
          value={value}
          onChange={onChange}
          name={textAreaName}
          required={required}
          id={id}
        ></textarea>
      </div>
      {error && <small className="text-red-500">{message}</small>}
    </div>
  );
};

export default TextArea;
