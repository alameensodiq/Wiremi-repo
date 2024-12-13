import {
    View,
    Text,
    ImageBackground,
    // SafeAreaView,
    StatusBar as RNStatusBar,
    Dimensions,
    Platform,
    TouchableOpacity,
    ScrollView
  } from "react-native";
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  import { StatusBar } from "expo-status-bar";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useRef } from "react";
  
  type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };
  
  const About = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const router = useRouter();
  
    const ref = useRef<BottomSheetRef>(null);
  
    const handleCloseModal = () => {
      ref.current?.close();
    };
    return (
      <View className="flex-1">
        <StatusBar hidden={false} style="dark" />
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: statusBarHeight,
            paddingHorizontal: width * 0.03
          }}
          className="gap-2"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity onPress={() => router.push("/(PersonalAccount)/Profile")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">About wiremi</Text>
            <Text></Text>
          </View>
          <View className="flex-col gap-3 items-center">
                <View className="flex-col items-start">
                    <Text style={{color:'#868E96', fontSize: 14}}>At Wiremi, we understand that each client has needs</Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>peculiar to them, to either fix cash flow issues or to grow</Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>their funds as SME’s or individuals. Our objective remains</Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>the same: to provide a broad range of financial solutions </Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>that are both flexible and bespoke to suit your specific</Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>need at any given point.</Text>
                </View>
                <View className="flex-col items-start">
                    <Text style={{color:'#868E96', fontSize: 14}}>At Wiremi, we understand that each client has needs</Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>peculiar to them, to either fix cash flow issues or to grow</Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>their funds as SME’s or individuals. Our objective remains</Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>the same: to provide a broad range of financial solutions </Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>that are both flexible and bespoke to suit your specific</Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>need at any given point.</Text>
                </View>
                <View className="flex-col items-start">
                    <Text style={{color:'#868E96', fontSize: 14}}>We pride ourselves in providing first class services in the </Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>industry. Our strong expertise at understanding clients’ </Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>needs and mapping them against a wide range of </Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>superior products gives us a comprehensive edge in the  </Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>market share.</Text>
                </View>
                <View className="flex-col items-start">
                    <Text style={{color:'#868E96', fontSize: 14}}>We pride ourselves in providing first class services in the </Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>industry. Our strong expertise at understanding clients’ </Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>needs and mapping them against a wide range of </Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>superior products gives us a comprehensive edge in the  </Text>
                    <Text style={{color:'#868E96', fontSize: 14}}>market share.</Text>
                </View>
          </View>
         
        </SafeAreaView>
      </View>
    );
  };
  
  export default About;
  