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
    FlatList
  } from "react-native";
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  import { StatusBar } from "expo-status-bar";
  import { useRef } from "react";
  import SendMoneyWiremi from "../../assets/sendmoneywiremi.svg";
  import Tesla from "../../assets/tesla.svg";
  import SearchLabelBox from "@/components/SearchLabelBox";
  import NotificationSearchLabel from "@/components/NotificaionSearchLabel";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Pics from "../../assets/pics.svg";
  
  type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };
  
  const ProjectAll = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
    const ref = useRef<BottomSheetRef>(null);
  
    const handleCloseModal = () => {
      ref.current?.close();
    };
  
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
            <TouchableOpacity onPress={() => router.push("/Invest/MyProjectDetails")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Wire ventures</Text>
            <Text></Text>
          </View>
          <View className="flex-col justify-center gap-1">
            <Text className="text-[14px] text-black">A comprehensive list of all investors</Text>
          </View>
          <View style={{ height: height * 0.72 }}>
            <FlatList
              data={data}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => router.push('/Invest/StockDetails')}>
                <View className="gap-2">
                  <View className="flex-row justify-between items-center px-2">
                    <View className="flex-row items-center gap-2">
                        <Pics width={50} height={60} />
                         <View className="flex-col">
                            <Text>Susan Sheidu</Text>
                            <Text className="text-buttonprimary text-[12px]">$400</Text>
                         </View>
                    </View>
                    <Text className="text-[rgba(110, 110, 110, 1)]">13/09/2024</Text>
                  </View>
                </View>
                </TouchableOpacity>
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
  
  export default ProjectAll;
  