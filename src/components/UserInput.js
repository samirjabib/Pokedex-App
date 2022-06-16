import React from 'react';
import image from '../assets/image';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeUser } from '../store/slices/user.slice';

const UserInput = () => {


    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();
    
    const navigate = useNavigate(); //usamos el hook navigate para redireccionar una url de manera dinamica


    console.log(userName)

    const getName = () =>{
        dispatch(changeUser(userName))
            //le pasamos la ruta hacia la cual nos queremos dirigir
        navigate("/pokedex")    
    }

    
    return (

        <div >
            <div>
                <h2>Hello trainer!</h2>
                <img src={image.img1} alt="img" onClick={getName}/>
            </div>
            <p className="">Give me your name to start</p>
            <form>
                <input 
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                />
            </form>
        </div>
    );
};

export default UserInput;