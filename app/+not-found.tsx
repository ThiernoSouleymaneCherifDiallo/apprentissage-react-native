import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function NotFound() {
    return (
        <>
            <Stack.Screen name="not-found" options={{title: "Page non trouvée"}} />
            <View style={styles.container}>
                <Text style={styles.text}>Page non trouvée</Text>
                <Link href="/" style={styles.button}>Retour à l'accueil</Link>
            </View>
        </>
    );
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
    },
    button: {
        color: "#fff",
        fontSize: 20,
        textDecorationLine: "underline",
    },
})