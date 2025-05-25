import {
  View,
  Text,
  ImageBackground,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  useWindowDimensions,
  Keyboard
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LandingPageImage from "../../assets/LandingScreen.png";
import { StatusBar } from "expo-status-bar";
import { Redirect, useRouter } from "expo-router";
import Wiremi from "../../assets/splash.svg";
import Back from "../../assets/Back.svg";
import Logo from "../../assets/Logo.svg";
import Face from "../../assets/Face.svg";
import Finger from "../../assets/Finger.svg";
import TextLabelBox from "@/components/TextLabelBox";
import BlueSignInButton from "@/components/BlueSignInButton";
import { CheckBox } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { Login } from "@/Store/Apis/Login";
import { useAppContext } from "@/Context/useAppContext";
import { clearStatelogin } from "@/Store/Reducers/Login";
import { clearState } from "@/Store/Reducers/CreatePin";
import { clearStateregister } from "@/Store/Reducers/RegisterUser";
import { clearStateaccountregister } from "@/Store/Reducers/AccountRegister";
import * as LocalAuthentication from "expo-local-authentication";
import { getDeviceId } from "@/Utils/Device";
import { BottomSheet } from "@/components/Bottom";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const SignInPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [uuid, setUuid] = useState<string>("");
  const [navigated, setNavigated] = useState(false);
  const { theme } = useAppContext();
  // const { isAuthenticated, checkUser } = useAppContext();
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { height, width } = useWindowDimensions();
  const router = useRouter();
  const [checked, setChecked] = React.useState(true);
  const [showerror, setShowerror] = useState(false);
  const [showerror2, setShowerror2] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  const dispatch = useAppDispatch();
  const [wiremiId, setWiremiId] = useState<string>(""); //thumb & sigin(if sign in before, use it for account_id saved)
  const [NotsavedwiremiId, setNotsavedwiremiId] = useState<string>(""); //if not sigin before , use it for account_id
  const [wiremiIdpin, setWiremiIdpin] = useState<string>(""); //sigin
  const [pincode, setPincode] = useState<string>(""); //thumb
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [biomet, setBiomet] = useState<string | null>(null);
  NotsavedwiremiId;

  useEffect(() => {
    // async () => {
    //   const compatible = await LocalAuthentication.hasHardwareAsync();
    //   setIsBiometricSupported(compatible);
    // };
    const clearStoredToken = async () => {
      try {
        await AsyncStorage.removeItem("token"); // Replace with actual key
        // console.log("Token removed successfully");
      } catch (error) {
        console.error("Error removing token:", error);
      }
    };

    clearStoredToken();
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
    const fetchStoredData = async () => {
      try {
        const wiremiIds = await AsyncStorage.getItem("Wiremi_Id");
        const pincodes = await AsyncStorage.getItem("Pin_code");
        const biometric = await AsyncStorage.getItem("biometric");
        console.log(wiremiIds);
        console.log(pincodes);
        if (biometric) setBiomet(biometric);
        if (wiremiIds) setWiremiId(wiremiIds);
        if (pincodes) setPincode(pincodes);
      } catch (error) {
        console.error("Error fetching data from AsyncStorage:", error);
      }
    };
    const getUuid = async () => {
      try {
        const device_id = await getDeviceId();
        setUuid(device_id ?? "");
        // const storedUuid = await AsyncStorage.getItem("device_uuid");
        // console.log(storedUuid);
        // if (storedUuid) {
        //   // const newUuid = uuidv4();
        //   // console.log(newUuid)
        //   // await AsyncStorage.setItem("device_uuid", newUuid);
        //   // setUuid(newUuid);
        //   setUuid(storedUuid); // Use existing UUID
        // } else {
        //   const newUuid = uuidv4();
        //   console.log(newUuid);
        //   await AsyncStorage.setItem("device_uuid", newUuid);
        //   setUuid(newUuid);
        // }
      } catch (error) {
        console.error("Error accessing AsyncStorage:", error);
      }
    };
    getUuid();
    fetchStoredData();
    return () => {
      dispatch(clearStatelogin());
      dispatch(clearState());
      dispatch(clearStateregister());
      dispatch(clearStateaccountregister());
    };
  }, []);

  const fallBackToDefaultAuth = () => {
    console.log("fall back to password authentication");
  };

  const alertComponent = (title: any, mess: any, btnTxt: any, btnFunc: any) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc
      }
    ]);
  };

  const TwoButtonAlert = () =>
    Alert.alert("You are logged in", "Subscribe Now", [
      {
        text: "Back",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "PROCEED",
        onPress: () => console.log("OK Pressed")
      }
    ]);

  const handleBiometricAuth = async () => {
    console.log("sodiq");
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    if (!isBiometricAvailable) {
      return alertComponent(
        "Please enter your password",
        "Biometric auth not supported",
        "OK",
        () => fallBackToDefaultAuth()
      );
    }
    let supportedBiometrics;
    if (isBiometricAvailable) {
      supportedBiometrics =
        await LocalAuthentication.supportedAuthenticationTypesAsync();
    }
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics) {
      return alertComponent(
        "Biometric record not found",
        "Please login with your password",
        "Ok",
        () => fallBackToDefaultAuth()
      );
    }
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with Touch ID",
      cancelLabel: "Cancel",
      disableDeviceFallback: true
    });

    if (biometricAuth) {
      // TwoButtonAlert();
      if (!logins?.access_token) {
        // Prevent duplicate calls

        dispatch(
          Login({
            pin: pincode,
            account_id: wiremiId,
            device_id: uuid,
            setIsVisible: setIsVisible,
            router: router.push
          })
        );
      }
    }
  };

  const onChangepin = (value: string) => {
    setNotsavedwiremiId(value);
  };

  const onChangeIdpin = (value: string) => {
    setWiremiIdpin(value);
  };

  const { logins, authenticatinglogin, errors } = useAppSelector(
    (state) => state.logins
  );
  console.log(logins, authenticatinglogin, "account");
  console.log(logins);
  console.log(errors?.error);

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const navigatedRef = useRef(false);

  // useEffect(() => {
  //   if (logins?.access_token && !navigated) {
  //     setNavigated(true); // Prevent multiple redirects

  //     AsyncStorage.setItem("token", logins.access_token).then(() => {
  //       console.log(logins.access_token);
  //       const timeout = setTimeout(() => {
  //         router.push("/(PersonalAccount)/Dashboard"); // ✅ Use replace to prevent back navigation
  //       }, 2000); // ✅ Delay to avoid flickering

  //       return () => clearTimeout(timeout); // ✅ Cleanup timeout on unmount
  //     });
  //   }
  // }, [logins?.access_token]);

  // // if (navigated) return null;

  const hasNavigated = useRef(false);

  useEffect(() => {
    const checkTokenAndNavigate = async () => {
      if (logins?.access_token && !hasNavigated.current) {
        NotsavedwiremiId;
        hasNavigated.current = true; // Prevent multiple navigations
        await AsyncStorage.setItem(
          "Wiremi_Id",
          wiremiId ? wiremiId : NotsavedwiremiId
        );
        await AsyncStorage.setItem("country", logins?.address?.country);
        await AsyncStorage.setItem("Pin_code", wiremiIdpin);
        await AsyncStorage.setItem("token", logins?.access_token);
        await AsyncStorage.setItem("symbol", logins?.account?.symbol);
        console.log("Navigating to PersonalAccount:", logins.access_token);
        router.replace("/(PersonalAccount)"); // ✅ Prevent back navigation
      }
    };

    checkTokenAndNavigate();
  }, [logins?.access_token]);

  // if (navigated) return null;

  const handlePress = () => {
    if (isProcessing) return; // Prevent multiple calls
    setIsProcessing(true);

    if (wiremiIdpin.length < 6) {
      setShowerror(true);
      setIsProcessing(false);
      return;
    }
    if (wiremiIdpin.length < 1) {
      setShowerror2(true);
      setIsProcessing(false);
      return;
    }
    if ((wiremiId || NotsavedwiremiId) && wiremiIdpin.length === 6) {
      dispatch(
        Login({
          pin: wiremiIdpin,
          account_id: wiremiId ? wiremiId : NotsavedwiremiId,
          device_id: uuid,
          setIsVisible: setIsVisible,
          router: router.push
        })
      );
    }

    setTimeout(() => setIsProcessing(false), 2000); // Prevent multiple clicks within 2 sec
  };

  useEffect(() => {
    if (isVisible && ref?.current) {
      Keyboard.dismiss();
      ref?.current?.open();
    }
  }, [isVisible, ref?.current]);
  return (
    <View className="flex-1">
      <ImageBackground
        source={LandingPageImage}
        resizeMode="cover"
        className="flex-1"
      >
        <StatusBar hidden={false} style="light" />
        <SafeAreaView
          className="justify-between"
          style={{
            flex: 1,
            marginTop: statusBarHeight,
            paddingTop: height * 0.02
          }}
        >
          {/* <Modal animationType="slide" transparent={true} visible={isVisible}>
            <Pressable
              style={{
                flex: 1,
                backgroundColor: "#8080808C",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => setIsVisible(false)}
            >
              <View className="bg-white w-[60%] h-[20%] rounded-[15px] flex-col items-center justify-evenly py-3">
                {errors?.error &&
                  (Array.isArray(errors.error) ? (
                    // If errors.error is an array, map through it and display each message
                    errors.error.map((errMsg: any, index: any) => (
                      <Text key={index} className="mb-3">
                        {errMsg}
                      </Text>
                    ))
                  ) : typeof errors.error === "object" &&
                    !Array.isArray(errors.error) ? (
                    // If errors.error is an object, iterate over its keys
                    Object.keys(errors.error).map((key, index) => (
                      <Text key={index}>
                        {key}:{" "}
                        {Array.isArray(errors.error[key])
                          ? errors.error[key].join(", ") // Handle arrays inside objects
                          : errors.error[key]}
                      </Text>
                    ))
                  ) : (
                    // If errors.error is a string or another type, display it directly
                    <Text className="mb-3">{errors.error}</Text>
                  ))}
                <ShortBlueButton
                  title="Close"
                  onPress={() => setIsVisible(false)}
                />
              </View>
            </Pressable>
          </Modal> */}
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            // keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            style={{ flex: 1 }}
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              // keyboardShouldPersistTaps="handled"
            >
              <View className="flex-1 relative items-center justify-end">
                <View
                  className="bg-white absolute"
                  style={{
                    height: height * 0.92,
                    width: width * 0.91,
                    borderTopLeftRadius: 40, // Directly apply top-left radius
                    borderTopRightRadius: 40,
                    opacity: 0.2
                  }}
                ></View>
                <View
                  className={`${
                    theme === "dark" ? "bg-[#000000]" : "bg-creamwhite"
                  }`}
                  style={{
                    height: height * 0.9,
                    zIndex: 1000,
                    width: width,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingTop: height * 0.04,
                    paddingHorizontal: width * 0.04,
                    gap: 15
                  }}
                >
                  {/* <KeyboardAvoidingView  style={{ gap: 15 }}> */}
                  <View className="flex-row justify-between items-center">
                    <View
                      style={{ width: width * 0.63 }}
                      className="flex-row justify-between"
                    >
                      <TouchableOpacity
                        onPress={() => router.push("/Auth/getStarted")}
                      >
                        <Back
                          style={{
                            backgroundColor: theme === "dark" ? "#ffffff" : ""
                          }}
                        />
                      </TouchableOpacity>
                      <Wiremi height={30} />
                    </View>
                    {/* <Text></Text> */}
                  </View>
                  <View className="flex-row items-center justify-center">
                    <Logo />
                  </View>
                  <View className="flex-col items-center justify-center gap-2">
                    <Text
                      className={`${
                        theme === "dark"
                          ? "text-[#ffffff] text-[18px]"
                          : "text-textblack text-[18px]"
                      }`}
                    >
                      Sign in
                    </Text>
                    <Text
                      className={`${
                        theme === "dark"
                          ? "text-[#ffffff] text-[13px]"
                          : "text-lighttextblack text-[13px]"
                      }`}
                    >
                      Welcome back! Please sign in to continue
                    </Text>
                  </View>
                  <TextLabelBox
                    label="Wiremi ID"
                    placeholder={wiremiId ? wiremiId : "Enter your Wiremi ID"}
                    disabled={!!wiremiId}
                    value={wiremiId}
                    both
                    onChangeText={
                      wiremiId
                        ? (value: any) => onChangepin(value)
                        : (value: any) => onChangepin(value)
                    }
                  />
                  <View>
                    <TextLabelBox
                      label="Pin"
                      number
                      max
                      placeholder="Enter your 6 digit Pin"
                      onChangeText={(value: any) => onChangeIdpin(value)}
                    />
                    {showerror && (
                      <Text className="text-failedtrans text-[12px]">
                        Your pin must be 6 characters only
                      </Text>
                    )}
                    {showerror2 && (
                      <Text className="text-failedtrans text-[12px]">
                        Your pin cannot be empty
                      </Text>
                    )}
                    <View
                      style={{ paddingRight: width * 0.02 }}
                      className="flex-row justify-between items-center"
                    >
                      <View
                        style={{ marginLeft: -width * 0.03 }}
                        className="flex-row justify-start items-center"
                      >
                        <CheckBox
                          checked={checked}
                          size={15}
                          onPress={toggleCheckbox}
                          iconType="material-community"
                          checkedIcon="checkbox-outline"
                          uncheckedIcon={"checkbox-blank-outline"}
                        />
                        <Text>Remember Me</Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => router.push("/Auth/MainForgotPinCode")}
                        >
                          <Text className="text-buttonprimary text-[14px]">
                            Forgot Pincode
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  {authenticatinglogin ? (
                    <View className="flex-row justify-center items-center">
                      <ActivityIndicator
                        color={"#105CE2"}
                        style={{ width: 30, height: 30 }}
                      />
                    </View>
                  ) : (
                    <BlueSignInButton
                      title="Sign in"
                      onPress={handlePress}
                      disabled={isProcessing}
                    />
                  )}
                  <View className="flex-row items-center justify-center">
                    <Text
                      className={`${
                        theme === "dark"
                          ? "text-[#ffffff]"
                          : "text-textinputtext"
                      }`}
                    >
                      Don’t have an account?{" "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => router.push("/Auth/ChooseAccountType")}
                    >
                      <Text className="text-buttonprimary">Sign up</Text>
                    </TouchableOpacity>
                  </View>
                  {/* </KeyboardAvoidingView> */}
                  <View className="flex-col justify-end items-center">
                    {biomet === "no" ? (
                      <Text></Text>
                    ) : (
                      <>
                        {Platform.OS === "ios" && pincode && wiremiId ? (
                          <View className="items-center gap-2">
                            <TouchableOpacity onPress={handleBiometricAuth}>
                              <Face />
                            </TouchableOpacity>
                            <Text>Scan Face ID to Login</Text>
                          </View>
                        ) : Platform.OS === "android" && pincode && wiremiId ? (
                          <View className="items-center gap-2">
                            <TouchableOpacity onPress={handleBiometricAuth}>
                              <Finger />
                            </TouchableOpacity>
                            <Text>Scan Fingerprint to Login</Text>
                          </View>
                        ) : (
                          <Text></Text>
                        )}
                      </>
                    )}
                  </View>
                </View>
              </View>
              <BottomSheet height={250} ref={ref}>
                <View className="bg-white rounded-[15px] flex-col items-center justify-between py-3">
                  {errors?.error &&
                    (Array.isArray(errors.error) ? (
                      // If errors.error is an array, map through it and display each message
                      errors.error.map((errMsg: any, index: any) => (
                        <Text key={index} className="mb-3">
                          {errMsg}
                        </Text>
                      ))
                    ) : typeof errors.error === "object" &&
                      !Array.isArray(errors.error) ? (
                      // If errors.error is an object, iterate over its keys
                      Object.keys(errors.error).map((key, index) => (
                        <Text key={index}>
                          {key}:{" "}
                          {Array.isArray(errors.error[key])
                            ? errors.error[key].join(", ") // Handle arrays inside objects
                            : errors.error[key]}
                        </Text>
                      ))
                    ) : (
                      // If errors.error is a string or another type, display it directly
                      <Text className="mb-3">{errors.error}</Text>
                    ))}
                  {/* <ShortBlueButton
                  title="Close"
                  onPress={() => setIsVisible(false)}
                /> */}

                  <View className="flex-col mt-5">
                    <BlueSignInButton
                      title="Close"
                      onPress={() => {
                        setIsVisible(false);
                        ref?.current?.close();
                      }}
                    />
                  </View>
                </View>
              </BottomSheet>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SignInPage;
