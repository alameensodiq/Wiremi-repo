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
import PayName from "../../assets/payname.svg";
import PayNumber from "../../assets/paynumber.svg";
import BankHouse from "../../assets/bankhouse.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import Copyname from "../../assets/copyname.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import { BottomSheet } from "@/components/Bottom";
import Redrightcarat from "../../assets/redrightcarat.svg";
import Fingerprint from "../../assets/fingerprint.svg";
import Profileinfopics from "../../assets/profileinfopics.svg";
import FourDigits from "@/components/FourDigits";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const ProfileInfo = () => {
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
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">
            Personal information
          </Text>
          <Text></Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-col justify-center items-center">
            <Profileinfopics />
            <Text style={{ color: "#868E96", fontSize: 14 }}>
              Tap to change photo
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">First Name</Text>
            <Text className="text-darktext font-[14px]">Susan</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Last Name</Text>
            <Text className="text-darktext font-[14px]">Sheidu</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">
              Date of birth
            </Text>
            <Text className="text-darktext font-[14px]">10-09-2001</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Postal code</Text>
            <Text className="text-darktext font-[14px]">102001</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Address</Text>
            <Text className="text-darktext font-[14px]">
              No 62 Berkely street
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Country</Text>
            <Text className="text-darktext font-[14px]">United States</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Wiremi ID</Text>
            <Text className="text-darktext font-[14px]">WI3245678909</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">
              Subscription plan
            </Text>
            <Text className="text-darktext font-[14px]">6 months</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">
              Base currency
            </Text>
            <Text className="text-darktext font-[14px]">USD</Text>
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

export default ProfileInfo;
