import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import PayName from "../../../assets/payname.svg";
import PayNumber from "../../../assets/paynumber.svg";
import BankHouse from "../../../assets/bankhouse.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import Copyname from "../../../assets/copyname.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRef } from "react";
import { BottomSheet } from "@/components/Bottom";
import Redrightcarat from "../../../assets/redrightcarat.svg";
import Fingerprint from "../../../assets/fingerprint.svg";
import FourDigits from "@/components/FourDigits";


type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const TuitionTransactionSummary = () => {
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
          <TouchableOpacity
            onPress={() =>
              router.push("/More/Tuition/TuitionBank")
            }
          >
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">
            Transaction Summary
          </Text>
          <Text></Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">
              Name of student
            </Text>
            <Text className="text-darktext font-[14px]">Susan Sheidu</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">
              Name of school
            </Text>
            <Text className="text-darktext font-[14px]">
              University of Buea
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Faculty</Text>
            <Text className="text-darktext font-[14px]">Science</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Program</Text>
            <Text className="text-darktext font-[14px]">
              Medical Laboratory Sciences
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Student type</Text>
            <Text className="text-darktext font-[14px]">International</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">
              Transaction type
            </Text>
            <Text className="text-darktext font-[14px]">International</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Level</Text>
            <Text className="text-darktext font-[14px]">200</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Purpose</Text>
            <Text className="text-darktext font-[14px]">School fees</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Matric No</Text>
            <Text className="text-darktext font-[14px]">SC11A7000</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Wiremi ID</Text>
            <Text className="text-darktext font-[14px]">WI8776542781</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Amount</Text>
            <Text className="text-darktext font-[14px]">$500.00</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Tax</Text>
            <Text className="text-darktext font-[14px]">$0.80</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Charge</Text>
            <Text className="text-darktext font-[14px]">$1.00</Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className="text-lighttextdark font-[14px]">Total</Text>
            <Text className="text-buttonprimary font-[14px]">$500</Text>
          </View>
          <View className="flex-col gap-1 items-start my-2">
            <Text className="text-dark font-bold">Bank info:</Text>
          </View>
          <View
            style={{
              borderColor: "#105CE2B2",
              height: height * 0.24,
              borderWidth: 2,
              borderRadius: 10,
              backgroundColor: "#105CE2B2",
              opacity: 0.4,
              paddingVertical: height * 0.02,
              paddingHorizontal: width * 0.04
            }}
            className="flex-col items-start"
          >
            <Text
              style={{ color: "#000000", fontWeight: "bold" }}
              className="font-[12px]"
            >
              Bank account details:
            </Text>
            <View className="flex-row gap-2 items-center">
              <BankHouse />
              <View className="gap-1">
                <Text className="font-[10px]">Bank name</Text>
                <Text style={{ color: "#000000", fontWeight: "bold" }}>
                  Rise Bank
                </Text>
              </View>
            </View>
            <View className="flex-row gap-2 items-center">
              <PayNumber />
              <View className="gap-1">
                <Text className="font-[10px]">Account number</Text>
                <Text style={{ color: "#000000", fontWeight: "bold" }}>
                  2033901929
                </Text>
              </View>
              <Copyname />
            </View>
            <View className="flex-row gap-2 items-center">
              <PayName />
              <View className="gap-1">
                <Text className="font-[10px]">Account name</Text>
                <Text style={{ color: "#000000", fontWeight: "bold" }}>
                  Wiremi
                </Text>
              </View>
            </View>
          </View>
          <View className="items-center justify-center my-2">
            <BlueSignInButton
              title="Proceed"
              onPress={() =>
                ref?.current?.open()
              }
              // onPress={() => router.push('/TransactionDeposit/BankDepositVerify')}
            />
          </View>
          <BottomSheet height={450} ref={ref}>
            <View style={{ padding: 20, gap: 5 }}>
              {/* <Text>Bottom Sheet Content</Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <Text>Close</Text>
              </TouchableOpacity> */}
              <View className="items-center justify-center gap-2 flex-col">
                <Text
                  className="mb-2"
                  style={{ fontSize: 13, color: "#606162" }}
                >
                  Enter a transactin pin
                </Text>
                <FourDigits />
              </View>
              <View className="flex-col gap-8 px-8 mt-2">
                <View className="flex-row justify-between items-center">
                  <TouchableOpacity
                    onPress={() => {
                      router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        1
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        2
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        3
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center">
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        4
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        5
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        6
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center">
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        7
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        8
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        9
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-between items-center">
                  <View>
                    <Fingerprint />
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                        router.push("/More/Tuition/TuitionSuccess");
                      handleCloseModal();
                    }}
                  >
                    <View>
                      <Text
                        className="font-bold"
                        style={{ color: "#00091E", fontSize: 20 }}
                      >
                        0
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View>
                    <Redrightcarat />
                  </View>
                </View>
              </View>
            </View>
          </BottomSheet>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default TuitionTransactionSummary;
