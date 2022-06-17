import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import PageHeader from "../components/Header";
import styles from "../base/AppStyle.js";

const CountryTab = (props: any) => {
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

  const pressHandler = (name: string) => {
    console.log(name);
  };

  return (
    <View style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>City Broker - {username} </Text>
      </PageHeader>
      <View>
        <FlatList
          data={country}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.name)}>
              <Text style={styles.item}>{item.name} </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default CountryTab;
