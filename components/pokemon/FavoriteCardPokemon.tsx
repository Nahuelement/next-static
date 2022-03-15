import { Card, Grid } from "@nextui-org/react"
import { FC } from 'react';

interface Props {
    pokemnId:number   
}

export const FavoriteCardPokemon:FC<Props> = ({pokemnId}) => {

  

  return (

  <Card hoverable clickable css={{padding:'10'}}>
    <Card.Image
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemnId }.svg`}
    width={'100%'}
    height={140}
    />
  </Card>
  

  )
}
