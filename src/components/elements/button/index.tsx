import React, { ReactNode } from 'react'
import BtnLoader from './loader'
import { BsThreeDotsVertical } from "react-icons/bs"
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  label?: string | ReactNode
  onClick?: () => void
  onMouseOver?: () => void
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  className?: string
  loadingIcon?: string
  btnIcon?: string
  variant?: string
  btnLeftIcon?: string
  btnRightIcon?: string
  url?:string 
  style?: { width: any }
  btnSmall? : boolean
  externalLeftIcon?:any
}
const Button: React.FC<ButtonProps> = ({
  type,
  label,
  onClick,
  onMouseOver,
  disabled,
  loading,
  className,
  btnLeftIcon,
  btnRightIcon,
  url,
  btnSmall,
  externalLeftIcon
  
}) => {
 
  return (
   
    <button
      type={type || 'button'}
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={loading || disabled}
      className={[
        `px-2 py-1 bg-primary relative rounded-3xl  hover:opacity-90 transition-all duration-500 ease-linear `,
        className,
      ].join(' ')}
      style={{
        cursor: loading || disabled ? 'not-allowed' : 'pointer',
        opacity: loading || disabled ? '.5' : '1',
        backgroundColor:
          loading || disabled ? '#0a413e' : '',
      }}
    >
       <a href={url && url}>
      {loading ? (
        <div className="flex flex-col justify-center items-center mx-auto ">
          <BtnLoader />
        </div>
      ) : (
        <div className={`${btnLeftIcon && 'gap-x-3'} flex items-center justify-center`}>
          {btnLeftIcon && (
            <div className={`${label ? '' : ''}`}>
              <img src={btnLeftIcon} width={20} height={20} className='object-contain' alt="icon" />
            </div>
          )}
          {
            externalLeftIcon && <BsThreeDotsVertical className='mr-1'/>
          }
          {label ? (
            <div
              className={`md:w-fit ${
                btnLeftIcon !== '' || btnRightIcon !== '' ? 'w-full' : null
              } `}
            >
              <p className={`text-center text-sm ${btnSmall ? 'md:text-xs' : 'md:text-base'} whitespace-nowrap capitalize`}>
                {label || ''}
              </p>
            </div>
          )
           : 
          (
            <p className="text-center text-sm md:text-base whitespace-nowrap capitalize">
             Click
          </p>
          )
        }

          {btnRightIcon && (
            <div className="ml-2">
              <img src={btnRightIcon} width={20} height={20} alt="icon" />
            </div>
          )}
        </div>
      )}
      </a>
    </button>
  )
}

export default Button
