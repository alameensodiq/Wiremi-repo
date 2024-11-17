import {
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
  Dimensions,
  StatusBar as RNStatusBar,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Actions from "../../assets/actions.svg";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";

const Analytics = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "#8080808C",
            paddingTop: height * 0.03,
            alignItems: "flex-end"
          }}
          onPress={() => setIsVisible(false)}
        >
          <View
            style={{
              width: "40%",
              backgroundColor: "white",
              borderRadius: 10
            }}
          >
            <View>
              <View
                style={{
                  borderBottomColor: "#8080808C",
                  borderBottomWidth: 1,
                  padding: 10
                }}
              >
                <Pressable
                  onPress={() => {
                    router.push("/Cards/ChangeCardPin");
                    setIsVisible(!isVisible);
                  }}
                >
                  <Text>Set budget</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-4"
      >
        <View className="flex-row justify-between items-center mb-1">
          {/* <TouchableOpacity onPress={() => router.push("/Cards/CreateCard")}>
            <Back />
          </TouchableOpacity> */}
          <Text/>
          <Text className="text-[20px] text-pagetitle">Analytics</Text>
          <Pressable
            onPress={() => {
              setIsVisible(!isVisible);
              console.log("sodiq");
            }}
          >
            <Actions />
          </Pressable>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Analytics;
