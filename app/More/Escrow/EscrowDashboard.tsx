import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Pressable
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../../assets/whiteback.svg";
import RightCarat from "../../../assets/rightcaratblue.svg";
import Escrowtotal from "../../../assets/escrowtotal.svg";
import Escrowactive from "../../../assets/escrowactive.svg";
import Escrowcompleted from "../../../assets/escrowcompleted.svg";
import Escrowdispute from "../../../assets/escrowdispute.svg";
import { useRouter } from "expo-router";
import BlueSignInButton from "@/components/BlueSignInButton";

const EscrowDashboard = () => {
  const { height, width } = Dimensions.get("window");
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const router = useRouter();

  const datas = [
    {
      id: 1,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 2,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 3,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 4,
      name: "Option 1",
      amount: "$1700"
    },
    {
      id: 5,
      name: "Option 1",
      amount: "$1700"
    }
  ];
  return (
    <View className="flex-1 bg-buttonprimary">
      <StatusBar hidden={false} style="light" />
      <SafeAreaView style={{ flex: 1, marginTop: statusBarHeight }}>
        <View
          className="bg-white"
          style={{ height: height, position: "relative" }}
        >
          <View
            style={{
              height: height * 0.25,
              //   borderBottomLeftRadius: 20,
              //   borderBottomRightRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingTop: height * 0.02,
              gap: height * 0.02
            }}
            className="bg-buttonprimary"
          >
            <View className="flex-row justify-between items-center mb-1">
              <TouchableOpacity onPress={() => router.push("/More/MoreList")}>
                <Back />
              </TouchableOpacity>
              <Text className="text-[20px] text-white">Escrow</Text>
              <Text></Text>
            </View>
            <View className="flex-col items-center justify-center mt-2">
              <Text className="text-white text-[12px]">Escrow balance</Text>
              <Text className="text-white text-[20px] font-bold">
                $1,300.05
              </Text>
            </View>
          </View>
          <View
            style={{ position: "absolute", marginTop: height * 0.17 }}
            className="flex-row justify-center w-[100%]"
          >
            <View
              style={{
                backgroundColor: "#FFFFFF",
                width: width * 0.9,
                height: height * 0.17,
                // borderRadius: 10,
                shadowColor: "#0A0A0A",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.04,
                shadowRadius: 4,
                elevation: 4
              }}
              className="flex-col"
            >
              <View
                style={{ borderBottomColor: "#EBEBEB", borderBottomWidth: 1 }}
                className="flex-row justify-between items-center h-[50%] px-5 py-2"
              >
                <Pressable
                  onPress={() => router.push("/More/Escrow/EscrowNotification")}
                >
                  <View className="flex-row gap-1 items-center">
                    <Escrowtotal />
                    <View className="flex-col gap-1">
                      <Text>Total</Text>
                      <Text>30</Text>
                    </View>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => router.push("/More/Escrow/EscrowActive")}
                >
                  <View className="flex-row gap-1 items-center">
                    <Escrowactive />
                    <View className="flex-col gap-1">
                      <Text>Active</Text>
                      <Text>11</Text>
                    </View>
                  </View>
                </Pressable>
              </View>
              <View className="flex-row justify-between items-center px-5 py-2">
                <Pressable
                  onPress={() => router.push("/More/Escrow/EscrowCompleted")}
                >
                  <View className="flex-row gap-1 items-center">
                    <Escrowcompleted />
                    <View className="flex-col gap-1">
                      <Text>Completed</Text>
                      <Text>30</Text>
                    </View>
                  </View>
                </Pressable>
                <Pressable
                  onPress={() => router.push("/More/Escrow/EscrowDispute")}
                >
                  <View className="flex-row gap-1 items-center">
                    <Escrowdispute />
                    <View className="flex-col gap-1">
                      <Text>Dispute</Text>
                      <Text>11</Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View className="flex-col mt-20">
            <View className="items-center mt-5">
              <BlueSignInButton
                title="Open Escrow"
                onPress={() => router.push('/More/Escrow/EscrowTypes')}
              />
            </View>
            <View className="flex-row justify-between items-center px-4 mt-4">
              <Text
                style={{ color: "#00091E" }}
                className="text-[14px] font-bold"
              >
                Recent transactions
              </Text>
              <Pressable
                onPress={() => router.push("/More/Escrow/EscrowNotification")}
              >
                <Text className="text-buttonprimary text-[12px]">See all</Text>
              </Pressable>
            </View>
            <View
              style={{
                height: height * 0.5,
                marginTop: 20,
                paddingHorizontal: 20
              }}
            >
              <FlatList
                data={datas}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View
                    className="flex-col gap-2"
                    style={{
                      borderBottomColor: "#EBEBEB",
                      borderBottomWidth: 1,
                      paddingBottom: 15
                    }}
                  >
                    <View className="flex-row justify-between items-center">
                      <View className="flex-col gap-2 items-start">
                        <Text
                          className="text-[12px]"
                          style={{ color: "#00091E" }}
                        >
                          19th April, 2022
                        </Text>
                        <Text
                          className="text-[12px]"
                          style={{ color: "#6E6E6E" }}
                        >
                          ID: 8731267890
                        </Text>
                      </View>
                      <View className="flex-col justify-end items-start">
                        <Text
                          className="text-[12px] mt-4"
                          style={{ color: "#6E6E6E" }}
                        >
                          Created on April 19th, 2022
                        </Text>
                      </View>
                    </View>
                    <View className="flex-row justify-between items-center">
                      <View className="flex-col gap-2 items-start">
                        <Text
                          className="text-[16px]"
                          style={{ color: "#00091E" }}
                        >
                          $5482.47
                        </Text>
                        <Text
                          className="text-[14px]"
                          style={{ color: "#323232" }}
                        >
                          Susan Autors
                        </Text>
                      </View>
                      <View className="flex-col justify-end items-start">
                        <View className="flex-row gap-1 items-center">
                          <Text className="text-[12px] mt-4 text-buttonprimary">
                            See details
                          </Text>
                          <RightCarat />
                        </View>
                      </View>
                    </View>
                  </View>
                )}
                // contentContainerStyle={{
                //     gap: 30
                //   }}
                ItemSeparatorComponent={() => (
                  <View style={{ marginTop: 30 }} />
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default EscrowDashboard;
