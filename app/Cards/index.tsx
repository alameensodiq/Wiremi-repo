import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Virtual from "../../assets/virtualcard.svg";
import skipOne from "@/assets/skipOne.png";
import BlueSignInButton from "@/components/BlueSignInButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { GetCard } from "@/Store/Apis/GetCard";
import Back from "../../assets/Back.svg";
import { clearStategetcard } from "@/Store/Reducers/GetCard";

const VirtualCard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { getcards, authenticatinggetcards } = useAppSelector(
    (state) => state.getcards
  );

  console.log(getcards);

  useEffect(() => {
    dispatch(GetCard({ router: router.push }));

    return () => {};
  }, []);
  return (
    <ScrollView // style={{ backgroundColor: "#ffffff" }} 
    className="flex-1">
      <StatusBar hidden={true} style="dark" />
        {authenticatinggetcards && (
          <View
            style={{ height: height, width: width }}
            className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
          >
            <ActivityIndicator size={200} color="#ffffff" />
          </View>
        )}
        <ImageBackground style={{height: height}} source={skipOne} resizeMode="cover" className="flex-1">
          <View style={{height: height}}  className="justify-between">
            <View className="flex-row justify-between items-center mb-1">
              <TouchableOpacity onPress={() => router.push("/VirtualCard")}>
                <Back />
              </TouchableOpacity>
              <Text></Text>
              {/* <Text></Text> */}
              {/* <Text className="text-[20px] text-pagetitle">Virtual Cards</Text> */}
              <Text></Text>
            </View>
            {/* <View>
            <Text style={{ color: "#00091E" }} className="text-[14px]">
              Create your own virtual card for easy transactions
            </Text>
          </View> */}
            {/* <View style={{ height: height * 0.6 }} className="items-center">
            <Virtual />
          </View> */}
            <View className="items-center justify-center mb-4">
              <BlueSignInButton
                title="Proceed"
                onPress={() => {
                  getcards?.status
                    ? router.push("/Cards/MyCard")
                    : router.push("/Cards/CreateCard");
                }}
              />
            </View>
          </View>
        </ImageBackground>
    </ScrollView>
  );
};

export default VirtualCard;
