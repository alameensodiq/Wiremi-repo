import {
  View,
  Text,
  ImageBackground,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import BlueSignInButton from "@/components/BlueSignInButton";
import TextLabelBox from "@/components/TextLabelBox";
import { useAppContext } from "@/Context/useAppContext";

const MomoSummary = () => {
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
            onPress={() => router.push("/TransactionDeposit/MomoDetails")}
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
            Transaction Summary
          </Text>
          <Text></Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text
            className={`${
              theme === "dark"
                ? "font-[14px] text-[#ffffff]"
                : "text-lighttextdark font-[14px]"
            }`}
          >
            Amount
          </Text>
          <Text
            className={`${
              theme === "dark"
                ? "font-[14px] text-[#ffffff]"
                : "text-darktext font-[14px]"
            }`}
          >
            $500
          </Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
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
                ? "font-[14px] text-[#ffffff]"
                : "text-darktext font-[14px]"
            }`}
          >
            $0.00
          </Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text
            className={`${
              theme === "dark"
                ? "font-[14px] text-[#ffffff]"
                : "text-lighttextdark font-[14px]"
            }`}
          >
            Tax
          </Text>
          <Text
            className={`${
              theme === "dark"
                ? "font-[14px] text-[#ffffff]"
                : "text-darktext font-[14px]"
            }`}
          >
            $0.00
          </Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text
            className={`${
              theme === "dark"
                ? "font-[14px] text-[#ffffff]"
                : "text-lighttextdark font-[14px]"
            }`}
          >
            Deposit type
          </Text>
          <Text className="text-darktext font-bold">Momo USSD</Text>
        </View>
        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          <TextLabelBox
            label="Transaction reference"
            placeholder="Enter transaction reference"
          />
        </View>
        {/* <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className={`${
                  theme === "dark"
                    ? "font-[14px] text-[#ffffff]"
                    : "text-lighttextdark font-[14px]"
                }`}>Total</Text>
            <Text className="text-buttonprimary font-[14px]">$500</Text>
          </View> */}
        <View className="items-center justify-center">
          <BlueSignInButton
            title="Proceed"
            onPress={() => router.push("/TransactionDeposit/MomoSuccess")}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MomoSummary;
