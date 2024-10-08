import { View } from "react-native";
import React, { useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import Wiremi from "../assets/splash.svg"; // Ensure this path is correct
import LottieView from "lottie-react-native";

const Index = () => {
  const router = useRouter();
  const animationRef = useRef(null);

  const handleAnimationFinish = () => {
    router.push("/firstIndex");
    console.log("Ebuka");
  };

  useEffect(() => {
    console.log("Playing animation");
    animationRef.current?.play();
  }, []);

  return (
    <View className="flex-1">
      <StatusBar hidden={true} />
      <View className="bg-white items-center justify-center flex-1">
        <View style={{ height: 40 }}>
          <Wiremi height={70} />
        </View>
        <LottieView
          style={{ height: 150, width: 550, marginTop: -60 }}
          ref={animationRef}
          source={require("../assets/splash.json")}
          onAnimationFinish={handleAnimationFinish}
          autoPlay
          loop={false}
        />
      </View>
    </View>
  );
};

export default Index;
