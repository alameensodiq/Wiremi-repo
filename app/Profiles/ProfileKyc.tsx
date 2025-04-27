import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import BlueSignInButton from "@/components/BlueSignInButton";
import Copyname from "../../assets/copyname.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import TextLabelBox from "@/components/TextLabelBox";
import SelectAndText from "@/components/SelectAndText";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { AccountDetails } from "@/Store/Apis/AccountDetails";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const ProfileKyc = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show, setShow] = useState("");

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      AccountDetails({
        router: router.push,
        setIsVisible: setIsVisible,
        setShow: setShow
      })
    );
  }, []);

  const { accountdetails, authenticatingaccountdetails, errorsaccountdetails } =
    useAppSelector((state) => state.accountdetails);

  console.log(accountdetails);
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
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Update KYC info</Text>
          <Text></Text>
        </View>
        <View className="flex-1 relative  justify-start gap-2">
          <View className="flex-row justify-start items-start pb-10">
            <Text style={{ color: "#413D43" }} className="text-[14px]">
              We need your basic information
            </Text>
          </View>
          <View>
            <TextLabelBox
              label="where do you live?"
              placeholder={accountdetails?.user?.address?.street}
              disabled
            />
            {/* <SelectAndText title={`${accountdetails?.address?.street}`} /> */}
          </View>
          <View>
            <TextLabelBox
              label="Phone Number"
              placeholder={accountdetails?.user?.telephone}
              disabled
            />
            {/* <SelectAndText title={accountdetails?.user?.first_name} /> */}
          </View>
          <View>
            <TextLabelBox
              label="First name"
              placeholder={accountdetails?.user?.first_name}
              disabled
            />
          </View>
          <View>
            <TextLabelBox
              label="Last name"
              placeholder={accountdetails?.user?.last_name}
              disabled
            />
          </View>
          <View className="pt-20">
            <BlueSignInButton
              // title="Send verification code"
               title="Proceed"
              onPress={() => router.push("/Profiles/ProfileKycAddress")}
              // onPress={() => router.push("/Profiles/ConfirmKycInfo")}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileKyc;
