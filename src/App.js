import Pokedex from "./components/Pokedex";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Settings from "./components/Settings";
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

          <div className="pokeball-background"></div>


          <div className="dark-mode-container">
            <input 
              type="checkbox" 
              defaultChecked={theme}
              onChange={() => themeToggler()}
              className="dark-mode"
              />
          </div>
          

          <Routes>
            {/* usamos el atributo Route para enlazar las pestañas */}
            <Route path="/" element ={<UserInput/>}/>
            {/* Rutas Protegidas usando el Atributo Route con apertura y cierre
                usamos en element el enlace hacia el cual haremos la funcion */}
            <Route element={<ProtectedRoutes/>}>
              <Route path="/pokedex" element={<Pokedex/>}/>
              <Route path="/pokedex/:id" element={<Pokemon/>}/>
              <Route path="/settings" element={<Settings/>}/>
            </Route>

          </Routes>

        </HashRouter>

      </StyledApp>

    </ThemeProvider>
  );
}

export default App;
