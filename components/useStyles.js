import {StyleSheet} from "react-native";

const useStyles = () => {

    const addItemStyles = StyleSheet.create({
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


    const headerStyles = StyleSheet.create({

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


    const listItemStyles = StyleSheet.create({

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


    return {addItemStyles, headerStyles, listItemStyles};
};

export default useStyles;


// De esta forma creo mi objeto de estilo en react native, esta es una configuracion basica para que mis elementos
// esten en la mitad de la pantalla, y en mi componente utilizare la propiedad style para enviarle este objeto
//Estilos iniciales comentados
// const styles = StyleSheet.create({
//
//   //Se recomienda poner los estilos dentro de un objeto
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//
//   text:{
//     color: '#0810d0',
//     fontSize: 30
//   },
//
//   //Aqui no se puede poner valores tipo 100 px o 100%, solo se pueden poner valores numericos
//   img:{
//     width: 100,
//     height: 100,
//     borderRadius: 50
//   }
// });
