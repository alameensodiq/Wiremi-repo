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
import TextLabelBox from "@/components/TextLabelBox";
import SelectAndText from "@/components/SelectAndText";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const ProfileKyc = () => {
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
          <Text className="text-[20px] text-pagetitle">Update KYC info</Text>
          <Text></Text>
        </View>
        <View className="flex-1 relative  justify-start gap-2">
            <View className="flex-row justify-start items-start pb-10">
                <Text style={{color:'#413D43'}} className="text-[14px]">We need your basic information</Text>
            </View>
          <View>
            <SelectAndText title="Where do you live?" />
          </View>
          <View>
            <SelectAndText title="Phone number" />
          </View>
          <View>
            <TextLabelBox
              label="First name"
              placeholder="Enter your first name"
            />
          </View>
          <View>
            <TextLabelBox
              label="Last name"
              placeholder="Enter your last name"
            />
          </View>
          <View className="pt-20">
            <BlueSignInButton
              title="Send verification code"
              onPress={() => router.push('/Profiles/ConfirmKycInfo')}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileKyc;
