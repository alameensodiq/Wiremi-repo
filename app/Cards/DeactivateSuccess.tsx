import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  ScrollView
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Forgotsuccess from "../../assets/forgotsuccess.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { clearStatefreezecard } from "@/Store/Reducers/FreezeCard";
import { clearStateunfreezecard } from "@/Store/Reducers/Unfreezecard";
import { GetCard } from "@/Store/Apis/GetCard";

const DeactivateSuccess = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { getcards, authenticatinggetcards } = useAppSelector(
    (state) => state.getcards
  );

  console.log(getcards);

  useEffect(() => {
    dispatch(clearStatefreezecard());
    dispatch(clearStateunfreezecard());
     dispatch(GetCard({ router: router.push }));
    return () => {
      dispatch(clearStatefreezecard());
      dispatch(clearStateunfreezecard());
    };
  }, []);
  return (
    <ScrollView className="flex-1 ">
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
                className="text-[18px] font-bold"
              >
                {getcards?.data?.status === "TERMINATED"
                  ? "Deactivate card"
                  : "Activate card"}
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
                  Successful
                </Text>
              </View>
              <View className="items-center">
                <Text className="text-forgotsuccesslight text-[13px]">
                  Your virtual card has been{" "}
                  {getcards?.data?.status === "TERMINATED"
                    ? "deactivated"
                    : "activated"}
                </Text>
                <Text className="text-forgotsuccesslight text-[13px]">
                  successfully.
                </Text>
              </View>
            </View>

            <View
              style={{ height: height * 0.2 }}
              className="items-center justify-center"
            >
              <BlueSignInButton
                title="Back to Home"
                onPress={() => router.push("/(PersonalAccount)/VirtualCard")}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default DeactivateSuccess;
