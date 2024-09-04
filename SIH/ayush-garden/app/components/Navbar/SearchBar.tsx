'use client';

import { useCallback, useState } from "react";
import Input from "../Input"
import { useRouter } from "next/navigation";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();
    const handleSearch = useCallback(() => {
        router.push(`/search/${search.toString()}`);
    }, [router , search]);
  return (
    <div className="w-full flex flex-col justify-start items-center gap-10 mt-24">
        <h1 className="text-center text-7xl max-w-[60vw] font-bold">
            The <span className="text-red-500">3D Virtual</span> Medicinal and Herbal Garden
        </h1>
        <p className="text-4xl text-center max-w-[80vw]">To Create a Virtual Experience of Herbal and medicinal plant</p>
        <Input type="text" value={search} setValue={setSearch} />
        <button className="bg-gradient-to-r from-green-700 to-green-400 py-5 w-[15vw] text-center text-2xl rounded-full hover:opacity-80" onClick={handleSearch}>
            Search Herb
        </button>
    </div>
  )
}

export default SearchBar;