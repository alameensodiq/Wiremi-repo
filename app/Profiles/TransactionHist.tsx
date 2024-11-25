import {
    View,
    Text,
    SectionList,
    Dimensions,
    StatusBar as RNStatusBar,
    Pressable
  } from "react-native";
  import React from "react";
  import Sendheader from "../../assets/sendheading.svg";
  import { TouchableOpacity } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { StatusBar } from "expo-status-bar";
  import { useRouter } from "expo-router";
  import NotificationSearchLabel from "@/components/NotificaionSearchLabel";
  import Filter from "../../assets/filter.svg";
  import Back from "../../assets/Back.svg";
  
  const TransactionHist = () => {
    const { height, width } = Dimensions.get("window");
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const router = useRouter();
  
    const DATA = [
      {
        title: "Today",
        data: ["Apple", "Banana", "Orange", "Mango", "Banana"]
      },
      {
        title: "Tomorrow",
        data: ["Carrot", "Broccoli", "Spinach"]
      }
    ];
    return (
      <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
        <StatusBar hidden={false} style="dark" />
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: statusBarHeight,
            paddingHorizontal: width * 0.03
          }}
          className="gap-6"
        >
          <View>
            <View className="flex-row justify-between items-center mb-1">
              <TouchableOpacity
                onPress={() => router.push("/Profile")}
              >
                <Back />
              </TouchableOpacity>
              <Text className="text-[20px] text-pagetitle">Transaction history</Text>
              <Text></Text>
            </View>
            <View className="flex-row">
              <NotificationSearchLabel placeholder="Search" />
              <Filter />
            </View>
            <View style={{ height: height * 0.9, paddingTop: 10 }}>
              <SectionList
                sections={DATA}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <View className="flex-col gap-2">
                      <View className="flex-row justify-between items-center">
                        <View className="flex-row gap-1">
                          <Sendheader />
                          <View className="flex-col gap-1 justify-center items-start">
                            <Text className="text-[14px] text-darktext font-bold">
                              Transfer to Mike Doe
                            </Text>
                            <Text className="text-[12px] text-transdate">
                              Sep 2nd, 7:45am
                            </Text>
                          </View>
                        </View>
                        <View className="flex-col justify-center items-center">
                          <Text className="text-[14px] text-darktext">$90</Text>
                          <Text className="text-[12px] text-successtrans">
                            Successful
                          </Text>
                        </View>
                      </View>
                      <View className="flex-row justify-end">
                        <View
                          style={{ width: width * 0.8, height: height * 0.001 }}
                          className="bg-faintline"
                        ></View>
                      </View>
                    </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <Text className="text-[12px] text-sectionheader">{title}</Text>
                )}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      height: 16
                    }}
                  />
                )}
                SectionSeparatorComponent={() => (
                  <View
                    style={{
                      height: 26
                    }}
                  />
                )}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  };
  
  export default TransactionHist;
  