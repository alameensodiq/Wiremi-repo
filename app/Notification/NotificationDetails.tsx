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
import { useLocalSearchParams, useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import Wiremi from "../../assets/splash.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import MobileMoney from "../../assets/mobilemoney.svg";
import Mark from "../../assets/successmark.svg";
import Copy from "../../assets/copy.svg";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { SingleNotification } from "@/Store/Apis/SingleNotification";
import { clearStateallnotification } from "@/Store/Reducers/AllNotification";
import { clearStatesinglenotification } from "@/Store/Reducers/SingleNotification";
import { OpenedNotification } from "@/Store/Apis/OpenedNotification";
import { clearStateopenednotification } from "@/Store/Reducers/OpenedNotification";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const NotificationDetails = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);
  const dispatch = useAppDispatch();
  const { notificationid } = useLocalSearchParams();
  console.log(notificationid);
  const notificationIdNumber = +notificationid;

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const { singlenotification, authenticatingsinglenotification } =
    useAppSelector((state) => state.singlenotification);

  console.log(singlenotification, "data");

  const { openednotification, authenticatingopenednotification } =
    useAppSelector((state) => state.openednotification);

  console.log(openednotification, "opened");

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

  const formatDate = (isoString: any) => {
    const date = new Date(isoString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    dispatch(clearStateallnotification());
    dispatch(OpenedNotification());
    dispatch(SingleNotification({ notificationid: notificationIdNumber }));
    return () => {
      dispatch(clearStatesinglenotification());
      dispatch(clearStateopenednotification());
    };
  }, []);
  return (
    <ScrollView // style={{ backgroundColor: "#ffffff" }} 
    className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-3"
      >
        {!singlenotification?.data && !openednotification && (
          <View
            style={{ height: height, width: width }}
            className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
          >
            <ActivityIndicator size={200} color="#ffffff" />
          </View>
        )}
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/Notification")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Details</Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center gap-1">
          {singlenotification?.data[0]?.title.includes("Savings") ? (
            <Wiremi width={100} />
          ) : (
            // <MobileMoney />
            <Wiremi width={100} />
          )}
          <Text style={{ color: "#5F5F5F" }}>
            {/* <Text style={{ color: "#5F5F5F" }}>Transfer to</Text>{" "} */}
            <Text className="font-bold">
              {singlenotification?.data[0]?.title}
            </Text>
          </Text>
          {/* <Text
            style={{ color: "#00091E", fontSize: 18 }}
            className="font-bold"
          >
            $510.00
          </Text> */}
          <View className="flex-row items-center gap-2">
            <Mark />
            <Text style={{ color: "#00A85A", fontSize: 16 }}>Successful</Text>
          </View>
        </View>
        <View className="pr-2 pt-5 gap-1">
          <Text
            style={{ color: "#00091E", fontSize: 14 }}
            // className="font-bold"
          >
            Transaction details
          </Text>
          {/* <View className="flex-row justify-between items-center">
            <Text style={{ color: "#6E6E6E", fontSize: 14 }}>
              Transaction type
            </Text>
            <Text
              style={{ color: "#00091E", fontSize: 14, fontWeight: "bold" }}
            >
              Transfer
            </Text>
          </View> */}
          {/* <View className="flex-row justify-between items-center">
            <Text style={{ color: "#6E6E6E", fontSize: 14 }}>
              Sender details
            </Text>
            <Text
              style={{ color: "#00091E", fontSize: 14, fontWeight: "bold" }}
            >
              Susan Sheidu |WI234489120
            </Text>
          </View> */}
          <View className="flex-row justify-between items-center">
            {/* <Text style={{ color: "#6E6E6E", fontSize: 14 }}>Remark</Text> */}
            <Text style={{ color: "#00091E", fontSize: 14, width: width }}>
              {singlenotification?.data[0]?.message}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text style={{ color: "#6E6E6E", fontSize: 14 }}>
              Transaction date
            </Text>
            <Text style={{ color: "#00091E", fontSize: 14 }}>
              {formatDate(singlenotification?.data[0]?.createdAt)}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text style={{ color: "#6E6E6E" }}>Transaction time</Text>
            <Text style={{ color: "#00091E", fontSize: 14 }}>
              {formatDateWithTime(singlenotification?.data[0]?.createdAt)}
            </Text>
          </View>
          {/* <View className="flex-row justify-between items-center">
            <Text style={{ color: "#6E6E6E", fontSize: 14 }}>
              Transaction reference
            </Text>
            <View className="flex-row items-center gap-2">
              <Text style={{ fontWeight: "bold" }}>55678878900765342561</Text>
              <Copy />
            </View>
          </View> */}
        </View>
        <View className="pr-2 pl-4 pt-3">
          <Text className="text-buttonprimary">Note:</Text>
          <Text style={{ color: "#8D8F91", lineHeight: 24 }}>
            This transaction is recorded for reference. Please verify details
            and keep for future financial tracking or reconciliation.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default NotificationDetails;
