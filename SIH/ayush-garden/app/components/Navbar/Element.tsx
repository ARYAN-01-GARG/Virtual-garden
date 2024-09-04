'use client';

interface ElementProps {
    label: string;
    outline?: boolean;
}


function Element({
    label,
    outline = false
    }: ElementProps) {
  return (
    <div className={`${outline ? "text-xl font-bold border border-white rounded-full p-3 text-center duration-500 hover:text-black hover:bg-white ml-4" : "text-md opacity-70 hover:opacity-100"}`}>{label}</div>
  )
}

export default Element;