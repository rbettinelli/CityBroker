import React from "react";
import { View } from "react-native";

const PageHeader = (props: any) => {
  const { username, children } = props;
  return <View>{children}</View>;
};

export default PageHeader;
