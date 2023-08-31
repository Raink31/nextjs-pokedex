"use client"

import PokemonEntry from '@/components/pokemonEntry'
import useSWR, {useSWRConfig} from 'swr'
import * as PokemonApi from '@/network/pokemon-api'
import {useParams} from 'next/navigation';
import { stringify } from 'querystring';

interface region {
    id: number,
}

export default function Home() {
    const params = useParams();
    const regionNumber = params.regionID || "";

    const generation = useSWR(["getRegionPage"], () => PokemonApi.getRegionPage(`${regionNumber}`)).data

    const generationID = (name: string) => useSWR(["getPokemon"], () => PokemonApi.getPokemon(`${name}`)).data

    return (
    <main className='flex justify-center items-center flex-col pt-12 gap-2'>
        <h1 className='text-[#fafafa] text-4xl my-2'>Gen {regionNumber} Pokédex</h1>
        <div className='flex justify-center items-center gap-4 flex-wrap pl-32 pr-32 sd:flex-col md:gap-6 mb-4'>
            {generation?.pokemon_species.map(pokemonEntry => (
            <PokemonEntry name={pokemonEntry.name} key={pokemonEntry.name} />
            ))
            }
        </div>
    </main>
    )
}
