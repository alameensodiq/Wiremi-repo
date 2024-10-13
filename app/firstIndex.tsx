import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Button,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import skipOne from "@/assets/skipOne.png";
import skipTwo from "@/assets/skipTwo.png";
import skipThree from "@/assets/skipThree.png";

const App = () => {
  const { height } = Dimensions.get("window");
  const [first, setFirst] = useState<number>(1);
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const dynamicHeight = height * 0.15;

  const data = [1, 2, 3];
  const backgrounds = [skipOne, skipTwo, skipThree];

  return (
    <View className="flex-1">
      <StatusBar hidden={true} />
      <ImageBackground source={backgrounds[first - 1]} resizeMode="cover" className="flex-1">
        <View className="flex-1">
          <SafeAreaView className="flex-1 justify-end">
            <View style={{ height: dynamicHeight }} className="flex-row justify-between items-center p-4">
              <TouchableOpacity onPress={() => setFirst(first < 3 ? first + 1 : 3)} className="font-medium">
                <Text className="text-white">Skip</Text>
              </TouchableOpacity>

              <View className="flex-1 items-center">
                <FlatList
                  data={data}
                  renderItem={({ item, index }) => (
                    <View
                      className={`bg-white ${first === index + 1 ? "w-[20px] h-[6px]" : "w-[10px] h-[6px]"} mx-1 rounded`}
                    />
                  )}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled
                  bounces={false}
                  keyExtractor={(item) => item.toString()}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                  )}
                  onViewableItemsChanged={viewableItemChanged}
                  contentContainerStyle={{
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                />
              </View>

              <TouchableOpacity
                onPress={first < 3 ? () => setFirst(first + 1) : () => router.push('/getStarted')}
                className="justify-center items-center font-medium bg-white rounded-lg w-[70px] h-[32px]"
              >
                <Text className="text-primary">Next</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};


export default App;
