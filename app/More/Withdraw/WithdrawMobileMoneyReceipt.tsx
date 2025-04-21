import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import Forgotsuccess from "../../../assets/forgotsuccess.svg";
import ReceiptWiremi from "../../../assets/receiptwiremi.svg";
import Copy from "../../../assets/copy.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Clipboard from "expo-clipboard";

const WithdrawMobileMoneyReceipt = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const {
    amount,
    fee,
    currency,
    receivername,
    receiverbank,
    type,
    date,
    status,
    reference,
    reason,
    receivernumber
  } = useLocalSearchParams();
  console.log(amount, fee);
  const amountNumber = +amount;
  const feeNumber = +fee;

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

  const formatDate = (isoString: any) => {
    const date = new Date(isoString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year}`;
  };
  const handleCopy = () => {
    const referenceString =
      typeof reference === "string" ? reference : reference?.[0] || "";
    Clipboard.setString(referenceString);
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
        className="gap-6"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.back()}>
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
              height: height * 0.3,
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
            className="felx-col gap-2"
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#DCDEE0",
              borderStyle: "dashed",
              marginTop: height * 0.03,
              paddingBottom: height * 0.03
            }}
          >
            <View className="flex-row items-center justify-between p-3">
              <Text className="text-lighttextdark font-[14px]">
                You transferred
              </Text>
              <Text className="text-darktext font-bold">
                {" "}
                {currency}
                {formatNumberWithCommas(amountNumber)}
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text className="text-lighttextdark font-[14px]">Fees</Text>
              <Text className="text-darktext font-bold">
                {" "}
                {currency}
                {formatNumberWithCommas(feeNumber)}
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text className="text-lighttextdark font-[14px]">
                Recipient name
              </Text>
              <Text className="text-darktext font-bold">{receivername}</Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text className="text-lighttextdark font-[14px]">
                Recipient account number
              </Text>
              <Text className="text-darktext font-bold">{receivernumber}</Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text className="text-lighttextdark font-[14px]">
                Destination bank
              </Text>
              <Text className="text-darktext font-bold">{receiverbank}</Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text className="text-lighttextdark font-[14px]">
                Transfer type
              </Text>
              <Text className="text-darktext font-bold">{type}</Text>
            </View>
            {/* <View className="flex-row items-center justify-between p-3">
                        <Text className="text-lighttextdark font-[14px]">Country</Text>
                        <Text className="text-darktext font-bold">Nigeria</Text>
                      </View> */}
            <View className="flex-row items-center justify-between p-3">
              <Text className="text-lighttextdark font-[14px]">Date</Text>
              <Text className="text-darktext font-bold">
                {" "}
                {formatDate(date)}
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text className="text-lighttextdark font-[14px]">Time</Text>
              <Text className="text-darktext font-bold">
                {formatDateWithTime(date)}
              </Text>
            </View>
            {/* <View className="flex-row items-center justify-between p-3">
                        <Text className="text-lighttextdark font-[14px]">Address</Text>
                        <Text className="text-darktext font-bold">
                          No 32a Berkely Street
                        </Text>
                      </View> */}
            <View className="flex-row items-center justify-between p-3">
              <Text className="text-lighttextdark font-[14px]">
                Description
              </Text>
              <Text className="text-darktext font-bold">{reason}</Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text className="text-lighttextdark font-[14px]">
                Transaction ref
              </Text>
              <View className="flex-row">
                <Text className="text-darktext font-bold">{reference}</Text>
                <Pressable onPress={() => handleCopy()}>
                  <Copy />
                </Pressable>
              </View>
            </View>
          </View>
          <View
            className="felx-col gap-2"
            style={{
              marginTop: height * 0.03,
              paddingBottom: height * 0.03
            }}
          >
             <View className="flex-row items-center justify-between p-3">
              <Text className="text-darktext font-bold">Total amount:</Text>
              <Text className="text-buttonprimary font-bold"> {currency}
              {formatNumberWithCommas(amountNumber + feeNumber)}</Text>
            </View>
          </View>
          <View
            className="flex-col gap-2 pl-2"
            style={{ marginBottom: height * 0.03 }}
          >
            <Text className="text-[12px] text-lighttextdark">
              Transaction status
            </Text>
            {status === "PENDING" ? (
              <View
                style={{
                  backgroundColor: "#e2eb68",
                  opacity: 0.8,
                  borderRadius: 10,
                  width: width * 0.3,
                  height: height * 0.05
                }}
                className="items-center justify-center"
              >
                <Text style={{ color: "#c2ce1d", fontSize: 16 }}>Pending</Text>
              </View>
            ) : (
              <View
                style={{
                  backgroundColor: "#00A85A33",
                  opacity: 0.8,
                  borderRadius: 10,
                  width: width * 0.3,
                  height: height * 0.05
                }}
                className="items-center justify-center"
              >
                <Text style={{ color: "#00A85A", fontSize: 16 }}>
                  Successful
                </Text>
              </View>
            )}
          </View>
          <View
            className="flex-col gap-2 pl-2"
            style={{ marginBottom: height * 0.03 }}
          >
            <Text className="text-[12px] text-lighttextdark">Note</Text>
            <View className="flex-col">
              <Text className="font-bold text-dark">
                we have successfully deposited the amount
              </Text>
              <Text className="font-bold text-dark">
                to the recipient account
              </Text>
            </View>
          </View>
          <View className="items-center justify-center">
            <BlueSignInButton
              title="Share receipt"
              onPress={
                () => console.log("Share")
                //   router.push("/TransactionDeposit/BankDepositSummary")
              }
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

export default WithdrawMobileMoneyReceipt;
