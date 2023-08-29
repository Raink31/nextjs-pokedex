import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex justify-center items-center flex-col pt-6'>
      <h1 className='text-3xl text-[#fafafa]'>All of the pokémons</h1>
      <Link href="/bulbasaur">Bulbasaur</Link>
    </main>
  )
}
