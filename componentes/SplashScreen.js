import React from 'react';
import { Text, StyleSheet, View, Button , Image} from 'react-native'

const SplashScreen = ({navigation}) => {

  

    const visitarNosotros = () => {
        navigation.navigate('Home')
    }

    setTimeout(() => {
        visitarNosotros();
        
    }, 5000);

    return ( 
        <View style={styles.contenedor}>
            <Image 
            style={styles.imagen}
            source={require('../assets/img/logo.png')}
            />
        </View>
       
     );
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#2196F3',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagen:{
        marginTop: 20,
        width: '50%',
        height:140,
        marginHorizontal: '10%',
    },
})
 
export default SplashScreen;