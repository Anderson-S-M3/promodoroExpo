import "react-native-gesture-handler";

import React from "react";

import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TaskIcon, TimerIcon } from "./IconsNavigator";

import Home from "../../screens/home";
import Task from "../../screens/task";

import { colors } from "../../styles/global";
import { CountDownContext } from "../../contexts/CountDownContext";

export default function Navigator() {
  const { active } = React.useContext(CountDownContext);
  const Tab = createBottomTabNavigator();

  function Tabs() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.boldBlue,
          inactiveTintColor: colors.boldGrey,

          tabStyle: {
            backgroundColor: colors.grey,
          },
          showLabel: false,

          style: {
            borderTopWidth: 0,

            marginBottom: 8,
            marginTop: 8,
            elevation: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <TimerIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Task"
          component={Task}
          options={{
            tabBarIcon: ({ color }) => <TaskIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <View
        style={{
          height: "100%",
          backgroundColor: colors.grey,
        }}
      >
        {active ? <Home /> : <Tabs />}
      </View>
    </NavigationContainer>
  );
}
