import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text, TextInput } from "react-native";
import styles from "../base/AppStyle.js";

const LoginPage = (props: any) => {
  const { route, navigation } = props;

  const [user, setUser] = useState("none");

  return (
    <View style={styles.wrapper}>
      <View style={styles.topBox}>
        <Image
          style={styles.imageDisplay}
          source={require("../../assets/log.jpg")}
        />
      </View>
      <View>
        <Text style={styles.textTitle}>City Info Broker Login</Text>
      </View>
      <View style={styles.loginBox}>
        <TextInput
          style={styles.input}
          placeholder="e-Mail"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(text) => {
            setUser(text);
          }}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.botBox}>
        <View style={styles.navButtonsWrapper}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.buttonFont}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("AfterLogin", { username: user });
            }}
          >
            <Text style={styles.buttonFont}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
function setState(arg0: { username: string }) {
  throw new Error("Function not implemented.");
}
