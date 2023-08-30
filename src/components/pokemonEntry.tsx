"use client"

import usePokemon from "@/hooks/usePokemon";
import Link from "next/link";
import { useSWRConfig } from 'swr'
import Image from "next/image";

export default function PokemonEntry({ name }: { name: string }) {
    const { pokemon, pokemonLoading } = usePokemon(`${name}`);

    const { cache, mutate, ...extraConfig } = useSWRConfig()

    const id = pokemon?.id

    function idLength(id : number) {
        if (id > 0 && id < 10) {
            return <span>#00{id}</span>
        } else if (id >= 10 && id < 100) {
            return <span>#0{id}</span>
        } else {
            return <span>#{id}</span>
        }
    }


    return(
        <Link href={"/" + name}>
            <div>
                {pokemonLoading && <div><svg className="fill-white animate-spin" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z" /></svg>
                </div>}
                {pokemon &&
                    <div className="flex flex-col justify-center items-center w-[250px] bg-black p-4 bg-opacity-40 rounded-xl border-black border-2 tilt">
                        <Image
                            src={pokemon.sprites.other["official-artwork"].front_default}
                            width={150}
                            height={150}
                            alt={"pokemon" + pokemon.name}
                        />
                        <h2 className="text-[#fafafa] text-2xl tracking-widest mt-4">
                            {idLength(pokemon.id)} {pokemon.name}
                        </h2>
                    </div>
                }
            </div>
        </Link>
    )
}