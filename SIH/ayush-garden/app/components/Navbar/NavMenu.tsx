'use client';

import { useState } from "react";
import Element from "./Element"
import Logo from "./Logo"
import { useRouter } from "next/navigation";

function NavMenu() {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleAuth = (value : string) => {
    router.push(`/${value}`);
  }

  const model = (
    <div className="absolute -left-[100%] top-10 w-[10vw] flex flex-col items-center bg-white/70 rounded-lg text-neutral-500 px-3">
      <div className="w-full py-3 text-center text-md border-b border-neutral-500 hover:text-neutral-700" onClick={() => handleAuth("signup")}>
        Sign Up
      </div>
      <div className="w-full py-3 text-center text-md border-b border-neutral-400 hover:text-neutral-700" onClick={() => handleAuth("login")}>
        Log In
      </div>
      
    </div>
  )


  const showModal = () => {
    setModalVisible((value) => !value);
  }
  return (
    <div className="p-10 flex flex-row justify-between items-center mx-10">
      <Logo/>
      <div className="flex flex-row gap-6 justify-center items-center cursor-pointer">
        <div onClick={showModal} className="relative">
          <Element label="Accounts" />
          {modalVisible && model}
        </div>
        <Element label="Garden" />
        <Element label="Build" />
        <Element label="About" />
        <Element label="Contact Us" />
        <Element label="Virtual Tour" outline/>
      </div>
    </div>
  )
}

export default NavMenu