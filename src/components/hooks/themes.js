import { createGlobalStyle } from "styled-components"



export const ligthTheme = {
    body : "#ABB2B9 ",
    fontColor:"#17202A",
}


export const darkTheme = {
    body: "#1C2833",
    fontColor:"#FBFCFC",
}

export const GlobalStyles = createGlobalStyle`
    
    body{
        background-color: ${props => props.theme.body};
    }

` 