import {
  View,
  Text,
  ImageBackground,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Modal
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import Crownblue from "../../assets/crownblue.svg";
import CrownWhite from "../../assets/crownwhite.svg";
import Down from "../../assets/caratdown.svg";
import Confirm from "../../assets/Confirm.svg";
import Calendar from "../../assets/cakecalendar.svg";
import { BottomSheet } from "@/components/Bottom";
import { CheckBox } from "@rneui/themed";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { GetAllPlans } from "@/Store/Apis/GetAllPlans";
import { clearStategetallplans } from "@/Store/Reducers/GetAllPlans";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AccountDetails } from "@/Store/Apis/AccountDetails";
import { UpgradingPlan } from "@/Store/Apis/UpgradingPlan";
import ShortBlueButton from "@/components/ShortBlueButton";
import { useAppContext } from "@/Context/useAppContext";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const UpgradeDuration = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(true);
  const [indexNumber, setIndexNumber] = useState<number>(0);
  const [selectedIndex, setIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const [show2, setShow2] = useState("");
  const router = useRouter();
  const { index } = useLocalSearchParams();
  console.log(index);
  const indexValue = Array.isArray(index) ? index[0] : index;
  AsyncStorage.setItem("indexing", indexValue);
  const { theme } = useAppContext();

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const formatNumberWithCommas = (number: any) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    dispatch(GetAllPlans({ router: router.push }));
    dispatch(
      AccountDetails({
        router: router.push,
        setIsVisible: setIsVisible,
        setShow: setShow
      })
    );
    const loadIndexing = async () => {
      const indexingValue = await AsyncStorage.getItem("indexing");
      if (indexingValue !== null) {
        setIndexNumber(+indexingValue); // Convert to number and set
      }
    };

    loadIndexing();
    return () => {
      dispatch(clearStategetallplans());
    };
  }, []);

  const { getallplans, authenticatinggetallplans, errorsgetallplans } =
    useAppSelector((state) => state.getallplans);
  console.log(getallplans?.data[indexNumber]);

  const { accountdetails, authenticatingaccountdetails, errorsaccountdetails } =
    useAppSelector((state) => state.accountdetails);

  console.log(accountdetails);

  const { upgradingplan, authenticatingupgradingplan, errorsupgradingplan } =
    useAppSelector((state) => state.upgradingplan);

  console.log(upgradingplan);

  console.log(errorsupgradingplan?.error);

  useEffect(() => {
    if (getallplans?.data[indexNumber]?.subscription_plan) {
      setIndex(accountdetails?.subscription_plan);
    } else {
      setIndex(100000);
    }
  }, [
    accountdetails?.subscription_plan,
    getallplans?.data[indexNumber]?.subscription_plan
  ]);

  useEffect(() => {
    if (upgradingplan?.status) {
      router.push("/Profiles/UpgradeSuccess");
    }
  }, [upgradingplan?.status]);

  console.log(selectedIndex);
  console.log(accountdetails?.subscription_plan);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className={`${
        theme === "dark" ? "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"
      }`}
    >
      <StatusBar
        hidden={false}
        style={`${theme === "dark" ? "light" : "dark"}`}
      />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-2"
      >
        {!getallplans && (
          <View
            style={{ height: height, width: width }}
            className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
          >
            <ActivityIndicator size={200} color="#ffffff" />
          </View>
        )}
        <Modal animationType="slide" transparent={true} visible={isVisible2}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              setIsVisible2(false);
              // ref?.current?.close();
            }}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              {/* <View className="flex-col">
                      {errors?.error?.map((item: any) => {
                        <Text>{item}</Text>
                      })}
                      </View> */}
              {errorsupgradingplan?.error &&
                typeof errorsupgradingplan?.error === "object" &&
                !Array.isArray(errorsupgradingplan?.error) &&
                Object.keys(errorsupgradingplan?.error).map((key, index) => (
                  <Text key={index}>
                    {key}:{" "}
                    {Array.isArray(errorsupgradingplan?.error[key])
                      ? errorsupgradingplan?.error[key].join(", ") // Handle arrays by joining the elements
                      : errorsupgradingplan?.error[key]}{" "}
                  </Text>
                ))}
              {errorsupgradingplan?.error &&
                typeof errorsupgradingplan?.error !== "object" && (
                  <Text className="mb-3">{errorsupgradingplan?.error}</Text>
                )}
              <ShortBlueButton
                title="Close"
                onPress={() => {
                  setIsVisible2(false);
                  // ref?.current?.close();
                }}
              />
            </View>
          </Pressable>
        </Modal>
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Back
              style={{ backgroundColor: theme === "dark" ? "#ffffff" : "" }}
            />
          </TouchableOpacity>
          <Text
            className={`${
              theme === "dark"
                ? "text-[20px] text-[#ffffff]"
                : "text-[20px] text-pagetitle"
            }`}
          >
            Upgrade account
          </Text>
          <Text></Text>
        </View>
        <View className="flex-col items-center gap-3">
          <View
            className="flex-row justify-between items-center"
            style={{ width: width * 0.9 }}
          >
            <View
              style={{
                borderBottomColor: theme === "dark" ? "#000000" : "#EBEBEB",
                borderBottomWidth: 1
              }}
              className="flex-row justify-start items-center gap-2 py-3"
            >
              <Crownblue />
              <Text className="text-buttonprimary text-[14px]">
                Wiremi {getallplans?.data[indexNumber]?.plan_name}
              </Text>
            </View>
            {accountdetails?.account_type ===
            getallplans?.data[indexNumber]?.plan_name ? (
              <Pressable onPress={() => ref?.current?.open()}>
                <View
                  className="flex-row justify-center items-center"
                  style={{
                    width: width * 0.25,
                    height: 40,
                    borderColor: "#EBEBEB",
                    borderWidth: 1
                  }}
                >
                  <Text className="text-buttonprimary text-[16px]">
                    {accountdetails?.subscription_plan} months
                  </Text>
                  <Down />
                </View>
              </Pressable>
            ) : (
              <Pressable onPress={() => ref?.current?.open()}>
                <View
                  className="flex-row justify-center items-center"
                  style={{
                    width: width * 0.45,
                    height: 40,
                    borderColor: theme === "dark" ? "#000000" : "#EBEBEB",
                    borderWidth: 1
                  }}
                >
                  <Text className="text-buttonprimary text-[16px]">
                    Click to Upgrade Plan
                  </Text>
                  <Down />
                </View>
              </Pressable>
            )}
          </View>
          <View
            style={{
              height: height * 0.7,
              width: width * 0.9,
              borderColor: "#105CE2",
              borderWidth: 1,
              borderRadius: 10,
              padding: 15,
              gap: 20
            }}
          >
            <View>
              <Text
                style={{
                  color: theme === "dark" ? "#ffffff" : "#606162",
                  fontSize: 12
                }}
              >
                Plan fee
              </Text>
              <Text className="text-[16px] text-buttonprimary font-bold">
                {getallplans?.data[indexNumber]?.yearly_fee} per year
              </Text>
            </View>
            <View>
              <View className="flex-row justify-start">
                <Crownblue />
                <Text className="text-buttonprimary text-[14px]">
                  Wiremi {getallplans?.data[indexNumber]?.plan_name}
                </Text>
              </View>
              <Text
                style={{
                  color: theme === "dark" ? "#ffffff" : "#606162",
                  fontSize: 12
                }}
              >
                A text about wiremi {getallplans?.data[indexNumber]?.plan_name}{" "}
                plan shows here
              </Text>
            </View>
            <View className="flex-row justify-center items-center">
              <Pressable
                onPress={() => ref?.current?.open()}
                // onPress={() => router.push("/Profiles/UpgradeSuccess")}
                className="bg-buttonprimary w-[90%] h-[40px] rounded-[10px] justify-center items-center"
              >
                <Text className="text-white text-[16px]">Upgrade</Text>
              </Pressable>
            </View>
            <View>
              <Text
                style={{
                  color: theme === "dark" ? "#ffffff" : "#606162",
                  fontSize: 12
                }}
              >
                Plan benefits
              </Text>
            </View>
            <View className="flex-col gap-1">
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text style={{ color: theme === "dark" ? "#ffffff" : "" }}>
                  Maximum escrow transaction of{" "}
                  {formatNumberWithCommas(
                    getallplans?.data[indexNumber]?.escrow
                  )}
                </Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text style={{ color: theme === "dark" ? "#ffffff" : "" }}>
                  Minimum of{" "}
                  {formatNumberWithCommas(
                    getallplans?.data[indexNumber]?.savings_instances
                  )}{" "}
                  saving instances
                </Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text style={{ color: theme === "dark" ? "#ffffff" : "" }}>
                  Maximum of{" "}
                  {formatNumberWithCommas(
                    getallplans?.data[indexNumber]?.crypto_swap_limit
                  )}{" "}
                  crypto transactions
                </Text>
              </View>
              {/* <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>Minimum of 1 multi-currency wallet</Text>
              </View> */}
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text style={{ color: theme === "dark" ? "#ffffff" : "" }}>
                  Can perform cross border transactions
                </Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text style={{ color: theme === "dark" ? "#ffffff" : "" }}>
                  Access to{" "}
                  {getallplans?.data[indexNumber]?.virtual_cards
                    ? "use"
                    : "not use"}{" "}
                  virtual cards
                </Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text style={{ color: theme === "dark" ? "#ffffff" : "" }}>
                  {getallplans?.data[indexNumber]?.fundraising_feature
                    ? "Access"
                    : "no access"}{" "}
                  to crowdfunding feature
                </Text>
              </View>
              <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text style={{ color: theme === "dark" ? "#ffffff" : "" }}>
                  {getallplans?.data[indexNumber]?.payment_processing
                    ? "Access"
                    : "no access"}{" "}
                  to payment processing
                </Text>
              </View>
              {/* <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>{getallplans?.data[indexNumber]?.payment_processing ?  "Access" : "no access" }  to business loans</Text>
              </View> */}
              {/* <View className="flex-row justify-start items-center gap-2">
                <Confirm />
                <Text>No access o payment API</Text>
              </View> */}
            </View>
          </View>
        </View>
      </SafeAreaView>
      <BottomSheet height={350} ref={ref}>
        <View style={{ padding: 20, gap: 15 }}>
          {/* <Text>Bottom Sheet Content</Text>
                    <TouchableOpacity onPress={handleCloseModal}>
                      <Text>Close</Text>
                    </TouchableOpacity> */}
          <View className="items-center">
            <Text
              style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
            >
              Subscription plan
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text
              style={{ color: theme === "dark" ? "#ffffff" : "#BCBDC3" }}
              className="text-[16px]"
            >
              Select subscription plan
            </Text>
            <CheckBox
              checked={selectedIndex === 0}
              onPress={() => setIndex(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                //   router.push("/TransactionSendMoney/DirectTransferDetails");
                dispatch(
                  UpgradingPlan({
                    router: router.push,
                    setIsVisible: setIsVisible2,
                    setShow: setShow2,
                    plan: 3,
                    account_type: getallplans?.data[indexNumber]?.plan_name
                  })
                );
                handleCloseModal();
              }}
            >
              <View className="flex-row justify-between">
                <View className="items-center flex-row gap-4 mb-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <Calendar />
                  </View>
                  <Text
                    style={{
                      color: "#413D43",
                      fontSize: 16
                    }}
                  >
                    3 months
                  </Text>
                </View>
                <CheckBox
                  checked={selectedIndex == 3}
                  onPress={() => setIndex(3)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //   router.push("/TransactionSendMoney/DirectTransferDetails");
                dispatch(
                  UpgradingPlan({
                    router: router.push,
                    setIsVisible: setIsVisible2,
                    setShow: setShow2,
                    plan: 6,
                    account_type: getallplans?.data[indexNumber]?.plan_name
                  })
                );
                handleCloseModal();
              }}
            >
              <View className="flex-row justify-between">
                <View className="items-center flex-row gap-4 mb-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <Calendar />
                  </View>
                  <Text
                    style={{
                      color: "#413D43",
                      fontSize: 16
                    }}
                  >
                    6 months{" "}
                  </Text>
                </View>
                <CheckBox
                  checked={selectedIndex == 6}
                  onPress={() => setIndex(6)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //   router.push("/TransactionSendMoney/DirectTransferDetails");
                dispatch(
                  UpgradingPlan({
                    router: router.push,
                    setIsVisible: setIsVisible2,
                    setShow: setShow2,
                    plan: 12,
                    account_type: getallplans?.data[indexNumber]?.plan_name
                  })
                );
                handleCloseModal();
              }}
            >
              <View className="flex-row justify-between">
                <View className="items-center flex-row gap-4 mb-4">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.1,
                      height: height * 0.05
                    }}
                    className="justify-center items-center"
                  >
                    <Calendar />
                  </View>
                  <Text
                    style={{
                      color: "#413D43",
                      fontSize: 16
                    }}
                  >
                    12 months
                  </Text>
                </View>
                <CheckBox
                  checked={selectedIndex == 12}
                  onPress={() => setIndex(12)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </ScrollView>
  );
};

export default UpgradeDuration;
