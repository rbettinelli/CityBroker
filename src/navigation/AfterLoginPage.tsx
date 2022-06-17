import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeTab from "../screens/HomeTab";
import LogoutTab from "../screens/LogoutTab";
import CountryTab from "../screens/CountryTab";
import SearchTab from "../screens/SearchTab";

const Tabs = createBottomTabNavigator();

const AfterLoginPage = (props: any) => {
  const { route, navigation } = props;
  const { username } = route.params;
  const un = username;

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="route-main"
        component={HomeTab}
        initialParams={{ username: un }}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="route-country"
        component={CountryTab}
        initialParams={{ username: un }}
        options={{
          title: "Country",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="pin" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="route-search"
        component={SearchTab}
        initialParams={{ username: un }}
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-find-outline" size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="route-logout"
        component={LogoutTab}
        initialParams={{ username: un }}
        options={{
          title: "Logout",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="logout" size={24} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AfterLoginPage;
