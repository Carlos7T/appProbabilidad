import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'


const Home = ({navigation}) => {

   

    const visitarCombinacion= () => {
        navigation.navigate('Combinacion')
    }
    const visitarPermutacion= () => {
        navigation.navigate('Permutacion')
    }


    return ( 
        <>
      
        <View style={styles.contenedor}>    
        <Text style={styles.titulo}>Calculadora</Text>
        <Text style={styles.subtitulo}>Selecciona una opción</Text>

        
        
        <View style={styles.centro}>
            
            <TouchableOpacity
                style={styles.boton}
                onPress={ () => visitarCombinacion() }
            >
                <Text style={styles.texto}>Combinación</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.boton}
                onPress={ () => visitarPermutacion() }
            >
                <Text style={styles.texto}>Permutación</Text>
            </TouchableOpacity>
        </View>
        </View>
        </>
       
     );
}

const styles = StyleSheet.create({
    boton: {
        margin: 10,
        backgroundColor:'#2196F3',
        alignSelf: 'center',
        borderRadius: 7,
        padding: 5,
        width: '90%',
        height: '10%',
    },
    texto: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    
    contenedor:{
        
        flex: 1,
        backgroundColor: '#000',
    },
    centro: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        color: '#fff',
        paddingTop: 60,
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
    },
    subtitulo: {
        color: '#fff',
        margin: 10,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
 
export default Home;