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
import React, { useEffect, useMemo, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Notification from "../../assets/notification.svg";
import Barcode from "../../assets/barcode.svg";
import pics from "../../assets/pics.png";
import USD from "../../assets/usa.svg";
import Downcarat from "../../assets/downcarat.svg";
import Dashboardeye from "../../assets/dashboardeye.svg";
import Cancel from "../../assets/cancel.svg";
import Save from "../../assets/save.svg";
import Loan from "../../assets/loan.svg";
import SelectPlanWarning from "../../assets/selectplanwarning.svg";
import SelectMark from "../../assets/selectmark.svg";
import Invest from "../../assets/invest.svg";
import More from "../../assets/more.svg";
import Sendheader from "../../assets/sendheading.svg";
import Senddeposit from "../../assets/senddeposit.svg";
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
import { BottomSheet } from "@/components/Bottom";
import { AccountDetails } from "@/Store/Apis/AccountDetails";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";
import Copy from "../../assets/copy.svg";
import QRCode from "react-native-qrcode-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppContext } from "@/Context/useAppContext";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const Dashboard = () => {
  const { height, width } = Dimensions.get("window");
  const { theme } = useAppContext();
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const [loader, setLoader] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show2, setShow2] = useState("");
  const [shownumber, setShownumber] = useState<boolean>(false);
  const [greeting, setGreeting] = useState<string>("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [wiremiId, setWiremiId] = useState<string>("");
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const handleCloseModal2 = () => {
    ref2.current?.close();
  };
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

  const formatNumberWithCommas = (number: any) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatNumberWithCommastrans = (number: string | number) => {
    const num = parseFloat(number as string); // Convert to number
    if (isNaN(num)) return "0.00"; // Handle invalid values

    return num
      .toFixed(2) // Ensure two decimal places
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas
  };

  const { accountdetails, authenticatingaccountdetails, errorsaccountdetails } =
    useAppSelector((state) => state.accountdetails);

  console.log(accountdetails);

  useEffect(() => {
    dispatch(UserTransactions({ router: router.push }));
    dispatch(Mainwallet());
    dispatch(
      AccountDetails({
        router: router.push,
        setIsVisible: setIsVisible,
        setShow: setShow
      })
    );
    const fetchStoredData = async () => {
      try {
        const wiremiIds = await AsyncStorage.getItem("Wiremi_Id");
        console.log(wiremiIds);
        if (wiremiIds) setWiremiId(wiremiIds);
      } catch (error) {
        console.error("Error fetching data from AsyncStorage:", error);
      }
    };
    fetchStoredData();
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
    if (!accountdetails?.user?.is_kyc) {
      ref?.current?.open();
    }
    return () => {
      dispatch(clearStatemainwallet());
      dispatch(clearStateusertransactions());
      dispatch(clearStatesavedashboard());
      dispatch(clearStatesaveactive());
    };
  }, []);

  useEffect(() => {
    if (accountdetails?.user?.is_kyc === undefined) return;

    if (!accountdetails?.user?.is_kyc) {
      ref?.current?.open();
    }
    if (accountdetails?.user?.is_kyc) {
      ref?.current?.close();
    }
  }, [accountdetails?.user?.is_kyc]);

  // useEffect(() => {
  //   if (!accountdetails?.user) return; // Wait for accountdetails to be populated

  //   const timeout = setTimeout(() => {
  //     if (ref.current) {
  //       if (accountdetails.user.is_kyc) {
  //         ref?.current.open?.(); // Optional chaining
  //       } else {
  //         ref.current.close?.();
  //       }
  //     }
  //   }, 300); // Slight delay to ensure BottomSheet is mounted

  //   return () => clearTimeout(timeout); // Cleanup
  // }, [accountdetails?.user?.is_kyc]);

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
        <ScrollView
          className={`flex-1 ${theme === "dark" ? "bg-[#000000]" : "bg-white"}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View
            style={{
              height: height * 0.32,
              width: width,
              borderBottomLeftRadius: 35,
              borderBottomRightRadius: 35,
              paddingHorizontal: width * 0.05,
              paddingTop: height * 0.02,
              gap: height * 0.02
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
                  <Text
                    style={{ fontWeight: "bold", fontSize: 14, color: "white" }}
                  >
                    {greeting}
                  </Text>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 14, color: "white" }}
                  >
                    {" "}
                    {mainwallet?.user?.last_name} {""}{" "}
                    {mainwallet?.user?.first_name}
                  </Text>
                </View>
              </View>
              <View className="flex-row gap-2 items-center">
                <TouchableOpacity
                  onPress={() => {
                    console.log("pressed"); // Make sure this shows in console
                    ref2.current?.open(); // Or .expand() depending on your library
                  }}
                >
                  <Barcode />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/Notification")}>
                  <Notification />
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-col justify-center items-center gap-1">
              <Text
                style={{ fontWeight: "bold", fontSize: 14, color: "white" }}
              >
                Current Balance
              </Text>
              <View className="flex-row items-center gap-2">
                <USD />
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, color: "white" }}
                >
                  {mainwallet?.currency}
                </Text>
                <Downcarat />
              </View>
              <View className="flex-row gap-2 items-center">
                {shownumber ? (
                  <Text className="text-white text-[24px] font-bold">
                    {mainwallet?.symbol}
                    {formatNumberWithCommas(mainwallet?.balance)}
                  </Text>
                ) : (
                  <Text className="text-white text-[24px] font-bold">
                    ******
                  </Text>
                )}
                {/* <TouchableOpacity
                  onPress={() => 
                    setShownumber(!shownumber)
                  }
                >
                  <Dashboardeye />
                </TouchableOpacity> */}
                <TouchableOpacity
                  onPress={() => setShownumber((prev) => !prev)}
                  activeOpacity={0.7}
                >
                  <View>
                    <Dashboardeye />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-row justify-between">
              <DashboardTransactionButton
                color1
                title="Payment"
                onPress={() => router.push("/TransactionSendMoney")}
              />
              <DashboardTransactionButton
                title="Add Money"
                onPress={() => router.push("/TransactionDeposit")}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: width * 0.05,
              // paddingTop: height * 0.02,
              // height: height * 0.8
              paddingTop: height * 0.03
              // height: height * 1.
            }}
            className={`text-[14px] gap-1 ${
              theme === "dark" ? "bg-[#000000]" : "bg-white"
            }`}
          >
            <View>
              <Text
                className={`text-[14px] font-bold ${
                  theme === "dark" ? "text-[#ffffff]" : "text-darktext"
                }`}
              >
                Quick services
              </Text>
            </View>
            <View className="flex-row justify-between">
              <TouchableOpacity onPress={() => router.push("/Save")}>
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
                  <Text
                    className={`text-[14px] font-bold ${
                      theme === "dark" ? "text-[#ffffff]" : ""
                    }`}
                  >
                    Save
                  </Text>
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

                  <Text
                    className={`text-[14px] font-bold ${
                      theme === "dark" ? "text-[#ffffff]" : ""
                    }`}
                  >
                    Loan
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push("/Invest")}>
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
                  <Text
                    className={`text-[14px] font-bold ${
                      theme === "dark" ? "text-[#ffffff]" : ""
                    }`}
                  >
                    Invest
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => router.push("/More")}>
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
                  <Text
                    className={`text-[14px] font-bold ${
                      theme === "dark" ? "text-[#ffffff]" : ""
                    }`}
                  >
                    More
                  </Text>
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
              <Text
                className={` ${
                  theme === "dark"
                    ? "text-[#ffffff] font-bold"
                    : "text-darktext text-[14px] font-bold"
                }`}
              >
                Recent Transactions
              </Text>
              <Pressable onPress={() => router.push("/Transactions")}>
                <Text
                  className={` ${
                    theme === "dark"
                      ? "text-[#ffffff] text-[12px]"
                      : "text-buttonprimary text-[12px]"
                  }`}
                >
                  See all
                </Text>
              </Pressable>
            </View>
            <View style={{ height: height * 0.7 }}>
              <SectionList
                scrollEnabled={false}
                sections={DATA || []}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() =>
                      router.push(
                        `/Transactions/TransactionReceipt?id=${item?.id}`
                      )
                    }
                  >
                    <View className="flex-col gap-2">
                      <View className="flex-row justify-between items-center">
                        <View className="flex-row gap-1">
                          {item?.method === "Wiremi transfer" ? (
                            <Sendheader />
                          ) : item?.method === "Mobile withdraw" ? (
                            <Sendheader />
                          ) : (
                            <Senddeposit />
                          )}
                          <View className="flex-col gap-1 justify-center items-start">
                            <Text
                              className={` ${
                                theme === "dark"
                                  ? "text-[#ffffff] text-[14px] font-bold"
                                  : "text-[14px] text-darktext font-bold"
                              }`}
                            >
                              {item?.method} to
                              {""} {item?.receiver?.first_name}
                            </Text>
                            <Text
                              className={` ${
                                theme === "dark"
                                  ? "text-[#ffffff] text-[12px]"
                                  : "text-[12px] text-transdate"
                              }`}
                            >
                              {/* Sep 2nd, 7:45am */}
                              {formatDateWithTime(item?.created_at)}
                            </Text>
                          </View>
                        </View>
                        <View className="flex-col justify-center items-center">
                          <Text
                            className={` ${
                              theme === "dark"
                                ? "text-[#ffffff] text-[14px]"
                                : "text-[14px] text-darktext"
                            }`}
                          >
                            {item?.symbol || ""}
                            {""}
                            {formatNumberWithCommastrans(
                              parseFloat(item?.total || "0")
                            )}
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
                  <Text
                    className={` ${
                      theme === "dark"
                        ? "text-[#ffffff] text-[12px]"
                        : "text-[12px] text-sectionheader"
                    }`}
                  >
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
          <BottomSheet height={460} ref={ref}>
            <View className="flex-col justify-center  gap-2 pt-4">
              <View className="flex-row justify-end items-center pr-2">
                <Pressable onPress={() => handleCloseModal()}>
                  <Cancel />
                </Pressable>
              </View>
              <View className="flex-col gap-2 items-center justify-center">
                <SelectPlanWarning />
                <Text
                  style={{ color: "#105CE2", fontSize: 14, fontWeight: 600 }}
                >
                  Action Required!
                </Text>
              </View>
              <View className="flex-col items-start gap-2 pl-2">
                <Text className="text-[#606162] text-[12px]">
                  Welcome to Wiremi 2.0!
                </Text>
                <Text className="text-[#606162] text-[12px]">
                  Enjoy three (3) months of freemium access to start!
                </Text>
              </View>
              <View className="flex-col items-start gap-2">
                <View className="flex-row justify-start gap-2 items-center">
                  <SelectMark />
                  <Text className="text-[12px] text-[#414142]">
                    <Text className="text-[12px] text-[#242329]">
                      Choose your plan
                    </Text>
                    - Select the plan that fits your needs
                  </Text>
                </View>
                <View className="flex-row justify-start gap-2 items-center">
                  <SelectMark />
                  <Text className="text-[12px] text-[#414142]">
                    <Text className="text-[12px] text-[#242329]">
                      Complete KYC
                    </Text>
                    - Verify your identity for security
                  </Text>
                </View>
              </View>
              <View className="items-center justify-between flex-row p-4">
                <ShortBlueButton
                  title="Select Plan"
                  color1
                  onPress={() => router.push("/Profiles/Upgrade")}
                />
                <ShortWhiteButton
                  title="Verify Now"
                  onPress={() => router.push("/Profiles/ProfileKyc")}
                />
              </View>
            </View>
          </BottomSheet>
          <BottomSheet height={480} ref={ref2}>
            <View className="flex-col justify-center  gap-2 pt-4">
              <View className="flex-row justify-end items-center pr-2">
                <Pressable onPress={() => handleCloseModal2()}>
                  <Cancel />
                </Pressable>
              </View>
              <View className="flex-row justify-center items-center">
                <Text className="text-[#2A94F4] text-[15px]">Scan QR code</Text>
              </View>
              {/* <View className="flex-row justify-center items-center gap-2">
                <Text className="text-buttonprimary text-[14px]">
                  {wiremiId}
                </Text>
                <Copy />
              </View> */}
              <View className="flex-row justify-center items-center gap-2">
                <Text className="text-[#413D43] text-[12px] text-center">
                  Here is your unique QR code for another user to scan and
                  make payments to your wiremiaccount.
                </Text>
              </View>
              {/* <QRCode value={wiremiId} size={200} /> */}
            </View>
          </BottomSheet>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
