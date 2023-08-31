"use client"

import PokemonEntry from '@/components/pokemonEntry'
import useSWR, {useSWRConfig} from 'swr'
import * as PokemonApi from '@/network/pokemon-api'
import {useRouter, useSearchParams} from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get('page') || "1");

  const { data : pokemonList, isLoading : pokemonLoad } = useSWR(["getPokemonPage", page], () => PokemonApi.getPokemonPage(page)) 

  const { cache, mutate, ...extraConfig } = useSWRConfig()

  return (
    <main className='flex justify-center items-center flex-col pt-12 gap-2'>
      <h1 className='text-[#fafafa] text-4xl my-2'>National Pokédex</h1>
      <div className='flex justify-center items-center gap-4 flex-wrap pl-32 pr-32 sd:flex-col md:gap-6 mb-4'>
        {
          pokemonList?.results.map(pokemonEntry => (
            <PokemonEntry name={pokemonEntry.name} key={pokemonEntry.name} />
          ))
        }
      </div>
        <div className='flex justify-center gap-6 mt-4 mb-10 w-max'>
          {pokemonList?.previous &&
            <button type='button' className="text-[#fafafa] drop-shadow hover:scale-110 bg-black pt-2 pr-8 pb-2 pl-8 bg-opacity-40 rounded-full max-w-[200px] w-50 border-black border-2" onClick={() => router.push(`/?page=${page - 1}`)}>Previous page</button>}
          {pokemonList?.next &&
            <button type='button' className="text-[#fafafa] drop-shadow hover:scale-110 bg-black pt-2 pr-8 pb-2 pl-8 bg-opacity-40 rounded-full max-w-[200px] w-50 border-black border-2" onClick={() => router.push(`/?page=${page + 1}`)}>Next page</button>}
        </div>
    </main>
  )
}
