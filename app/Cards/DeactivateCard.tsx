import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Modal,
  Pressable
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Warning from "../../assets/warning.svg";
import Tick from "../../assets/tick.svg";
import ShortBlueButton from "@/components/ShortBlueButton";
import ShortWhiteButton from "@/components/ShortWhiteButton";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { GetCard } from "@/Store/Apis/GetCard";
import { FreezeCard } from "@/Store/Apis/FreezeCard";
import { clearStatefreezecard } from "@/Store/Reducers/FreezeCard";
import { UnfreezeCard } from "@/Store/Apis/UnfreezeCard";
import { clearStateunfreezecard } from "@/Store/Reducers/Unfreezecard";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const DeactivateCard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const toggleCheckbox = () => setChecked(!checked);
  const ref = useRef<BottomSheetRef>(null);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const {
    unfreezecards,
    authenticatingunfreezecards,
    errors: errorsunfreeze
  } = useAppSelector((state) => state.unfreezecards);

  console.log(unfreezecards);

  const { freezecards, authenticatingfreezecards, errors } = useAppSelector(
    (state) => state.freezecards
  );

  console.log(freezecards);

  useEffect(() => {
    dispatch(GetCard({ router: router.push }));

    return () => {
      // dispatch(clearStategetcard());
    };
  }, []);

  const { getcards, authenticatinggetcards } = useAppSelector(
    (state) => state.getcards
  );

  console.log(getcards);

  useEffect(() => {
    if (freezecards?.status) {
      router.push("/Cards/DeactivateSuccess");
    }
    if (unfreezecards?.status) {
      router.push("/Cards/DeactivateSuccess");
    }
    return () => {
      dispatch(clearStatefreezecard());
      dispatch(clearStateunfreezecard());
    };
  }, [freezecards?.status, unfreezecards?.status]);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      // style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-4"
      >
        <Modal animationType="slide" transparent={true} visible={isVisible}>
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
              {/* <View className="flex-col">
              {errors?.error?.map((item: any) => {
                <Text>{item}</Text>
              })}
              </View> */}
              {errorsunfreeze?.error &&
                typeof errorsunfreeze.error === "object" &&
                !Array.isArray(errorsunfreeze.error) &&
                Object.keys(errorsunfreeze.error).map((key, index) => (
                  <Text key={index}>
                    {key}:{" "}
                    {Array.isArray(errors.error[key])
                      ? errorsunfreeze.error[key].join(", ") // Handle arrays by joining the elements
                      : errorsunfreeze.error[key]}{" "}
                  </Text>
                ))}
              {errorsunfreeze?.error &&
                typeof errorsunfreeze.error !== "object" && (
                  <Text className="mb-3">{errorsunfreeze.error}</Text>
                )}
              <ShortBlueButton
                title="Close"
                onPress={() => setIsVisible2(false)}
              />
            </View>
          </Pressable>
        </Modal>
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Cards/MyCard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">
            {" "}
            {getcards?.data?.status === "TERMINATED"
              ? "Activate card"
              : "Deactivate card"}
          </Text>
          <Text></Text>
        </View>
        <View
          className="flex-col justify-between"
          style={{ height: height * 0.7 }}
        >
          <View className="flex-col">
            <View
              style={{ height: height * 0.2 }}
              className="flex-col gap-2 items-center justify-center"
            >
              <Warning />
              <Text className="text-[14px] font-bold">Warning</Text>
            </View>
            <View className="items-start mb-4">
              <Text style={{ color: "#606162" }}>
                Your card number {getcards?.data?.masked_pan},{" "}
                {getcards?.data?.status === "TERMINATED"
                  ? "activating"
                  : "deactivating"}
              </Text>
              <Text style={{ color: "#606162" }}>
                your card will{" "}
                {getcards?.data?.status === "TERMINATED" ? "allow" : "prevent"}
              </Text>
            </View>
            <View className="flex-col">
              <View className="flex-row gap-2 mb-6">
                <Tick />
                <Text className="text-[14px] font-bold">Card payments</Text>
              </View>
              <View className="flex-row gap-2">
                <Tick />
                <Text className="text-[14px] font-bold">
                  Online subscriptions
                </Text>
              </View>
            </View>
          </View>
          <View className="items-center justify-between flex-row">
            <ShortWhiteButton
              title="Cancel"
              color1
              onPress={() => router.push("/Cards/MyCard")}
            />
            {authenticatingfreezecards || authenticatingunfreezecards ? (
              <View className="flex-row justify-center items-center">
                <ActivityIndicator
                  color={"#105CE2"}
                  style={{ width: 30, height: 30 }}
                />
              </View>
            ) : (
              <ShortBlueButton
                title={
                  getcards?.data?.status === "TERMINATED"
                    ? "Activate"
                    : "Deactivate"
                }
                color1
                onPress={() => {
                  if (getcards?.data?.status === "TERMINATED") {
                    dispatch(
                      UnfreezeCard({
                        id: getcards?.data?.id,
                        router: router.push,
                        setIsVisible: setIsVisible2
                      })
                    );
                  } else {
                    dispatch(
                      FreezeCard({
                        id: getcards?.data?.id,
                        router: router.push,
                        setIsVisible: setIsVisible
                      })
                    );
                  }
                }}
                // onPress={() => router.push("/Cards/DeactivateSuccess")}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default DeactivateCard;
