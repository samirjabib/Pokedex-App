import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pokemoncard from './Pokemoncard';
import { useSelector } from 'react-redux/es/exports';

const Pokedex = () => {

    const user = useSelector((state)=> state.user )

    const navigate = useNavigate();

    const logOut = () =>{
            //le pasamos la ruta hacia la cual nos queremos dirigir
        navigate(-1)    
    }


    const [pokemons,setPokemons] = useState([])
    
    
    useEffect(()=>{
            //traemos la informacion de la api
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126")//hago la peticion a la API 
            .then( res => setPokemons(res.data.results))
            //traemos los tipos desde la APi 
            axios.get("https://pokeapi.co/api/v2/type/")
            .then(res=> setTypes(res.data.results))
    },[])



    const filterType = (e) =>{
        axios.get(e.target.value)
            .then( res => console.log(res.data.pokemon))
    }

    

    //Buscador por nombre


    const pokemonNames = pokemons.map(pokemon => pokemon.name)

    const [searchPokemons, setSearchPokemon] = useState("")

    const search = () =>{
        if(pokemonNames.includes(searchPokemons)){
            navigate(`/pokedex/${searchPokemons}`)
        }
    }

   
    //buscador por tipo

    const [types,setTypes] = useState([])


    //paginacion
    const [page,setPage] =useState(1)

    const limitPokemons = 8;

    const lastIndex = limitPokemons *page;
    const firstIndex = lastIndex - limitPokemons;

    const pokemonPaginated = pokemons.slice(firstIndex,lastIndex)


    const lastPage = Math.ceil(pokemons.length/limitPokemons)
    const firstPage =1;


    return (
        <div>
            {/* boton desloggear */}
            <button className='log-out' onClick={ () => logOut()}>
                    <i className="fas fa-sign-out-alt"></i>
            </button>
            {/* titulo pokedex */}

            <h2>Pokedex</h2>

            <p>
                welcome {user}, her you can find you favorite pokemon
            </p>


            {/* buscador por nombre */}
            <div>
                <button className='btn-ball' onClick={search}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                    type="text"
                    placeholder='search pokemon by name'
                    value={searchPokemons}
                    onChange={(e) => setSearchPokemon(e.target.value.toLowerCase())}
                    
                />
            </div>
            


            {/* buscador por tipo  */} 
            <select onChange={filterType}>
                {
                    types.map(type => (
                        <option key={type.url} value={type.url}>
                            {type.name}
                        </option>
                    ))
                }
            </select>


            <div>
                {/* pokemon-box */}
                <div>
                    {
                        
                        pokemonPaginated.map( pokemon => (
                            
                            <Pokemoncard 
                            pokemon={pokemon} 
                            key={pokemon.url} />
                            
                            
                        ))
                        
                    }    
                </div>    
            </div>
            {/* pagination */}
            <button 
            onClick={() =>setPage(page-1)}
            disabled ={page === firstPage}>
                Preview
            </button> 
            <button 
            onClick={() =>setPage(page+1)}
            disabled ={page === lastPage}>
                Next
            </button>
        </div>
            
    );
};

export default Pokedex;