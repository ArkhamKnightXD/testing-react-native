import {StyleSheet, View, TouchableOpacity, Text} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
//Fallas con los icons
// import Icon from "react-native-vector-icons/dist/FontAwesome";

const styles = StyleSheet.create({

    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },

    listItemView: {

        //El flexDirection es column por defecto y en nuestro caso deseamos que estos elementos sean horizontal
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center"
    },

    listItemText: {

        fontSize: 18
    },

});

const ListItem = ({item, deleteItem}) => {
    return (
        //El componente touchable, agrega opacidad a nuestro componente cuando es tocado, este es el elemento
        // que debemos de utilizar cuando queremos agregar un elemento que deba ser tocado, como un boton
        <TouchableOpacity style={styles.listItem}>

            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>

                {/*De esta forma utilizo iconos en react native*/}
                <Entypo onPress={() => deleteItem(item.id)} name="minus" size={24} color="black" />

            </View>
        </TouchableOpacity>
    );
};

export default ListItem;
