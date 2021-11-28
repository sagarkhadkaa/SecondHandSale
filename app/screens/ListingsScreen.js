import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
    {
        id: 1,
        title: "Nike shoe for sale",
        price: 1200,
        image: require("../assets/nike-shoe.jpg"),
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 10000,
        image: require("../assets/couch.jpg"),
    },
    {
        id: 3,
        title: "Acustic Guitar like new",
        price: 4000,
        image: require("../assets/acustic-guitar.jpg"),
    },
    {
        id: 4,
        title: "Northface jacket in great condition",
        price: 1200,
        image: require("../assets/northface-jacket.jpg"),
    },
    {
        id: 5,
        title: "Red Shoe",
        price: 1100,
        image: require("../assets/red-shoe.jpg"),
    },
    {
        id: 6,
        title: "Fashionable shirt",
        price: 900,
        image: require("../assets/shirt.jpg"),
    },
    {
        id: 7,
        title: "Galaxy s21 ultra",
        price: 20000,
        image: require("../assets/galaxy-s21-ultra.jpg"),
    },
    {
        id: 8,
        title: "Brown Jacket like New",
        price: 2000,
        image: require("../assets/brown-jacket.jpg"),
    },
];

function ListingsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"Rs " + item.price}
                        image={item.image}
                        onPress={() =>
                            navigation.navigate(routes.LISTING_DETAILS, item)
                        }
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

export default ListingsScreen;
