import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
  SectionList
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import SendMoneyWiremi from "../../assets/Closednotify.svg";
import Filter from "../../assets/filter.svg";
import Openednotify from "../../assets/Openednotify.svg";
import SearchLabelBox from "@/components/SearchLabelBox";
import NotificationSearchLabel from "@/components/NotificaionSearchLabel";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import Sendheader from "../../assets/sendheading.svg";
import Senddeposit from "../../assets/senddeposit.svg";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import frame3 from "../../assets/frame3.png";
import { Image } from "expo-image";
import { UserTransactions } from "@/Store/Apis/UserTransactions";
import { clearStateusertransactions } from "@/Store/Reducers/UserTransactions";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const TransactionList = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);
  const [notificationSearch, setnotificationSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const handleCloseModal = () => {
    ref.current?.close();
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
    ? usertransactions?.map((item: any) => ({
        title: formatDateWithTime(item?.created_at),
        data: item ? [item] : []
      }))
    : [];

  const handleRefresh = () => {
    if (usertransactions?.length >= 20) {
      setRefreshing(true);
      dispatch(UserTransactions({ router: router.push }));
      setPage(page + 1);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    dispatch(UserTransactions({ router: router.push }));
    return () => {
      dispatch(clearStateusertransactions());
    };
  }, []);
  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.05
        }}
        className="gap-6"
      >
        {!usertransactions && (
          <View
            style={{ height: height, width: width }}
            className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
          >
            <ActivityIndicator size={200} color="#ffffff" />
          </View>
        )}
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Dashboard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Transactions</Text>
          <Text></Text>
        </View>
        <View className="flex-row">
          <NotificationSearchLabel
            onChangeText={(text) => setnotificationSearch(text)}
            placeholder="Search"
          />
          <Filter />
        </View>
        <View style={{ height: height * 0.72 }}>
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
                      {item?.method === "Wiremi transfer" ? (
                        <Sendheader />
                      ) : item?.method === "Mobile withdraw" ? (
                        <Sendheader />
                      ) : (
                        <Senddeposit />
                      )}
                      <Sendheader />
                      <View className="flex-col gap-1 justify-center items-start">
                        <Text className="text-[14px] text-darktext font-bold">
                          {item?.method} to {item?.receiver?.last_name}
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
              <Text className="text-[12px] text-sectionheader">{title}</Text>
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
            refreshing={refreshing}
            onEndReached={handleRefresh}
            onEndReachedThreshold={0.2}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default TransactionList;
