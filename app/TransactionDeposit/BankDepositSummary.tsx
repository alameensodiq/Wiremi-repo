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
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  import { StatusBar } from "expo-status-bar";
  import Cards from "../../assets/cards.svg";
  import Rightcarat from "../../assets/rightcarat.svg";
  import BlueSignInButton from "@/components/BlueSignInButton";
  import TransactionTextLabel from "@/components/TransactionTextLabel";
  
  const BankDepositSummary = () => {
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
          className="gap-6"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity onPress={() => router.back()}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">
              Transaction Summary
            </Text>
            <Text></Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Amount</Text>
            <Text className="text-darktext font-[14px]">$500</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Fees</Text>
            <Text className="text-darktext font-[14px]">$0.00</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Tax</Text>
            <Text className="text-darktext font-[14px]">$0.00</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Deposit type</Text>
            <Text className="text-darktext font-bold">Card deposit</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Amount</Text>
            <Text className="text-buttonprimary font-[14px]">$500</Text>
          </View>
          <View className="items-center justify-center">
            <BlueSignInButton
              title="Proceed"
              onPress={() => console.log('Next')}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  };
  
  export default BankDepositSummary;
  