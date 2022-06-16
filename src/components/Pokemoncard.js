import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Pokemoncard = ({pokemon}) => {

    const navigate = useNavigate()

    const [pokemonData,setPokemonData] = useState({})

    const pokemonUrl = pokemon.url

    useEffect(() =>{
            axios.get(pokemonUrl)
                .then(res => setPokemonData(res.data))
    })

    
    return (

        <div onClick={()=> navigate(`/pokedex/${pokemonData.id}`)}>
            <span className="card-id">{pokemonData?.id}</span>
            <h2>{pokemon.name}</h2>
            <img src={pokemonData?.sprites?.front_default} alt="pokemon-card"/>
            {/* <img src={}/> */}
        </div>
    );
    
};

export default Pokemoncard;