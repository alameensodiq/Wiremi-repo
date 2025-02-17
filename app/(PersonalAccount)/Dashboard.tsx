import {
  View,
  Text,
  // SafeAreaView,
  Dimensions,
  StatusBar as RNStatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Pressable
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { UserTransactions } from "@/Store/Apis/UserTransactions";
import { clearStatelogin } from "@/Store/Reducers/Login";
import { Mainwallet } from "@/Store/Apis/Mainwallet";
import { clearStatemainwallet } from "@/Store/Reducers/Mainwallet";
import { clearStateusertransactions } from "@/Store/Reducers/UserTransactions";
import { clearStatesavedashboard } from "@/Store/Reducers/SavingDashboard";
import { clearStatesaveactive } from "@/Store/Reducers/SavingActive";
import { clearStategetcard } from "@/Store/Reducers/GetCard";
import { ScrollView } from "react-native";


const Dashboard = () => {
  const { height, width } = Dimensions.get("window");
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const [loader, setLoader] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<string>("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { usertransactions, authenticatingusertransactions } = useAppSelector(
    (state) => state.usertransactions
  );
  console.log(
    usertransactions?.slice(0, 10),
    authenticatingusertransactions,
    "transactions"
  );

  const { mainwallet, authenticatingmainwallet } = useAppSelector(
    (state) => state.mainwallet
  );
  console.log(
    mainwallet,
    authenticatingmainwallet,
    mainwallet?.user?.profile_image,
    "mainwallet"
  );

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

  // const DATA = usertransactions?.slice(0, 2)?.map((item: any) => {
  //   title: item?.created_at
  //   data: item?.user?.map((itemize: any) => itemize)

  // });

  const formatDateWithTime = (isoString: any) => {
    const date = new Date(isoString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  const DATA = usertransactions?.length
    ? usertransactions?.slice(0, 10)?.map((item: any) => ({
        title: formatDateWithTime(item?.created_at),
        data: item ? [item] : []
      }))
    : [];

  // const DATA = [
  //   {
  //     title: "Today",
  //     data: ["Apple", "Banana", "Orange", "Mango"]
  //   },
  //   {
  //     title: "Tomorrow",
  //     data: ["Carrot", "Broccoli", "Spinach"]
  //   }
  // ];

  // const greeting = useMemo(() => {
  //   const hour = new Date().getHours();
  //   if (hour < 12) return "Good Morning";
  //   if (hour < 18) return "Good Afternoon";
  //   return "Good Evening";
  // }, []);

  // useEffect(() => {
  //   const initializeData = () => {
  //     dispatch(UserTransactions({ router: router.push }));
  //     dispatch(Mainwallet());
  //     dispatch(clearStatelogin());
  //     dispatch(clearStategetcard());
  //   };

  //   initializeData();

  //   return () => {
  //     dispatch(clearStatemainwallet());
  //     dispatch(clearStateusertransactions());
  //     dispatch(clearStatesavedashboard());
  //     dispatch(clearStatesaveactive());
  //   };
  // }, [dispatch]);

  useEffect(() => {
    dispatch(UserTransactions({ router: router.push }));
    dispatch(Mainwallet());
    dispatch(clearStatelogin());
    dispatch(clearStategetcard());
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
    return () => {
      dispatch(clearStatemainwallet());
      dispatch(clearStateusertransactions());
      dispatch(clearStatesavedashboard());
      dispatch(clearStatesaveactive());
    };
  }, []);

  // useEffect(() => {
  //   if (usertransactions && mainwallet?.user) {
  //     setTimeout(() => {
  //       setLoader(true);
  //     }, 2000);
  //   }
  // }, [usertransactions, mainwallet?.user]);

  return (
    <View className="flex-1 bg-buttonprimary">
      <StatusBar hidden={false} style="light" />
      <SafeAreaView style={{ flex: 1, marginTop: statusBarHeight }}>
        {!usertransactions && (
          <View
            style={{ height: height, width: width }}
            className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
          >
            <ActivityIndicator size={200} color="#ffffff" />
          </View>
        )}
        <View
          className="bg-white"
          // showsVerticalScrollIndicator={false}
          // contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View
            style={{
              height: height * 0.32,
              width: width,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingTop: height * 0.02,
              gap: height * 0.02,
              position:"absolute"
            }}
            className="bg-buttonprimary"
          >
            <View className="flex-row justify-between">
              <View className="flex-row gap-2 items-center">
                <Image
                  source={{ uri: mainwallet?.user?.profile_image || "" }}
                  style={{
                    width: width * 0.1,
                    height: height * 0.05,
                    borderRadius: 20
                  }}
                />
                <View>
                  <Text className="text-white text-[12px]">{greeting}</Text>
                  <Text className="text-white text-[14px]">
                    {" "}
                    {mainwallet?.user?.last_name} {""}{" "}
                    {mainwallet?.user?.first_name}
                  </Text>
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
                <Text className="text-white text-[14px]">
                  {mainwallet?.currency}
                </Text>
                <Downcarat />
              </View>
              <View className="flex-row gap-2 items-center">
                {show ? (
                  <Text className="text-white text-[24px] font-bold">
                    {mainwallet?.symbol}
                    {mainwallet?.balance}
                  </Text>
                ) : (
                  <Text className="text-white text-[24px] font-bold">
                    ******
                  </Text>
                )}
                <Dashboardeye onPress={() => setShow(!show)} />
              </View>
            </View>
            <View className="flex-row justify-between">
              <DashboardTransactionButton
                color1
                title="Payment"
                onPress={() =>
                  router.push("/TransactionSendMoney/ListSendMoney")
                }
              />
              <DashboardTransactionButton
                title="Add Money"
                onPress={() =>
                  router.push("/TransactionDeposit/ListofDeposits")
                }
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: width * 0.05,
              // paddingTop: height * 0.02,
              // height: height * 0.8
              paddingTop: height * 0.36,
              height: height
            }}
            className="text-[14px] gap-1"
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
              <TouchableOpacity
                onPress={() => router.push("/Loan/LoanDashboard")}
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
                    <Loan />
                  </View>

                  <Text>Loan</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/Invest/InvestDashboard")}
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
                height={height * 0.15} // Adjust height as needed
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
              <Pressable
                onPress={() => router.push("/Transactions/TransactionList")}
              >
                <Text className="text-buttonprimary text-[12px]">See all</Text>
              </Pressable>
            </View>
            <View style={{ height: height * 0.2 }}>
              <SectionList
                // scrollEnabled={false}
                sections={DATA || []}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() =>
                      router.push(`/Transactions/TransactionReceipt?id=${item?.id}`)
                    }
                  >
                    <View className="flex-col gap-2">
                      <View className="flex-row justify-between items-center">
                        <View className="flex-row gap-1">
                          <Sendheader />
                          <View className="flex-col gap-1 justify-center items-start">
                            <Text className="text-[14px] text-darktext font-bold">
                              {item?.method} to 
                              {""} {item?.receiver?.first_name}
                            </Text>
                            <Text className="text-[12px] text-transdate">
                              {/* Sep 2nd, 7:45am */}
                              {formatDateWithTime(item?.created_at)}
                            </Text>
                          </View>
                        </View>
                        <View className="flex-col justify-center items-center">
                          <Text className="text-[14px] text-darktext">
                            {item?.symbol || ""}
                            {""}
                            {parseFloat(item?.total || "0").toFixed(2)}
                          </Text>
                          {/* Failed */}
                          {item?.status === "completed" ? (
                            <Text className="text-[12px] text-successtrans">
                              {item?.status}
                            </Text>
                          ) : item?.status === "pending" ? (
                            <Text className="text-[12px] text-pendingtrans">
                              {item?.status}
                            </Text>
                          ) : (
                            <Text className="text-[12px] text-failedtrans">
                              {item?.status}
                            </Text>
                          )}
                        </View>
                      </View>
                      <View className="flex-row justify-end">
                        <View
                          style={{ width: width * 0.8, height: height * 0.001 }}
                          className="bg-faintline"
                        ></View>
                      </View>
                    </View>
                  </TouchableOpacity>
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
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
