import React from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    StatusBar,
} from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Second Hand Sale</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // justifyContent: "center",
    },
});
