import React from 'react';

interface LabelProps {
  title: string | undefined;
  htmlFor?: string;
  className?: string;
  error?: boolean;
  required?:string
}

const FormLabel: React.FC<LabelProps> = ({
  title,
  htmlFor,
  error,
  required,
  className,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className={[
        'font-semibold text-base ',
        error ? 'text-red-500' : 'text-darkGrey',
        className,
      ].join(' ')}
    >
      {title}
      { required && <span className="text-red-500 font-bold">*</span>}
    </label>
  );
};

export default FormLabel;