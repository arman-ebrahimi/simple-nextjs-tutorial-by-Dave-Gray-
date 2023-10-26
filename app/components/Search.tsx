'use client'

import {FormEvent} from "react";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Search(){
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch('');
        router.push(`/${search}/`)
    }
    return(
        <form className="w-80 flex f-col md:f-row justify-between" onSubmit={handleSubmit}>
            <input
                type="text"
                className="w-50 p-3 rounded-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
            />
            <button className="text-3xl">
                🚀
            </button>
        </form>
    )
}