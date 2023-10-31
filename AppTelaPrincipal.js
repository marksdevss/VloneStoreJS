import { View, Text, StyleSheet, Image, Dimensions, Button, TextInput, Alert, title, Linking } from "react-native"

export default function AppTelaPrincipal() {

    return (
       
       <View style={styles.container}>

            <Image
                source={(require("./assets/logo.jpg"))}
                style={styles.logo}
            />

            <Text style={styles.titulo}>VloneStore</Text>





        </View>
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },

    logo: {
        width: "42%",
        height: "20%",
        borderRadius: "55px",
        borderCurve: "circular",
        marginBottom: "22px",
    },

    titulo: {
        fontFamily: 'Didot, serif',
        fontSize: "44px",
        fontWeight: "500",
        marginTop: "10%"
    },


    Button, title: {
        color: 'black',
        textAlign: 'left',
        marginTop: "50%"
    },

    campoum: {

        color: 'white',
        textAlign: 'center',
        marginTop: '20%',
        marginBottom: '5%',
        backgroundColor: "black",
        width: "59%",
        height: '5%',
        borderCurve: "circular",
        borderRadius: '22px'
    },

    campodois: {

        color: 'white',
        textAlign: 'center',
        marginTop: '20%',
        marginBottom: '5%',

        marginTop: '10%',
        backgroundColor: "black",
        width: "59%",
        height: '5%',
        borderCurve: "circular",
        borderRadius: '22px'
    }

})