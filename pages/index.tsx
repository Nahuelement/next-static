import { Button, Card, Grid, Row, Text} from '@nextui-org/react'
import  { NextPage } from 'next'
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next'
import { pokeApi } from './api';
import { PokemonListResponse, SmallPokemons } from '../interfaces';
import Image from 'next/image';
import { PokemonCard } from '../components/pokemon'




interface Props {
  pokemons:SmallPokemons[]
}

const HomePage: NextPage <Props>= ({pokemons}) => {

  
  return (
   
    <Layout title='Pokemon List'>
     
     <Grid.Container gap={3} justify='flex-start'>
      {
        pokemons.map(({name,url,id,img})=>(
          
          < PokemonCard name={name} img={img} id ={id} url={url} key={id}/>
        
          ))
      }
</Grid.Container> 
      </Layout>
    
  );
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
 
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  //"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
  const pokemons:SmallPokemons[]= data.results.map(({name,url},i)=>({
      name,
      url:url,
      id:i + 1 ,
     img:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`

    }))
  

  return {
    props: {
      pokemons
      
    }
  }
}

export default HomePage
