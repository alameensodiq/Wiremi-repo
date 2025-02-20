import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Alert
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Forgotsuccess from "../../assets/forgotsuccess.svg";
import ReceiptWiremi from "../../assets/receiptwiremi.svg";
import Copy from "../../assets/copy.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useEffect, useState } from "react";
import { UserTransactions } from "@/Store/Apis/UserTransactions";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import * as Clipboard from "expo-clipboard";

const TransactioReceipt = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [content, setcontent] = useState<any>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { id } = useLocalSearchParams();
  console.log(id);
  //   const notificationIdNumber = +notificationid;
  const { usertransactions, authenticatingusertransactions } = useAppSelector(
    (state) => state.usertransactions
  );
  console.log(
    usertransactions?.slice(0, 10),
    authenticatingusertransactions,
    "transactions"
  );

  const handleCopy = () => {
    Clipboard.setString(content?.trans_ref || ""); // Copy text to clipboard
  };

  const formatNumberWithCommas = (number: any) => {
    if (number == null) return "0"; // Handle null or undefined
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);

    let hours = date.getHours(); // Get hours in 24-hour format
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Pad minutes with leading zero
    const ampm = hours >= 12 ? "PM" : "AM"; // Determine AM or PM

    hours = hours % 12 || 12; // Convert 24-hour to 12-hour format (12 should stay 12)

    return `${hours}:${minutes} ${ampm}`;
  };

  useEffect(() => {
    dispatch(UserTransactions({ router: router.push }));
    return () => {
      //   dispatch(clearStateusertransactions());
    };
  }, []);

  useEffect(() => {
    if (usertransactions) {
      setcontent(usertransactions?.find((item: any) => item?.id === +id));
    }
  }, [usertransactions, id]);

  console.log(content);
  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-1"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Dashboard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">
            Transaction receipt
          </Text>
          <Text></Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="mb-6">
          <View
            style={{
              height: height * 0.17,
              borderBottomWidth: 1,
              borderBottomColor: "#DCDEE0",
              borderStyle: "dashed"
            }}
            className="flex-col gap-3 items-center justify-center"
          >
            <Forgotsuccess />
            <Text
              style={{ color: "#1E1B39" }}
              className="text text-[18px] font-bold"
            >
              Successful
            </Text>
          </View>
          <View
            className="felx-col gap-1"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#DCDEE0",
              borderStyle: "dashed",
              marginTop: height * 0.01,
              paddingBottom: height * 0.03
            }}
          >
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-lighttextdark font-[14px]">
                You {content?.type}
              </Text>
              <Text className="text-darktext font-bold">
                {content?.currency}
                {formatNumberWithCommas(content?.amount)}
              </Text>
            </View>
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-lighttextdark font-[14px]">Fees</Text>
              <Text className="text-darktext font-bold">
                {content?.currency}
                {formatNumberWithCommas(content?.fee)}
              </Text>
            </View>
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-lighttextdark font-[14px]">
                Recipient details
              </Text>
              <Text className="text-darktext font-bold">
                {content?.receiver?.last_name} {content?.receiver?.first_name}
              </Text>
            </View>
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-lighttextdark font-[14px]">
                Payment method
              </Text>
              <Text className="text-darktext font-bold">{content?.method}</Text>
            </View>
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-lighttextdark font-[14px]">Date</Text>
              <Text className="text-darktext font-bold">
                {formatDateWithTime(content?.created_at)}
              </Text>
            </View>
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-lighttextdark font-[14px]">Time</Text>
              <Text className="text-darktext font-bold">
                {formatTime(content?.created_at)}
              </Text>
            </View>
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-lighttextdark font-[14px]">
                Contact info
              </Text>
              <Text className="text-darktext font-bold">
                {content?.sender?.telephone}
              </Text>
            </View>
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-lighttextdark font-[14px]">
                Sender name
              </Text>
              <Text className="text-darktext font-bold">
                {content?.sender?.first_name}
              </Text>
            </View>
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-lighttextdark font-[14px]">
                Description
              </Text>
              <Text className="text-darktext font-bold">
                Credit card deposit
              </Text>
            </View>
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-lighttextdark font-[14px]">
                Transaction ref
              </Text>
              <View className="flex-row">
                <Text className="text-darktext font-bold">
                  {content?.trans_ref}
                </Text>
                <Pressable onPress={() => handleCopy()}>
                  <Copy />
                </Pressable>
              </View>
            </View>
          </View>
          <View
            className="felx-col gap-1"
            style={{
              marginTop: height * 0.005,
              paddingBottom: height * 0.01
            }}
          >
            <View className="flex-row items-center justify-between py-1 px-3">
              <Text className="text-darktext font-bold">Total amount:</Text>
              <Text className="text-buttonprimary font-bold">
                {content?.currency}
                {formatNumberWithCommas(content?.total)}
              </Text>
            </View>
          </View>
          <View
            className="flex-col gap-1 pl-2"
            style={{ marginBottom: height * 0.03 }}
          >
            <Text className="text-[12px] text-lighttextdark">
              Transaction status
            </Text>
            <View
              style={{
                // backgroundColor: "#00A85A33",
                opacity: 0.8,
                borderRadius: 10,
                width: width * 0.3,
                height: height * 0.05
              }}
              className={`${
                content?.status === "completed"
                  ? "items-center justify-center bg-[#00A85A33]"
                  : content?.status === "pending"
                  ? "items-center justify-center bg-pendingtrans"
                  : "items-center justify-center bg-failedtrans"
              }`}
            >
              {content?.status === "completed" ? (
                <Text className="text-[12px] text-successtrans">
                  {content?.status}
                </Text>
              ) : content?.status === "pending" ? (
                <Text className="text-[12px] text-pendingtrans">
                  {content?.status}
                </Text>
              ) : (
                <Text className="text-[12px] text-failedtrans">
                  {content?.status}
                </Text>
              )}
            </View>
          </View>
          <View
            className="flex-col gap-1 pl-2"
            style={{ marginBottom: height * 0.005 }}
          >
            <Text className="text-[12px] text-lighttextdark">Note</Text>
            <View className="flex-col">
              <Text className="font-bold text-dark">
                Your savings instance tuition was{" "}
                {content?.status === "completed"
                  ? "complete"
                  : content?.status === "pending"
                  ? "pending"
                  : "terminated"}
              </Text>
              <Text className="font-bold text-dark">
                and funds paid to you main balance
              </Text>
            </View>
          </View>
          <View className="items-center justify-center">
            <BlueSignInButton
              title="Share receipt"
              onPress={() => console.log("share")}
            />
          </View>
          <View className="items-center justify-center mt-4">
            <ReceiptWiremi />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default TransactioReceipt;
