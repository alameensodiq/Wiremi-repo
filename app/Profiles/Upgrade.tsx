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
  FlatList
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import Crownblue from "../../assets/crownblue.svg";
import CrownWhite from "../../assets/crownwhite.svg";
import Down from "../../assets/downcarat.svg";
import Confirm from "../../assets/Confirm.svg";
import Calendar from "../../assets/cakecalendar.svg";
import { BottomSheet } from "@/components/Bottom";
import { CheckBox } from "@rneui/themed";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { GetAllPlans } from "@/Store/Apis/GetAllPlans";
import { clearStategetallplans } from "@/Store/Reducers/GetAllPlans";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const Upgrade = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = useState(true);
  const [selectedIndex, setIndex] = useState<number>(10000);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = (index: number) => {
    ref.current?.close();
    router.push(`/Profiles/UpgradeDuration?index=${index}`);
  };

  useEffect(() => {
    dispatch(GetAllPlans({ router: router.push }));
    return () => {
      dispatch(clearStategetallplans())
    }
  }, []);

  const { getallplans, authenticatinggetallplans, errorsgetallplans } =
    useAppSelector((state) => state.getallplans);
  console.log(getallplans);

  const formatNumberWithCommas = (number: any) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
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
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Upgrade account</Text>
          <Text></Text>
        </View>
        <View className="flex-col items-center gap-3">
          <View
            className="flex-col gap-3"
            style={{ width: width * 0.9, position: "relative" }}
          >
            <Pressable onPress={() => ref.current?.open()}>
              <View
                style={{
                  borderRadius: 10,
                  backgroundColor: "#105CE2",
                  cursor: "pointer"
                }}
                className="flex-row justify-start items-center gap-2 py-3"
              >
                <CrownWhite />
                <Text className="text-white text-[14px]">Choose plan</Text>
                <Down />
              </View>
            </Pressable>
            {/* <View className="flex-row justify-between items-center px-5">
              <Text>Daily transaction limit</Text>
              <Text
                style={{ color: "#1E1B39" }}
                className="text-[16px] font-bold"
              >
                $1000.00
              </Text>
            </View>
            <View className="flex-row justify-between items-center px-5">
              <Text>Maximum account balance</Text>
              <Text
                style={{ color: "#1E1B39" }}
                className="text-[16px] font-bold"
              >
                $5000.00
              </Text>
            </View> */}
            <Confirm style={{ position: "absolute", top: -20, right: 0 }} />
          </View>

          {/* <View className="flex-col gap-3" style={{ width: width * 0.9 }}>
            <View
              style={{ borderBottomColor: "#EBEBEB", borderBottomWidth: 1 }}
              className="flex-row justify-start items-center gap-2 py-3"
            >
              <Crownblue />
              <Text className="text-buttonprimary text-[14px]">
                Wiremi lite plan
              </Text>
            </View>
            <View className="flex-row justify-between items-center px-5">
              <Text>Daily transaction limit</Text>
              <Text
                style={{ color: "#1E1B39" }}
                className="text-[16px] font-bold"
              >
                $2000.00
              </Text>
            </View>
            <View className="flex-row justify-between items-center px-5">
              <Text>Maximum account balance</Text>
              <Text
                style={{ color: "#1E1B39" }}
                className="text-[16px] font-bold"
              >
                $10,000.00
              </Text>
            </View>
          </View>

          <View className="flex-col gap-3" style={{ width: width * 0.9 }}>
            <View
              style={{ borderBottomColor: "#EBEBEB", borderBottomWidth: 1 }}
              className="flex-row justify-start items-center gap-2 py-3"
            >
              <Crownblue />
              <Text className="text-buttonprimary text-[14px]">
                Wiremi premium plan
              </Text>
            </View>
            <View className="flex-row justify-between items-center px-5">
              <Text>Daily transaction limit</Text>
              <Text
                style={{ color: "#1E1B39" }}
                className="text-[16px] font-bold"
              >
                $5000.00
              </Text>
            </View>
            <View className="flex-row justify-between items-center px-5">
              <Text>Maximum account balance</Text>
              <Text
                style={{ color: "#1E1B39" }}
                className="text-[16px] font-bold"
              >
                $20,000.00
              </Text>
            </View>
          </View>

          <View className="flex-col gap-3" style={{ width: width * 0.9 }}>
            <View
              style={{ borderBottomColor: "#EBEBEB", borderBottomWidth: 1 }}
              className="flex-row justify-start items-center gap-2 py-3"
            >
              <Crownblue />
              <Text className="text-buttonprimary text-[14px]">
                Wiremi business acount
              </Text>
            </View>
            <View className="flex-row justify-between items-center px-5">
              <Text>Daily transaction limit</Text>
              <Text
                style={{ color: "#1E1B39" }}
                className="text-[16px] font-bold"
              >
                $10,000.00
              </Text>
            </View>
            <View className="flex-row justify-between items-center px-5">
              <Text>Maximum account balance</Text>
              <Text
                style={{ color: "#1E1B39" }}
                className="text-[16px] font-bold"
              >
                Unlmited
              </Text>
            </View>
          </View> */}
          <View style={{ height: height * 0.57, width: width * 0.9 }}>
            <FlatList
              data={getallplans?.data}
              renderItem={({ item, index }) => (
                <View className="flex-col gap-3" style={{ width: width * 0.9 }}>
                  <View
                    style={{
                      borderBottomColor: "#EBEBEB",
                      borderBottomWidth: 1
                    }}
                    className="flex-row justify-start items-center gap-2 py-3"
                  >
                    <Crownblue />
                    <Text className="text-buttonprimary text-[14px]">
                      Wiremi {item?.plan_name}
                    </Text>
                  </View>
                  <View className="flex-row justify-between items-center px-5">
                    <Text>Daily Withdrawal limit</Text>
                    <Text
                      style={{ color: "#1E1B39" }}
                      className="text-[16px] font-bold"
                    >
                      {formatNumberWithCommas(item?.daily_withdrawal_limit)}
                    </Text>
                  </View>
                  <View className="flex-row justify-between items-center px-5">
                    <Text>Monthly Withdrawal limit</Text>
                    <Text
                      style={{ color: "#1E1B39" }}
                      className="text-[16px] font-bold"
                    >
                      {formatNumberWithCommas(item?.monthly_withdrawal_limit)}
                    </Text>
                  </View>
                  <View className="flex-row justify-between items-center px-5">
                    <Text>Quarterly Fee</Text>
                    <Text
                      style={{ color: "#1E1B39" }}
                      className="text-[16px] font-bold"
                    >
                      {formatNumberWithCommas(item?.quarterly_fee)}
                    </Text>
                  </View>
                  <View className="flex-row justify-between items-center px-5">
                    <Text>Single Transaction limit</Text>
                    <Text
                      style={{ color: "#1E1B39" }}
                      className="text-[16px] font-bold"
                    >
                      {formatNumberWithCommas(item?.single_transaction_limit)}
                    </Text>
                  </View>
                  {/* <View className="flex-row justify-between items-center px-5">
                    <Text>Maximum account balance</Text>
                    <Text
                      style={{ color: "#1E1B39" }}
                      className="text-[16px] font-bold"
                    >
                      Unlmited
                    </Text>
                  </View> */}
                </View>
              )}
              showsVerticalScrollIndicator={false}
              bounces={false}
              keyExtractor={(item, index) => item.code || index.toString()}
              contentContainerStyle={{
                gap: 0,
                paddingBottom: 50
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      <BottomSheet height={420} ref={ref}>
        <View style={{ padding: 20, gap: 15 }}>
          {/* <Text>Bottom Sheet Content</Text>
                  <TouchableOpacity onPress={handleCloseModal}>
                    <Text>Close</Text>
                  </TouchableOpacity> */}
          <View className="items-center">
            <Text
              style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
            >
              Plan type
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text style={{ color: "#BCBDC3" }} className="text-[16px]">
              Select subscription plan
            </Text>
            <CheckBox
              checked={selectedIndex === 100000}
              onPress={() => setIndex(0)}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View>
            <FlatList
              data={getallplans?.data}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => {
                    //   router.push("/TransactionSendMoney/DirectTransferDetails");
                    handleCloseModal(index);
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
                      <Text style={{ color: "#413D43", fontSize: 16 }}>
                        {item?.plan_name}
                      </Text>
                    </View>
                    <CheckBox
                      checked={selectedIndex === index}
                      onPress={() => setIndex(index)}
                      checkedIcon="dot-circle-o"
                      uncheckedIcon="circle-o"
                    />
                  </View>
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
              bounces={false}
              keyExtractor={(item, index) => item.code || index.toString()}
              contentContainerStyle={{
                gap: 0,
                paddingBottom: 50
              }}
            />
            {/* <TouchableOpacity
              onPress={() => {
                //   router.push("/TransactionSendMoney/DirectTransferDetails");
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
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Freemium
                  </Text>
                </View>
                <CheckBox
                  checked={selectedIndex === 1}
                  onPress={() => setIndex(0)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //   router.push("/TransactionSendMoney/DirectTransferDetails");
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
                  <Text style={{ color: "#413D43", fontSize: 16 }}>Lite</Text>
                </View>
                <CheckBox
                  checked={selectedIndex === 1}
                  onPress={() => setIndex(1)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //   router.push("/TransactionSendMoney/DirectTransferDetails");
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
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Premium
                  </Text>
                </View>
                <CheckBox
                  checked={selectedIndex === 2}
                  onPress={() => setIndex(2)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                //   router.push("/TransactionSendMoney/DirectTransferDetails");
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
                  <Text style={{ color: "#413D43", fontSize: 16 }}>
                    Business
                  </Text>
                </View>
                <CheckBox
                  checked={selectedIndex === 2}
                  onPress={() => setIndex(2)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
            </TouchableOpacity> */}
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Upgrade;
