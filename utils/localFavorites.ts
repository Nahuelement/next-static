

export const localFavorites = (id:number) => {

    console.log('toogle favorites')
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
  if( favorites.includes(id)){
      favorites = favorites.filter(favId =>favId !== id)
  }else{
      favorites.push(id)
  }
  localStorage.setItem('favorites',JSON.stringify(favorites))
}

export const existInFavorites = (id:number): boolean=>{

if(typeof window==='undefined'){ return false}

let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
return favorites.includes(id)
}

export const  pokemons = ():number[] =>{
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}


