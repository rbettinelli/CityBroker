import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import PageHeader from "../components/Header";
import styles from "../base/AppStyle.js";

const SearchTab = (props: any) => {
  const { route, navigation } = props;
  const { username } = route.params;

  // Replace this with API...
  const [country, setCountry] = useState([
    { name: "Canada", id: "1" },
    { name: "USA", id: "2" },
    { name: "UK", id: "3" },
    { name: "Australia", id: "4" },
    { name: "Mexico", id: "5" },
  ]);

  const setQuery = (text: string) => {
    //Search Function.
    console.log(text);
  };

  return (
    <View style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>City Broker - {username} </Text>
      </PageHeader>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={(text) => setQuery(text)}
        ></TextInput>
      </View>
    </View>
  );
};

export default SearchTab;
