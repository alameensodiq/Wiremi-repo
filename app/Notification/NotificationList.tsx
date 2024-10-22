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
import SendMoneyWiremi from "../../assets/sendmoneywiremi.svg";
import Filter from "../../assets/filter.svg";
import SearchLabelBox from "@/components/SearchLabelBox";
import NotificationSearchLabel from "@/components/NotificaionSearchLabel";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const NotificationList = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const data = [1, 2, 3, 4, 5, 6];
  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
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
          <TouchableOpacity onPress={() => router.push("/Dashboard")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Notifications</Text>
          <Text></Text>
        </View>
        <View className="flex-row">
          <NotificationSearchLabel  placeholder="Search" />
          <Filter />
        </View>
        <View style={{ height: height * 0.72 }}>
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View className="gap-2">
                <View className="flex-row items-start gap-2">
                  <View
                    style={{
                      backgroundColor: "#2A94F40D",
                      borderRadius: 100,
                      width: width * 0.07,
                      height: height * 0.03
                    }}
                    className="justify-center items-center"
                  >
                    <SendMoneyWiremi />
                  </View>
                  <View>
                    <Text className="text-black font-[13px]">
                      Outgoing transfer successful
                    </Text>
                    <Text style={{ color: "#989AAF" }}>
                      You have successfully sent $500 to Mike Doe
                    </Text>
                  </View>
                </View>
                <View className="flex-row justify-between px-2">
                  <Text style={{ color: "#606162" }} className="font-[10px]">
                    Today 07:42PM
                  </Text>
                  <Text className="text-buttonprimary">View</Text>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
            bounces={false}
            keyExtractor={(item) => item.toString()}
            contentContainerStyle={{
              gap: 50,
              paddingHorizontal: width * 0.03
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default NotificationList;
