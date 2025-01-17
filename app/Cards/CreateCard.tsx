import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import { SafeAreaView } from "react-native-safe-area-context";
import TransparentSelectButton from "@/components/TransparentSelectButton";
import TextLabelBox from "@/components/TextLabelBox";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { GetCard } from "@/Store/Apis/GetCard";
import { clearStategetcard } from "@/Store/Reducers/GetCard";
import { CreateCards } from "@/Store/Apis/CreateCard";
import { clearStatecreatecard } from "@/Store/Reducers/CreateCard";
import { FlatList } from "react-native";
import { CheckBox } from "@rneui/themed";
import { BottomSheet } from "@/components/Bottom";
import Usa from "../../assets/usa.svg";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const CreateCard = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const ref = useRef<BottomSheetRef>(null);
  const [payload, setpayload] = useState({
    cardpin: "",
    cardtype: ""
  });
  const dispatch = useAppDispatch();

  const { createcards, authenticatingcreatecards } = useAppSelector(
    (state) => state.createcards
  );

  console.log(createcards);

  useEffect(() => {
    return () => {
      dispatch(clearStategetcard());
      dispatch(clearStatecreatecard());
    };
  }, []);

  useEffect(() => {
    if (createcards?.status) {
      router.push("/Cards/CardSuccess");
    }
  }, [createcards]);

  const onChange = (name: string, value: string) => {
    setpayload((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  const data2 = [
    {
      id: "1",
      name: "VISA",
      image: <Usa />
    },
    {
      id: "2",
      name: "MASTERCARD",
      image: <Usa />
    }
  ];

  const handleCloseModal = () => {
    ref.current?.close();
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-4"
      >
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/(PersonalAccount)/VirtualCard")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">
            Create virtual card
          </Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center">
          <TransparentSelectButton
            label="Card type"
            placeholder="Select card type"
            payload={payload?.cardtype}
            onPress={() => ref?.current?.open()}
          />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Transaction pin"
            placeholder="Enter your transaction pin"
            onChangeText={(value: string) => onChange("cardpin", value)}
          />
        </View>
        <View
          style={{ height: height * 0.2 }}
          className="items-center justify-center"
        >
          {authenticatingcreatecards ? (
            <View className="flex-row justify-center items-center">
              <ActivityIndicator
                color={"#105CE2"}
                style={{ width: 30, height: 30 }}
              />
            </View>
          ) : (
            <BlueSignInButton
              title="Proceed"
              onPress={() => {
                dispatch(
                  CreateCards({
                    currency: "USD",
                    type: "VIRTUAL",
                    auto_approve: true,
                    brand: payload?.cardtype,
                    card_pin: payload?.cardpin
                  })
                );
              }}
            />
          )}
        </View>
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
                Card Types
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text style={{ color: "#606162" }}>Select primary card type</Text>
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
                          {/* {item?.image} */}
                          <Text className="text-[14px] font-bold">
                            {item?.name}
                          </Text>
                        </View>
                        {/* <View className="flex-row">
                            <Text
                              className="text-[12px] ml-4"
                              style={{ color: "#105CE2" }}
                            >
                              Active
                            </Text>
                          </View> */}
                      </View>
                      <View className="flex-col items-end">
                        <CheckBox
                          checked={
                            selectedIndex === index ||
                            payload.cardtype === item?.name
                          }
                          // onPress={() => setIndex(index)}
                          onPress={() => {
                            setIndex(index);
                            setpayload((prev) => ({
                              ...prev, // Spread the previous state correctly
                              cardtype: item?.name // Update the "country" property
                            }));
                            handleCloseModal();
                          }}
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
      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateCard;
