import { Grid ,Card,Row,Text} from '@nextui-org/react'
import { useRouter } from 'next/router';
import {FC} from 'react'
import { SmallPokemons } from '../../interfaces/pokemon-list';

export const PokemonCard :FC<SmallPokemons>= ({id,name,img}) => {

  const router = useRouter()

const onClickPokemon = () =>{
  router.push(`/name/${name}`)

}

  return (
    <Grid
    xs={6}
    sm={3}
    md ={2}
    xl = {1}
    key={id}
    >
    
            <Card 
            hoverable 
            clickable
            onClick={onClickPokemon}
            >
             < Card.Body>
             <Row justify='center'>
             <Text transform='capitalize' h4>{name}</Text>
             </Row>
             <hr/>
              <Card.Image 
              src={img}
              alt={name}
              width='100%'
              height={140}
              />
             </Card.Body>
             <Card.Footer>
               <Row justify='flex-end'>
                 <Text>#{id}</Text>

               </Row>
             </Card.Footer>
       </Card>
</Grid>
  )
}
