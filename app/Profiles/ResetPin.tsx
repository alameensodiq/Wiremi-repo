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
  ActivityIndicator
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import Copyname from "../../assets/copyname.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import SelectAndText from "@/components/SelectAndText";
import TextLabelBox from "@/components/TextLabelBox";
import { EmailVerify } from "@/Store/Apis/EmailVerify";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { clearStateemailverify } from "@/Store/Reducers/EmailVerify";
import { KeyboardAvoidingView } from "react-native";
import { useAppContext } from "@/Context/useAppContext";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const ResetPin = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { theme } = useAppContext();
  const [email, setEmail] = useState({
    email: ""
  });

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const onChange = (name: string, value: string) => {
    setEmail((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  const { emailverify, authenticatingemailverify, errorsemailverify } =
    useAppSelector((state) => state.emailverify);

  useEffect(() => {
    if (emailverify?.status) {
      router.push(`/Profiles/ResetPinNumber?email=${email?.email}`);
    }
    return () => {
      dispatch(clearStateemailverify());
    };
  }, [emailverify?.status]);
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
        className="gap-2"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          // keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            // keyboardShouldPersistTaps="handled"
          >
            <View className="flex-row justify-between items-center mb-1">
              <TouchableOpacity
                onPress={() => router.push("/Profiles/TransactionPin")}
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
                Reset pin
              </Text>
              <Text></Text>
            </View>
            <View className="flex-1 relative  justify-start gap-2">
              <View className="flex-col justify-start items-start pb-10">
                <Text
                  className={`${
                    theme === "dark"
                      ? "text-[16px] font-bold text-[#ffffff]"
                      : "text-black text-[16px] font-bold"
                  }`}
                >
                  Reset Pin
                </Text>
                <Text
                  style={{ color: theme === "dark" ? "#ffffff" : "#413D43" }}
                  className="text-[14px]"
                >
                  Enter your email to receive OTP for pin reset.
                </Text>
              </View>
              <View>
                <TextLabelBox
                  label="Email address"
                  both
                  placeholder="Enter your email address"
                  onChangeText={(value: any) => onChange("email", value)}
                />
                {/* <SelectAndText title="Phone number" /> */}
              </View>
              <View className="pt-20">
                {authenticatingemailverify ? (
                  <View className="flex-row justify-center items-center">
                    <ActivityIndicator
                      color={"#105CE2"}
                      style={{ width: 30, height: 30 }}
                    />
                  </View>
                ) : (
                  <BlueSignInButton
                    title="Proceed"
                    onPress={() =>
                      dispatch(
                        EmailVerify({
                          email: email?.email
                        })
                      )
                    }
                    // onPress={() => router.push("/Profiles/ResetPinNumber")}
                  />
                )}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default ResetPin;
