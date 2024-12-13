import {
    View,
    Text,
    StatusBar as RNStatusBar,
    Dimensions,
    TouchableOpacity,
    ScrollView
  } from "react-native";
  import React, { useRef, useState } from "react";
  import { useRouter } from "expo-router";
  import Back from "../../assets/Back.svg";
  import { StatusBar } from "expo-status-bar";
  import BlueSignInButton from "@/components/BlueSignInButton";
  import TextLabelBox from "@/components/TextLabelBox";
  import Calendar from "../../assets/calendar.svg";
  import Cards from "../../assets/savingscard.svg";
  import Bank from "../../assets/savingsbank.svg";
  import Momo from "../../assets/savingsmomo.svg";
  import Wiremi from "../../assets/savingswiremi.svg";
  import { SafeAreaView } from "react-native-safe-area-context";
  
  type BottomSheetRef = {
    open: () => void;
    close: () => void;
    // Add any other methods you expect from the BottomSheet component
  };
  
  const InvestPage = () => {
    const statusBarHeight = RNStatusBar.currentHeight || 0;
    const { height, width } = Dimensions.get("window");
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);
    const [selectedIndex, setIndex] = useState(0);
    const ref = useRef<BottomSheetRef>(null);
    const ref2 = useRef<BottomSheetRef>(null);
    const ref3 = useRef<BottomSheetRef>(null);
    const ref4 = useRef<BottomSheetRef>(null);
    const ref5 = useRef<BottomSheetRef>(null);
    const ref6 = useRef<BottomSheetRef>(null);
    const ref7 = useRef<BottomSheetRef>(null);
    const router = useRouter();
  
    const handleCloseModal = () => {
      ref.current?.close();
    };
  
    const handleCloseModal2 = () => {
      ref2.current?.close();
    };
    const handleCloseModal3 = () => {
      ref3.current?.close();
    };
    const handleCloseModal4 = () => {
      ref4.current?.close();
    };
    const handleCloseModal5 = () => {
      ref5.current?.close();
    };
    const handleCloseModal6 = () => {
      ref6.current?.close();
    };
    const handleCloseModal7 = () => {
      ref7.current?.close();
    };
  
    const data = [
      {
        id: "1",
        name: "Daily",
        image: <Calendar />
      },
      {
        id: "2",
        name: "Weekly",
        image: <Calendar />
      },
      {
        id: "3",
        name: "Monthly",
        image: <Calendar />
      }
    ];
  
    const data2 = [
      {
        id: "1",
        name: "Wiremi",
        image: <Wiremi />
      },
      {
        id: "2",
        name: "Momo",
        image: <Momo />
      },
      {
        id: "3",
        name: "Bank",
        image: <Bank />
      },
      {
        id: "4",
        name: "Cards",
        image: <Cards />
      }
    ];
    return (
      <ScrollView style={{ backgroundColor: "#ffffff" }} className="flex-1">
        <StatusBar hidden={false} style="dark" />
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: statusBarHeight,
            paddingHorizontal: width * 0.03
          }}
          className="gap-3"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/Invest/OtherprojectDetails")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Invest</Text>
            <Text></Text>
          </View>
          <View className="items-center justify-center">
            <TextLabelBox label="Amount to invest" placeholder="Enter amount to invest" />
          </View>
          <View
            style={{ height: height * 0.2 }}
            className="items-center justify-center"
          >
            <BlueSignInButton
              title="Proceed"
              onPress={() => router.push('/Invest/InvestPageSuccess')}
            />
          </View>

        </SafeAreaView>
      </ScrollView>
    );
  };
  
  export default InvestPage;
  