import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import Forgotsuccess from "../../assets/forgotsuccess.svg";
import BlueSignInButton from "@/components/BlueSignInButton";

const RegularInstanceSuccess = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const ids = +id;
  console.log(ids);
  return (
    <View className="flex-1 ">
      <View className="flex-1 bg-white">
        <StatusBar hidden={false} style="dark" />
        <SafeAreaView
          className="justify-between"
          style={{
            flex: 1,
            marginTop: statusBarHeight,
            paddingTop: height * 0.02
          }}
        >
          <View
            style={{ paddingHorizontal: 8, paddingBottom: height * 0.03 }}
            className="flex-1  justify-between gap-6"
          >
            <View className="flex-row justify-center items-center">
              <Text
                style={{ color: "#242329" }}
                className="text-[20px] font-bold"
              >
                Edit Instance
              </Text>
            </View>
            <View
              style={{ height: height * 0.7 }}
              className="flex-col items-center justify-center gap-6"
            >
              <View className="flex-col gap-3">
                <Forgotsuccess />
                <Text
                  style={{ color: "#1E1B39" }}
                  className="text text-[18px] font-bold"
                >
                  Successful!
                </Text>
              </View>
              <View className="flex-col items-center">
                <Text className="text-forgotsuccesslight text-[13px]">
                  Your have successfully edited your savings
                </Text>
                <Text className="text-forgotsuccesslight text-[13px]">
                  instance.
                </Text>
              </View>
            </View>

            <View className="items-center justify-between flex-row p-4">
              <BlueSignInButton
                title="View"
                onPress={() =>
                  router.push(`/Save/RegularSavingsSummary?id=${ids}`)
                }
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default RegularInstanceSuccess;
