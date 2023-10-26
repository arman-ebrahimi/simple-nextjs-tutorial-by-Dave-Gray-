import Link from "next/link";
import Search from "./Search";

export default function Navbar(){
    return(
        <nav className="bg-slate-600 flex flex-col md:flex-row md:justify-between items-center p-4 drop-shadow-xl sticky top-0">
            <h1 className="text-3xl text-white font-bold grid place-content-center mb-2 md:mb-0">
                <Link href="/">WikiRocket!</Link>
            </h1>
            <Search />
        </nav>
    )
}