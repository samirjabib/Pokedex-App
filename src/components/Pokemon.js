import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Pokemon = () => {

    const {id} = useParams();

    const [pokemon,setPokemon] = useState({})

    const navigate = useNavigate();

    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon ( res.data))
    },[id])

    const back = () =>{
        //le pasamos la ruta hacia la cual nos queremos dirigir
    navigate(-1)    
}   



    return (
        <div>
            <button onClick={ () => back()}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <div className='pokemon-box'>
                <div>
                    <img src={pokemon.sprites?.front_default} alt=""/>
                    <img src={pokemon.sprites?.back_default} alt=""/>
                </div>
                
                <h1>{pokemon.name}</h1>
                <h2>{id}</h2>
                <p><b>weigth :</b>{pokemon.height}</p>
                <p><b> heigth :</b>{pokemon.weight}</p>
                {
                    pokemon.types?.map((type) =>(
                        <div key={type.slot}>
                                <h2>{type.type.name}</h2>
                            </div>
                        )
                    )
                }
                {
                    pokemon.stats?.map(stat => (
                        <li>
                            <label htmlFor='pokebar'>{stat.stat.name}</label>
                            <progress id='pokebar' max="100" value={stat.base_stat}>{stat.base_stat}</progress>
                        </li>
                    ))
                }
            </div>
            
            
            
        </div>
    );
};

export default Pokemon;