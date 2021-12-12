import React , {useState} from 'react';
import {TouchableWithoutFeedback,  Text, StyleSheet, View, Button , Alert, Image, TouchableOpacity, Keyboard} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';




const Combinacion = ({navigation}) => {

    const [valorR, guardarValorR] = useState('');
    const [valorN, guardarValorN] = useState('');
    const [resultado, guardarResultado] = useState('');

    const factorial = (numero) => {
        var i=numero;
        while(--i) numero*=i;
        return numero;
    }
    const limpiar = () => {
        guardarValorR('');
        guardarValorN('');
        //guardarResultado('');
    }
    const mostrarAlertaporNumeronegativo = () => {
        Alert.alert(
            'Error', // Titulo
            'El valor de n debe ser mayor o igual a r.', // mensaje
            [{
                text: 'OK' // Arreglo de botones
            }]
        )
    }

    const CalcularCombinacion = () => {
        if(valorR === '' || valorN === ''){
            mostrarAlerta();
            return;
           
        }   

        let resta=valorN-valorR;
        console.log(resta);
        if (resta < 0)  {
            mostrarAlertaporNumeronegativo();
            this.textInputRef.clear();
            this.textInputRef2.clear(); 
            limpiar();
            return;
        }
            
        if (resta === 0) {
            guardarResultado(1);
            this.textInputRef.clear();
            this.textInputRef2.clear(); 
            limpiar();
            return;

         }
        
            let resultado =  factorial(valorN) / (factorial(valorR) * factorial(valorN - valorR));
            console.log(resultado);
            guardarResultado(resultado);
            this.textInputRef.clear();
            this.textInputRef2.clear(); 
            limpiar();
        
        

    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text: 'OK',
            }]
        )
    }
        


    return ( 
    <>


       

        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Fórmula</Text>
            <Image 
            style={styles.imagen}
            source={require('../assets/img/combinacion.png')}
            />
            
            <View style={styles.centro}>
                <Text style={styles.label}>Valor de n </Text>
                <TextInput style={styles.input}
                ref={comp => { this.textInputRef = comp; }}
                keyboardType='numeric'
                onChangeText={text => guardarValorN(text)} 
                />
                <Text style={styles.label}>Valor de r </Text>
                <TextInput style={styles.input}
                ref={comp => { this.textInputRef2 = comp; }}
                 keyboardType='numeric'
                 onChangeText={text => guardarValorR(text)} 
                />
              <Button title="Calcular" 
                onPress={CalcularCombinacion}/>
                {resultado ? 
                <View>
                <Text style={styles.textoResultado}>Combinaciones:</Text> 
                <Text style={styles.resultado}> {resultado}</Text> 
                           
               </View>
                
                : null}
                
                
            </View>                
    
        </View>

        </>

     );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#000',
        
    },
    centro: {
     marginTop: 30,
    },
    titulo: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    label: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    input: {
        color:'#000',
        backgroundColor:'#fff',
        marginTop: 10,
        marginBottom: 10,
    },
    textoResultado: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    resultado: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    imagen:{
        marginTop: 40,
        width: '50%',
        height:100,
        marginHorizontal: '30%',
    },
    botonHome:{
        backgroundColor:'#25A5D7',
        marginVertical: .1,
        alignSelf: 'center',
        borderRadius: 2,
        width: '100%',
        height: '10%', 

    },
    botonCalcular:{
        backgroundColor:'#25A5D7',
        marginVertical: 5,
        alignSelf: 'center',
        borderRadius: 2,
        width: '100%',
        height: '15%', 

    },
    textoBoton:{
        color: '#fff',
        alignSelf: 'center',
        fontSize:20,
       textTransform: 'uppercase',
       margin: 10,
    }
})
 
export default Combinacion;