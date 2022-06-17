import React from "react";
import { View, Text } from "react-native";
import PageHeader from "../components/Header";
import styles from "../base/AppStyle.js";

const HomeTab = (props: any) => {
  const { route, navigation } = props;
  const { username } = route.params;

  return (
    <View style={styles.wrapper}>
      <PageHeader>
        <Text style={styles.textTitle}>City Broker - {username} </Text>
      </PageHeader>
      <Text> Welcome to City Broker.. You can do.. </Text>
    </View>
  );
};

export default HomeTab;
