import {
  View,
  Text,
  StatusBar as RNStatusBar,
  Dimensions,
  Platform,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Modal,
  ActivityIndicator
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import { BottomSheet } from "@/components/Bottom";
import Pluswallet from "../../assets/pluswallet.svg";
import Usa from "../../assets/usa.svg";
import UK from "../../assets/uk.svg";
import Canada from "../../assets/canada.svg";
import { FlatList } from "react-native";
import { CheckBox } from "@rneui/themed";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { GetAllwallet } from "@/Store/Apis/GetAllwallet";
import { CreateWallet } from "@/Store/Apis/CreateWallet";
import ShortBlueButton from "@/components/ShortBlueButton";
import { AccountDetails } from "@/Store/Apis/AccountDetails";
import { clearStateaccountdetails } from "@/Store/Reducers/AccountDetails";
import { clearStategetallwallets } from "@/Store/Reducers/GetAllwallet";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const Wallet = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [selectedIndex, setIndex] = useState(100000);
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [show2, setShow2] = useState("");
  const [isVisible3, setIsVisible3] = useState<boolean>(false);
  const [show3, setShow3] = useState("");

  const ref = useRef<BottomSheetRef>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      GetAllwallet({
        router: router.push,
        setIsVisible: setIsVisible,
        setShow: setShow
      })
    );
    dispatch(
      AccountDetails({
        router: router.push,
        setIsVisible: setIsVisible3,
        setShow: setShow3
      })
    );
    ref?.current?.close();

    return () => {
      dispatch(clearStateaccountdetails());
      dispatch(clearStategetallwallets());
    };
  }, []);

  const { getallwallets, authenticatinggetallwallets, errorsgetallwallets } =
    useAppSelector((state) => state.getallwallets);

  console.log(getallwallets);

  const { accountdetails, authenticatingaccountdetails, errorsaccountdetails } =
    useAppSelector((state) => state.accountdetails);

  console.log(accountdetails);

  const { createwallet, authenticatingcreatewallet, errorscreatewallet } =
    useAppSelector((state) => state.createwallet);

  console.log(createwallet);

  useEffect(() => {
    if (createwallet?.currency) {
      ref?.current?.close();
      dispatch(
        GetAllwallet({
          router: router.push,
          setIsVisible: setIsVisible,
          setShow: setShow
        })
      );
    }
  }, [createwallet?.currency]);

  const data2 = [
    {
      id: "1",
      name: "USD Dollar",
      currency: "USD",
      symbol: "$",
      image: <Usa />
    },
    {
      id: "2",
      name: "European",
      symbol: "€",
      currency: "Euro",
      image: <Usa />
    },
    // {
    //   id: "2",
    //   name: "NGN Naira(NGN)",
    //   image: <Usa />
    // },
    {
      id: "3",
      name: "Great British Pounds",
      symbol: "£",
      currency: "GBP",
      image: <UK />
    },
    {
      id: "4",
      name: "Canadian Dollar",
      symbol: "CA$",
      currency: "CAD",
      image: <Canada />
    }
  ];
  return (
    <View className="flex-1">
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03,
          position: "relative"
        }}
        className="gap-2"
      >
        {authenticatinggetallwallets && (
          <View
            style={{ height: height, width: width }}
            className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
          >
            <ActivityIndicator size={200} color="#ffffff" />
          </View>
        )}
        <Modal animationType="slide" transparent={true} visible={isVisible}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              setIsVisible(false);
              // ref?.current?.close();
            }}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              {/* <View className="flex-col">
                      {errors?.error?.map((item: any) => {
                        <Text>{item}</Text>
                      })}
                      </View> */}
              {errorsgetallwallets?.error &&
                typeof errorsgetallwallets?.error === "object" &&
                !Array.isArray(errorsgetallwallets?.error) &&
                Object.keys(errorsgetallwallets?.error).map((key, index) => (
                  <Text key={index}>
                    {key}:{" "}
                    {Array.isArray(errorsgetallwallets?.error[key])
                      ? errorsgetallwallets?.error[key].join(", ") // Handle arrays by joining the elements
                      : errorsgetallwallets?.error[key]}{" "}
                  </Text>
                ))}
              {errorsgetallwallets?.error &&
                typeof errorsgetallwallets?.error !== "object" && (
                  <Text className="mb-3">{errorsgetallwallets?.error}</Text>
                )}
              <ShortBlueButton
                title="Close"
                onPress={() => {
                  setIsVisible(false);
                  // ref?.current?.close();
                }}
              />
            </View>
          </Pressable>
        </Modal>
        <Modal animationType="slide" transparent={true} visible={isVisible2}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              setIsVisible2(false);
              // ref?.current?.close();
            }}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              {/* <View className="flex-col">
                      {errors?.error?.map((item: any) => {
                        <Text>{item}</Text>
                      })}
                      </View> */}
              {errorscreatewallet?.error &&
                typeof errorscreatewallet?.error === "object" &&
                !Array.isArray(errorscreatewallet?.error) &&
                Object.keys(errorscreatewallet?.error).map((key, index) => (
                  <Text key={index}>
                    {key}:{" "}
                    {Array.isArray(errorscreatewallet?.error[key])
                      ? errorscreatewallet?.error[key].join(", ") // Handle arrays by joining the elements
                      : errorscreatewallet?.error[key]}{" "}
                  </Text>
                ))}
              {errorscreatewallet?.error &&
                typeof errorscreatewallet?.error !== "object" && (
                  <Text className="mb-3">{errorscreatewallet?.error}</Text>
                )}
              <ShortBlueButton
                title="Close"
                onPress={() => {
                  setIsVisible2(false);
                  // ref?.current?.close();
                }}
              />
            </View>
          </Pressable>
        </Modal>
        <Modal animationType="slide" transparent={true} visible={isVisible3}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => {
              setIsVisible3(false);
              // ref?.current?.close();
            }}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              {/* <View className="flex-col">
                      {errors?.error?.map((item: any) => {
                        <Text>{item}</Text>
                      })}
                      </View> */}
              {errorsaccountdetails?.error &&
                typeof errorsaccountdetails?.error === "object" &&
                !Array.isArray(errorsaccountdetails?.error) &&
                Object.keys(errorsaccountdetails?.error).map((key, index) => (
                  <Text key={index}>
                    {key}:{" "}
                    {Array.isArray(errorsaccountdetails?.error[key])
                      ? errorsaccountdetails?.error[key].join(", ") // Handle arrays by joining the elements
                      : errorsaccountdetails?.error[key]}{" "}
                  </Text>
                ))}
              {errorsaccountdetails?.error &&
                typeof errorsaccountdetails?.error !== "object" && (
                  <Text className="mb-3">{errorsaccountdetails?.error}</Text>
                )}
              <ShortBlueButton
                title="Close"
                onPress={() => {
                  setIsVisible3(false);
                  // ref?.current?.close();
                }}
              />
            </View>
          </Pressable>
        </Modal>
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Back />
          </TouchableOpacity>
          <Text className="text-[20px] text-pagetitle">Wallets</Text>
          <Text></Text>
        </View>
        <View style={{ width: width * 0.9 }}>
          <View>
            <Text style={{ color: "#00091E" }} className="text-[14px]">
              Below are your active wallets
            </Text>
          </View>
          <View style={{ height: height * 0.8 }}>
            <FlatList
              data={getallwallets ? getallwallets : []}
              keyExtractor={(item) => item.id}
              className="absolute rounded shadow-lg"
              renderItem={({ item }) => (
                <View className="flex-row justify-between mt-4">
                  <View className="flex-row items-center gap-2">
                    {item?.name === "USD Dollar" ? (
                      <Usa height={40} width={40} />
                    ) : item?.name === "European" ? (
                      <Usa height={40} width={40} />
                    ) : item?.name === "Great British Pounds" ? (
                      <UK height={40} width={40} />
                    ) : (
                      <Canada height={40} width={40} />
                    )}
                    <View className="flex-col">
                      <Text
                        style={{ color: "#00091E" }}
                        className="text-[16px]"
                      >
                        {item?.name}({item?.currency})
                      </Text>
                      {/* <Text style={{ color: "#00091E" }} className="text-[14px]">
                      Base currency
                    </Text> */}
                    </View>
                  </View>
                  <Text className="text-buttonprimary text-[14px]">
                    {item?.symbol}
                    {item?.balance}
                  </Text>
                </View>
              )}
              showsVerticalScrollIndicator={false}
              bounces={false}
              contentContainerStyle={{
                gap: 10,
                width: width * 0.9
              }}
            />
          </View>
        </View>
        <Pressable
          onPress={() => ref?.current?.open()}
          style={{ position: "absolute", bottom: 150, right: 20 }}
        >
          <Pluswallet />
        </Pressable>
      </SafeAreaView>
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
              My Accounts
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text style={{ color: "#606162" }}>Select primary account</Text>
            <CheckBox
              checked={selectedIndex === 1000000}
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
                    dispatch(
                      CreateWallet({
                        name: item?.name,
                        currency: item?.currency,
                        symbol: item?.symbol,
                        user_id: accountdetails?.user?.id,
                        router: router.push,
                        setShow: setShow2,
                        setIsVisible: setIsVisible2
                      })
                    );
                    setIndex(index);
                  }}
                >
                  <View className="flex-row justify-between gap-3">
                    <View className="flex-row gap-2 items-center">
                      <View className="flex-row items-center gap-2">
                        {item?.name === "USD Dollar" ? (
                          <Usa height={40} width={40} />
                        ) : item?.name === "European" ? (
                          <Usa height={40} width={40} />
                        ) : item?.name === "Great British Pounds" ? (
                          <UK height={40} width={40} />
                        ) : (
                          <Canada height={40} width={40} />
                        )}
                      </View>
                      <View className="flex-col gap-1">
                        <Text className="text-[14px] font-bold">
                          {item?.name}
                        </Text>
                        <Text
                          className="text-[12px] ml-4"
                          style={{
                            color: getallwallets?.some(
                              (wallet: any) => wallet?.name === item?.name
                            )
                              ? "#105CE2"
                              : "#606162"
                          }}
                        >
                          {getallwallets?.some(
                            (wallet: any) => wallet?.name === item?.name
                          )
                            ? "Active"
                            : "Inactive"}
                        </Text>
                      </View>
                    </View>
                    <View className="flex-col items-end">
                      <CheckBox
                        checked={selectedIndex === index}
                        onPress={() => {
                          //   router.push("/More/Crypto/CryptoReceiveBarcode");
                          dispatch(
                            CreateWallet({
                              name: item?.name,
                              currency: item?.currency,
                              symbol: item?.symbol,
                              user_id: accountdetails?.user?.id,
                              router: router.push,
                              setShow: setShow2,
                              setIsVisible: setIsVisible2
                            })
                          );
                          setIndex(index);
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
    </View>
  );
};

export default Wallet;
