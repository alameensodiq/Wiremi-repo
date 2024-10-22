import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import MobileMoney from "../../assets/mobilemoney.svg";
import Mark from "../../assets/successmark.svg";
import Copy from "../../assets/copy.svg";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const NotificationDetails = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ScrollView style={{ backgroundColor: "#ffffff" }} className="flex-1">
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
          <TouchableOpacity
            onPress={() => router.push("/Notification/NotificationList")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Details</Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center gap-3">
          <MobileMoney />
          <Text style={{ color: "#5F5F5F" }}>
            <Text style={{ color: "#5F5F5F" }}>Transfer to</Text>{" "}
            <Text className="font-bold">Mike Doe</Text>
          </Text>
          <Text style={{ color: "#00091E",fontSize: 18 }} className="font-bold">
            $510.00
          </Text>
          <View className="flex-row items-center gap-2">
            <Mark/>
            <Text style={{color:'#00A85A',fontSize:16}}>Successful</Text>
          </View>
        </View>
        <View className="pr-2 pt-10 gap-5">
            <Text style={{color:'#00091E',fontSize: 14}} className="font-bold">Transaction details</Text>
            <View className="flex-row justify-between items-center">
                <Text style={{color:'#6E6E6E',fontSize: 14}}>Transaction type</Text>
                <Text style={{color:'#00091E',fontSize: 14, fontWeight: 'bold'}}>Transfer</Text>
            </View>
            <View className="flex-row justify-between items-center">
                <Text style={{color:'#6E6E6E',fontSize: 14}}>Sender details</Text>
                <Text style={{color:'#00091E',fontSize: 14, fontWeight: 'bold'}}>Susan Sheidu |WI234489120</Text>
            </View>
            <View className="flex-row justify-between items-center">
                <Text style={{color:'#6E6E6E',fontSize: 14}}>Remark</Text>
                <Text style={{color:'#00091E',fontSize: 14, fontWeight: 'bold'}}>Trf from Susan Sheidu to Biola Moses</Text>
            </View>
            <View className="flex-row justify-between items-center">
                <Text style={{color:'#6E6E6E',fontSize: 14}}>Transaction date</Text>
                <Text style={{color:'#00091E',fontSize: 14, fontWeight: 'bold'}}>12/09/2024</Text>
            </View>
            <View className="flex-row justify-between items-center">
                <Text style={{color:'#6E6E6E',fontSize: 14}}>Transaction time</Text>
                <Text style={{color:'#00091E',fontSize: 14, fontWeight: 'bold'}}>12:12:09PM</Text>
            </View>
            <View className="flex-row justify-between items-center">
                <Text style={{color:'#6E6E6E',fontSize: 14}}>Transaction reference</Text>
                <View className="flex-row items-center gap-2">
                    <Text style={{fontWeight: 'bold'}}>55678878900765342561</Text>
                    <Copy/>
                </View>
            </View>
        </View>
        <View className="pr-2 pl-4 pt-6">
            <Text className="text-buttonprimary">Note:</Text>
            <Text style={{color:'#8D8F91',lineHeight: 24}}>This transaction is recorded for reference. Please verify details and keep for future financial tracking or reconciliation.</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default NotificationDetails;
