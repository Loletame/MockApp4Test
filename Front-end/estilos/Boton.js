// para hacer los estilos propios
import styled from 'styled-components/native';

//estilos del boton
export const Boton = styled.Text
    `
    font-size: 23px;
    color: white;
    font-weight:600;
    background-color: ${(props) => props.theme.background};
    text-align:center;
    margin:5%;
    padding:3%;
    border-radius: 10px;
    `;
    export const Boton2 = styled.Text
    `
    font-size: 23px;
    color: white;
    font-weight:600;
    background-color: ${(props) => props.theme.background};
    text-align:center;
    margin:1%;
    padding:3%;
    width:190px;
    border-radius: 10px;
    flexDirection: row;
    `
    ;

//botones de daltonismo con sus colores definidos 

export const themeDefault = {
    background: "#5F4866",
    color: "#5F4866",
}

export const themeDeuteranopia = {
    background: "#656F8A",
    color: "#656F8A",
}

export const themeTritanopia = {
    background: "#5f4b53",
    color: "#5f4b53",
}

export const themeProtanopia = {
    background: "#444f67",
    color: "#444f67",
}