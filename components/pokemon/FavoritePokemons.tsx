import { Grid } from "@nextui-org/react"
import { groupEnd } from "console"
import { FC } from 'react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';
import { useRouter } from 'next/router';

interface Props {
    pokemons: number[]
}

export const FavoritePokemons:FC <Props>= ({pokemons})=> {
    const router =  useRouter()

    const returnToPokemon = (id:number) =>{
        router.push(`/pokemon/${id}`)
    }
  return (
    <Grid.Container  direction='row' gap={2} justify='flex-start'>
        {
            pokemons.map(id =>(
                <Grid
                    xs={6}
                    sm = {3}
                    md={2}
                    xl={1}
                    key={id}
                    onClick={()=>returnToPokemon(id)}
                >
                <FavoriteCardPokemon pokemnId={id} />
                </Grid>    
                
            ))
        }

    </Grid.Container>
    
  )
}
