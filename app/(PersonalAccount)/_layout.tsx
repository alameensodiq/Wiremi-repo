import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import CardIcon from "../../components/CardIcon";


const TabsLayout = () => {
    return (
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#105CE2",
          tabBarStyle: {
            height: 60,
            paddingBottom: 10, 
        },
        }}
      >
        <Tabs.Screen
          name="Dashboard"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, focused }) => (
              <CardIcon
              width={24} 
              height={24}
              fill={focused ? "#105CE2" : "#989AAF"} 
              />
            )
          }}
        />
      </Tabs>
    );
  };
  
  export default TabsLayout;