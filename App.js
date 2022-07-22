import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {

    const [items, setItems] = useState([

        {id: 1, text: "Milk"},
        {id: 2, text: "Eggs"},
        {id: 3, text: "Bread"},
        {id: 4, text: "Juice"},
    ]);


    //De esta forma borro elementos de un arreglo de estados
    const deleteItem = (id) => {

        setItems(previousItem => {

            return previousItem.filter(item => item.id !== id);
        })
    };

    const addItem = (text) => {

        //Validacion para que no se pueda agregar un articulo con texto vacio

        if (!text) {

            //De esta forma envio un mensaje de error en react native
            Alert.alert("Error", "Please enter an item");
        } else {

            setItems(previousItem => {

                return [{id: 5, text}, ...previousItem];
            });
        }
    };

    //Una de las primera diferencias entre react native y react, es que aqui en el return no puedo utilizar elementos html
    //Debo de utilizar los componentes de react native tales como view y text
    return (

        //  View es el componente mas importante de react native para desarrollar ui :
        //  View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.
        //  View maps directly to the native view equivalent on whatever platform React Native is running on,
        //  whether that is a UIView, <div>, android.view, etc.
        <View style={{flex: 1}}>
            <Header title={"Shopping List"}/>

            <AddItem addItem={addItem}/>
            {/*Manejamos la visualizacion de lista de datos mediante flatList, aqui no utilizamos map como en react */}
            <FlatList data={items} renderItem={({item}) => (
                <ListItem item={item} deleteItem={deleteItem}/>
            )}/>

            {/*De esta forma utilizo el componente para mostrar imagenes, utilizare el API de random images*/}
            {/*<Image style={styles.img} source={{uri: "https://randomuser.me/api/portraits/men/1.jpg"}}/>*/}

            {/*Component to control the app's status bar. The status bar is the zone,
            typically at the top of the screen, that displays the current time, Wi-Fi and cellular network information*/}
            <StatusBar style="auto"/>
        </View>
    );
}

