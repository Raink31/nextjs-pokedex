"use client"

import PokemonEntry from '@/components/pokemonEntry'
import useSWR, {useSWRConfig} from 'swr'
import * as PokemonApi from '@/network/pokemon-api'

export default function Home() {
  const page = 1;

  const { data : pokemonList, isLoading : pokemonLoad } = useSWR(["getPokemonPage", page], () => PokemonApi.getPokemonPage(page)) 
  const { cache, mutate, ...extraConfig } = useSWRConfig()

  return (
    <main className='flex justify-center items-center flex-col pt-12 gap-2'>
      <div className='flex justify-center items-center gap-4 flex-wrap pl-32 pr-32 sd:flex-col md:gap-6 mb-10'>
        {
          pokemonList?.results.map(pokemonEntry => (
            <PokemonEntry name={pokemonEntry.name} key={pokemonEntry.name} />
          ))
        }
      </div>
    </main>
  )
}
