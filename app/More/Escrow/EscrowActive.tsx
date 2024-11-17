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
  import Back from "../../../assets/Back.svg";
  import RightCarat from "../../../assets/rightcaratblue.svg";
  import { StatusBar } from "expo-status-bar";
  import { useRef } from "react";
  import SendMoneyWiremi from "../../../assets/sendmoneywiremi.svg";
  import Filter from "../../../assets/filter.svg";
  import SearchLabelBox from "@/components/SearchLabelBox";
  import NotificationSearchLabel from "@/components/NotificaionSearchLabel";
  
  type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };
  
  const EscrowActive = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
    const ref = useRef<BottomSheetRef>(null);
  
    const handleCloseModal = () => {
      ref.current?.close();
    };
  
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const datas = [
      {
        id: 1,
        name: "Option 1",
        amount: "$1700"
      },
      {
        id: 2,
        name: "Option 1",
        amount: "$1700"
      },
      {
        id: 3,
        name: "Option 1",
        amount: "$1700"
      },
      {
        id: 4,
        name: "Option 1",
        amount: "$1700"
      },
      {
        id: 5,
        name: "Option 1",
        amount: "$1700"
      }
    ];
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
            <TouchableOpacity onPress={() => router.push("/More/Escrow/EscrowDashboard")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Active Escrow</Text>
            <Text></Text>
          </View>
          <View className="flex-row">
            <NotificationSearchLabel placeholder="Search" />
            <Filter />
          </View>
          <View style={{ height: height * 0.72 }}>
            <FlatList
              data={datas}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View
                  className="flex-col gap-2"
                  style={{
                    borderBottomColor: "#EBEBEB",
                    borderBottomWidth: 1,
                    paddingBottom: 15
                  }}
                >
                  <View className="flex-row justify-between items-center">
                    <View className="flex-col gap-2 items-start">
                      <Text className="text-[12px]" style={{ color: "#00091E" }}>
                        19th April, 2022
                      </Text>
                      <Text className="text-[12px]" style={{ color: "#6E6E6E" }}>
                        ID: 8731267890
                      </Text>
                    </View>
                    <View className="flex-col justify-end items-start">
                      <Text
                        className="text-[12px] mt-4"
                        style={{ color: "#6E6E6E" }}
                      >
                        Created on April 19th, 2022
                      </Text>
                    </View>
                  </View>
                  <View className="flex-row justify-between items-center">
                    <View className="flex-col gap-2 items-start">
                      <Text className="text-[16px]" style={{ color: "#00091E" }}>
                        $5482.47
                      </Text>
                      <Text className="text-[14px]" style={{ color: "#323232" }}>
                        Susan Autors
                      </Text>
                    </View>
                    <View className="flex-col justify-end items-start">
                      <View className="flex-row gap-1 items-center">
                        <Text className="text-[12px] mt-4 text-buttonprimary">
                          See details
                        </Text>
                        <RightCarat />
                      </View>
                    </View>
                  </View>
                </View>
              )}
              // contentContainerStyle={{
              //     gap: 30
              //   }}
              ItemSeparatorComponent={() => <View style={{ marginTop: 30 }} />}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  };
  
  export default EscrowActive;
  