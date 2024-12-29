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
import { useEffect, useRef } from "react";
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

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const NotificationList = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const formatDateWithTime = (isoString: any) => {
    const date = new Date(isoString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;

    // return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  const { allnotification, authenticatingallnotification } = useAppSelector(
    (state) => state.allnotification
  );

  console.log(allnotification);

  useEffect(() => {
    dispatch(AllNotification());
    dispatch(clearStatemainwallet());
    dispatch(clearStateusertransactions());
    dispatch(clearStatesinglenotification());
    dispatch(clearStateopenednotification());
    return () => {
      dispatch(clearStateallnotification());
    };
  }, []);

  const data = allnotification?.data;
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
        {!allnotification?.data && (
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
          <Text className="text-[20px] text-pagetitle">Notifications</Text>
          <Text></Text>
        </View>
        <View className="flex-row">
          <NotificationSearchLabel placeholder="Search" />
          <Filter />
        </View>
        <View style={{ height: height * 0.72 }}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View className="gap-2">
                <View className="flex-row items-start gap-2">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.07,
                      height: height * 0.03
                    }}
                    className="justify-center items-center"
                  >
                    {item?.opened ? <Openednotify /> : <SendMoneyWiremi />}
                  </View>
                  <View>
                    <Text className="text-black font-[13px]">
                      {item?.title}
                    </Text>
                    <Text style={{ color: "#989AAF" }}>{item?.message}</Text>
                  </View>
                </View>
                <View className="flex-row justify-between px-2">
                  <Text style={{ color: "#606162" }} className="font-[10px]">
                    {formatDateWithTime(item?.createdAt)}
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      router.push(
                        `/Notification/NotificationDetails?notificationid=${item.id}`
                      )
                    }
                  >
                    <Text className="text-buttonprimary">View</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyExtractor={(item) => item?.id?.toString()}
            contentContainerStyle={{
              gap: 50,
              paddingHorizontal: width * 0.03
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NotificationList;
