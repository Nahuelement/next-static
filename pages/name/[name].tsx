import { GetStaticPaths ,GetStaticProps} from 'next'
import { Layout } from '../../components/layouts'
import { NextPage } from 'next';
import { pokeApi } from '../api';
import { Pokemon } from '../../interfaces';
import { Card, Grid, Text, Button, Container,Image } from '@nextui-org/react';
import { localFavorites , existInFavorites} from '../../utils'
import { useEffect, useState } from 'react';
import { PokemonListResponse } from '../../interfaces';
import confetti from 'canvas-confetti';
import { getPokemonInfo } from '../../utils';



interface Props{
pokemon:Pokemon
}

const PokemonByNamePage:NextPage<Props>= ({pokemon}) => {

   

    const [isInFavorites, setIsInFavorites] = useState<boolean>()

    useEffect(() => {
   
        setIsInFavorites(existInFavorites(pokemon.id))
    }, [])
    
    

    const onToggleFavorite = () => {
        localFavorites( pokemon.id );
        setIsInFavorites( !isInFavorites );
        if ( isInFavorites ) return;
          
        confetti({
          zIndex: 999,
          particleCount: 100,
          spread: 160,
          angle: -100,
          origin: {
            x: 1,
            y: 0,
          }
        })

      }    

  return (
< Layout title={pokemon.name}>
    < Grid.Container
    css={{marginTop:'5px'}}
    gap={3}
    >
        <Grid
        xs={12}
        sm={4}
        >
            <Card
            hoverable
            css={{padding:'30px'}}
            >
                <Card.Body>
                    <Card.Image
                        src={pokemon.sprites.other?.dream_world.front_default || 'np-image.png'}
                        alt={pokemon.name}
                        width="100%"
                        height = {200}
                        />
                </Card.Body>
            </Card>
        </Grid>

        <Grid xs={12} sm={8}>
            <Card>
                <Card.Header css={{display:'flex',justifyContent:'space-between'}}> {/* google lo utiliza para identificar la pagina */}
                    <Text h1 transform='capitalize'>{pokemon.name}</Text>
                    <Button
                    color='gradient'
                    ghost = {!isInFavorites}
                    onClick={onToggleFavorite}
                    >
                        {!isInFavorites? 'Guardar en favoritos':'Ya esta en favoritos'}
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Text size={30}>Sprites:</Text>
                        <Container display='flex' direction='row'>
                            <Image
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                            width={100}
                            height = {100}
                            />
                             <Image
                            src={pokemon.sprites.back_default}
                            alt={pokemon.name}
                            width={100}
                            height = {100}
                            />
                             <Image
                            src={pokemon.sprites.front_shiny}
                            alt={pokemon.name}
                            width={100}
                            height = {100}
                            />
                             <Image
                            src={pokemon.sprites.back_shiny}
                            alt={pokemon.name}
                            width={100}
                            height = {100}
                            />
                        
                         </Container>


                </Card.Body>


            </Card>

        </Grid>
    
    </Grid.Container>
     </Layout>
    
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const {data}= await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
   // documentos permitidos para entrar a la pagina , todo se crea en etapa build
    return {
        paths:data.results.map(({name})=>({
            params:{name}
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
   const {name} = ctx.params as {name:string}
   const pokemon = await getPokemonInfo(name)
  
    return {
      props: {
        pokemon
        
      }
    }
  }

export default PokemonByNamePage