import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Redirect, Tabs } from "expo-router";
import CardIcon from "../../components/CardIcon";
import HomeIcon from "@/components/HomeIcon";
import AnalyticsIcon from "@/components/AnalyticsIcon";
import ProfileIcon from "@/components/ProfileIcon";
import { useAppContext } from "@/Context/useAppContext";

const TabsLayout = () => {
  const {isAuthenticated, checkUser} = useAppContext()

  useEffect(() => {
    checkUser();
  }, []);

  
  // if (isAuthenticated === undefined){
  //   return <Redirect href="/Auth/SignInPage" />;
  // }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#105CE2",
        tabBarStyle: {
          height: 60,
          paddingBottom: 10
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <HomeIcon
              width={24}
              height={24}
              fill={focused ? "#105CE2" : "#989AAF"}
            />
          )
        }}
      />
      <Tabs.Screen
        name="VirtualCard"
        options={{
          tabBarLabel: "Cards",
          tabBarIcon: ({ color, focused }) => (
            <CardIcon
              width={24}
              height={24}
              fill={focused ? "#105CE2" : "#989AAF"}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Analytics"
        options={{
          tabBarLabel: "Analytics",
          tabBarIcon: ({ color, focused }) => (
            <AnalyticsIcon
              width={24}
              height={24}
              // color=focused ? "#105CE2" : "#989AAF"}
              color={focused ? "#105CE2" : "#989AAF"}
            />
          )
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <ProfileIcon
              width={24}
              height={24}
              // color=focused ? "#105CE2" : "#989AAF"}
              color={focused ? "#105CE2" : "#989AAF"}
            />
          )
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
