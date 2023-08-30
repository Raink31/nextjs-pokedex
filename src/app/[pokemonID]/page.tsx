"use client"

import {useParams} from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import usePokemon from '@/hooks/usePokemon';

export default function PokemonDetailsPage() {
    const params = useParams();
    const pokemonName = params.pokemonID || "";

    const {pokemon, pokemonLoading} = usePokemon(`${pokemonName}`);
    const types = pokemon?.types.map(type => type.type.name) || ""
    let type1 = ""
    let type2 = ""

    function validType() {
        if (types[0]) {
            type1 = types[0]
        }
        if (types[1]) {
            type2 = types[1]
        } else {
            type2 = ""
        }
    }

    function styleType(string : string) {
        if (string === "") {
            return ""
        } else if (string === "fire") {
            return <span className='bg-[#f08030] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "normal") {
            return <span className='bg-[#a8a878] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "fighting") {
            return <span className='bg-[#b32d25] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "water") {
            return <span className='bg-[#6890f0] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "flying") {
            return <span className='bg-[#a890f0] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "grass") {
            return <span className='bg-[#78c850] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "poison") {
            return <span className='bg-[#a040a0] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "electric") {
            return <span className='bg-[#f8d030] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "ground") {
            return <span className='bg-[#e0c068] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "psychic") {
            return <span className='bg-[#f85888] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "rock") {
            return <span className='bg-[#b8a038] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "ice") {
            return <span className='bg-[#98d8d8] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "bug") {
            return <span className='bg-[#a8b820] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "dragon") {
            return <span className='bg-[#7038f8] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "ghost") {
            return <span className='bg-[#705898] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "dark") {
            return <span className='bg-[#705848] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "steel") {
            return <span className='bg-[#b8b8d0] w-28 inline-block text-center rounded-full'>{string}</span>
        } else if (string === "fairy") {
            return <span className='bg-[#ee99ac] w-28 inline-block text-center rounded-full'>{string}</span>
        }
    }

    validType()

    return(
        <div className="flex flex-col justify-start items-center mt-4">
            {pokemonLoading && <div><svg className="fill-white animate-spin" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>
            </div>}
            {pokemon === null && <p className='text-[#fafafa]'>Pokémon not found</p>}
            {pokemon && 
                <div className="flex flex-col justify-start items-center mt-4">
                    <h2 className="text-[#fafafa] text-4xl">{pokemon?.name}</h2>
                    <Image 
                        className="bg-black p-4 bg-opacity-40 rounded-xl border-black border-2 mt-8 mb-8 tilt"
                        src={pokemon.sprites.other["official-artwork"].front_default}
                        height={400}
                        width={400}
                        alt={"Pokemon: " + pokemon.name}
                    />
                    <div className='flex flex-col justify-start gap-4'> 
                        <p className="text-[#fafafa] text-2xl drop-shadow"><span className="text-3xl border-b-2 pb-1 mr-4">Types:</span> {styleType(type1)} {styleType(type2)}</p>
                        <p className="text-[#fafafa] text-2xl drop-shadow"><span className="text-3xl border-b-2 pb-1 mr-4">Height:</span> {pokemon.height / 10} m</p>
                        <p className="text-[#fafafa] text-2xl drop-shadow"><span className="text-3xl border-b-2 pb-1 mr-4">weight:</span> {pokemon.weight / 10} kg</p>
                    </div>
                </div>
            }
            <Link href="/" className="text-[#fafafa] drop-shadow hover:scale-110 mt-10 bg-black pt-2 pr-8 pb-2 pl-8 bg-opacity-40 rounded-full">← Back to pokédex</Link>
        </div>
    )
}
