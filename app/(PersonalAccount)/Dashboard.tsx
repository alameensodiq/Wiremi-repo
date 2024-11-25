import {
  View,
  Text,
  // SafeAreaView,
  Dimensions,
  StatusBar as RNStatusBar,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Notification from "../../assets/notification.svg";
import Barcode from "../../assets/barcode.svg";
import pics from "../../assets/pics.png";
import USD from "../../assets/usa.svg";
import Downcarat from "../../assets/downcarat.svg";
import Dashboardeye from "../../assets/dashboardeye.svg";
import Save from "../../assets/save.svg";
import Loan from "../../assets/loan.svg";
import Invest from "../../assets/invest.svg";
import More from "../../assets/more.svg";
import Sendheader from "../../assets/sendheading.svg";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import DashboardTransactionButton from "@/components/DashboardTransactionButton";
import Carousel from "react-native-reanimated-carousel";
import { SectionList } from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

const Dashboard = () => {
  const { height, width } = Dimensions.get("window");
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const router = useRouter();

  const images = [frame1, frame2, frame3];

  const renderItem = ({ item }: { item: any }) => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={item}
        style={{
          width: width * 0.9,
          height: height * 0.3, // Adjust as needed
          borderRadius: 10 // Optional: for rounded corners
        }}
        resizeMode="contain"
      />
    </View>
  );

  const DATA = [
    {
      title: "Today",
      data: ["Apple", "Banana", "Orange", "Mango"]
    },
    {
      title: "Tomorrow",
      data: ["Carrot", "Broccoli", "Spinach"]
    }
  ];

  return (
    <View className="flex-1 bg-buttonprimary">
      <StatusBar hidden={false} style="light" />
      <SafeAreaView style={{ flex: 1, marginTop: statusBarHeight }}>
        <ScrollView
          className="bg-white"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View
            style={{
              height: height * 0.32,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingTop: height * 0.02,
              gap: height * 0.02
            }}
            className="bg-buttonprimary"
          >
            <View className="flex-row justify-between">
              <View className="flex-row gap-2 items-center">
                <Image source={pics} />
                <View>
                  <Text className="text-white text-[12px]">Good morning</Text>
                  <Text className="text-white text-[14px]">Sheidu Susan</Text>
                </View>
              </View>
              <View className="flex-row gap-2 items-center">
                <Barcode />
                <TouchableOpacity
                  onPress={() => router.push("/Notification/NotificationList")}
                >
                  <Notification />
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-col justify-center items-center gap-1">
              <Text className="text-white text-[12px]">Current Balance</Text>
              <View className="flex-row items-center gap-2">
                <USD />
                <Text className="text-white text-[14px]">USD</Text>
                <Downcarat />
              </View>
              <View className="flex-row gap-2 items-center">
                <Text className="text-white text-[24px] font-bold">
                  $146,950.00
                </Text>
                <Dashboardeye />
              </View>
            </View>
            <View className="flex-row justify-between">
              <DashboardTransactionButton
                color1
                title="Send money"
                onPress={() =>
                  router.push("/TransactionSendMoney/ListSendMoney")
                }
              />
              <DashboardTransactionButton
                title="Deposit"
                onPress={() =>
                  router.push("/TransactionDeposit/ListofDeposits")
                }
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: width * 0.05,
              paddingTop: height * 0.02
            }}
            className="text-[14px] gap-2"
          >
            <View>
              <Text className="text-darktext">Quick services</Text>
            </View>
            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={() => router.push("/Save/SaveDashboard")}
              >
                <View className="flex-col gap-1 justify-center items-center">
                  <View
                    style={{
                      width: 70, // Set the width according to the icon size
                      height: 70, // Set the height according to the icon size
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      borderRadius: 50,
                      shadowColor: "#0A0A0A",
                      shadowOffset: { width: 0, height: 0.58 },
                      shadowOpacity: 0.17,
                      shadowRadius: 1.16,
                      elevation: 2 // For Android
                    }}
                  >
                    <Save width={70} height={70} />
                  </View>
                  <Text>Save</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push("/Loan")}>
                <View className="flex-col gap-1 justify-center items-center">
                  <View
                    style={{
                      width: 70, // Set the width according to the icon size
                      height: 70, // Set the height according to the icon size
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      borderRadius: 50,
                      shadowColor: "#0A0A0A",
                      shadowOffset: { width: 0, height: 0.58 },
                      shadowOpacity: 0.17,
                      shadowRadius: 1.16,
                      elevation: 2 // For Android
                    }}
                  >
                    <Loan />
                  </View>

                  <Text>Loan</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push('/Invest')}>
                <View className="flex-col gap-1 justify-center items-center">
                  <View
                    style={{
                      width: 70, // Set the width according to the icon size
                      height: 70, // Set the height according to the icon size
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      borderRadius: 50,
                      shadowColor: "#0A0A0A",
                      shadowOffset: { width: 0, height: 0.58 },
                      shadowOpacity: 0.17,
                      shadowRadius: 1.16,
                      elevation: 2 // For Android
                    }}
                  >
                    <Invest />
                  </View>
                  <Text>Invest</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push("/More/MoreList")}>
                <View className="flex-col gap-1 justify-center items-center">
                  <View
                    style={{
                      width: 70, // Set the width according to the icon size
                      height: 70, // Set the height according to the icon size
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                      borderRadius: 50,
                      shadowColor: "#0A0A0A",
                      shadowOffset: { width: 0, height: 0.58 },
                      shadowOpacity: 0.17,
                      shadowRadius: 1.16,
                      elevation: 2 // For Android
                    }}
                  >
                    <More />
                  </View>
                  <Text>More</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
              <Carousel
                loop
                width={width * 0.9}
                height={height * 0.2} // Adjust height as needed
                autoPlay={true}
                data={images}
                renderItem={renderItem}
                scrollAnimationDuration={1000}
              />
            </View>
            <View className="flex-row items-center justify-between">
              <Text className="text-darktext text-[14px] font-bold">
                Recent Transactions
              </Text>
              <Text className="text-buttonprimary text-[12px]">See all</Text>
            </View>
            <View style={{ maxHeight: height * 0.8 }}>
              <SectionList
                scrollEnabled={false}
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
                  <Text className="text-[12px] text-sectionheader">
                    {title}
                  </Text>
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
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
