import {
  View,
  Text,
  Dimensions,
  StatusBar as RNStatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Back from "../../../assets/Back.svg";
import { useRouter } from "expo-router";
import FlightLogo from "../../../assets/flightlogo.svg";
import Arik from "../../../assets/arik.svg";
import BlueSignInButton from "@/components/BlueSignInButton";

const FlightDetails = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [number, setNumber] = useState<number>(0);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-6"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/More/Flight/SearchFlights")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Flight details</Text>
          <Text></Text>
        </View>
        <View className="flex-col mt-10 pb-4">
          <View className="flex-row justify-between items-center mt-3 px-20">
            <View className="flex-row items-center">
              <Arik />
              <View className="flex-col">
                <Text style={{ color: "#242329", fontSize: 12 }}>Arik air</Text>
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
              <Text style={{ color: "#6E6E6E", fontSize: 10 }}>Banda Aceh</Text>
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
        <View className="flex-col gap-4">
          <Text style={{ fontSize: 14, color: "#00091E" }}>Select seats</Text>
          <View className="w-full">
            <FlatList
              data={data}
              //   keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <Pressable onPress={() => setNumber(index + 1)}>
                  <View
                    className="flex-col items-center pb-1"
                    style={{
                      borderBottomColor:
                        number === index + 1 ? "#105CE2" : "#606162",
                      borderBottomWidth: 1
                    }}
                  >
                    <Text
                      style={{
                        color: number === index + 1 ? "#105CE2" : "#606162"
                      }}
                    >
                      Seat
                    </Text>
                    <Text
                      style={{
                        color: number === index + 1 ? "#105CE2" : "#606162"
                      }}
                    >
                      {index + 1}
                    </Text>
                  </View>
                </Pressable>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                gap: 40
              }}
              ItemSeparatorComponent={() => <View style={{ width: 2 }} />}
            />
          </View>
        </View>
        <View>
          <View className="flex-row justify-between items-center px-5">
            <View className="flex-row items-center gap-2">
              <View
                style={{
                  backgroundColor: "#105CE2",
                  width: 20,
                  height: 20,
                  borderRadius: 2
                }}
              ></View>
              <Text style={{ color: "#606162" }}>Selected</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <View
                style={{
                  backgroundColor: "#6EA28A",
                  width: 20,
                  height: 20,
                  borderRadius: 2
                }}
              ></View>
              <Text style={{ color: "#606162" }}>Booked</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <View
                style={{
                  backgroundColor: "#BEE0FE",
                  width: 20,
                  height: 20,
                  borderRadius: 2
                }}
              ></View>
              <Text style={{ color: "#606162" }}>Available</Text>
            </View>
          </View>
          <View className="flex-row justify-between gap-2 px-5 mt-5">
            <View
              className="flex-col items-center pb-1 w-[20%]"
              style={{
                borderBottomColor: "#606162",
                borderBottomWidth: 1
              }}
            >
              <Text
                style={{
                  color: "#5F5F5F",
                  fontSize: 16
                }}
              >
                A
              </Text>
            </View>
            <View
              className="flex-col items-center w-[20%] pb-1"
              style={{
                borderBottomColor: "#606162",
                borderBottomWidth: 1
              }}
            >
              <Text
                style={{
                  color: "#5F5F5F",
                  fontSize: 16
                }}
              >
                B
              </Text>
            </View>
            <View
              className="flex-col items-center w-[20%] pb-1"
              style={{
                borderBottomColor: "#606162",
                borderBottomWidth: 1
              }}
            >
              <Text
                style={{
                  color: "#5F5F5F",
                  fontSize: 16
                }}
              >
                C
              </Text>
            </View>
            <View
              className="flex-col items-center w-[20%] pb-1"
              style={{
                borderBottomColor: "#606162",
                borderBottomWidth: 1
              }}
            >
              <Text
                style={{
                  color: "#5F5F5F",
                  fontSize: 16
                }}
              >
                D
              </Text>
            </View>
          </View>
          <View className="flex-row justify-between gap-2 px-5 mt-5">
            <View className="flex-col gap-3">
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#105CE2",
                  borderRadius: 5
                }}
              ></View>
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#BEE0FE",
                  borderRadius: 5
                }}
              ></View>
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#BEE0FE",
                  borderRadius: 5
                }}
              ></View>
            </View>
            <View className="flex-col gap-3">
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#105CE2",
                  borderRadius: 5
                }}
              ></View>
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#BEE0FE",
                  borderRadius: 5
                }}
              ></View>
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#BEE0FE",
                  borderRadius: 5
                }}
              ></View>
            </View>
            <View className="flex-col gap-3">
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#105CE2",
                  borderRadius: 5
                }}
              ></View>
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#BEE0FE",
                  borderRadius: 5
                }}
              ></View>
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#BEE0FE",
                  borderRadius: 5
                }}
              ></View>
            </View>
            <View className="flex-col gap-3">
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#105CE2",
                  borderRadius: 5
                }}
              ></View>
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#BEE0FE",
                  borderRadius: 5
                }}
              ></View>
              <View
                style={{
                  width: width * 0.1,
                  height: height * 0.05,
                  backgroundColor: "#BEE0FE",
                  borderRadius: 5
                }}
              ></View>
            </View>
          </View>
        </View>
        <View className="items-center">
            <BlueSignInButton title="Proceed" onPress={() => router.push('/More/Flight/FlightDetailsAmount')} />
          </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default FlightDetails;
