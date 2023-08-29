"use client"

import useSWR from "swr";
import * as PokemonApi from '@/network/pokemon-api';
import {useParams} from 'next/navigation';
import Link from "next/link";
import Image from "next/image";


export default function PokemonDetailsPage() {
    const params = useParams();
    const pokemonName = params.pokemonID || "";

    const { data : pokemon, isLoading : pokemonLoading } = useSWR(pokemonName, PokemonApi.getPokemon);

    return(
        <div className="flex flex-col justify-start items-center mt-4">
            {pokemonLoading && <div><svg className="fill-white animate-spin" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>
            </div>}
            {pokemon && 
                <div className="flex flex-col justify-start items-center mt-4">
                    <h2 className="text-[#fafafa] text-4xl">{pokemon?.name}</h2>
                    <Image 
                        src={pokemon.sprites.other["official-artwork"].front_default}
                        height={400}
                        width={400}
                        alt={"Pokemon: " + pokemon.name}
                    />
                    <p className="text-[#fafafa] text-xl"><span className="text-2xl underline">Types:</span> {pokemon.types.map(type => type.type.name).join(", ")}</p>
                    <p className="text-[#fafafa] text-xl"><span className="text-2xl underline">Height:</span> {pokemon.height * 10} cm</p>
                    <p className="text-[#fafafa] text-xl"><span className="text-2xl underline">weight:</span> {pokemon.weight / 10} kg</p>

                </div>
            }
            <Link href="/" className="text-[#fafafa] hover:scale-110 mt-10">← Pokédex</Link>
        </div>
    )
}