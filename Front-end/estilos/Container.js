import { StyleSheet } from 'react-native'

//estilo del contenedor
export const Contenedor = StyleSheet.create({
    //container que utilizamos de manera general en cada una de las vistas
    containerdentro: {
        backgroundColor: 'white',
        padding: '7%',
        marginTop: '15%',
        display: 'flex',
        justifyContent: 'center'
        
    },
    //contenedor total del apartado View
    total: {
        backgroundColor: 'white'        
    },
      //contenedor de donde tendremos dentro los botones de los filtros
      containerdelfiltro:{
        backgroundColor: 'white',
    },
    // ponemos el estilo que contiene los botones del filtro de daltonismo
    contenedorfiltro:{
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center'
    }
})


