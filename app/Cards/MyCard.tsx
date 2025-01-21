import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SectionList,
  Modal,
  Pressable
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import Connection from "../../assets/Conection.svg";
import Cardwiremi from "../../assets/cardwiremi.svg";
import Chip from "../../assets/Chip.svg";
import Coloredcarat from "../../assets/coloredcarat.svg";
import Sendheader from "../../assets/sendheading.svg";
import Cardcopy from "../../assets/cardcopy.svg";
import Actions from "../../assets/actions.svg";
import { StatusBar } from "expo-status-bar";
import GradientBackground from "@/components/GradientBackground";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { GetCard } from "@/Store/Apis/GetCard";
import { clearStategetcard } from "@/Store/Reducers/GetCard";
import { CardTransactions } from "@/Store/Apis/CardTransactions";
import { FlatList } from "react-native";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const MyCard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [full, setFull] = useState<boolean>(true);
  const toggleCheckbox = () => setChecked(!checked);
  const ref = useRef<BottomSheetRef>(null);
  const [reduce, setReduce] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const formatDateWithTime = (isoString: any) => {
    const date = new Date(isoString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  const { getcards, authenticatinggetcards } = useAppSelector(
    (state) => state.getcards
  );

  console.log(getcards);

  const { cardtransactions, authenticatingcardtransactions } = useAppSelector(
    (state) => state.cardtransactions
  );

  console.log(cardtransactions);

  useEffect(() => {
    dispatch(GetCard({ router: router.push }));

    return () => {
      // dispatch(clearStategetcard());
    };
  }, []);

  useEffect(() => {
    if (getcards?.data?.id) {
      dispatch(CardTransactions({ router: router.push, id: getcards.data.id }));
    }
  }, [getcards?.data?.id]);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const DATA = cardtransactions?.data?.length
    ? cardtransactions?.data?.slice(0, 10)?.map((item: any) => ({
        title: formatDateWithTime(item?.created_at),
        data: item ? [item] : []
      }))
    : [];

  const colors = [
    "rgba(5, 179, 250, 0.6)",
    "rgba(5, 179, 250, 0.6)",
    "#105CE2",
    "rgba(5, 179, 250, 0.4)"
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "#8080808C",
            paddingTop: height * 0.03,
            alignItems: "flex-end"
          }}
          onPress={() => setIsVisible(false)}
        >
          <View
            style={{
              width: "40%",
              backgroundColor: "white",
              borderRadius: 10
            }}
          >
            <View>
              <View
                style={{
                  borderBottomColor: "#8080808C",
                  borderBottomWidth: 1,
                  padding: 10
                }}
              >
                <Pressable
                  onPress={() => {
                    router.push("/Cards/ChangeCardPin");
                    setIsVisible(!isVisible);
                  }}
                >
                  <Text>Change card pin</Text>
                </Pressable>
              </View>
              <View style={{ borderBottomColor: "#8080808C", padding: 10 }}>
                <Pressable
                  onPress={() => {
                    router.push("/Cards/DeactivateCard");
                    setIsVisible(!isVisible);
                  }}
                >
                  <Text>Deactivate card</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.05
        }}
        className="gap-4"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => {
              getcards?.status
                ? router.push("/(PersonalAccount)/VirtualCard")
                : router.push("/Cards/CreateCard");
            }}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">My virtual card</Text>
          <Pressable
            onPress={() => {
              setIsVisible(!isVisible);
              console.log("sodiq");
            }}
          >
            <Actions />
          </Pressable>
        </View>
        {full ? (
          <View style={{ paddingHorizontal: 5 }}>
            <GradientBackground colors={colors}>
              <View
                style={{ height: height * 0.32 }}
                className="flex-col p-5 justify-between"
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center gap-1">
                    <Chip />
                    <Connection />
                  </View>
                  <Cardwiremi />
                </View>
                <View className="flex-col items-center">
                  <Text className="text-white text-[32px] font-bold">
                    {getcards?.data?.card_number}
                  </Text>
                  <Text className="text-white">
                    Expires {getcards?.data?.expiry}
                  </Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-white">{getcards?.data?.name}</Text>
                </View>
              </View>
            </GradientBackground>
          </View>
        ) : (
          <View
            className="flex-row"
            style={{
              paddingHorizontal: 0,
              backgroundColor: "#F0F5FF",
              borderRadius: 10
            }}
          >
            <GradientBackground reduce={reduce} colors={colors}>
              <View></View>
            </GradientBackground>
            <View className="flex-col pl-4 gap-6 pt-6">
              <View>
                <Text style={{ color: "#413D43" }} className="text-[14px]">
                  Card number
                </Text>
                <View className="flex-row gap-3">
                  <Text className="text-[14px] font-bold">
                    {getcards?.data?.card_number}
                  </Text>
                  <Cardcopy />
                </View>
              </View>
              <View>
                <Text style={{ color: "#413D43" }} className="text-[14px]">
                  Expiry date
                </Text>
                <Text className="text-[14px] font-bold">
                  {getcards?.data?.expiry}
                </Text>
              </View>
              <View>
                <Text style={{ color: "#413D43" }} className="text-[14px]">
                  CVV
                </Text>
                <Text className="text-[14px] font-bold">
                  {getcards?.data?.cvv}
                </Text>
              </View>
              {/* <View>
                <Text style={{ color: "#413D43" }} className="text-[14px]">
                  Card pin
                </Text>
                <Text className="text-[14px] font-bold">1234</Text>
              </View> */}
            </View>
          </View>
        )}
        <View className="items-center">
          <View
            style={{
              backgroundColor: "#105CE21A",
              width: width * 0.3,
              height: height * 0.04,
              borderRadius: 8
            }}
            className="flex-row items-center justify-center"
          >
            {full ? (
              <Pressable onPress={() => setFull(!full)}>
                <Text style={{ color: "#105CE2" }}>Show details</Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => setFull(!full)}>
                <Text style={{ color: "#105CE2" }}>Hide details</Text>
              </Pressable>
            )}
            <Coloredcarat />
          </View>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-darktext text-[14px] font-bold">
            Recent Transactions
          </Text>
          <Text className="text-buttonprimary text-[12px]">See all</Text>
        </View>
        <View style={{ maxHeight: height * 0.8 }}>
          <FlatList
            scrollEnabled={false}
            data={cardtransactions?.data}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => (
              <View className="flex-col gap-2">
                <View className="flex-row justify-between items-center">
                  <View className="flex-row gap-1">
                    <Sendheader />
                    <View className="flex-col gap-1 justify-center items-start">
                      <Text className="text-[14px] text-darktext font-bold">
                        {item?.type} to{" "}
                        {item?.merchant?.name === "Maplerad"
                          ? ""
                          : item?.merchant?.name}
                      </Text>
                      <Text className="text-[12px] text-transdate">
                        {formatDateWithTime(item?.created_at)}
                      </Text>
                    </View>
                  </View>
                  <View className="flex-col justify-center items-center">
                    <Text className="text-[14px] text-darktext">
                      {item?.currency}
                      {item?.amount}
                    </Text>
                    {item?.status === "SUCCESS" ? (
                      <Text className="text-[12px] text-successtrans">
                        {item?.status}
                      </Text>
                    ) : item?.status === "FAILED" ? (
                      <Text className="text-[12px] text-failedtrans">
                        {item?.status}
                      </Text>
                    ) : (
                      <Text className="text-[12px] text-pendingtrans">
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
            )}
            bounces={false}
            contentContainerStyle={{
              gap: 5
            }}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MyCard;
