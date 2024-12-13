import {
  View,
  Text,
  ImageBackground,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import On from "../../assets/on.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import { BottomSheet } from "@/components/Bottom";
import Redrightcarat from "../../assets/redrightcarat.svg";
import Fingerprint from "../../assets/fingerprint.svg";
import FourDigits from "@/components/FourDigits";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const PaymentSettings = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
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
        className="gap-2"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() =>
              router.push("/Profile")
            }
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">
          Payment settings
          </Text>
          <Text></Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">
            Daily transaction limit
            </Text>
            <Text className="text-darktext font-[14px]">$1,200</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">
            Payment method
            </Text>
            <Text className="text-darktext font-[14px]">
            Mobile money
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Cross border transfer</Text>
            <On/>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Online payment</Text>
            <On />
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">QR payment</Text>
            <On />
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">
            Bank transfer
            </Text>
            <On />
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Accept online payment</Text>
            <On />
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Early salary access</Text>
            <On />
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Mass payout</Text>
            <On />
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Payroll access</Text>
            <On />
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Tax report</Text>
            <On />
          </View>


          <BottomSheet height={450} ref={ref}>
            <View style={{ padding: 20, gap: 5 }}>
              {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
              <View className="items-center justify-center gap-2 flex-col">
                <Text
                  className="mb-2"
                  style={{ fontSize: 13, color: "#606162" }}
                >
                  Enter a transactin pin
                </Text>
                <FourDigits />
              </View>
              <View className="flex-col gap-8 px-8 mt-2">
                <View className="flex-row justify-between items-center">
                  <TouchableOpacity
                    onPress={() => {
                      router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        1
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        2
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        3
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center">
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        4
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        5
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        6
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center">
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        7
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        8
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        9
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center">
                  <View>
                    <Fingerprint />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        0
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Redrightcarat />
                  </View>
                </View>
              </View>
            </View>
          </BottomSheet>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PaymentSettings;
