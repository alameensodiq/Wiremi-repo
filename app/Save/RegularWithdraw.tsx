import {
  View,
  Text,
  ImageBackground,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomSheet } from "@/components/Bottom";
import WhiteSignInButton from "@/components/WhiteSignInButton";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { GetSaving } from "@/Store/Apis/GetSaving";
import { GetSavingAnalytics } from "@/Store/Apis/GetSavingAnalytics";
import { clearStategetsaving } from "@/Store/Reducers/GetSaving";
import { clearStategetsavinganalytics } from "@/Store/Reducers/GetSavingAnalytics";
import { SavingsPayout } from "@/Store/Apis/SavingsPayout";
import SixDigits from "@/components/SixDigits";
import ShortBlueButton from "@/components/ShortBlueButton";
import { clearStatesavingspayout } from "@/Store/Reducers/SavingsPayout";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const RegularWithdraw = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(true);
  const [amount, setAmount] = React.useState<number>(0);
  const [pin, setPin] = React.useState<string>("");
  const toggleCheckbox = () => setChecked(!checked);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const ref = useRef<BottomSheetRef>(null);
  const ref2 = useRef<BottomSheetRef>(null);
  const { id } = useLocalSearchParams();
  const ids = +id;
  console.log(ids);
  const dispatch = useAppDispatch();

  const { savingspayout, authenticatingsavingspayout, errors } = useAppSelector(
    (state) => state.savingspayout
  );

  console.log(savingspayout);

  useEffect(() => {
    dispatch(clearStategetsaving());
    dispatch(clearStategetsavinganalytics());
    dispatch(clearStatesavingspayout());
    if (savingspayout?.status === true) {
      setAmount(0)
      router.push("/Save/RegularWithdrawSuccess");
    }
    return () => {
      dispatch(GetSaving({ id: ids, router: router.push }));
      dispatch(GetSavingAnalytics({ id: ids, router: router.push }));
      dispatch(clearStatesavingspayout());
    };
  }, [savingspayout]);

  // useEffect(() => {
  //   if (savingspayout?.status === true) {
  //     router.push("/Save/RegularWithdrawSuccess");
  //   }
  //   console.log(savingspayout?.status)
  // }, [savingspayout?.status]);

  const onChange = (name: string, value: number) => {
    console.log(value);
    const numericValue = Number(value);
    if (!isNaN(numericValue)) {
      setAmount(numericValue);
    } else {
      console.error("Invalid input: Not a number");
    }
  };

  const onChangepin = (value: string) => {
    setPin(value);
  };

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const handleCloseModal2 = () => {
    ref2.current?.close();
  };
  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-4"
      >
        <Modal animationType="fade" transparent={true} visible={isVisible}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => setIsVisible(false)}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              {/* <View className="flex-col">
              {errors?.error?.map((item: any) => {
                <Text>{item}</Text>
              })}
              </View> */}
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
                onPress={() => setIsVisible(false)}
              />
            </View>
          </Pressable>
        </Modal>
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/Save/RegularSavingsSummary")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Withdraw</Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center">
          <TransactionTextLabel
            label="Amount"
            onChangeText={(value: number) => onChange("amount", value)}
            placeholder="Enter amount $0.00"
          />
        </View>
        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <BlueSignInButton
            title="Proceed"
            onPress={() => {
              if (amount && id) {
                ref.current?.open();
              }
            }}
            // onPress={() => ref.current?.open()}
          />
        </View>
        <BottomSheet height={350} ref={ref}>
          <View style={{ padding: 20, gap: 30 }}>
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#292D32", fontWeight: "bold" }}
              >
                Emergency Fund
              </Text>
            </View>
            <View className="flex-col items-center text-[14px]">
              <Text>This is a one time withdrawal. You will no longer be</Text>
              <Text>entitled to withdraw any amount from your savings</Text>
              <Text>instance</Text>
            </View>
            <View style={{ height: height * 0.5, gap: 15 }}>
              <BlueSignInButton
                title="Accept and Continue"
                onPress={() => {
                  handleCloseModal();
                  ref2?.current?.open();
                  // router.push("/Save/RegularWithdrawSuccess");
                }}
              />
              <WhiteSignInButton
                title="Cancel"
                onPress={() => {
                  handleCloseModal();
                }}
              />
            </View>
          </View>
        </BottomSheet>
        <BottomSheet height={350} ref={ref2}>
          <View style={{ padding: 20, gap: 10 }}>
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#292D32", fontWeight: "bold" }}
              >
                Enter Pin
              </Text>
            </View>
            <View className="flex-col">
              <Text
                className="text-textblack text-[13px]"
                style={{ marginBottom: height * 0.01 }}
              >
                Enter pin code
              </Text>
              <SixDigits onChangeText={(value: string) => onChangepin(value)} />
            </View>
            <View style={{ height: height * 0.5, gap: 15 }}>
              {authenticatingsavingspayout ? (
                <View className="flex-row justify-center items-center">
                  <ActivityIndicator
                    color={"#105CE2"}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
              ) : (
                <BlueSignInButton
                  title="Accept and Continue"
                  onPress={() => {
                    handleCloseModal2();
                    if (amount  && id) {
                      dispatch(
                        SavingsPayout({
                          id: ids,
                          router: router.push,
                          amount,
                          type: 'normal',
                          pin,
                          setIsVisible: setIsVisible
                        })
                      );
                    }
                  }}
                />
              )}

              <WhiteSignInButton
                title="Cancel"
                onPress={() => {
                  handleCloseModal2();
                }}
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default RegularWithdraw;
