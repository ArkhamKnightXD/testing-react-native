import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {

    const [items, setItems] = useState([

        {id: 1, text: "Milk" },
        {id: 2, text: "Eggs" },
        {id: 3, text: "Bread" },
        {id: 4, text: "Juice" },
    ]);

    //Una de las primera diferencias entre react native y react, es que aqui en el return no puedo utilizar elementos html
  //Debo de utilizar los componentes de react native tales como view y text
  return (

    //  View es el componente mas importante de react native para desarrollar ui :
      //  View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.
      //  View maps directly to the native view equivalent on whatever platform React Native is running on,
      //  whether that is a UIView, <div>, android.view, etc.
    <View style={styles.container}>
      <Header title={"Shopping List"}/>

        {/*Manejamos la visualizacion de lista de datos mediante flatList, aqui no utilizamos map como en react */}
        <FlatList data={items} renderItem={({item}) => (
            <ListItem item={item}/>
        )}/>

      {/*De esta forma utilizo el componente para mostrar imagenes, utilizare el API de random images*/}
      {/*<Image style={styles.img} source={{uri: "https://randomuser.me/api/portraits/men/1.jpg"}}/>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  }
});





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

