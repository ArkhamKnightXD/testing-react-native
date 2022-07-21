import {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        margin: 5,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
});


const AddItem = ({addItem}) => {

    const [text, setText] = useState('');


    const handleChangeText = (textValue) => {

        //No tengo que hacer event.target.value para obtener los valores
        setText(textValue);
    };


    return (
        <View>
            {/*Con text input podemos agregar texto, y onChangetext podemos poner una funcion para obtener
            el texto que se cambia*/}
            <TextInput
                placeholder="Add Item..."
                style={styles.input}
                onChangeText={handleChangeText}
                value={text}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    addItem(text);
                    setText('');
                }}>
                <Text style={styles.btnText}>
                    <Entypo name="plus" size={24} color="black" /> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddItem;
