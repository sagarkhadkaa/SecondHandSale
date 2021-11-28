import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import {
    ListItem,
    ListItemDeleteAction,
    ListItemSeparator,
} from "../components/lists";

const initialMessages = [
    {
        id: 1,
        title: "Hari Bahadur",
        description: "Hello, kati ho last price?",
        image: require("../assets/haribahadur.jpg"),
    },
    {
        id: 2,
        title: "Madan Bahadur",
        description: "Yo aajhai paucha ki nai?",
        image: require("../assets/madanbahadur.jpg"),
    },
];

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete the message from messages
        setMessages(messages.filter((m) => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction
                                onPress={() => handleDelete(item)}
                            />
                        )}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: "Madan Kaka",
                            description: "Maile kinchu, discount garnu paryo.",
                            image: require("../assets/madanbahadur.jpg"),
                        },
                    ]);
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
