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
import PayName from "../../assets/payname.svg";
import PayNumber from "../../assets/paynumber.svg";
import BankHouse from "../../assets/bankhouse.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import On from "../../assets/on.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef, useState } from "react";
import { BottomSheet } from "@/components/Bottom";
import Pluswallet from "../../assets/pluswallet.svg";
import Usa from "../../assets/usa.svg";
import FourDigits from "@/components/FourDigits";
import { FlatList } from "react-native";
import { CheckBox } from "@rneui/themed";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const Wallet = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [selectedIndex, setIndex] = useState(0);
  const router = useRouter();

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const data2 = [
    {
      id: "1",
      name: "USD Dollar(USD)",
      image: <Usa />
    },
    {
      id: "2",
      name: "NGN Naira(NGN)",
      image: <Usa />
    },
    {
      id: "3",
      name: "Great British Pounds(GBP)",
      image: <Usa />
    },
    {
      id: "4",
      name: "Canadian Dollar(CAD)",
      image: <Usa />
    }
  ];
  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03,
          position: "relative"
        }}
        className="gap-2"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Wallets</Text>
          <Text></Text>
        </View>
        <View>
          <View>
            <Text style={{ color: "#00091E" }} className="text-[14px]">
              Below are your active wallets
            </Text>
          </View>
          <View className="flex-row justify-between mt-4">
            <View className="flex-row items-center">
              <Usa width={60} height={40} />
              <View className="flex-col">
                <Text style={{ color: "#00091E" }} className="text-[16px]">
                  USD Dollar(USD)
                </Text>
                <Text style={{ color: "#00091E" }} className="text-[14px]">
                  Base currency
                </Text>
              </View>
            </View>
            <Text className="text-buttonprimary text-[14px]">$140,746</Text>
          </View>
        </View>
        <Pressable
          onPress={() => ref?.current?.open()}
          style={{ position: "absolute", bottom: 150, right: 20 }}
        >
          <Pluswallet />
        </Pressable>
      </SafeAreaView>
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
              My Accounts
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
                        checked={selectedIndex === index}
                        onPress={() => setIndex(index)}
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
    </View>
  );
};

export default Wallet;
