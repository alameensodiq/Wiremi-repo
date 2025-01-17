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
  Alert
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LandingPageImage from "../assets/LandingScreen.png";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Wiremi from "../assets/splash.svg";
import Back from "../assets/Back.svg";
import Logo from "../assets/Logo.svg";
import PersonalOne from "../assets/personalone.svg";
import PersonalTwo from "../assets/personaltwo.svg";
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

// import axios from "axios";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const PersonalAccountReg = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [process, setProcess] = React.useState(1);
  const [checked, setChecked] = React.useState(true);
  const [selectedIndex, setIndex] = useState(0);
  const toggleCheckbox = () => setChecked(!checked);
  const [individualregister, setIndividualregister] = useState({
    telephone: "",
    country: "",
    first_name: "",
    last_name: "",
    email: "",
    code: ""
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

  const { createpins, authenticatingcreatepins, authenticated } = useAppSelector(
    (state) => state.createpins
  );
  console.log(createpins, authenticatingcreatepins, "account");
  console.log(createpins?.account);

  useEffect(() => {
    // Cleanup action when component unmounts
      dispatch(clearState());
      dispatch(clearStateregister());
      setProcess(1)
      return () => {
        dispatch(clearState());
        dispatch(clearStateregister());
        setProcess(1)
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
          code: ""
        });
        router.push("/BusinessSuccess");
      }, 3000);
    }
    return () => {
      dispatch(clearState());
      dispatch(clearStateregister());
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

  const data2 = [
    {
      id: "1",
      name: "USD Dollar(USD)",
      image: <Usa />,
      country: "United States of America"
    },
    {
      id: "2",
      name: "NGN Naira(NGN)",
      image: <Usa />,
      country: "Nigeria"
    },
    {
      id: "3",
      name: "Great British Pounds(GBP)",
      image: <Usa />,
      country: "United Kingdom"
    },
    {
      id: "4",
      name: "Canadian Dollar(CAD)",
      image: <Usa />,
      country: "Canada"
    }
  ];

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
                paddingTop: height * 0.04,
                paddingHorizontal: width * 0.04,
                gap: 8
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
                <View className="flex-col items-center justify-center gap-2">
                  <Text className="text-textblack text-[18px] font-bold">
                    Account registeration
                  </Text>
                  <Text className="text-lighttextblack">Glad to have you!</Text>
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
                  <View
                    style={{
                      width: width,
                      paddingTop: height * 0.03,
                      paddingHorizontal: width * 0.04,
                      gap: 6,
                      position: "relative"
                    }}
                    className="flex-col gap-2"
                  >
                    {/* <KeyboardAvoidingView> */}
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
                      placeholder="Enter your email address"
                      onChangeText={(value: any) => onChange("email", value)}
                    />

                    <SelectAndText
                      onPress={() => ref?.current?.open()}
                      onChangeText={(value: string) =>
                        onChange("telephone", value)
                      }
                      title="Phone number"
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
                      <BlueSignInButton
                        title="Proceed"
                        onPress={() => {
                          if (
                            individualregister?.telephone &&
                            individualregister?.country &&
                            individualregister?.first_name
                          ) {
                            dispatch(
                              RegisterUser({
                                telephone: individualregister?.telephone,
                                country: individualregister?.country,
                                first_name: individualregister?.first_name,
                                last_name: individualregister?.last_name,
                                email: individualregister?.email,
                                code: individualregister?.code
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
                    {/* </KeyboardAvoidingView> */}

                    <View className="flex-row items-center justify-center">
                      <Text className="text-textinputtext">
                        Already have an account?{" "}
                      </Text>
                      <TouchableOpacity
                        onPress={() => router.push("/SignInPage")}
                      >
                        <Text className="text-buttonprimary">Sign in</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
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
                          (pin?.length === 6) === (confirmpin?.length === 6)
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
                      onPress={() => router.push("/SignInPage")}
                    >
                      <Text className="text-buttonprimary">Sign in</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </View>
          </View>
          <BottomSheet height={550} ref={ref}>
            <View style={{ padding: 20, gap: 30 }}>
              {/* <Text>Bottom Sheet Content</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Text>Close</Text>
                </TouchableOpacity> */}
              <View className="items-center">
                <Text
                  style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
                >
                  Countries
                </Text>
              </View>
              <View className="flex-row justify-between items-center">
                <Text style={{ color: "#606162" }}>Select primary account</Text>
                <CheckBox
                  checked={selectedIndex === 20}
                  onPress={() => setIndex(20)}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                />
              </View>
              <View style={{ height: height * 0.5 }}>
                <FlatList
                  data={data2}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => {
                        //   router.push("/More/Crypto/CryptoReceiveBarcode");
                        handleCloseModal();
                      }}
                    >
                      <View className="flex-row justify-between gap-3">
                        <View className="flex-col gap-2">
                          <View className="flex-row items-center">
                            {item?.image}
                            <Text className="text-[14px] font-bold">
                              {item?.name}
                            </Text>
                          </View>
                          <View className="flex-row">
                            <Text
                              className="text-[12px] ml-4"
                              style={{ color: "#105CE2" }}
                            >
                              Active
                            </Text>
                          </View>
                        </View>
                        <View className="flex-col items-end">
                          <CheckBox
                            checked={
                              selectedIndex === index ||
                              individualregister.country === item?.country
                            }
                            // onPress={() => setIndex(index)}
                            onPress={() => {
                              setIndex(index);
                              setIndividualregister((prev) => ({
                                ...prev, // Spread the previous state correctly
                                country: item?.country // Update the "country" property
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
                    gap: 20
                  }}
                />
              </View>
            </View>
          </BottomSheet>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default PersonalAccountReg;
