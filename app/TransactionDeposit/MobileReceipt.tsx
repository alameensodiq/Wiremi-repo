import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import Forgotsuccess from "../../assets/forgotsuccess.svg";
import ReceiptWiremi from "../../assets/receiptwiremi.svg";
import Copy from "../../assets/copy.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useAppContext } from "@/Context/useAppContext";

const MobileReceipt = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const { theme } = useAppContext();
  return (
    <View
      className={`${
        theme === "dark" ? "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"
      }`}
    >
      <StatusBar
        hidden={false}
        style={`${theme === "dark" ? "light" : "dark"}`}
      />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-6"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/TransactionDeposit/MobileSuccess")}
          >
            <Back
              style={{ backgroundColor: theme === "dark" ? "#ffffff" : "" }}
            />
          </TouchableOpacity>
          <Text
            className={`${
              theme === "dark"
                ? "text-[20px] text-[#ffffff]"
                : "text-[20px] text-pagetitle"
            }`}
          >
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
              style={{ color: theme === "dark" ? "#ffffff" : "#1E1B39" }}
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
              <Text
                className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}
              >
                You desposited
              </Text>
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "text-darktext font-bold"
                }`}
              >
                $500
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text
                className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}
              >
                Fees
              </Text>
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "text-darktext font-bold"
                }`}
              >
                $10
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text
                className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}
              >
                Recipient details
              </Text>
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "text-darktext font-bold"
                }`}
              >
                Susan Sheidu
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text
                className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}
              >
                Payment method
              </Text>
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "text-darktext font-bold"
                }`}
              >
                Debit card
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text
                className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}
              >
                Date
              </Text>
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "text-darktext font-bold"
                }`}
              >
                13/09/2024
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text
                className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}
              >
                Time
              </Text>
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "text-darktext font-bold"
                }`}
              >
                12:09:10AM
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text
                className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}
              >
                Contact info
              </Text>
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "text-darktext font-bold"
                }`}
              >
                +1 90 345 67895
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text
                className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}
              >
                Address
              </Text>
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "text-darktext font-bold"
                }`}
              >
                No 32a Berkely Street
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text
                className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}
              >
                Description
              </Text>
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "text-darktext font-bold"
                }`}
              >
                Mobile money deposit
              </Text>
            </View>
            <View className="flex-row items-center justify-between p-3">
              <Text
                className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}
              >
                Transaction ref
              </Text>
              <View className="flex-row">
                <Text
                  className={`${
                    theme === "dark"
                      ? "font-bold text-[#ffffff]"
                      : "text-darktext font-bold"
                  }`}
                >
                  55678878900765342561
                </Text>
                <Copy />
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
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "text-darktext font-bold"
                }`}
              >
                Total amount:
              </Text>
              <Text className="text-buttonprimary font-bold">$500.00</Text>
            </View>
          </View>
          <View
            className="flex-col gap-2 pl-2"
            style={{ marginBottom: height * 0.03 }}
          >
            <Text
              className={`${
                theme === "dark"
                  ? "text-[12px] text-[#ffffff]"
                  : "text-[12px] text-lighttextdark"
              }`}
            >
              Transaction status
            </Text>
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
              <Text style={{ color: "#00A85A", fontSize: 16 }}>Successful</Text>
            </View>
          </View>
          <View
            className="flex-col gap-2 pl-2"
            style={{ marginBottom: height * 0.03 }}
          >
            <Text className="text-[12px] text-lighttextdark">Note</Text>
            <View className="flex-col">
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "font-bold text-dark"
                }`}
              >
                we have successfully deposited the amount
              </Text>
              <Text
                className={`${
                  theme === "dark"
                    ? "font-bold text-[#ffffff]"
                    : "font-bold text-dark"
                }`}
              >
                to the recipient account
              </Text>
            </View>
          </View>
          <View className="items-center justify-center">
            <BlueSignInButton
              title="Share receipt"
              onPress={() => router.push("/TransactionDeposit/MobileSuccess")}
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

export default MobileReceipt;
