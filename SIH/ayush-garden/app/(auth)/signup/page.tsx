'use client';

import Input from "@/app/components/Input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    try{
      axios.post('http://localhost:3500/auth/register', {
        name,
        email,
        password
      }).then((res) => {
        console.log(res.data)
      }).then(() => {
        router.push('/login')
      })
    }
    catch(err) {
      console.log(err)
    }}

  return (
    <div className="h-[46.25vw] bg-[url('https://images.unsplash.com/photo-1558521558-037f1cb027c5?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhcmRlbiUyMHJvYWR8ZW58MHx8MHx8fDA=')] bg-no-repeat bg-center bg-cover" >
      <div className="w-full h-full bg-neutral-700/80 flex flex-col items-center justify-center">
        <div className="w-[50vw] p-10 flex flex-col bg-black/60 gap-5">
          <h1 className="text-4xl font-bold pt-5">
            Sign Up
          </h1>
          <h2 className="text-lg text-neutral-300/50  pb-10">Welcome To Our Virtual Plant Garden </h2>
          <Input outline label="Name" type='text' value={name} setValue={setName} />
          <Input outline label="Email" type='email' value={email} setValue={setEmail} />
          <Input outline label="Password" type='password' value={password} setValue={setPassword} />
          <button className=" mx-auto w-[80%] text-2xl font-bold py-5 text-center bg-gradient-to-t from-lime-700 to-lime-300 rounded-full mt-5 hover:opacity-70" onClick={handleSignUp}>Sign Up</button>
          <Link className="w-full mt-4 text-center text-neutral-300/60" href={'login'}>Already Have an Accocunt? <span className="hover:brightness-150 hover:underline">Log in</span></Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp;