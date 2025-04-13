import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
  FlatList,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import { BottomSheet } from "@/components/Bottom";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import ShortBlueButton from "@/components/ShortBlueButton";
import { Summary } from "@/Store/Apis/Summary";
import { CheckBox } from "@rneui/themed";
import { Deposit } from "@/Store/Apis/Deposit";
import { clearStatedeposit } from "@/Store/Reducers/Deposit";
import { clearStatesummary } from "@/Store/Reducers/Summary";
import { clearStateallinstitution } from "@/Store/Reducers/AllInstitution";
import { AllInstitution } from "@/Store/Apis/AllInstitution";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const MobilemoneyDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [selectedIndex, setIndex] = useState(300000000000);
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [show2, setShow2] = useState("");
  const [amount, setAmount] = useState("");
  const ref2 = useRef<BottomSheetRef>(null);
  const handleCloseModal2 = () => {
    ref2.current?.close();
  };
  const [institution, setInstitution] = useState({
    name: "",
    code: ""
  });

  const { summary, authenticatingsummary } = useAppSelector(
    (state) => state.summary
  );

  console.log(summary);

  const { allinstitution, authenticatingallinstitution } = useAppSelector(
    (state) => state.allinstitution
  );

  console.log(allinstitution);

  const { deposit, authenticatingdeposit, errors } = useAppSelector(
    (state) => state.deposit
  );

  console.log(deposit);

  const onChange = (name: string, value: any) => {
    console.log(value);
    setAmount(value);
  };

  useEffect(() => {
    dispatch(
      AllInstitution({
        router: router.push,
        setIsVisible: setIsVisible,
        setShow: setShow
      })
    );
    return () => {
      dispatch(clearStatedeposit());
      dispatch(clearStatesummary());
      dispatch(clearStateallinstitution());
    };
  }, []);

  useEffect(() => {
    if (summary?.amount && amount) {
          ref.current?.open();
      }
  }, [summary?.amount, amount]);

  useEffect(() => {
    if (deposit?.status) {
      router.replace("/TransactionDeposit/MobileSuccess");
    }
  }, [deposit?.status]);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const data2 = allinstitution?.data;

  const filteredData = data2?.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.01
        }}
        className="gap-2"
      >
        <Modal animationType="slide" transparent={true} visible={isVisible}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              setIsVisible(false);
              handleCloseModal2();
            }}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              {errors?.error &&
                typeof errors.error === "object" &&
                !Array.isArray(errors.error) &&
                Object.keys(errors.error).map((key, index) => (
                  <Text key={index}>
                    {key}:{" "}
                    {Array.isArray(errors.error[key])
                      ? errors.error[key].join(", ") // Handle arrays by joining the elements
                      : errors.error[key]}{" "}
                  </Text>
                ))}
              {errors?.error && typeof errors.error !== "object" && (
                <Text className="mb-3">{errors.error}</Text>
              )}
              <ShortBlueButton
                title="Close"
                onPress={() => {
                  setIsVisible(false);
                  handleCloseModal2();
                }}
              />
            </View>
          </Pressable>
        </Modal>
        <Modal animationType="slide" transparent={true} visible={isVisible2}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => setIsVisible2(false)}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              <View className="flex-col">
                <Text>{show2}</Text>
              </View>

              <ShortBlueButton
                title="Close"
                onPress={() => setIsVisible2(false)}
              />
            </View>
          </Pressable>
        </Modal>
        <View
          style={{
            flex: 1,
            paddingHorizontal: width * 0.01
          }}
          className="gap-1"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/TransactionDeposit/MobileMoney")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Mobile money</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center">
            <TransactionTextLabel
              label="Amount"
              placeholder="Enter amount 0.00"
              onChangeText={(value: number) => onChange("amount", value)}
            />
          </View>
          <View className="items-center justify-center mb-2">
            <TransparentSelectButton
              label="Institute"
              onPress={() => ref2?.current?.open()}
              placeholder={
                institution?.name ? institution?.name : "Select Institute"
              }
            />
          </View>
          <View className="items-center justify-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => {
                if (!amount) {
                  setIsVisible2(true);
                  setShow2("Input Amount to Proceed");
                  return;
                }

                dispatch(
                  Summary({
                    amount: amount,
                    // country: country,
                    type: "MOMO_TOPUP",
                    router: router.push,
                    setIsVisible: setIsVisible,
                    setShow: setShow
                  })
                );
              }}
              // onPress={() => router.push("/TransactionDeposit/MobileSummary")}
            />
          </View>
          <BottomSheet height={590} ref={ref}>
            <ScrollView
              style={{
                // flex: 1,
                // marginTop: statusBarHeight,
                paddingHorizontal: width * 0.03
              }}
              className="gap-6"
            >
              <View className="flex-row justify-center items-center mb-1">
                {/* <TouchableOpacity
                onPress={() =>
                  router.push("/TransactionDeposit/MobilemoneyDetails")
                }
              >
                <Back />
              </TouchableOpacity> */}
                <Text className="text-[20px] text-pagetitle">
                  Transaction Summary
                </Text>
                <Text></Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">Amount</Text>
                <Text className="text-darktext font-[14px]">
                  {summary?.currency}
                  {summary?.amount || "N/A"}
                </Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">Fees</Text>
                <Text className="text-darktext font-[14px]">
                  {summary?.currency}
                  {summary?.fee || "N/A"}
                </Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">Tax</Text>
                <Text className="text-darktext font-[14px]">
                  {" "}
                  {summary?.currency}
                  {summary?.tax}
                </Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">
                  Deposit type
                </Text>
                <Text className="text-darktext font-bold">Mobile Money</Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">
                  Institute
                </Text>
                <Text className="text-darktext font-bold">
                  {institution?.name}
                </Text>
              </View>
              <View
                style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
                className="flex-row items-center justify-between p-3"
              >
                <Text className="text-lighttextdark font-[14px]">Total</Text>
                <Text className="text-buttonprimary font-[14px]">
                  {summary?.currency}
                  {summary?.total || "N/A"}
                </Text>
              </View>
              {authenticatingdeposit ? (
                <View className="flex-row justify-center items-center mb-4">
                  <ActivityIndicator
                    color={"#105CE2"}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              ) : (
                <View className="items-center justify-center mb-4">
                  <BlueSignInButton
                    title="Proceed"
                    onPress={() => {
                      dispatch(
                        Deposit({
                          name: institution?.name,
                          code: institution?.code,
                          amount: Number(amount),
                          transaction_id: summary?.trans_ref,
                          router: router.push,
                          setIsVisible: setIsVisible,
                          setShow: setShow
                        })
                      );
                    }}
                    // name,
                    // code,
                    // amount,
                    // transaction_id,
                  />
                </View>
              )}
            </ScrollView>
          </BottomSheet>
          <BottomSheet height={550} ref={ref2}>
            <View style={{ padding: 20, gap: 30, paddingBottom: 50 }}>
              {/* <Text>Bottom Sheet Content</Text>
                          <TouchableOpacity onPress={handleCloseModal}>
                            <Text>Close</Text>
                          </TouchableOpacity> */}
              <View className="items-center">
                <Text
                  style={{
                    fontSize: 18,
                    color: "#2A94F4",
                    fontWeight: "bold"
                  }}
                >
                  Institutions
                </Text>
              </View>
              <View className="flex-row justify-between items-center">
                <TextInput
                  style={{ color: "#606162" }}
                  value={searchQuery}
                  onChangeText={(text) => setSearchQuery(text)}
                  placeholder="Search for Country"
                />
                {/* <CheckBox
                            checked={selectedIndex === 20}
                            onPress={() => setIndex(20)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                          /> */}
              </View>
              <View style={{ height: height * 0.47 }}>
                <FlatList
                  data={filteredData}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => {
                        console.log(item?.name);
                        setIndex(index);
                        setInstitution((prev) => ({
                          ...prev, // Spread the previous state correctly
                          name: item?.name, // Update the "country" property,
                          code: item?.code
                        }));
                        handleCloseModal2();
                      }}
                    >
                      <View className="flex-row justify-between gap-3">
                        <View className="flex-col gap-2">
                          <View className="flex-row items-center">
                            {/* {item?.image} */}
                            <Text className="text-[14px] font-bold">
                              {item?.name}
                            </Text>
                          </View>
                          {/* <View className="flex-row">
                                      <Text
                                        className="text-[12px] ml-4"
                                        style={{ color: "#105CE2" }}
                                      >
                                        Active
                                      </Text>
                                    </View> */}
                        </View>
                        <View className="flex-col items-end">
                          <CheckBox
                            checked={
                              selectedIndex === index ||
                              institution?.name === item?.name
                            }
                            // onPress={() => setIndex(index)}
                            onPress={() => {
                              console.log(item?.name);
                              setIndex(index);
                              setInstitution((prev) => ({
                                ...prev, // Spread the previous state correctly
                                name: item?.name, // Update the "country" property,
                                code: item?.code
                              }));
                              handleCloseModal2();
                            }}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                          />
                        </View>
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
              </View>
            </View>
          </BottomSheet>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MobilemoneyDetails;
