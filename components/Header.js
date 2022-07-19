import {StyleSheet, Text, View} from "react-native";

const styles = StyleSheet.create({

    header: {
        height: 60,
        padding:15,
        backgroundColor: "#252590"
    },

    text: {

        color: "#fff",
        fontSize: 23,
        textAlign: "center"
    }
});

//Aqui se pueden enviar props normalmente como se harian en react, funciona de la misma forma
const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

//De esta forma le doy valores por defecto a mis props en react tambien se puede esto, solo que no lo utilizo
Header.defaultProps = {
    title: "Shopping List"
}

export default Header;
