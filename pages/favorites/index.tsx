import React, { useEffect, useState } from 'react'
import { NextPage } from 'next';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui'
import { pokemons } from '../../utils';
import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FavoritePokemons } from '../../components/pokemon';





const Favorites: NextPage= () => {

  const router = useRouter()


 const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

 useEffect(() => {

  setFavoritesPokemons(pokemons())
 }, [])
 
  
  return (
      <Layout title='Favoritos'>
  {
   (favoritesPokemons.length===0)
   ?<NoFavorites/>
   :<FavoritePokemons pokemons={favoritesPokemons}/>
  }
    </Layout>
  )
}
export default Favorites