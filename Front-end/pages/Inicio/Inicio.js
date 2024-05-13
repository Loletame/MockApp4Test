import React, { useContext } from 'react';

//permitimos que se pueda hacer "scroll" si es necesario 
import { ScrollView, View } from 'react-native';

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';

// importamos los elementos que creamos en componentes
import { TituloCabecera, TituloInicio } from '../../estilos/Titulo';
import { Contenedor } from '../../estilos/Container';
import {
    Boton, Boton2,
    themeDefault,
    themeDeuteranopia,
    themeProtanopia,
    themeTritanopia
} from '../../estilos/Boton';



//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';

const Inicio = () => {
    const navigation = useNavigation();
    const theme = useContext(ThemesContext)
    function handleTheme(value) {
        theme.setTheme(value)
    }
    return (
        <ThemeProvider theme={theme.theme}>
            <ScrollView style={Contenedor.total}>
                <TituloCabecera> Bienvenido </TituloCabecera>

                <View style={Contenedor.containerdentro}>
                    <TituloInicio>Mi ESI</TituloInicio>
                    <TituloInicio> Comenzá a explorar </TituloInicio>

                    <Boton onPress={() => Linking.openURL('https://www.spatial.io/s/M-E-S-I-Mi-Educacion-Sexual-Integral-66200b63a2831f9b41c77a7b?share=7341275839470123682')}>
                        Comenzar experiencia Metaversica
                    </Boton>
                    
                </View>

                <View style={Contenedor.containerdelfiltro}>
                    <View style={Contenedor.contenedorfiltro}>
                        <Boton2 onPress={() => handleTheme(themeDefault)}>Sin filtro</Boton2>
                        <Boton2 onPress={() => handleTheme(themeDeuteranopia)}>Deuteranopía</Boton2>
                        <Boton2 onPress={() => handleTheme(themeTritanopia)}>Tritanopía</Boton2>
                        <Boton2 onPress={() => handleTheme(themeProtanopia)}>Protanopía</Boton2>
                    </View>
                </View>

            </ScrollView>
        </ThemeProvider>
    )
}

export default Inicio