import React from 'react';
import { useNavigate } from 'react-router-dom';





const Pokedex = () => {


    const navigate = useNavigate();

    const logOut = () =>{
            //le pasamos la ruta hacia la cual nos queremos dirigir
        navigate(-1)    
    }



    return (
        <div>
            <div className='container'>

                <button className='log-out' onClick={ () => logOut()}>
                        <i className="fas fa-sign-out-alt"></i>
                </button>

                <h2 className='title-pokedex'>Pokedex</h2>
                <p className='pokedex-description'>welcome user, her you can find you favorite pokemon</p>

                <div>

                    <div className="center">
                        <div>
                            <span>type</span>
                            <input type="checkbox" />
                            <span>pokemon</span>
                        </div>

                        <select>
                        </select>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Pokedex;