import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  Pressable,
  Modal,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useRef } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import TransactionTextLabel from "@/components/TransactionTextLabel";
import TextLabelBox from "@/components/TextLabelBox";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { clearStategetsaving } from "@/Store/Reducers/GetSaving";
import { clearStategetsavinganalytics } from "@/Store/Reducers/GetSavingAnalytics";
import { GetSaving } from "@/Store/Apis/GetSaving";
import { GetSavingAnalytics } from "@/Store/Apis/GetSavingAnalytics";
import { clearStateeditsavingspayout } from "@/Store/Reducers/EditSavingsPayout";
import ShortBlueButton from "@/components/ShortBlueButton";
import { EditSavingsPayout } from "@/Store/Apis/EditSavingsPayout";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const RegularEditInstance = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [selectedIndex, setIndex] = React.useState<number>(0);
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [editing, setEditing] = React.useState({
    amount_per_interval: "",
    duration: 0
  });
  const ref = useRef<BottomSheetRef>(null);
  const { id } = useLocalSearchParams();
  const ids = +id;
  console.log(ids);
  const dispatch = useAppDispatch();

  const { editsavingspayout, authenticatingeditsavingspayout, errors } =
    useAppSelector((state) => state.editsavingspayout);

  console.log(editsavingspayout);

  useEffect(() => {
    dispatch(clearStategetsaving());
    dispatch(clearStategetsavinganalytics());
    if (editsavingspayout?.status === true) {
      setEditing({
        amount_per_interval: "",
        duration: 0
      });
      router.push("/Save/RegularInstanceSuccess");
    }
    return () => {
      dispatch(GetSaving({ id: ids, router: router.push }));
      dispatch(GetSavingAnalytics({ id: ids, router: router.push }));
      dispatch(clearStateeditsavingspayout());
    };
  }, [editsavingspayout]);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const onChange = (name: string, value: any) => {
    console.log(value);
    setEditing((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <View style={{ backgroundColor: "#ffffff" }} className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-4"
      >
        <Modal animationType="fade" transparent={true} visible={isVisible}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => setIsVisible(false)}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              {/* <View className="flex-col">
              {errors?.error?.map((item: any) => {
                <Text>{item}</Text>
              })}
              </View> */}
              {errors?.error &&
                typeof errors.error === "object" &&
                !Array.isArray(errors.error) &&
                Object.keys(errors.error).map((key, index) => (
                  <Text key={index}>
                    {key}:{" "}
                    {Array.isArray(errors.error[key])
                      ? errors.error[key].join(", ") // Handle arrays by joining the elements
                      : errors.error[key]}{" "}
                  </Text>
                ))}
              {errors?.error && typeof errors.error !== "object" && (
                <Text className="mb-3">{errors.error}</Text>
              )}
              <ShortBlueButton
                title="Close"
                onPress={() => setIsVisible(false)}
              />
            </View>
          </Pressable>
        </Modal>
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity
            onPress={() => router.push("/Save/RegularSavingsSummary")}
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Edit Instance</Text>
          <Text></Text>
        </View>
        <View className="items-center justify-center">
          <TransactionTextLabel
            label="Amount"
            placeholder="Enter amount $0.00"
            onChangeText={(value: any) =>
              onChange("amount_per_interval", value)
            }
          />
        </View>
        <View className="items-center justify-center">
          <TextLabelBox
            label="Duration"
            number
            placeholder="Enter duration"
            onChangeText={(value: any) => onChange("duration", value)}
          />
        </View>
        {authenticatingeditsavingspayout ? (
          <View className="flex-row justify-center items-center">
            <ActivityIndicator
              color={"#105CE2"}
              style={{ width: 30, height: 30 }}
            />
          </View>
        ) : (
          <View
            style={{ height: height * 0.2 }}
            className="items-center justify-center"
          >
            <BlueSignInButton
              title="Proceed"
              onPress={() => {
                if(editing?.amount_per_interval && editing?.duration){
                  dispatch(EditSavingsPayout({
                    router: router.push,
                    setIsVisible: setIsVisible,
                    id: ids,
                    amount_per_interval: editing?.amount_per_interval,
                    duration: editing?.duration,
                    status: "inactive"
                  }))
                }
              }}
            />
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default RegularEditInstance;
