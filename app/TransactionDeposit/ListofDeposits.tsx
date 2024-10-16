import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import Cards from "../../assets/cards.svg";
import Interac from "../../assets/interac.svg";
import Bank from "../../assets/bank.svg";
import Ewallet from "../../assets/ewallet.svg";
import MobileMoney from "../../assets/mobilemoney.svg";
import Request from "../../assets/request.svg";
import Rightcarat from "../../assets/rightcarat.svg";

const ListofDeposits = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingTop: height * 0.02,
          paddingHorizontal: width * 0.03
        }}
        className="gap-8"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push('/(PersonalAccount)/Dashboard')}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Deposit</Text>
          <Text></Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/CardDeposits")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <Cards />
              </View>
              <Text className="text-[14px] font-bold text-black">Cards</Text>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: width * 0.03
          }}
          className="flex-row justify-between items-center"
        >
          <View className="flex-row gap-3 items-center">
            <View
              style={{
                backgroundColor: "#2A94F40D",
                borderRadius: 100,
                width: width * 0.1,
                height: height * 0.05
              }}
              className="justify-center items-center"
            >
              <Interac />
            </View>
            <View className="items-start">
              <Text className="text-[14px] font-bold text-black">
                Interac e-transfer{" "}
              </Text>
              <Text className="text-[10px] text-deposistsub">
                Get up to $10,000 within 1 hour
              </Text>
            </View>
          </View>
          <View>
            <Rightcarat />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/Banks")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <Bank />
              </View>
              <Text className="text-[14px] font-bold text-black">Banks</Text>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/TransactionDeposit/Ewallets")}
        >
          <View
            style={{
              paddingHorizontal: width * 0.03
            }}
            className="flex-row justify-between items-center"
          >
            <View className="flex-row gap-3 items-center">
              <View
                style={{
                  backgroundColor: "#2A94F40D",
                  borderRadius: 100,
                  width: width * 0.1,
                  height: height * 0.05
                }}
                className="justify-center items-center"
              >
                <Ewallet />
              </View>
              <Text className="text-[14px] font-bold text-black">
                E-wallets
              </Text>
            </View>
            <View>
              <Rightcarat />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/TransactionDeposit/MobileMoney')}>
        <View
          style={{
            paddingHorizontal: width * 0.03
          }}
          className="flex-row justify-between items-center"
        >
          <View className="flex-row gap-3 items-center">
            <View
              style={{
                backgroundColor: "#2A94F40D",
                borderRadius: 100,
                width: width * 0.1,
                height: height * 0.05
              }}
              className="justify-center items-center"
            >
              <MobileMoney />
            </View>
            <Text className="text-[14px] font-bold text-black">
              Mobile Money
            </Text>
          </View>
          <View>
            <Rightcarat />
          </View>
        </View>
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: width * 0.03
          }}
          className="flex-row justify-between items-center"
        >
          <View className="flex-row gap-3 items-center">
            <View
              style={{
                backgroundColor: "#2A94F40D",
                borderRadius: 100,
                width: width * 0.1,
                height: height * 0.05
              }}
              className="justify-center items-center"
            >
              <Request />
            </View>
            <Text className="text-[14px] font-bold text-black">
              Request Money
            </Text>
          </View>
          <View>
            <Rightcarat />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ListofDeposits;
