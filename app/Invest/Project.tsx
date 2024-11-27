import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  Pressable
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import Projecting from "../../assets/project.svg";
import Dollar from "../../assets/dollarinvest.svg";
import Profile from "../../assets/profileinvest.svg";
import Days from "../../assets/daysinvest.svg";
import Lonely from "../../assets/lonely.svg";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";
import BlueSignInButton from "@/components/BlueSignInButton";
import InvestNow from "@/components/InvestNow";
import ApplyFundraise from "@/components/ApplyFundraise";
import { FlatList } from "react-native";

const Project = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [color, setColor] = useState(true);
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
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/Invest/FundraiseInput")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Wire ventures</Text>
            <Text></Text>
          </View>
          <View
            style={{ paddingHorizontal: 8, paddingBottom: height * 0.03 }}
            className="flex-1  gap-6"
          >
            <View
              style={{
                height: height * 0.15,
                width: width * 0.93,
                flexDirection: "column",
                justifyContent: "center",
                gap: 20
              }}
            >
              <View className="flex-col justify-center items-center">
                <Text className="text-buttonprimary text-[12px]">
                  Total amount raised
                </Text>
                <Text className="font-bold text-[25px] text-buttonprimary">
                  $12,900.67
                </Text>
              </View>
              <View className="flex-row items-center p-1 justify-between">
                <InvestNow
                  title="Apply for fundraise"
                  onPress={() => router.push("/Invest/FundraiseInput")}
                />
                <InvestNow
                  title="My investments"
                  onPress={() => router.push("/Invest/MyInvestment")}
                />
              </View>
            </View>
            <View className="flex-row justify-start items-center">
              <Text>Ending soon</Text>
            </View>
            <View>
              <Projecting width={"100%"} />
              <View className="flex-row justify-between px-10 mt-4">
                <View className="flex-col">
                  <Text className="text-[#606162] text-[14px]">
                    Project for students
                  </Text>
                  <Text className="text-black text-[14px] font-bold">
                    Amount : $32,900
                  </Text>
                </View>
                <Text className="text-buttonprimary text-[12px]">
                  View details
                </Text>
              </View>
              <View className="flex-row justify-between w-[75%] px-10 mt-4">
                <View className="flex-row">
                  <Dollar />
                  <Text>65%</Text>
                </View>
                <View className="flex-row">
                  <Profile />
                  <Text>65%</Text>
                </View>
                <View className="flex-row">
                  <Days />
                  <Text>65%</Text>
                </View>
              </View>
            </View>
            <View
              className="flex-row mb-4 mt-4"
              style={{
                backgroundColor: "#F2F4F7",
                height: height * 0.05,
                borderRadius: 6,
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Pressable
                className="flex-row items-center"
                onPress={() => setColor(true)}
                style={{
                  width: width * 0.45,
                  height: height * 0.047,
                  borderRadius: 6,
                  backgroundColor: color ? "#FFFFFF" : "#F2F4F7",
                  borderColor: color ? "#105CE2" : "#F2F4F7",
                  borderWidth: color ? 2 : 0,
                  justifyContent: "center"
                }}
              >
                <Text style={{ color: color ? "#105CE2" : "#98A2B3" }}>
                  My projects
                </Text>
              </Pressable>
              <Pressable
                className="flex-row items-center"
                onPress={() => setColor(false)}
                style={{
                  width: width * 0.45,
                  height: height * 0.047,
                  borderRadius: 6,
                  backgroundColor: !color ? "#FFFFFF" : "#F2F4F7",
                  borderColor: !color ? "#105CE2" : "#F2F4F7",
                  borderWidth: !color ? 2 : 0,
                  justifyContent: "center"
                }}
              >
                <Text style={{ color: !color ? "#105CE2" : "#98A2B3" }}>
                  Other projects
                </Text>
              </Pressable>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-[16px] text-black font-bold">
                200 projects
              </Text>
              <Pressable
                onPress={() => router.push("/Invest/SeeallMainProject")}
              >
                <Text className="text-buttonprimary">See all</Text>
              </Pressable>
            </View>
            <View
              // showsVerticalScrollIndicator={false}
              style={{
                height: height * 0.2,
                marginTop: 20,
                paddingHorizontal: 20
              }}
            >
              <FlatList
                data={datas}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    // onPress={() => router.push("/Invest/BuyandSell")}
                    onPress={() => {
                      if (color) {
                        router.push("/Invest/MyProjectDetails");
                      } else {
                        router.push("/Invest/OtherprojectDetails");
                      }
                    }}
                  >
                    <View className="flex-row justify-between">
                      <Lonely />
                      <View
                        style={{ width: width * 0.6 }}
                        className="flex-col w-[70%] gap-2"
                      >
                        <Text className="text-[16px] text-black font-bold">
                          Tech revolution
                        </Text>
                        <View
                          style={{
                            width: width * 0.6,
                            height: height * 0.01,
                            backgroundColor: "#DBD4D4",
                            borderRadius: 6
                          }}
                        >
                          <View
                            style={{
                              width: width * 0.4,
                              height: height * 0.01,
                              backgroundColor: "#105CE2",
                              borderRadius: 6
                            }}
                          ></View>
                        </View>
                        <View className="flex-row justify-between pl-2">
                          <View className="flex-row">
                            <Dollar />
                            <Text>65%</Text>
                          </View>
                          <View className="flex-row">
                            <Profile />
                            <Text>65%</Text>
                          </View>
                          <View className="flex-row">
                            <Days />
                            <Text>65%</Text>
                          </View>
                        </View>
                        <View className="flex-row justify-between items-center">
                          <Text className="text-[#6E6E6E] text-[12px]">
                            $1,200 out of $40,000
                          </Text>
                          <Text className="text-buttonprimary text-[12px]">
                            View details
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
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
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Project;
