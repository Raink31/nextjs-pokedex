import Image from "next/image"

export default function NavBar() {
    return (
        <header className="relative flex justify-center items-center pt-4 gap-6">
            <Image 
                src={"/logo.svg"}
                width={44}
                height={64}
                alt='pokeball logo'
            />
        <h1 className='text-[#fafafa] text-3xl font-[500]'>NEXTJS POKÉDEX</h1>
        </header>
    )
}