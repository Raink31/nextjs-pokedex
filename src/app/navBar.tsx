import Image from "next/image"

export default function NavBar() {
    return (
        <header className="relative flex justify-between items-center pt-4 pr-8 pl-8">
            <Image 
                src={"/logo.svg"}
                width={44}
                height={64}
                alt='pokeball logo'
            />
        <h1 className='text-[#fafafa] text-3xl font-[500] absolute left-0 right-0 ml-auto mr-auto w-max'>KANTO POKÉDEX</h1>
        </header>
    )
}