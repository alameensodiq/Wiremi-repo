import {
  View,
  Text,
  TouchableOpacity,
  StatusBar as RNStatusBar,
  Dimensions,
  ScrollView,
  ActivityIndicator
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Back from "../../assets/Back.svg";
import { SafeAreaView } from "react-native-safe-area-context";
import Scan from "../../assets/scan.svg";
import Capture from "../../assets/capture.svg";
import BlueSignInButton from "@/components/BlueSignInButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";

type FileType = {
  uri: string;
  type: string;
  name: string;
};

const Residency = () => {
  const statusBarHeight = RNStatusBar.currentHeight || 0;
  const { height, width } = Dimensions.get("window");
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [documentFront, setDocumentFront] = useState<FileType | null>(null);
  const [documentBack, setDocumentBack] = useState<FileType | null>(null);
  const [selfie, setSelfie] = useState<FileType | null>(null);

  const captureImage = async (type: "front" | "back" | "selfie") => {
    console.log("type");
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Camera permission is required!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      cameraType:
        type === "selfie"
          ? ImagePicker.CameraType.front
          : ImagePicker.CameraType.back // <-- lowercase
    });

    if (!result.canceled) {
      const file = {
        uri: result.assets[0].uri,
        type: "image/jpeg",
        name: `photo_${Date.now()}.jpg`
      };

      if (type === "front") {
        setDocumentFront(file);
      } else if (type === "back") {
        setDocumentBack(file);
      } else if (type === "selfie") {
        setSelfie(file);
      }
    }
  };

  const uploadAllDocuments = async () => {
    if (!documentFront || !documentBack || !selfie) {
      alert("Please capture all required photos.");
      return;
    }

    setloading(true);

    try {
      const accessToken = await AsyncStorage.getItem("token");
      if (!accessToken) {
        alert("Authentication token not found. Please log in again.");
        setloading(false);
        return;
      }

      const formDataDocuments = new FormData();
      formDataDocuments.append("documentFront", {
        uri: documentFront.uri,
        type: documentFront.type,
        name: documentFront.name
      } as any);
      formDataDocuments.append("documentBack", {
        uri: documentBack.uri,
        type: documentBack.type,
        name: documentBack.name
      } as any);

      const formDataSelfie = new FormData();
      formDataSelfie.append("selfie", {
        uri: selfie.uri,
        type: selfie.type,
        name: selfie.name
      } as any);

      const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data"
      };

      const [documentsResponse, selfieResponse] = await Promise.all([
        fetch("https://backendapp.wiremi.ca/kyc/upload-documents", {
          method: "POST",
          headers,
          body: formDataDocuments
        }),
        fetch("https://backendapp.wiremi.ca/kyc/upload-selfie", {
          method: "POST",
          headers,
          body: formDataSelfie
        })
      ]);

      const documentsData = await documentsResponse.json();
      const selfieData = await selfieResponse.json();

      console.log("Documents upload success:", documentsData);
      console.log("Selfie upload success:", selfieData);

      setloading(false);
      if (
        documentsData?.documentBackImage &&
        documentsData?.documentFrontImage &&
        selfieData?.selfieImage
      ) {
        router.push("/Profiles/ResidencySuccess");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      setloading(false);
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      // style={{ backgroundColor: "#ffffff" }}
      className="flex-1"
    >
      <StatusBar hidden={false} style="dark" />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: statusBarHeight
        }}
      >
        <View
          style={{
            paddingHorizontal: width * 0.03
          }}
          className="gap-6 pb-10"
        >
          <View className="flex-row justify-between items-center mb-1">
            <TouchableOpacity
              onPress={() => router.push("/Profiles/KycCertificates")}
            >
              <Back />
            </TouchableOpacity>
            <Text className="text-[20px] text-pagetitle">Update KYC info</Text>
            <Text></Text>
          </View>
          <View className="flex-col justify-between">
            <Text
              className="text-[16px] font-bold"
              style={{ color: "#00091E" }}
            >
              Upload residence permit
            </Text>
          </View>
          {documentFront ? (
            <Image
              source={{ uri: documentFront.uri }}
              style={{
                width: width * 0.94,
                height: height * 0.2,
                borderRadius: 10
              }}
            />
          ) : (
            <View
              style={{
                width: width * 0.94,
                height: height * 0.2,
                borderColor: "#2A94F4",
                borderWidth: 1,
                borderRadius: 10,
                borderStyle: "dashed"
              }}
              className="flex-col justify-center items-center gap-2"
            >
              <View className="flex-row justify-center items-center gap-2">
                <Capture />
                <Text className="text-buttonprimary text-[14px]">
                  Capture the front of your residence permit
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  console.log("captureImage front pressed");
                  captureImage("front");
                }}
              >
                <View
                  style={{ width: 120, height: 40, borderRadius: 10 }}
                  className="flex-row justify-center items-center  bg-buttonprimary"
                >
                  <Scan />
                  <Text className="text-white text-[14px] ml-2">Scan</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          {documentBack ? (
            <Image
              source={{ uri: documentBack.uri }}
              style={{
                width: width * 0.94,
                height: height * 0.2,
                borderRadius: 10,
                marginTop: 20
              }}
            />
          ) : (
            <View
              style={{
                width: width * 0.94,
                height: height * 0.2,
                borderColor: "#2A94F4",
                borderWidth: 1,
                borderRadius: 10,
                borderStyle: "dashed"
              }}
              className="flex-col justify-center items-center gap-2"
            >
              <View className="flex-row justify-center items-center gap-2">
                <Capture />
                <Text className="text-buttonprimary text-[14px]">
                  Capture the back of your residence permit
                </Text>
              </View>
              <TouchableOpacity onPress={() => captureImage("back")}>
                <View
                  style={{ width: 120, height: 40, borderRadius: 10 }}
                  className="flex-row justify-center items-center  bg-buttonprimary"
                >
                  <Scan />
                  <Text className="text-white text-[14px] ml-2">Scan</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          {selfie ? (
            <Image
              source={{ uri: selfie.uri }}
              style={{
                width: width * 0.94,
                height: height * 0.2,
                borderRadius: 10,
                marginTop: 20
              }}
            />
          ) : (
            <View
              style={{
                width: width * 0.94,
                height: height * 0.2,
                borderColor: "#2A94F4",
                borderWidth: 1,
                borderRadius: 10,
                borderStyle: "dashed"
              }}
              className="flex-col justify-center items-center gap-2"
            >
              <View className="flex-row justify-center  gap-2">
                <Capture />
                <View className="flex-col justify-center items-center">
                  <Text className="text-buttonprimary text-[14px]">
                    Take a picture of you holding your{" "}
                  </Text>
                  <Text className="text-buttonprimary text-[14px]">
                    residence permit
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => captureImage("selfie")}>
                <View
                  style={{ width: 120, height: 40, borderRadius: 10 }}
                  className="flex-row justify-center items-center  bg-buttonprimary"
                >
                  <Scan />
                  <Text className="text-white text-[14px] ml-2">Scan</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}

          {loading ? (
            <View className="flex-row justify-center items-center">
              <ActivityIndicator
                color={"#105CE2"}
                style={{ width: 30, height: 30 }}
              />
            </View>
          ) : (
            <View className="pt-20 flex-row justify-center">
              <BlueSignInButton
                title="Proceed"
                onPress={uploadAllDocuments}
                // onPress={() => router.push("/Profiles/ResidencySuccess")}
              />
            </View>
          )}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Residency;
