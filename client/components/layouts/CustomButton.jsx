"use_client";

import Image from "next/image";

const Button = ({ title, containerStyles, handleClick, btnType, leftIcon }) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      
      {leftIcon && (
        <div className="relative w-6 h-6 mr-2">
          <Image
            src={leftIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default Button