"use client"

import PokemonEntry from '@/components/pokemonEntry'
import useSWR from 'swr'
import * as PokemonApi from '@/network/pokemon-api'

export default function Home() {
  const page = 1;

  const { data : pokemonList, isLoading : pokemonLoad } = useSWR(["getPokemonPage", page], () => PokemonApi.getPokemonPage(page)) 

  return (
    <main className='flex justify-center items-center flex-col pt-6 gap-2'>
      <div className='flex justify-center items-center gap-4 flex-wrap pl-32 pr-32'>
        {
          pokemonList?.results.map(pokemonEntry => (
            <PokemonEntry name={pokemonEntry.name} key={pokemonEntry.name} />
          ))
        }
      </div>
    </main>
  )
}
