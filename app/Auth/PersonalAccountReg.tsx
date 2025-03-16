import {
  View,
  Text,
  ImageBackground,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
  Modal,
  Pressable,
  TextInput
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LandingPageImage from "../../assets/LandingScreen.png";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Wiremi from "../../assets/splash.svg";
import Back from "../../assets/Back.svg";
import Logo from "../../assets/Logo.svg";
import PersonalOne from "../../assets/personalone.svg";
import PersonalTwo from "../../assets/personaltwo.svg";
import TextLabelBox from "@/components/TextLabelBox";
import BlueSignInButton from "@/components/BlueSignInButton";
import SelectAndText from "@/components/SelectAndText";
import SixDigits from "@/components/SixDigits";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { RegisterUser } from "@/Store/Apis/RegisterUser";
import { BottomSheet } from "@/components/Bottom";
import Usa from "../assets/usa.svg";
import { FlatList } from "react-native";
import { CheckBox } from "@rneui/themed";
import { AccountRegister } from "@/Store/Apis/AccountRegister";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CreatePin } from "@/Store/Apis/CreatePin";
import { clearState } from "@/Store/Reducers/CreatePin";
import { clearStateregister } from "@/Store/Reducers/RegisterUser";
import { clearStateaccountregister } from "@/Store/Reducers/AccountRegister";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import ShortBlueButton from "@/components/ShortBlueButton";
import { EmailVerifyCode } from "@/Store/Apis/Emailverifycode";
import { clearStateemailverify } from "@/Store/Reducers/EmailVerify";
import { VerifyEmailStatus } from "@/Store/Apis/VerifyEmailStatus";
import { EmailVerify } from "@/Store/Apis/EmailVerify";

// import axios from "axios";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const PersonalAccountReg = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [process, setProcess] = React.useState(1);
  const [checked, setChecked] = React.useState(true);
  const [selectedIndex, setIndex] = useState(0);
  const toggleCheckbox = () => setChecked(!checked);
  const [showmailerror, setShowemailerror] = useState<boolean>(false);
  const [showpin, setShowpin] = useState<boolean>(false);
  const [wiremiIdpinemail, setWiremiIdpinemail] = useState<string>(""); //sigin
  const [individualregister, setIndividualregister] = useState({
    telephone: "",
    country: "",
    first_name: "",
    last_name: "",
    email: "",
    code: "",
    phoneCode: ""
  });
  const [pin, setPin] = useState("");
  const [confirmpin, setConfirmpin] = useState("");
  const dispatch = useAppDispatch();
  const { registerusers, authenticating } = useAppSelector(
    (state) => state.registerusers
  );
  console.log(registerusers, authenticating, "sodiq");

  const { accountusers, authenticatingaccountusers } = useAppSelector(
    (state) => state.accountusers
  );
  console.log(accountusers, authenticatingaccountusers, "account");
  console.log(accountusers?.user);

  const { createpins, authenticatingcreatepins, authenticated } =
    useAppSelector((state) => state.createpins);
  console.log(createpins, authenticatingcreatepins, "account");
  console.log(createpins?.account);

  useEffect(() => {
    // Cleanup action when component unmounts
    dispatch(clearState());
    dispatch(clearStateregister());
    setProcess(1);
    return () => {
      dispatch(clearState());
      dispatch(clearStateregister());
      setProcess(1);
    };
  }, [dispatch]);

  useEffect(() => {
    if (registerusers?.telephone && registerusers?.address?.country_code) {
      dispatch(
        AccountRegister({
          account_type: "FREE",
          subscription_plan: "",
          payment_method: "",
          user_phone: registerusers?.telephone,
          business_name: "",
          industry_type: ""
        })
      );
    }
  }, [registerusers?.telephone, registerusers?.address?.country_code]);

  useEffect(() => {
    if (accountusers?.user) {
      setProcess(2);
    }
  }, [accountusers?.user]);

  useEffect(() => {
    dispatch(clearState());
    dispatch(clearStateaccountregister());
    dispatch(clearStateregister());
    if (createpins?.account && createpins?.email) {
      AsyncStorage.setItem("Wiremi_Id", createpins?.account?.account_id);
      AsyncStorage.setItem("Pin_code", createpins?.account?.pin_code);
      AsyncStorage.setItem("firstname", createpins?.first_name);
      AsyncStorage.setItem("lastname", createpins?.last_name);
      console.log(createpins?.email, "..................................email");
      setTimeout(() => {
        setIndividualregister({
          telephone: "",
          country: "",
          first_name: "",
          last_name: "",
          email: "",
          code: "",
          phoneCode: ""
        });
        router.push("/Auth/BusinessSuccess");
      }, 3000);
    }
    return () => {
      dispatch(clearState());
      dispatch(clearStateregister());
      dispatch(clearStateaccountregister());
    };
  }, [createpins?.account, createpins?.email]);

  // if (
  //   registerusers?.telephone &&
  //   registerusers?.address?.country_code
  // ) {
  //   const fullPhoneNumber = `${registerusers.address.country_code}${registerusers.telephone}`;
  //   dispatch(
  //     AccountRegister({
  //       account_type: "",
  //       subscription_plan: "",
  //       payment_method: "",
  //       user_phone: fullPhoneNumber,
  //       business_name: "",
  //       industry_type: ""
  //     })
  //   );
  // }

  // if (accountusers?.user) {
  //   setProcess(2);
  // }

  const onChange = (name: string, value: string) => {
    setIndividualregister((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  const onChangepin = (value: string) => {
    setPin(value);
  };

  const onChangeconfirmpin = (value: string) => {
    setConfirmpin(value);
  };

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const ref2 = useRef<BottomSheetRef>(null);

  const handleCloseModal2 = () => {
    ref2.current?.close();
  };

  const ref3 = useRef<BottomSheetRef>(null);

  const handleCloseModal3 = () => {
    ref3.current?.close();
  };

  const onChangeIdpinemail = (value: string) => {
    setWiremiIdpinemail(value);
  };

  const { emailverify, authenticatingemailverify, errorsemailverify } =
    useAppSelector((state) => state.emailverify);
  console.log(emailverify, authenticatingemailverify, "emailverify");
  console.log(emailverify);

  const {
    emailverifycode,
    authenticatingemailverifycode,
    errorsemailverifycode
  } = useAppSelector((state) => state.emailverifycode);
  console.log(
    emailverifycode,
    authenticatingemailverifycode,
    "emailverifycode"
  );
  console.log(emailverifycode);

  const {
    verifyemailstatus,
    authenticatingverifyemailstatus,
    errorsverifyemailstatus
  } = useAppSelector((state) => state.verifyemailstatus);
  console.log(
    verifyemailstatus,
    authenticatingverifyemailstatus,
    "verifyemailstatus"
  );
  console.log(verifyemailstatus);

  useEffect(() => {
    if (emailverifycode?.status) {
      setTimeout(() => {
        if (ref3.current) {
          ref3.current.close(); // ✅ Close safely
        } // ✅ Close after a short delay
        dispatch(clearStateemailverify());
        dispatch(VerifyEmailStatus({ email: individualregister?.email }));
      }, 700);
    }
  }, [emailverifycode?.status]);

  const data2 = [
    { id: "1", name: "Algeria", phoneCode: "+213" },
    { id: "2", name: "Angola", phoneCode: "+244" },
    { id: "3", name: "Australia", phoneCode: "+61" },
    { id: "4", name: "Austria", phoneCode: "+43" },
    { id: "5", name: "Bahrain", phoneCode: "+973" },
    { id: "6", name: "Belarus", phoneCode: "+375" },
    { id: "7", name: "Belgium", phoneCode: "+32" },
    { id: "8", name: "Benin", phoneCode: "+229" },
    { id: "9", name: "Botswana", phoneCode: "+267" },
    { id: "10", name: "Brazil", phoneCode: "+55" },
    { id: "11", name: "Burkina Faso", phoneCode: "+226" },
    { id: "12", name: "Burundi", phoneCode: "+257" },
    { id: "13", name: "Cameroon", phoneCode: "+237" },
    { id: "14", name: "Canada", phoneCode: "+1" },
    { id: "15", name: "Cape Verde", phoneCode: "+238" },
    { id: "16", name: "Central African Republic", phoneCode: "+236" },
    { id: "17", name: "Chad", phoneCode: "+235" },
    { id: "18", name: "China", phoneCode: "+86" },
    { id: "19", name: "Colombia", phoneCode: "+57" },
    { id: "20", name: "Comoros", phoneCode: "+269" },
    { id: "21", name: "Congo", phoneCode: "+242" },
    { id: "22", name: "Côte d'Ivoire", phoneCode: "+225" },
    { id: "23", name: "Croatia", phoneCode: "+385" },
    { id: "24", name: "Cyprus", phoneCode: "+357" },
    { id: "25", name: "Czech Republic", phoneCode: "+420" },
    { id: "26", name: "Denmark", phoneCode: "+45" },
    { id: "27", name: "DR Congo", phoneCode: "+243" },
    { id: "28", name: "Egypt", phoneCode: "+20" },
    { id: "29", name: "Equatorial Guinea", phoneCode: "+240" },
    { id: "30", name: "Estonia", phoneCode: "+372" },
    { id: "31", name: "Ethiopia", phoneCode: "+251" },
    { id: "32", name: "Finland", phoneCode: "+358" },
    { id: "33", name: "France", phoneCode: "+33" },
    { id: "34", name: "Gabon", phoneCode: "+241" },
    { id: "35", name: "Gambia", phoneCode: "+220" },
    { id: "36", name: "Georgia", phoneCode: "+995" },
    { id: "37", name: "Germany", phoneCode: "+49" },
    { id: "38", name: "Ghana", phoneCode: "+233" },
    { id: "39", name: "Greece", phoneCode: "+30" },
    { id: "40", name: "Guinea", phoneCode: "+224" },
    { id: "41", name: "Guinea-Bissau", phoneCode: "+245" },
    { id: "42", name: "Hungary", phoneCode: "+36" },
    { id: "43", name: "Iceland", phoneCode: "+354" },
    { id: "44", name: "India", phoneCode: "+91" },
    { id: "45", name: "Indonesia", phoneCode: "+62" },
    { id: "46", name: "Ireland", phoneCode: "+353" },
    { id: "47", name: "Israel", phoneCode: "+972" },
    { id: "48", name: "Italy", phoneCode: "+39" },
    { id: "49", name: "Japan", phoneCode: "+81" },
    { id: "50", name: "Kenya", phoneCode: "+254" },
    { id: "51", name: "Latvia", phoneCode: "+371" },
    { id: "52", name: "Lesotho", phoneCode: "+266" },
    { id: "53", name: "Liberia", phoneCode: "+231" },
    { id: "54", name: "Liechtenstein", phoneCode: "+423" },
    { id: "55", name: "Lithuania", phoneCode: "+370" },
    { id: "56", name: "Luxembourg", phoneCode: "+352" },
    { id: "57", name: "Madagascar", phoneCode: "+261" },
    { id: "58", name: "Malawi", phoneCode: "+265" },
    { id: "59", name: "Malaysia", phoneCode: "+60" },
    { id: "60", name: "Mali", phoneCode: "+223" },
    { id: "61", name: "Malta", phoneCode: "+356" },
    { id: "62", name: "Mauritius", phoneCode: "+230" },
    { id: "63", name: "Mexico", phoneCode: "+52" },
    { id: "64", name: "Moldova", phoneCode: "+373" },
    { id: "65", name: "Monaco", phoneCode: "+377" },
    { id: "66", name: "Morocco", phoneCode: "+212" },
    { id: "67", name: "Mozambique", phoneCode: "+258" },
    { id: "68", name: "Namibia", phoneCode: "+264" },
    { id: "69", name: "Netherlands", phoneCode: "+31" },
    { id: "70", name: "Niger", phoneCode: "+227" },
    { id: "71", name: "Nigeria", phoneCode: "+234" },
    { id: "72", name: "Norway", phoneCode: "+47" },
    { id: "73", name: "Oman", phoneCode: "+968" },
    { id: "74", name: "Pakistan", phoneCode: "+92" },
    { id: "75", name: "Philippines", phoneCode: "+63" },
    { id: "76", name: "Poland", phoneCode: "+48" },
    { id: "77", name: "Portugal", phoneCode: "+351" },
    { id: "78", name: "Qatar", phoneCode: "+974" },
    { id: "79", name: "Romania", phoneCode: "+40" },
    { id: "80", name: "Russian Federation", phoneCode: "+7" },
    { id: "81", name: "Rwanda", phoneCode: "+250" },
    { id: "82", name: "Saudi Arabia", phoneCode: "+966" },
    { id: "83", name: "Senegal", phoneCode: "+221" },
    { id: "84", name: "Seychelles", phoneCode: "+248" },
    { id: "85", name: "Sierra Leone", phoneCode: "+232" },
    { id: "86", name: "Singapore", phoneCode: "+65" },
    { id: "87", name: "South Africa", phoneCode: "+27" },
    { id: "88", name: "South Korea", phoneCode: "+82" },
    { id: "89", name: "South Sudan", phoneCode: "+211" },
    { id: "90", name: "Spain", phoneCode: "+34" },
    { id: "91", name: "Sweden", phoneCode: "+46" },
    { id: "92", name: "Switzerland", phoneCode: "+41" },
    { id: "93", name: "Thailand", phoneCode: "+66" },
    { id: "94", name: "Togo", phoneCode: "+228" },
    { id: "95", name: "Tunisia", phoneCode: "+216" },
    { id: "96", name: "Turkey", phoneCode: "+90" },
    { id: "97", name: "Uganda", phoneCode: "+256" },
    { id: "98", name: "Ukraine", phoneCode: "+380" },
    { id: "99", name: "United Arab Emirates", phoneCode: "+971" },
    { id: "100", name: "United Kingdom", phoneCode: "+44" }
  ];

  const filteredData = data2.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // useEffect(() => {
  //   if (ref3 && !authenticatingemailverify) {
  //     ref3?.current?.open();
  //   }
  // }, [ref3, authenticatingemailverify]);

  //susanometty@gmail.com

  return (
    <View className="flex-1 ">
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
          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={!authenticatingemailverify && showpin}
          >
            <Pressable
              style={{
                flex: 1,
                backgroundColor: "#8080808C",
                justifyContent: "center",
                alignItems: "center"
              }}
              // onPress={() => setIsVisible(false)}
            >
              <View className="bg-white w-[95%] h-[30%] rounded-[15px] flex-col items-center justify-evenly py-3">
                <TextLabelBox
                  label="Pin"
                  number
                  max
                  placeholder="Enter your 6 digit Pin"
                  onChangeText={(value: any) => onChangeIdpinemail(value)}
                />
                <ShortBlueButton
                  title="Close"
                  onPress={() => {
                    dispatch(
                      EmailVerifyCode({
                        otp: wiremiIdpinemail,
                        email: individualregister?.email
                      })
                    );
                  }}
                  // onPress={() => clearStateemailverify()}
                />
              </View>
            </Pressable>
          </Modal> */}
          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={showmailerror}
          >
            <Pressable
              style={{
                flex: 1,
                backgroundColor: "#8080808C",
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => setShowemailerror(false)}
            >
              <View className="bg-white w-[60%] h-[20%] rounded-[15px] flex-col items-center justify-evenly py-3">
                <Text>Enter Email First</Text>
                <ShortBlueButton
                  title="Close"
                  onPress={() => setShowemailerror(false)}
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
                  className="bg-creamwhite"
                  style={{
                    height: height * 0.9,
                    zIndex: 1000,
                    width: width,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingTop: height * 0.01,
                    paddingHorizontal: width * 0.04,
                    gap: 1
                  }}
                >
                  <View
                    style={{ gap: width * 0.24 }}
                    className="flex-row justify-start items-center"
                  >
                    {process === 1 ? (
                      <TouchableOpacity onPress={() => router.back()}>
                        <Back />
                      </TouchableOpacity>
                    ) : process === 2 ? (
                      <TouchableOpacity onPress={() => setProcess(1)}>
                        <Back />
                      </TouchableOpacity>
                    ) : (
                      ""
                    )}
                    {process === 1 ? (
                      <PersonalOne />
                    ) : process === 2 ? (
                      <PersonalTwo />
                    ) : (
                      ""
                    )}
                    <Text></Text>
                  </View>
                  <View className="flex-row items-center justify-center">
                    <Logo />
                  </View>
                  {process === 1 ? (
                    <View className="flex-col items-center justify-center gap-1">
                      <Text className="text-textblack text-[18px] font-bold">
                        Account registration
                      </Text>
                      <Text className="text-lighttextblack">
                        Glad to have you!
                      </Text>
                    </View>
                  ) : process === 2 ? (
                    <View className="flex-col items-center justify-center gap-2">
                      <Text className="text-textblack text-[18px] font-bold">
                        Create Pin
                      </Text>
                      <Text className="text-lighttextblack">
                        Enter your 6 digit pin to help sign in always!
                      </Text>
                    </View>
                  ) : (
                    ""
                  )}
                  {process === 1 ? (
                    <KeyboardAvoidingView>
                      <ScrollView
                        style={{
                          width: width,
                          paddingTop: height * 0.01,
                          paddingHorizontal: width * 0.04,
                          gap: 2,
                          position: "relative"
                        }}
                        className="flex-col gap-2"
                      >
                        {/* <KeyboardAvoidingView> */}

                        <TransparentSelectButton
                          onPress={() => ref?.current?.open()}
                          label="Country"
                          placeholder={
                            individualregister?.country
                              ? individualregister?.country
                              : "Select country"
                          }
                        />

                        <SelectAndText
                          // onPress={() => ref?.current?.open()}
                          countrycode={individualregister?.phoneCode}
                          onChangeText={(value: string) =>
                            onChange("telephone", value)
                          }
                          title="Phone number"
                        />
                        <TextLabelBox
                          label="First name"
                          placeholder="Enter your first name"
                          onChangeText={(value: any) =>
                            onChange("first_name", value)
                          }
                        />
                        <TextLabelBox
                          label="Last name"
                          placeholder="Enter your last name"
                          onChangeText={(value: any) =>
                            onChange("last_name", value)
                          }
                        />
                        <TextLabelBox
                          label="Email address"
                          both
                          placeholder="Enter your email address"
                          onChangeText={(value: any) =>
                            onChange("email", value)
                          }
                        />
                        <ShortBlueButton
                          title="Verify Email"
                          onPress={() => {
                            if (individualregister?.email) {
                              dispatch(
                                EmailVerify({
                                  email: individualregister?.email
                                })
                              );
                              if (ref3.current) {
                                setTimeout(() => {
                                  if (ref3.current) {
                                    ref3.current.open();
                                  }
                                }, 500);
                              }
                              // setShowpin(true);
                            } else {
                              if (ref2?.current) {
                                setTimeout(() => {
                                  if (ref2.current) {
                                    ref2.current.open();
                                  }
                                }, 500);
                              }
                              
                              // setShowemailerror(true);
                            }
                          }}
                          // onPress={() => clearStateemailverify()}
                        />

                        <TextLabelBox
                          label="Referral code"
                          placeholder="Enter your referral code (optional)"
                          onChangeText={(value: any) => onChange("code", value)}
                        />
                        {authenticating ? (
                          <View className="flex-row justify-center items-center">
                            <ActivityIndicator
                              color={"#105CE2"}
                              style={{ width: 30, height: 30 }}
                            />
                          </View>
                        ) : (
                          <View className="flex-row justify-center">
                            {verifyemailstatus?.verified && !authenticating && (
                              <BlueSignInButton
                                title="Proceed"
                                onPress={() => {
                                  console.log(individualregister?.first_name);
                                  if (
                                    individualregister?.telephone &&
                                    individualregister?.country &&
                                    individualregister?.first_name
                                  ) {
                                    dispatch(
                                      RegisterUser({
                                        telephone:
                                          individualregister?.telephone,
                                        country: individualregister?.country,
                                        first_name:
                                          individualregister?.first_name,
                                        last_name:
                                          individualregister?.last_name,
                                        email: individualregister?.email,
                                        code: individualregister?.code,
                                        phoneCode: individualregister?.phoneCode
                                        // telephone: "+2347057007047",
                                        // country: "Nigeria",
                                        // first_name: "Sodiq",
                                        // last_name: "Al-ameen",
                                        // email: "alameensodiq@gmail.com",
                                        // code: ""
                                      })
                                    );
                                  }
                                }}
                                // onPress={() => fetchData()}
                              />
                            )}
                          </View>
                        )}
                        {/* </KeyboardAvoidingView> */}

                        <View className="flex-row items-center justify-center">
                          <Text className="text-textinputtext">
                            Already have an account?{" "}
                          </Text>
                          <TouchableOpacity
                            onPress={() => router.push("/Auth/SignInPage")}
                          >
                            <Text className="text-buttonprimary">Sign in</Text>
                          </TouchableOpacity>
                        </View>
                      </ScrollView>
                    </KeyboardAvoidingView>
                  ) : (
                    <View
                      style={{
                        width: width,
                        paddingTop: height * 0.03,
                        paddingHorizontal: width * 0.03,
                        gap: 6
                      }}
                      className="flex-col gap-2"
                    >
                      <View className="flex-col">
                        <Text
                          className="text-textblack text-[13px]"
                          style={{ marginBottom: height * 0.01 }}
                        >
                          Enter pin code
                        </Text>
                        <SixDigits
                          onChangeText={(value: string) => onChangepin(value)}
                        />
                      </View>
                      <View className="flex-col">
                        <Text
                          className="text-textblack text-[13px]"
                          style={{ marginBottom: height * 0.01 }}
                        >
                          Re-enter pin code
                        </Text>
                        <SixDigits
                          onChangeText={(value: string) =>
                            onChangeconfirmpin(value)
                          }
                        />
                      </View>
                      {authenticatingcreatepins ? (
                        <View className="flex-row justify-center items-center">
                          <ActivityIndicator
                            color={"#105CE2"}
                            style={{ width: 30, height: 30 }}
                          />
                        </View>
                      ) : (
                        <BlueSignInButton
                          title="Proceed"
                          onPress={() => {
                            console.log(pin);
                            console.log(confirmpin);
                            if (
                              pin === confirmpin &&
                              pin?.length === 6 &&
                              confirmpin?.length === 6
                            ) {
                              dispatch(
                                CreatePin({
                                  id: accountusers?.id,
                                  pin: pin
                                })
                              );
                            } else {
                              Alert.alert("Incorrect Confirm Pin");
                            }
                          }}
                        />
                      )}
                      <View className="flex-row items-center justify-center">
                        <Text className="text-textinputtext">
                          Already have an account?{" "}
                        </Text>
                        <TouchableOpacity
                          onPress={() => router.push("/Auth/SignInPage")}
                        >
                          <Text className="text-buttonprimary">Sign in</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                </View>
                <BottomSheet height={550} ref={ref}>
                <View style={{ padding: 20, gap: 30, paddingBottom: 50 }}>
                  {/* <Text>Bottom Sheet Content</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Text>Close</Text>
                </TouchableOpacity> */}
                  <View className="items-center">
                    <Text
                      style={{
                        fontSize: 18,
                        color: "#2A94F4",
                        fontWeight: "bold"
                      }}
                    >
                      Countries
                    </Text>
                  </View>
                  <View className="flex-row justify-between items-center">
                    <TextInput
                      style={{ color: "#606162" }}
                      value={searchQuery}
                      onChangeText={(text) => setSearchQuery(text)}
                      placeholder="Search for Country"
                    />
                    {/* <CheckBox
                  checked={selectedIndex === 20}
                  onPress={() => setIndex(20)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                /> */}
                  </View>
                  <View style={{ height: height * 0.47 }}>
                    <FlatList
                      data={filteredData}
                      renderItem={({ item, index }) => (
                        <TouchableOpacity
                          onPress={() => {
                            console.log(item?.name);
                            setIndex(index);
                            setIndividualregister((prev) => ({
                              ...prev, // Spread the previous state correctly
                              country: item?.name, // Update the "country" property,
                              phoneCode: item?.phoneCode
                            }));
                            handleCloseModal();
                          }}
                        >
                          <View className="flex-row justify-between gap-3">
                            <View className="flex-col gap-2">
                              <View className="flex-row items-center">
                                {/* {item?.image} */}
                                <Text className="text-[14px] font-bold">
                                  {item?.name}
                                </Text>
                              </View>
                              {/* <View className="flex-row">
                            <Text
                              className="text-[12px] ml-4"
                              style={{ color: "#105CE2" }}
                            >
                              Active
                            </Text>
                          </View> */}
                            </View>
                            <View className="flex-col items-end">
                              <CheckBox
                                checked={
                                  selectedIndex === index ||
                                  individualregister.country === item?.name
                                }
                                // onPress={() => setIndex(index)}
                                onPress={() => {
                                  console.log(item?.name);
                                  setIndex(index);
                                  setIndividualregister((prev) => ({
                                    ...prev, // Spread the previous state correctly
                                    country: item?.name, // Update the "country" property,
                                    phoneCode: item?.phoneCode
                                  }));
                                  handleCloseModal();
                                }}
                                checkedIcon="dot-circle-o"
                                uncheckedIcon="circle-o"
                              />
                            </View>
                          </View>
                        </TouchableOpacity>
                      )}
                      showsVerticalScrollIndicator={false}
                      bounces={false}
                      keyExtractor={(item) => item.id}
                      contentContainerStyle={{
                        gap: 0,
                        paddingBottom: 50
                      }}
                    />
                  </View>
                </View>
              </BottomSheet>
              <BottomSheet height={200} ref={ref2}>
                <View className="bg-white rounded-[15px] flex-col items-center justify-between py-3 gap-3">
                  <Text className="mb-10">Enter Email First</Text>
                  <ShortBlueButton title="Close" onPress={handleCloseModal2} />
                </View>
              </BottomSheet>
              <BottomSheet height={250} ref={ref3}>
                <View className="bg-white rounded-[15px] flex-col items-center justify-center py-3 gap-3">
                  <TextLabelBox
                    label="Pin"
                    number
                    max
                    placeholder="Enter your 6 digit Pin"
                    onChangeText={(value: any) => onChangeIdpinemail(value)}
                  />
                  <View className="flex-col mt-10">
                    <BlueSignInButton
                      title="Close"
                      onPress={() => {
                        dispatch(
                          EmailVerifyCode({
                            otp: wiremiIdpinemail,
                            email: individualregister?.email
                          })
                        );
                      }}
                      // onPress={() => clearStateemailverify()}
                    />
                  </View>
                </View>
              </BottomSheet>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default PersonalAccountReg;
