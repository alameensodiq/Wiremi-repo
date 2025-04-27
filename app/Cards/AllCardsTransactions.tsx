import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import SendMoneyWiremi from "../../assets/Closednotify.svg";
import Filter from "../../assets/filter.svg";
import Openednotify from "../../assets/Openednotify.svg";
import SearchLabelBox from "@/components/SearchLabelBox";
import NotificationSearchLabel from "@/components/NotificaionSearchLabel";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { AllNotification } from "@/Store/Apis/AllNotification";
import { clearStatemainwallet } from "@/Store/Reducers/Mainwallet";
import { clearStateusertransactions } from "@/Store/Reducers/UserTransactions";
import { clearStateallnotification } from "@/Store/Reducers/AllNotification";
import { clearStatesinglenotification } from "@/Store/Reducers/SingleNotification";
import { clearStateopenednotification } from "@/Store/Reducers/OpenedNotification";
import Sendheader from "../../assets/sendheading.svg";
import { GetCard } from "@/Store/Apis/GetCard";
import { CardTransactions } from "@/Store/Apis/CardTransactions";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const AllCardsTrannsactions = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
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

  const handleRefresh = () => {
    if (cardtransactions?.data?.length >= 20) {
      setRefreshing(true);
      dispatch(
        CardTransactions({
          router: router.push,
          id: getcards.data.id,
          page: page + 1
        })
      );
      setPage(page + 1);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    dispatch(GetCard({ router: router.push }));

    return () => {
      // dispatch(clearStategetcard());
    };
  }, []);

  useEffect(() => {
    if (getcards?.data?.id) {
      dispatch(
        CardTransactions({ router: router.push, id: getcards.data.id, page })
      );
    }
  }, [getcards?.data?.id]);
  return (
    <View // style={{ backgroundColor: "#ffffff" }} 
    className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.06
        }}
        className="gap-6"
      >
        {authenticatingcardtransactions && (
          <View
            style={{ height: height, width: width }}
            className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
          >
            <ActivityIndicator size={200} color="#ffffff" />
          </View>
        )}
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Cards/MyCard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Card Transactions</Text>
          <Text></Text>
        </View>
        <View className="flex-row">
          <NotificationSearchLabel
            // onChangeText={(text) => setnotificationSearch(text)}
            placeholder="Search"
          />
          <Filter />
        </View>
        <View style={{ height: height }}>
          <FlatList
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
                      <Text className="text-[14px] text-darktext">
                        {item?.type?.charAt(0).toUpperCase() +
                          item?.type?.slice(1).toLowerCase()}{" "}
                        to{" "}
                        {item?.merchant?.name === "Maplerad"
                          ? ""
                          : item?.merchant?.name?.charAt(0).toUpperCase() +
                            item?.merchant?.name?.slice(1).toLowerCase()}
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
            refreshing={refreshing}
            onEndReached={handleRefresh}
            onEndReachedThreshold={0.2}
            // onRefresh={handleRefresh}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default AllCardsTrannsactions;
