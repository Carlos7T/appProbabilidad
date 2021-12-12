import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const Permutacion = ({navigation}) => {


    return ( 
        <TouchableOpacity style={styles.boton {
        }>
            <Text>Permutacion</Text>
            <Button
                title="Ir a Home"
                onPress={ () => visitarNosotros() }
            />
        </TouchableOpacity>
       
     );
}

const styles = StyleSheet.create({
    boton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default Permutacion;