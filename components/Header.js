import {Text, View} from "react-native";
import PropTypes from "prop-types";
import useStyles from "./useStyles";

const {headerStyles} = useStyles();

//Aqui se pueden enviar props normalmente como se harian en react, funciona de la misma forma
const Header = ({title}) => {
    return (
        <View style={headerStyles.header}>
            <Text style={headerStyles.text}>{title}</Text>
        </View>
    );
};

//De esta forma le doy valores por defecto a mis props en react tambien se puede esto, solo que no lo utilizo
Header.defaultProps = {
    title: "Shopping List"
}

Header.propTypes = {

    title: PropTypes.string.isRequired,
}

export default Header;
