import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import useStyles from "./useStyles";
import PropTypes from "prop-types";

const {addItemStyles} = useStyles();

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
                style={addItemStyles.input}
                onChangeText={handleChangeText}
                value={text}
            />
            <TouchableOpacity
                style={addItemStyles.btn}
                onPress={() => {
                    addItem(text);
                    setText('');
                }}>
                <Text style={addItemStyles.btnText}>
                    <Entypo name="plus" size={24} color="black" /> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
};

AddItem.propTypes = {

    addItem: PropTypes.func.isRequired
}

export default AddItem;
