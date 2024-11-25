import {
  View,
  Text,
  ImageBackground,
  // SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import Chat from "../../assets/chat.svg";
import Helpprofile from "../../assets/helpprofile.svg";
import RightCarat from "../../assets/rightcarat.svg";
import Phone from "../../assets/phone.svg";
import Email from "../../assets/email.svg";
import Location from "../../assets/locationblue.svg";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const HelpSupport = () => {
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
          <Text className="text-[20px] text-pagetitle">Help & Support</Text>
          <Text></Text>
        </View>
        <View
          style={{ borderBottomColor: "#EBEBEB", borderBottomWidth: 2 }}
          className="flex-row items-center gap-2 py-4"
        >
          <Helpprofile />
          <Text className="text-[16px] text-buttonprimary">Contact us</Text>
        </View>
        <View className="flex-row items-center justify-between p-5">
          <View className="flex-col gap-1 items-start">
            <Text>Call us via</Text>
            <View className="flex-row  items-center">
              <Phone />
              <Text className="text-[16px] ml-2" style={{ color: "#0A0A0A" }}>
                +1 343-453-9347
              </Text>
            </View>
          </View>
          <RightCarat />
        </View>
        <View className="flex-row items-center justify-between p-5">
          <View className="flex-col gap-1 items-start">
            <Text>Email us via</Text>
            <View className="flex-row  items-center">
              <Email />
              <Text className="text-[16px] ml-2" style={{ color: "#0A0A0A" }}>
                @wiremi.ca
              </Text>
            </View>
          </View>
          <RightCarat />
        </View>
        <View className="flex-row items-center justify-between p-5">
          <View className="flex-col gap-1 items-start">
            <Text>Visit us at</Text>
            <View className="flex-row w-[90%] items-center">
              <Location />
              <Text className="text-[16px] ml-2" style={{ color: "#0A0A0A" }}>
                21 King Street West, L8P 4W7 Hamilton
              </Text>
            </View>
          </View>
          <RightCarat />
        </View>
        <View
          style={{ borderBottomColor: "#EBEBEB", borderBottomWidth: 2 }}
          className="flex-row items-center gap-2 py-4"
        >
          <Helpprofile />
          <Text className="text-[16px] text-buttonprimary">Chat with us</Text>
        </View>
        <Pressable onPress={() => router.push("/Profiles/LiveChat")}>
          <View className="flex-row items-center justify-between p-5">
            <View className="flex-col gap-1 items-start">
              <Text>Chat us for help</Text>
              <View className="flex-row  items-center">
                <Chat />
                <Text className="text-[16px] ml-2" style={{ color: "#0A0A0A" }}>
                  Our support agents are active 24/7
                </Text>
              </View>
            </View>
            <RightCarat />
          </View>
        </Pressable>
      </SafeAreaView>
    </View>
  );
};

export default HelpSupport;
