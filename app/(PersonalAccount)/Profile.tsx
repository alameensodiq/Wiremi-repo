import {
  View,
  Text,
  ScrollView,
  StatusBar as RNStatusBar,
  Dimensions,
  Pressable
} from "react-native";
import React from "react";
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

const Profile = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View
      className="flex-1"
      style={{ backgroundColor: "#105CE2"}}
      // showsVerticalScrollIndicator={false}
    >
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
       <ScrollView  showsVerticalScrollIndicator={false} style={{height: height}}>
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
              <Pics width={70} height={60} />
              <View>
                <Text className="text-white text-[16px] font-bold">
                  Susan Sheidu
                </Text>
                <Text className="text-white text-[12px]">
                  Premium lite plan
                </Text>
                <Text className="text-white text-[12px]">WI234567908</Text>
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
            backgroundColor: "#ffffff",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingHorizontal: width * 0.03,
            paddingVertical: height * 0.05,
            gap: 50,
            height: height
          }}
        >
          <View className="flex-col gap-5">
            <View className="flex-row justify-start items-center">
              <Mark />
              <Text style={{ color: "#6F7071" }}>Account Information</Text>
            </View>
            <Pressable onPress={() => router.push("/Profiles")}>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-start items-center gap-2">
                  <ProfInfo />
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
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
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
                    Update KYC information
                  </Text>
                </View>
                <RightDarkCarat />
              </View>
            </Pressable>
            <Pressable onPress={() => router.push("/Profiles/PaymentSettings")}>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-start items-center gap-2">
                  <ProfInfo />
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
                    Payment settings
                  </Text>
                </View>
                <RightDarkCarat />
              </View>
            </Pressable>
            <Pressable onPress={() => router.push("/Profiles/InviteFriend")}>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-start items-center gap-2">
                  <Invite />
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
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
              <Text style={{ color: "#6F7071" }}>Finances</Text>
            </View>
            <Pressable onPress={() => router.push("/Profiles/TransactionHist")}>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-start items-center gap-2">
                  <Transhist />
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
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
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
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
              <Text style={{ color: "#6F7071" }}>Security</Text>
            </View>
            <Pressable onPress={() => router.push("/Profiles/TransactionPin")}>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-start items-center gap-2">
                  <Transhist />
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
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
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
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
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
                    Biometrics
                  </Text>
                </View>
                <RightDarkCarat />
              </View>
            </Pressable>
            <Pressable onPress={() => router.push("/Profiles/Language")}>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-start items-center gap-2">
                  <Proflang />
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
                    Language
                  </Text>
                </View>
                <RightDarkCarat />
              </View>
            </Pressable>
            <Pressable onPress={() => router.push("/Profiles/Theme")}>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-start items-center gap-2">
                  <Proftheme />
                  <Text style={{ color: "#00091E", fontSize: 16 }}>Theme</Text>
                </View>
                <RightDarkCarat />
              </View>
            </Pressable>
            <Pressable onPress={() => router.push("/Profiles/HelpSupport")}>
              <View className="flex-row justify-between items-center">
                <View className="flex-row justify-start items-center gap-2">
                  <Profhelp />
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
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
                  <Text style={{ color: "#00091E", fontSize: 16 }}>
                    About Wiremi
                  </Text>
                </View>
                <RightDarkCarat />
              </View>
            </Pressable>
          </View>
          <View className="flex-col gap-5">
            <View className="flex-row justify-start items-center">
              <Logout />
              <Text style={{ color: "#DE1E04" }}>Log out</Text>
            </View>
          </View>
        </View>
       </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
