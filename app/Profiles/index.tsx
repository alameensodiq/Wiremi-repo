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
  Alert,
  Modal,
  Pressable,
  ActivityIndicator
} from "react-native";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useRef, useState } from "react";
import { BottomSheet } from "@/components/Bottom";
import Redrightcarat from "../../assets/redrightcarat.svg";
import Fingerprint from "../../assets/fingerprint.svg";
import Profileinfopics from "../../assets/profileinfopics.svg";
import FourDigits from "@/components/FourDigits";
import { useAppDispatch, useAppSelector } from "@/Store/ConfigureStore";
import { AccountDetails } from "@/Store/Apis/AccountDetails";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import ShortBlueButton from "@/components/ShortBlueButton";
import { useAppContext } from "@/Context/useAppContext";

type BottomSheetRef = {
  open: () => void;
  close: () => void;
  // Add any other methods you expect from the BottomSheet component
};

const ProfileInfo = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [show, setShow] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [showreason, setShowreason] = useState(false);
  const router = useRouter();
   const { theme } = useAppContext();

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

  useEffect(() => {
    setImageUri(accountdetails?.user?.profile_image);
  }, [accountdetails]);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      setShowreason(true);
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Square crop
      quality: 1
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImageUri(uri);

      // 👉 Optional: Upload the image to your backend
      uploadImage(uri);
    }
  };

  const uploadImage = async (uri: any) => {
    const formData = new FormData();
    formData.append("profile_image", {
      uri,
      name: "profile.jpg",
      type: "image/jpeg"
    } as any);

    try {
      const res = await fetch(
        `https://backendapp.wiremi.ca/users/${accountdetails?.id}/profile/upload`,
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      const data = await res.json();
      console.log("Upload success:", data);
      dispatch(
        AccountDetails({
          router: router.push,
          setIsVisible: setIsVisible,
          setShow: setShow
        })
      );
      // Optionally update your accountdetails here if needed
    } catch (err) {
      console.error("Upload error", err);
    }
  };

  const capitalize = (str: any) =>
    typeof str === "string" && str.length > 0
      ? str.charAt(0).toUpperCase() + str.slice(1)
      : "";

  return (
    <View className={`${theme === 'dark' ?  "flex-1 bg-[#000000]" : "flex-1 bg-[#ffffff]"}`}>
      <StatusBar hidden={false} style={`${theme === 'dark' ?  "light" : "dark"}`} />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight,
          paddingHorizontal: width * 0.03
        }}
        className="gap-2"
      >
        {authenticatingaccountdetails && (
          <View
            style={{ height: height, width: width }}
            className="absolute inset-0 bg-loaderbg bg-opacity-60 z-50 flex-col items-center justify-center"
          >
            <ActivityIndicator size={200} color="#ffffff" />
          </View>
        )}
        <Modal animationType="slide" transparent={true} visible={showreason}>
          <Pressable
            style={{
              flex: 1,
              backgroundColor: "#8080808C",
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => setShowreason(false)}
          >
            <View className="bg-white w-[70%] h-[30%] rounded-[10px] flex-col items-center justify-evenly py-3">
              <Text className="mb-3">
                Permission required, We need permission to access your photos.
              </Text>
              <ShortBlueButton
                title="Close"
                onPress={() => setShowreason(false)}
              />
            </View>
          </Pressable>
        </Modal>
        <View className="flex-row justify-between items-center mb-1">
          <TouchableOpacity onPress={() => router.push("/Profile")}>
            <Back style={{backgroundColor: theme ? "#ffffff" : ""}} />
          </TouchableOpacity>
          <Text className={`${theme === 'dark' ? "text-[20px] text-[#ffffff]" : "text-[20px] text-pagetitle"}`}>
            Personal information
          </Text>
          <Text></Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={pickImage}>
            <View className="flex-col justify-center items-center">
              {/* <Profileinfopics /> */}
              <Image
                source={{ uri: accountdetails?.user?.profile_image }}
                style={{ width: 70, height: 70, borderRadius: 50 }}
              />
              <Text style={{ color: theme === 'dark' ? "#ffffff"  : "#868E96", fontSize: 14 }}>
                Tap to change photo
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-lighttextdark font-[14px]" }`}>First Name</Text>
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-darktext font-[14px]" }`}>
              {capitalize(accountdetails?.user?.first_name)}
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-lighttextdark font-[14px]" }`}>Last Name</Text>
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-darktext font-[14px]" }`}>
              {capitalize(accountdetails?.user?.last_name)}
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-lighttextdark font-[14px]" }`}>
              Date of birth
            </Text>
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-darktext font-[14px]" }`}>
              {accountdetails?.user?.date_of_birth}
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-lighttextdark font-[14px]" }`}>Postal code</Text>
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-darktext font-[14px]" }`}>
              {accountdetails?.user?.address?.post_code}
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-lighttextdark font-[14px]" }`}>Address</Text>
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-darktext font-[14px]" }`}>
              {accountdetails?.user?.address?.street}{" "}
              {accountdetails?.user?.address?.city}{" "}
              {accountdetails?.user?.address?.state}
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-lighttextdark font-[14px]" }`}>Country</Text>
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-darktext font-[14px]" }`}>
              {accountdetails?.user?.address?.country}
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-lighttextdark font-[14px]" }`}>Wiremi ID</Text>
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-darktext font-[14px]" }`}>
              {accountdetails?.account_id}
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-lighttextdark font-[14px]" }`}>
              Subscription plan
            </Text>
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-darktext font-[14px]" }`}>
              {accountdetails?.subscription_plan} months
            </Text>
          </View>
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#ebebeb" }}
            className="flex-row items-center justify-between p-3"
          >
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-lighttextdark font-[14px]" }`}>
              Base currency
            </Text>
            <Text className={`${theme === 'dark' ?  "text-[#ffffff] font-[14px]" : "text-darktext font-[14px]" }`}>
              {accountdetails?.base_currency}
            </Text>
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

export default ProfileInfo;
