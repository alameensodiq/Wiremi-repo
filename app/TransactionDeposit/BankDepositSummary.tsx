import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import PayName from "../../assets/payname.svg";
import PayNumber from "../../assets/paynumber.svg";
import BankHouse from "../../assets/bankhouse.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import Copyname from "../../assets/copyname.svg";
import { SafeAreaView } from "react-native-safe-area-context";

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
          paddingHorizontal: width * 0.03
        }}
        className="gap-6"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push('/TransactionDeposit/BankDepositDetails')}>
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
          <Text className="text-darktext font-bold">Bank deposit</Text>
        </View>
        <View
          style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
          className="flex-row items-center justify-between p-3"
        >
          <Text className="text-lighttextdark font-[14px]">Total</Text>
          <Text className="text-buttonprimary font-[14px]">$500</Text>
        </View>
        <View className="flex-col gap-1 items-start">
          <Text className="text-dark font-bold">Deposit:</Text>
          <Text className="text-lighttextdark">
            Make your payment to the account number generated below
          </Text>
        </View>
        <View
          style={{
            borderColor: "#105CE2B2",
            height: height * 0.24,
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor:'#105CE2B2',
            opacity: 0.4,
            paddingVertical: height * 0.02,
            paddingHorizontal: width * 0.04
          }}
          className="flex-col items-start"
        >
          <Text style={{color: '#000000',fontWeight: 'bold'}} className="font-[12px]">Bank account details:</Text>
          <View className="flex-row gap-2 items-center">
            <BankHouse/>
             <View className="gap-1">
                 <Text className="font-[10px]">Bank name</Text>
                 <Text  style={{color: '#000000',fontWeight: 'bold'}} >Rise Bank</Text>
             </View>
          </View>
          <View className="flex-row gap-2 items-center">
            <PayNumber/>
             <View className="gap-1">
                 <Text className="font-[10px]">Account number</Text>
                 <Text  style={{color: '#000000',fontWeight: 'bold'}} >2033901929</Text>
             </View>
             <Copyname />
          </View>
          <View className="flex-row gap-2 items-center">
            <PayName/>
             <View className="gap-1">
                 <Text className="font-[10px]">Account name</Text>
                 <Text  style={{color: '#000000',fontWeight: 'bold'}} >Wiremi</Text>
             </View>
          </View>
        </View>
        <View className="items-center justify-center">
          <BlueSignInButton
            title="I have transferred"
            onPress={() => router.push('/TransactionDeposit/BankDepositSuccess')}
            // onPress={() => router.push('/TransactionDeposit/BankDepositVerify')}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BankDepositSummary;
