import React from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../base/AppStyle.js";

const Stack = createNativeStackNavigator();

const LandingPageMain = (props: any) => {
  const { navigation } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.openPageBox}>
        <Image
          style={styles.imageDisplay}
          source={require("../../assets/road.gif")}
        />
      </View>
      <View>
        <Text style={styles.textTitle}>Welcome To City Info Broker</Text>
      </View>
      <View style={styles.botBox}>
        <View style={styles.navButtonsWrapper}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push("SignUp");
            }}
          >
            <Text style={styles.buttonFont}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.push("Login");
            }}
          >
            <Text style={styles.buttonFont}>Logon</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LandingPageMain;
