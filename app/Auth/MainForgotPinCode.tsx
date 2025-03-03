import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TextInput
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Back from "../../assets/Back.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import { useRouter } from "expo-router";
import SelectAndText from "@/components/SelectAndText";
import { BottomSheet } from "@/components/Bottom";
import { CheckBox } from "@rneui/themed";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { VerificationCode } from "@/Store/Apis/VerificationCode";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

interface CountryItemProps {
  item: {
    name: string;
    phoneCode: string;
    image?: JSX.Element; // Optional image prop
  };
  index: number;
  setIndex: (index: number) => void; // Function that updates index
  setTele: React.Dispatch<
    React.SetStateAction<{ telephone: string; phoneCode: string }>
  >;
}

const MainForgotPinCode = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [checked, setChecked] = React.useState(true);
  const [selectedIndex, setIndex] = useState(0);
  const [tele, setTele] = useState({
    telephone: "",
    phoneCode: ""
  });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const ref = useRef<BottomSheetRef>(null);
  const data2 = [
    { id: "1", name: "Algeria", phoneCode: "+213" },
    { id: "2", name: "Angola", phoneCode: "+244" },
    { id: "3", name: "Australia", phoneCode: "+61" },
    { id: "4", name: "Austria", phoneCode: "+43" },
    { id: "5", name: "Bahrain", phoneCode: "+973" },
    { id: "6", name: "Belarus", phoneCode: "+375" },
    { id: "7", name: "Belgium", phoneCode: "+32" },
    { id: "8", name: "Benin", phoneCode: "+229" },
    { id: "9", name: "Botswana", phoneCode: "+267" },
    { id: "10", name: "Brazil", phoneCode: "+55" },
    { id: "11", name: "Burkina Faso", phoneCode: "+226" },
    { id: "12", name: "Burundi", phoneCode: "+257" },
    { id: "13", name: "Cameroon", phoneCode: "+237" },
    { id: "14", name: "Canada", phoneCode: "+1" },
    { id: "15", name: "Cape Verde", phoneCode: "+238" },
    { id: "16", name: "Central African Republic", phoneCode: "+236" },
    { id: "17", name: "Chad", phoneCode: "+235" },
    { id: "18", name: "China", phoneCode: "+86" },
    { id: "19", name: "Colombia", phoneCode: "+57" },
    { id: "20", name: "Comoros", phoneCode: "+269" },
    { id: "21", name: "Congo", phoneCode: "+242" },
    { id: "22", name: "Côte d'Ivoire", phoneCode: "+225" },
    { id: "23", name: "Croatia", phoneCode: "+385" },
    { id: "24", name: "Cyprus", phoneCode: "+357" },
    { id: "25", name: "Czech Republic", phoneCode: "+420" },
    { id: "26", name: "Denmark", phoneCode: "+45" },
    { id: "27", name: "DR Congo", phoneCode: "+243" },
    { id: "28", name: "Egypt", phoneCode: "+20" },
    { id: "29", name: "Equatorial Guinea", phoneCode: "+240" },
    { id: "30", name: "Estonia", phoneCode: "+372" },
    { id: "31", name: "Ethiopia", phoneCode: "+251" },
    { id: "32", name: "Finland", phoneCode: "+358" },
    { id: "33", name: "France", phoneCode: "+33" },
    { id: "34", name: "Gabon", phoneCode: "+241" },
    { id: "35", name: "Gambia", phoneCode: "+220" },
    { id: "36", name: "Georgia", phoneCode: "+995" },
    { id: "37", name: "Germany", phoneCode: "+49" },
    { id: "38", name: "Ghana", phoneCode: "+233" },
    { id: "39", name: "Greece", phoneCode: "+30" },
    { id: "40", name: "Guinea", phoneCode: "+224" },
    { id: "41", name: "Guinea-Bissau", phoneCode: "+245" },
    { id: "42", name: "Hungary", phoneCode: "+36" },
    { id: "43", name: "Iceland", phoneCode: "+354" },
    { id: "44", name: "India", phoneCode: "+91" },
    { id: "45", name: "Indonesia", phoneCode: "+62" },
    { id: "46", name: "Ireland", phoneCode: "+353" },
    { id: "47", name: "Israel", phoneCode: "+972" },
    { id: "48", name: "Italy", phoneCode: "+39" },
    { id: "49", name: "Japan", phoneCode: "+81" },
    { id: "50", name: "Kenya", phoneCode: "+254" },
    { id: "51", name: "Latvia", phoneCode: "+371" },
    { id: "52", name: "Lesotho", phoneCode: "+266" },
    { id: "53", name: "Liberia", phoneCode: "+231" },
    { id: "54", name: "Liechtenstein", phoneCode: "+423" },
    { id: "55", name: "Lithuania", phoneCode: "+370" },
    { id: "56", name: "Luxembourg", phoneCode: "+352" },
    { id: "57", name: "Madagascar", phoneCode: "+261" },
    { id: "58", name: "Malawi", phoneCode: "+265" },
    { id: "59", name: "Malaysia", phoneCode: "+60" },
    { id: "60", name: "Mali", phoneCode: "+223" },
    { id: "61", name: "Malta", phoneCode: "+356" },
    { id: "62", name: "Mauritius", phoneCode: "+230" },
    { id: "63", name: "Mexico", phoneCode: "+52" },
    { id: "64", name: "Moldova", phoneCode: "+373" },
    { id: "65", name: "Monaco", phoneCode: "+377" },
    { id: "66", name: "Morocco", phoneCode: "+212" },
    { id: "67", name: "Mozambique", phoneCode: "+258" },
    { id: "68", name: "Namibia", phoneCode: "+264" },
    { id: "69", name: "Netherlands", phoneCode: "+31" },
    { id: "70", name: "Niger", phoneCode: "+227" },
    { id: "71", name: "Nigeria", phoneCode: "+234" },
    { id: "72", name: "Norway", phoneCode: "+47" },
    { id: "73", name: "Oman", phoneCode: "+968" },
    { id: "74", name: "Pakistan", phoneCode: "+92" },
    { id: "75", name: "Philippines", phoneCode: "+63" },
    { id: "76", name: "Poland", phoneCode: "+48" },
    { id: "77", name: "Portugal", phoneCode: "+351" },
    { id: "78", name: "Qatar", phoneCode: "+974" },
    { id: "79", name: "Romania", phoneCode: "+40" },
    { id: "80", name: "Russian Federation", phoneCode: "+7" },
    { id: "81", name: "Rwanda", phoneCode: "+250" },
    { id: "82", name: "Saudi Arabia", phoneCode: "+966" },
    { id: "83", name: "Senegal", phoneCode: "+221" },
    { id: "84", name: "Seychelles", phoneCode: "+248" },
    { id: "85", name: "Sierra Leone", phoneCode: "+232" },
    { id: "86", name: "Singapore", phoneCode: "+65" },
    { id: "87", name: "South Africa", phoneCode: "+27" },
    { id: "88", name: "South Korea", phoneCode: "+82" },
    { id: "89", name: "South Sudan", phoneCode: "+211" },
    { id: "90", name: "Spain", phoneCode: "+34" },
    { id: "91", name: "Sweden", phoneCode: "+46" },
    { id: "92", name: "Switzerland", phoneCode: "+41" },
    { id: "93", name: "Thailand", phoneCode: "+66" },
    { id: "94", name: "Togo", phoneCode: "+228" },
    { id: "95", name: "Tunisia", phoneCode: "+216" },
    { id: "96", name: "Turkey", phoneCode: "+90" },
    { id: "97", name: "Uganda", phoneCode: "+256" },
    { id: "98", name: "Ukraine", phoneCode: "+380" },
    { id: "99", name: "United Arab Emirates", phoneCode: "+971" },
    { id: "100", name: "United Kingdom", phoneCode: "+44" }
  ];

  const filteredData = data2.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleCloseModal = () => {
    ref.current?.close();
  };
  const { verification, authenticatingverification } = useAppSelector(
    (state) => state.verification
  );

  const onChange = (name: string, value: string) => {
    setTele((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  const CountryItem: React.FC<CountryItemProps> = React.memo(
    ({ item, index, setIndex, setTele }) => {
      return (
        <TouchableOpacity
          onPress={() => {
            console.log(item?.name);
            setIndex(index);
            setTele((prev) => ({
              ...prev, // Preserve the existing `telephone` field
              phoneCode: item?.phoneCode
            }));
            handleCloseModal();
          }}
        >
          <View className="flex-row justify-between gap-3">
            <View className="flex-col gap-2">
              <View className="flex-row items-center">
                {/* {item?.image} */}
                <Text className="text-[14px] font-bold">{item?.name}</Text>
              </View>
              <View className="flex-row">
                <Text className="text-[12px] ml-4" style={{ color: "#105CE2" }}>
                  Active
                </Text>
              </View>
            </View>
            <View className="flex-col items-end">
              <CheckBox
                checked={
                  selectedIndex === index || tele?.phoneCode === item?.phoneCode
                }
                // onPress={() => setIndex(index)}
                onPress={() => {
                  console.log(item?.name);
                  setIndex(index);
                  setTele((prev) => ({
                    ...prev,
                    phoneCode: item?.phoneCode
                  }));
                  handleCloseModal();
                }}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              />
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  );

  useEffect(() => {
    const phoneNumber = `${tele?.phoneCode?.trim() ?? ""}${
      tele?.telephone?.trim() ?? ""
    }`;
    if (verification?.status) {
      router.push(`/Auth/MainForgotSixDigitPinCode?phone=${phoneNumber}`);
    }
  }, [verification]);
  return (
    <View className="flex-1 ">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        className="justify-between"
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingTop: height * 0.02
        }}
      >
        <View
          style={{ paddingHorizontal: 8 }}
          className="flex-1  justify-start gap-6"
        >
          <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={() => router.push("/Auth/SignInPage")}>
              <Back />
            </TouchableOpacity>
            <Text className="text-[18px] text-textblack font-bold">
              Forgot PinCode
            </Text>
            <Text></Text>
          </View>
          <View className="flex-col items-start justify-center gap-2">
            <Text className="text-textblack text-[18px] font-bold">
              Reset PinCode
            </Text>
            <Text className="text-lighttextblack text-[14px]">
              Enter your phone number to receive OTP for pincode reset.
            </Text>
          </View>
          <View className="items-center">
            <SelectAndText
              onPress={() => ref?.current?.open()}
              onChangeText={(value: string) => onChange("telephone", value)}
              title="Phone number without Code"
            />
          </View>

          {authenticatingverification ? (
            <View className="flex-row justify-center items-center">
              <ActivityIndicator
                color={"#105CE2"}
                style={{ width: 30, height: 30 }}
              />
            </View>
          ) : (
            <View className="items-center">
              <BlueSignInButton
                title="Proceed"
                onPress={() =>
                  dispatch(
                    VerificationCode({
                      telephone: `${tele?.phoneCode}${tele?.telephone}`
                    })
                  )
                }
              />
            </View>
          )}
        </View>
        <BottomSheet height={550} ref={ref}>
          <View style={{ padding: 20, gap: 30, paddingBottom: 50 }}>
            {/* <Text>Bottom Sheet Content</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Text>Close</Text>
                </TouchableOpacity> */}
            <View className="items-center">
              <Text
                style={{ fontSize: 18, color: "#2A94F4", fontWeight: "bold" }}
              >
                Countries
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <TextInput
                style={{ color: "#606162" }}
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
                placeholder="Search for Country"
              />
              {/* <Text style={{ color: "#606162" }}>Select primary account</Text>
              <CheckBox
                checked={selectedIndex === 20}
                onPress={() => setIndex(20)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
              /> */}
            </View>
            <View style={{ height: height * 0.47 }}>
              <FlatList
                data={filteredData}
                renderItem={({ item, index }) => (
                  <CountryItem
                    item={item}
                    index={index}
                    setIndex={setIndex}
                    setTele={setTele}
                  />
                )}
                keyExtractor={(item) => item.id.toString()}
                initialNumToRender={10} // Load only 10 items initially
                maxToRenderPerBatch={10} // Render 10 items per batch
                windowSize={5} // Reduce memory usage
                updateCellsBatchingPeriod={50} // Reduce UI thread updates
                removeClippedSubviews={true} // Improves performance by unmounting off-screen items
                keyboardShouldPersistTaps="handled"
              />
            </View>
          </View>
        </BottomSheet>
      </SafeAreaView>
    </View>
  );
};

export default MainForgotPinCode;
