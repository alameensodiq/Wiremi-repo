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
  import BlueSignInButton from "@/components/BlueSignInButton";
  import Copyname from "../../assets/copyname.svg";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useRef } from "react";
  import SelectAndText from "@/components/SelectAndText";
  
  type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };
  
  const ResetPin = () => {
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
            <TouchableOpacity onPress={() => router.push("/Profiles/TransactionPin")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Reset pin</Text>
            <Text></Text>
          </View>
          <View className="flex-1 relative  justify-start gap-2">
              <View className="flex-col justify-start items-start pb-10">
                   <Text className="text-black text-[16px] font-bold">Reset Pin</Text>
                  <Text style={{color:'#413D43'}} className="text-[14px]">Enter your phone number to receive OTP for pin reset.</Text>
              </View>
            <View>
              <SelectAndText title="Phone number" />
            </View>
            <View className="pt-20">
              <BlueSignInButton
                title="Proceed"
                onPress={() => router.push('/Profiles/ResetPinNumber')}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  };
  
  export default ResetPin;
  