import pokeApi from '../pages/api/pokeApi';
import { Pokemon } from '../interfaces';


export const getPokemonInfo = async(idOrName:string) => {
  const {data} = await pokeApi.get<Pokemon>(`pokemon/${idOrName}`)
  const pokemon = {
      id : data.id,
      name: data.name,
      sprites:data.sprites
  }


    return pokemon

 
}
