'use client';

import { FaSearch } from "react-icons/fa";

interface InputProps {
    label?: string;
    type: string;
    outline?: boolean;
    value: string;
    setValue: (value: string) => void;
}

const Input = ({
    label,
    type = "text",
    outline =false, 
    value ,
    setValue
}: InputProps) => {
  return (
    <div className=" relative w-[45vw] cursor-pointer mx-auto"> 
        <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`${label ? "" : "Search our Herb Here..."}`}
        className={`${outline ? "peer px-10 py-5 w-full text-white text-lg bg-gray-500/70 border-4 border-lime-500 rounded-full ": "w-full px-10 py-5 border-4 border-sky-700 rounded-full shadow-xl bg-opacity-60 bg-neutral-700 text-white text-xl" }`}
        />
        
        {!outline && <div>
            <FaSearch size={30} className="absolute top-1/2 right-5 transform -translate-y-1/2 text-sky-400 "/>
        </div> }
        {label && <label className="
          text-white/70 
          text-lg
          absolute
          duration-150
          transform
          -translate-y-3
          top-5
          left-8
          z-10
          origin-[0]
          peer-placeholder-shown:scale-110
          peer-placeholder-shown:translate-y-1
          peer-focus:scale-90
          peer-focus:top-5
          peer-focus:-translate-y-4">{label}</label>}
    </div>
    
  )
}

export default Input