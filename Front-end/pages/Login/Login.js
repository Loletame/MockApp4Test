import React, { useContext, useState } from 'react';

//componentes de react-native que se usan en esta pantalla
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'

//habilita la navegacion hacia otras pantallas
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

// importamos
import { Contenedor } from '../../estilos/Container';
import { InputStyles } from '../../estilos/Input';
import { Boton } from '../../estilos/Boton';
import { TituloCabecera } from '../../estilos/Titulo';

//import para manejar los temas.
import { ThemeProvider } from 'styled-components';
import { ThemesContext } from '../../Routes';

import { URLlogin } from '../../Routes/url';

export default function Login() {

    // Temas (colores adaptados - Daltonismo)
    const theme = useContext(ThemesContext)

    // Navegacion entre pantallas
    const navigation = useNavigation();

    // UseState para guardar los datos
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Modal
    // Iniciador 
    const [modalVisible, setModalVisible] = useState(false);
    // Mensaje 
    const [modalMessage, setModalMessage] = useState('');

    const handleInicioSesion = async () => {

        const data = { email: email, password: password };

        // Realizar petición fetch
        try {
            const response = await fetch(URLlogin, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            // Validacion BACKEND
            if (response.status == 401) { // Si la contraseña o el mail estan mal
                const errorData = await response.json(); {
                    setModalMessage(errorData.msg);
                    setModalVisible(true);
                }
            }
            const responseData = await response.json();
            // Si los datos estan bien navega a la siguiente pagina
            navigation.push('Inicio');
        } catch (error) {
        }
    };

    return (
        <ThemeProvider theme={theme.theme}>
            <ScrollView style={Contenedor.total}>
                <TituloCabecera> Inicio de Sesión </TituloCabecera>
                <View style={Contenedor.containerdentro}>

                    <TextInput style={InputStyles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoComplete='email' />
                    <TextInput
                        style={InputStyles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Contraseña"
                        type="password"
                        secureTextEntry={true} />

                    <Boton onPress={() => handleInicioSesion()}>Iniciar Sesión</Boton>
                    <Boton onPress={() => navigation.push('Nosotros')}>Nosotros</Boton>
                    
                </View>

                <Modal visible={modalVisible} transparent={true} animationType="fade">

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' }}>
                            <Text>{modalMessage}</Text>

                            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ borderRadius: 10, padding: 10, marginTop: 20, backgroundColor: "lightgrey" }}>
                                <Text>Cerrar</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Modal>

            </ScrollView>
        </ThemeProvider>
    )
}

