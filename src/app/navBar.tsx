"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function NavBar() {
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }

    return (
        <header className="relative flex justify-center items-center pt-4 gap-12">
            <Image 
                src={"/logo.svg"}
                width={44}
                height={64}
                alt='pokeball logo'
            />
        <h1 className='text-[#fafafa] text-3xl font-[500]'>NEXTJS POKÉDEX</h1>
        <nav className="relative">
            <span className="text-[#fafafa] text-3xl flex flex-row justify-center items-center gap-2 cursor-pointer" onClick={handleClick}>
                Select a region 
                <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="M480-360 280-560h400L480-360Z"/>
                </svg>
                <ul className={`absolute bg-black bg-opacity-20 backdrop-blur-xl top-10 right-0 p-6 border-black border-2 hidden flex-col gap-4 ${isActive? "active" : ""}`}>
                    <li><Link className="flex justify-start items-center" href="/region/1"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-280v-400l200 200-200 200Z"/></svg>Kanto</Link></li>
                    <li><Link className="flex justify-start items-center" href="/region/2"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-280v-400l200 200-200 200Z"/></svg>Johto</Link></li>
                    <li><Link className="flex justify-start items-center" href="/region/3"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-280v-400l200 200-200 200Z"/></svg>Hoenn</Link></li>
                    <li><Link className="flex justify-start items-center" href="/region/4"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-280v-400l200 200-200 200Z"/></svg>Sinnoh</Link></li>
                    <li><Link className="flex justify-start items-center" href="/region/5"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-280v-400l200 200-200 200Z"/></svg>Unys</Link></li>
                    <li><Link className="flex justify-start items-center" href="/region/6"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-280v-400l200 200-200 200Z"/></svg>Kalos</Link></li>
                    <li><Link className="flex justify-start items-center" href="/region/7"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-280v-400l200 200-200 200Z"/></svg>Alola</Link></li>
                    <li><Link className="flex justify-start items-center" href="/region/8"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-280v-400l200 200-200 200Z"/></svg>Galar</Link></li>
                    <li><Link className="flex justify-start items-center" href="/region/9"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-280v-400l200 200-200 200Z"/></svg>Paldea</Link></li>
                </ul>
            </span>
        </nav>
        </header>
    )
}