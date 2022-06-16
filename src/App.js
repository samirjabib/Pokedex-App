import Pokedex from "./components/Pokedex";
import ProtectedRoutes from "./components/ProtectedRoutes";   
import UserInput from "./components/UserInput";
import Pokemon from "./components/Pokemon"
import { HashRouter, Routes, Route } from 'react-router-dom';
import "./styles/App.css"
import { useState } from "react";
import  styled, {ThemeProvider} from "styled-components";
import {ligthTheme,darkTheme, GlobalStyles} from './components/hooks/themes'


const StyledApp = styled.div`

      color:${(props)=>props.theme.fontColor} 

`


function App() {


  const [theme, setTheme] = useState("ligth")


  const themeToggler = () =>{
    if(theme === "ligth"){
      setTheme("dark")
    }else{
      setTheme("ligth")
    }
  }



  return (
    <ThemeProvider theme={ theme === "ligth" ?  ligthTheme : darkTheme}>
      <StyledApp className="App">
        <GlobalStyles/>
        <HashRouter>
          <div>
            <input 
              type="checkbox" 
              defaultChecked={theme}
              onChange={() => themeToggler()}
              className="dark-mode"
              />
          </div>
          
          <Routes>
          <Route path="/" element ={<UserInput/>}/>
            {/* usamos el atributo Route para enlazar las pestañas */}
            
            {/* Rutas Protegidas usando el Atributo Route con apertura y cierre
                usamos en element el enlace hacia el cual haremos la funcion */}
            <Route element={<ProtectedRoutes/>}>
              <Route path="/pokedex" element={<Pokedex/>}/>
              <Route path="/pokedex/:id" element={<Pokemon/>}/>x
            </Route>
          </Routes>
        </HashRouter>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
