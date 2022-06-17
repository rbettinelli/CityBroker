import React from "react";
import { Image, TouchableOpacity, View, Text, Alert } from "react-native";
import PageHeader from "../components/Header";
import styles from "../base/AppStyle.js";

const LogoutTab = (props: any) => {
  const { route, navigation } = props;
  const { username } = route.params;

  const signOut = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Landing" }],
    });
  };

  return (
    <View style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>City Broker - {username} </Text>
      </PageHeader>
      <View style={styles.topBox}>
        <Image
          style={styles.imageDisplay}
          source={require("../../assets/out.jpg")}
        />
      </View>
      <View style={styles.loginBox}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            Alert.alert("Logout", "Are you Sure?", [
              {
                text: "Yes",
                onPress: () => {
                  //console.log("User ok");
                  signOut();
                },
              },
              {
                text: "No",
                onPress: () => {
                  console.log("User reject");
                },
              },
            ]);
          }}
        >
          <Text style={styles.buttonFont}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogoutTab;
