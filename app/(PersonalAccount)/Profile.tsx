import {
  View,
  Text,
  ScrollView,
  StatusBar as RNStatusBar,
  Dimensions,
  Pressable
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Pics from "../../assets/pics.svg";
import Upgrade from "../../assets/upgrade.svg";
import Mark from "../../assets/mark.svg";
import ProfInfo from "../../assets/profinfo.svg";
import Kyc from "../../assets/kyc.svg";
import RightDarkCarat from "../../assets/rightdarkcarat.svg";
import Invite from "../../assets/invite.svg";
import Transhist from "../../assets/transacthist.svg";
import Wallet from "../../assets/wallet.svg";
import Profchangepin from "../../assets/profchangepin.svg";
import Profbiometric from "../../assets/profbiometric.svg";
import Proflang from "../../assets/proflang.svg";
import Proftheme from "../../assets/proftheme.svg";
import Profhelp from "../../assets/profhelp.svg";
import Profabout from "../../assets/profabout.svg";
import Logout from "../../assets/logout.svg";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { AccountDetails } from "@/Store/Apis/AccountDetails";
import { Image } from "expo-image";
import { BottomSheet } from "@/components/Bottom";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppContext } from "@/Context/useAppContext";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const Profile = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);
  const handleCloseModal = () => {
    ref.current?.close();
  };
  const { theme } = useAppContext();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      AccountDetails({
        router: router.push,
        setIsVisible: setIsVisible,
        setShow: setShow
      })
    );
  }, []);

  const { accountdetails, authenticatingaccountdetails, errorsaccountdetails } =
    useAppSelector((state) => state.accountdetails);

  console.log(accountdetails);

  return (
    <View className="flex-1" style={{ backgroundColor: "#105CE2" }}>
      <StatusBar hidden={false} style="light" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          height: height
          // paddingHorizontal: width * 0.03
        }}
        className="gap-1"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          // style={{ height: height }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View
            style={{
              height: height * 0.15,
              backgroundColor: "#105CE2",
              paddingHorizontal: width * 0.03
            }}
          >
            <View className="flex-row justify-start">
              <Text className="text-[18px] text-white">Profile</Text>
            </View>
            <View className="flex-row justify-between  mt-3">
              <View className="flex-row justify-start items-center gap-2">
                {/* <Pics width={70} height={60} /> */}
                <Image
                  source={{ uri: accountdetails?.user?.profile_image }}
                  style={{ width: 60, height: 60, borderRadius: 50 }}
                />
                <View>
                  <Text className="text-white text-[16px] font-bold">
                    {accountdetails?.user?.first_name}{" "}
                    {accountdetails?.user?.last_name}
                  </Text>
                  <Text className="text-white text-[12px]">
                    {accountdetails?.account_type} plan
                  </Text>
                  <Text className="text-white text-[12px]">
                    {accountdetails?.account_id}
                  </Text>
                </View>
              </View>
              <View className="flex-col justify-end">
                <Pressable onPress={() => router.push("/Profiles/Upgrade")}>
                  <View className="flex-row gap-1">
                    <Upgrade />
                    <Text className="text-white text-[12px]">Upgrade plan</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
          <View
            style={{
              // height: height * 0.85,
              backgroundColor: theme === 'dark' ? "#000000" : "#ffffff",
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              paddingHorizontal: width * 0.03,
              paddingVertical: height * 0.05,
              gap: 50,
              flex: 1
              // height: height
            }}
          >
            <View className="flex-col gap-5">
              <View className="flex-row justify-start items-center">
                <Mark />
                <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#6F7071" }}>Account Information</Text>
              </View>
              <Pressable onPress={() => router.push("/Profiles")}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <ProfInfo />
                    <Text style={{ color:  theme === 'dark' ? "#ffffff"  : "#00091E", fontSize: 16 }}>
                      Personal information
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
              <Pressable onPress={() => router.push("/Profiles/ProfileKyc")}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Kyc />
                    <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#00091E", fontSize: 16 }}>
                      Update KYC information
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
              {/* <Pressable
                onPress={() => router.push("/Profiles/PaymentSettings")}
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <ProfInfo />
                    <Text style={{ color: "#00091E", fontSize: 16 }}>
                      Payment settings
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable> */}
              <Pressable onPress={() => router.push("/Profiles/InviteFriend")}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Invite />
                    <Text style={{ color:  theme === 'dark' ? "#ffffff"  :"#00091E", fontSize: 16 }}>
                      Invite a friend
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
            </View>
            <View className="flex-col gap-5">
              <View className="flex-row justify-start items-center">
                <Mark />
                <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#6F7071" }}>Finances</Text>
              </View>
              <Pressable
                onPress={() => router.push("/Profiles/TransactionHist")}
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Transhist />
                    <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#00091E", fontSize: 16 }}>
                      Transaction history
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
              <Pressable onPress={() => router.push("/Profiles/Wallet")}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Wallet />
                    <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#00091E", fontSize: 16 }}>
                      Wallets
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
            </View>
            <View className="flex-col gap-5">
              <View className="flex-row justify-start items-center">
                <Mark />
                <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#6F7071" }}>Security</Text>
              </View>
              <Pressable
                onPress={() => router.push("/Profiles/TransactionPin")}
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Transhist />
                    <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#00091E", fontSize: 16 }}>
                      Transaction pin
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
              <Pressable onPress={() => router.push("/Profiles/ChangePin")}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Profchangepin />
                    <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#00091E", fontSize: 16 }}>
                      Change pincode
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
              <Pressable onPress={() => router.push("/Profiles/Biometric")}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Profbiometric />
                    <Text style={{ color:  theme === 'dark' ? "#ffffff"  :"#00091E", fontSize: 16 }}>
                      Biometrics
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
              {/* <Pressable onPress={() => router.push("/Profiles/Language")}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Proflang />
                    <Text style={{ color: "#00091E", fontSize: 16 }}>
                      Language
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable> */}
              <Pressable onPress={() => router.push("/Profiles/Theme")}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Proftheme />
                    <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#00091E", fontSize: 16 }}>
                      Theme
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
              <Pressable onPress={() => router.push("/Profiles/HelpSupport")}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Profhelp />
                    <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#00091E", fontSize: 16 }}>
                      Help & Support
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
              <Pressable onPress={() => router.push("/Profiles/About")}>
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-start items-center gap-2">
                    <Profabout />
                    <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#00091E", fontSize: 16 }}>
                      About Wiremi
                    </Text>
                  </View>
                  <RightDarkCarat />
                </View>
              </Pressable>
            </View>
            <View className="flex-col gap-5 mb-10">
              <Pressable onPress={() => ref?.current?.open()}>
                <View className="flex-row justify-start items-center">
                  <Logout />
                  <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#DE1E04" }}>Log out</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <BottomSheet height={280} ref={ref}>
            <View className="flex-col justify-center items-center gap-3 pt-10">
              <Text style={{ color:  theme === 'dark' ? "#ffffff"  :"#DE1E04", fontSize: 14, fontWeight: 600 }}>
                Log out
              </Text>
              <Text
                style={{ color: "#292D32", fontSize: 18, textAlign: "center" }}
              >
                Are you sure you want to log out from your account?
              </Text>
              <View className="flex flex-row justify-center items-center gap-10">
                <Pressable onPress={handleCloseModal}>
                  <View
                    style={{ width: width * 0.3, height: 50, borderRadius: 10 }}
                    className="flex-row justify-center items-center bg-[#105CE21A]"
                  >
                    <Text style={{ color:"#105CE2", fontSize: 14 }}>No</Text>
                  </View>
                </Pressable>

                <Pressable
                  onPress={() => {
                    AsyncStorage.removeItem("token");
                    router.replace("/Auth/SignInPage");
                  }}
                >
                  <View
                    style={{ width: width * 0.3, height: 50, borderRadius: 10 }}
                    className="flex-row justify-center items-center bg-[#DE1E04]"
                  >
                    <Text style={{ color: "white", fontSize: 14 }}>Yex</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </BottomSheet>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
