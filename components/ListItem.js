import {View, TouchableOpacity, Text} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import useStyles from "./useStyles";
import PropTypes from "prop-types";

const {listItemStyles} = useStyles();

const ListItem = ({item, deleteItem}) => {
    return (
        //El componente touchable, agrega opacidad a nuestro componente cuando es tocado, este es el elemento
        // que debemos de utilizar cuando queremos agregar un elemento que deba ser tocado, como un boton
        <TouchableOpacity style={listItemStyles.listItem}>

            <View style={listItemStyles.listItemView}>
                <Text style={listItemStyles.listItemText}>{item.text}</Text>

                {/*De esta forma utilizo iconos en react native*/}
                <Entypo onPress={() => deleteItem(item.id)} name="minus" size={24} color="black" />

            </View>
        </TouchableOpacity>
    );
};

ListItem.propTypes = {

    item: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default ListItem;
