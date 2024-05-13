// para hacer los estilos propios
import styled from 'styled-components/native';

//cada estilo tiene definida la propiedad en caso de que seleccionemos por el daltonismo

export const TituloBienvenida = styled.Text
    `
    font-size: 35px;
    color: ${(props) => props.theme.background};
    text-align:center;
    font-weight:700;
    margin:10%;
    `
    ;
export const TituloInicio = styled.Text
    `
    font-size: 40px;
    color: ${(props) => props.theme.background};
    text-align:center;
    font-weight:700;
    margin:5%;
    marginTop:20%;
    marginBottom:10%
    `
    ;
    export const TituloNormal = styled.Text
    `
    font-size: 20px;
    color: ${(props) => props.theme.background};
    text-align:center;
    font-weight:700;
    margin:1%;
    marginBottom:-5%;
    marginTop:10%;
    `
    ;
    export const TituloChico = styled.Text
    `
    font-size: 15px;
    color: ${(props) => props.theme.background};
    text-align:center;
    font-weight:700;
    margin:1%;
    marginBottom:5%;
    marginTop:5%;
    `
    ;
    export const TituloCabecera = styled.Text
    `
    font-size: 28px;
    color: ${(props) => props.theme.background};
    text-align:center;
    font-weight:100;
    margin:1%;
    marginBottom:-8%;
    marginTop:20%;
    `
    ;

