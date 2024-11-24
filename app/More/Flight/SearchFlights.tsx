import {
  View,
  Text,
  Dimensions,
  StatusBar as RNStatusBar,
  TouchableOpacity,
  Pressable,
  ScrollView
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../../assets/whiteback.svg";
import DownCarat from "../../../assets/downcarat.svg";
import Location from "../../../assets/location.svg";
import Filter from "../../../assets/flightfilter.svg";
import FlightProfile from "../../../assets/flightprofile.svg";
import MiddleFilter from "../../../assets/middlefilter.svg";
import Arik from "../../../assets/arik.svg";
import FlightLogo from "../../../assets/flightlogo.svg";
import BlueSignInButton from "@/components/BlueSignInButton";

const SearchFlights = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#105CE2" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="light" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight
        }}
        className="gap-3"
      >
        <View
          className="relative"
          style={{ height: height * 0.4, paddingHorizontal: width * 0.03 }}
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/More/Flight/FlightDashboard")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-white">Result search</Text>
            <Text></Text>
          </View>
          <View className="flex-row justify-between items-center px-3 mt-3">
            <View className="flex-col justify-between gap-2">
              <Text style={{ color: "#FFFFFF", fontSize: 13 }}>07:00AM</Text>
              <Text style={{ color: "#FFFFFF", fontSize: 10 }}>
                Alaska United States
              </Text>
            </View>
            <View className="flex-col gap-1 items-center">
              <View>
                <Text style={{ color: "#FFFFFF", fontSize: 10 }}>
                  Thur March 6th, 2024
                </Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Text style={{ color: "#777A7E" }}>--------------</Text>
                <FlightLogo />
                <Text style={{ color: "#777A7E" }}>--------------</Text>
              </View>
              <View>
                <Text style={{ color: "#FFFFFF", fontSize: 10 }}>
                  7 hours 20 minutes
                </Text>
              </View>
            </View>
            <View className="flex-col justify-between gap-2">
              <Text style={{ color: "#FFFFFF", fontSize: 13 }}>07:00AM</Text>
              <Text style={{ color: "#FFFFFF", fontSize: 10 }}>
                Banda Badru
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{ width: width }}
          className="flex-row justify-center items-center absolute top-60 z-20"
        >
          <View
            style={{
              height: height * 0.4,
              width: width * 0.9,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
              paddingHorizontal: 10,
              paddingTop: 20
            }}
            className="bg-white"
          >
            <View className="flex-row justify-between items-center">
              <View className="flex-row justify-center items-center gap-2">
                <View
                  className="flex-row justify-center items-center"
                  style={{
                    width: 86,
                    height: 33,
                    backgroundColor: "#ECEDEF",
                    borderRadius: 10
                  }}
                >
                  <Text style={{ color: "#00091E" }} className="text-[13px]">
                    One way
                  </Text>
                </View>
                <View
                  className="flex-row justify-center items-center"
                  style={{
                    width: 86,
                    height: 33,
                    backgroundColor: "#ffffff",
                    borderRadius: 10,
                    borderColor: "#EBEBEB",
                    borderWidth: 1
                  }}
                >
                  <Text style={{ color: "#B3B4B5" }} className="text-[13px]">
                    Round trip
                  </Text>
                </View>
              </View>
              <View
                className="flex-row justify-center items-center"
                style={{
                  width: 66,
                  height: 33,
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                  borderColor: "#EBEBEB",
                  borderWidth: 1
                }}
              >
                <FlightProfile />
                <Text style={{ color: "#B3B4B5" }} className="text-[13px]">
                  4
                </Text>
              </View>
            </View>
            <View className="flex-col mt-4 relative">
              <Pressable style={{zIndex: 100}} onPress={() => router.push('/More/Flight/FlightDetails')}>
                <MiddleFilter
                  style={{
                    top: height * 0.105,
                    left: width * 0.4,
                    zIndex: 100
                  }}
                  className="absolute"
                />
              </Pressable>
              <View className="flex-row pl-1 gap-2">
                <View
                  className="flex-col justify-between"
                  style={{
                    width: width * 0.4,
                    height: height * 0.09,
                    backgroundColor: "#FBFAFA",
                    borderRadius: 10,
                    borderColor: "#EBEBEB",
                    borderWidth: 1,
                    padding: 13
                  }}
                >
                  <Text style={{ color: "#00091E" }} className="text-[13px]">
                    From
                  </Text>
                  <Text style={{ color: "#606162", fontSize: 11 }}>
                    Alaska, United States
                  </Text>
                </View>
                <View
                  className="flex-col justify-between"
                  style={{
                    width: width * 0.4,
                    height: height * 0.09,
                    backgroundColor: "#FBFAFA",
                    borderRadius: 10,
                    borderColor: "#EBEBEB",
                    borderWidth: 1,
                    padding: 13
                  }}
                >
                  <Text style={{ color: "#00091E" }} className="text-[13px]">
                    To
                  </Text>
                  <Text style={{ color: "#606162", fontSize: 11 }}>
                    Berlin, German
                  </Text>
                </View>
              </View>
              <View className="flex-row  pl-1 gap-2 pt-1">
                <View
                  className="flex-col justify-between"
                  style={{
                    width: width * 0.4,
                    height: height * 0.09,
                    backgroundColor: "#FBFAFA",
                    borderRadius: 10,
                    borderColor: "#EBEBEB",
                    borderWidth: 1,
                    padding: 13
                  }}
                >
                  <Text style={{ color: "#00091E" }} className="text-[13px]">
                    Departure
                  </Text>
                  <Text style={{ color: "#606162", fontSize: 11 }}>
                    March 6th
                  </Text>
                </View>
                <View
                  className="flex-col justify-between"
                  style={{
                    width: width * 0.4,
                    height: height * 0.09,
                    backgroundColor: "#FBFAFA",
                    borderRadius: 10,
                    borderColor: "#EBEBEB",
                    borderWidth: 1,
                    padding: 13
                  }}
                >
                  <Text style={{ color: "#00091E" }} className="text-[13px]">
                    Return
                  </Text>
                  <Text style={{ color: "#606162", fontSize: 11 }}>
                    March 12th
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            // height: height * 0.6,
            paddingTop: height * 0.25,
            backgroundColor: "#ffffff",
            paddingHorizontal: width * 0.03,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
          }}
        >
          <View className="flex-row items-center justify-between">
            <Text className="text-darktext text-[14px] font-bold">
              Result Flight
            </Text>
            <Pressable
              onPress={() => router.push("/More/Agents/AgentTransactions")}
            >
              <Text className="text-buttonprimary text-[12px]">See all</Text>
            </Pressable>
          </View>
          <View className="flex-col mt-10 pb-4">
            <View className="flex-row justify-between items-center mt-3 px-20">
              <View className="flex-row items-center">
                <Arik />
                <View className="flex-col">
                  <Text style={{ color: "#242329", fontSize: 12 }}>
                    Arik air
                  </Text>
                  <Text style={{ color: "#9CA9A3", fontSize: 10 }}>
                    LA23146278
                  </Text>
                </View>
              </View>
              <View className="flex-col">
                <Text style={{ color: "#105CE2", fontSize: 12 }}>3 seats</Text>
                <Text style={{ color: "#9CA9A3", fontSize: 10 }}>
                  7 hours 20 minutes
                </Text>
              </View>
            </View>
            <View className="flex-row justify-between items-center px-3 mt-3">
              <View className="flex-col justify-between gap-2">
                <Text style={{ color: "#6E6E6E", fontSize: 13 }}>07:00AM</Text>
                <Text style={{ color: "#413D43", fontSize: 12 }}>BNA</Text>
                <Text style={{ color: "#6E6E6E", fontSize: 10 }}>
                  Banda Aceh
                </Text>
              </View>
              <View className="flex-col gap-1 items-center">
                <View className="flex-row items-center gap-2">
                  <Text style={{ color: "#777A7E" }}>--------------</Text>
                  <FlightLogo />
                  <Text style={{ color: "#777A7E" }}>--------------</Text>
                </View>
                <View>
                  <Text style={{ color: "#A4A0A0", fontSize: 10 }}>
                    7 hours 20 minutes
                  </Text>
                </View>
              </View>
              <View className="flex-col justify-between gap-2">
                <Text style={{ color: "#6E6E6E", fontSize: 13 }}>07:00AM</Text>
                <Text style={{ color: "#413D43", fontSize: 12 }}>BNB</Text>
                <Text style={{ color: "#6E6E6E", fontSize: 10 }}>
                  Banda Badru
                </Text>
              </View>
            </View>
            <View className="flex-row justify-center items-center gap-5 mt-2">
              <View className="flex-col justify-between items-center">
                <Text style={{ color: "#C6C6CB" }}>Airline</Text>
                <Text style={{ color: "#6E6E6E" }}>Arik air</Text>
              </View>
              <View
                style={{
                  height: height * 0.04,
                  width: 1,
                  backgroundColor: "#606162"
                }}
              ></View>
              <View className="flex-col justify-between items-center">
                <Text style={{ color: "#C6C6CB" }}>Flight No</Text>
                <Text style={{ color: "#6E6E6E" }}>LA 21</Text>
              </View>
              <View
                style={{
                  height: height * 0.04,
                  width: 1,
                  backgroundColor: "#606162"
                }}
              ></View>
              <View className="flex-col justify-between items-center">
                <Text style={{ color: "#C6C6CB" }}>Class</Text>
                <Text style={{ color: "#6E6E6E" }}>Economy</Text>
              </View>
            </View>
          </View>
          <View className="flex-col mt-10 pb-4">
            <View className="flex-row justify-between items-center mt-3 px-20">
              <View className="flex-row items-center">
                <Arik />
                <View className="flex-col">
                  <Text style={{ color: "#242329", fontSize: 12 }}>
                    Arik air
                  </Text>
                  <Text style={{ color: "#9CA9A3", fontSize: 10 }}>
                    LA23146278
                  </Text>
                </View>
              </View>
              <View className="flex-col">
                <Text style={{ color: "#105CE2", fontSize: 12 }}>3 seats</Text>
                <Text style={{ color: "#9CA9A3", fontSize: 10 }}>
                  7 hours 20 minutes
                </Text>
              </View>
            </View>
            <View className="flex-row justify-between items-center px-3 mt-3">
              <View className="flex-col justify-between gap-2">
                <Text style={{ color: "#6E6E6E", fontSize: 13 }}>07:00AM</Text>
                <Text style={{ color: "#413D43", fontSize: 12 }}>BNA</Text>
                <Text style={{ color: "#6E6E6E", fontSize: 10 }}>
                  Banda Aceh
                </Text>
              </View>
              <View className="flex-col gap-1 items-center">
                <View className="flex-row items-center gap-2">
                  <Text style={{ color: "#777A7E" }}>--------------</Text>
                  <FlightLogo />
                  <Text style={{ color: "#777A7E" }}>--------------</Text>
                </View>
                <View>
                  <Text style={{ color: "#A4A0A0", fontSize: 10 }}>
                    7 hours 20 minutes
                  </Text>
                </View>
              </View>
              <View className="flex-col justify-between gap-2">
                <Text style={{ color: "#6E6E6E", fontSize: 13 }}>07:00AM</Text>
                <Text style={{ color: "#413D43", fontSize: 12 }}>BNB</Text>
                <Text style={{ color: "#6E6E6E", fontSize: 10 }}>
                  Banda Badru
                </Text>
              </View>
            </View>
            <View className="flex-row justify-center items-center gap-5 mt-2">
              <View className="flex-col justify-between items-center">
                <Text style={{ color: "#C6C6CB" }}>Airline</Text>
                <Text style={{ color: "#6E6E6E" }}>Arik air</Text>
              </View>
              <View
                style={{
                  height: height * 0.04,
                  width: 1,
                  backgroundColor: "#606162"
                }}
              ></View>
              <View className="flex-col justify-between items-center">
                <Text style={{ color: "#C6C6CB" }}>Flight No</Text>
                <Text style={{ color: "#6E6E6E" }}>LA 21</Text>
              </View>
              <View
                style={{
                  height: height * 0.04,
                  width: 1,
                  backgroundColor: "#606162"
                }}
              ></View>
              <View className="flex-col justify-between items-center">
                <Text style={{ color: "#C6C6CB" }}>Class</Text>
                <Text style={{ color: "#6E6E6E" }}>Economy</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SearchFlights;
