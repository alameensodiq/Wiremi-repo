import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import downcarat from "../assets/downcarat.png";
import eng from "../assets/eng.png";
import { TextInput } from "react-native";
import { BlurView } from "expo-blur";

const optionSelect = ["Option 1"];
const options = ["Option 1", "Option 2", "Option 3"];

interface SelectAndTextProps {
  title?: string;
}

const SelectAndText = ({ title }: SelectAndTextProps) => {
  const { height, width } = Dimensions.get("window");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelect = (value: any) => {
    setSelectedValue(value);
    setDropdownVisible(false);
  };
  return (
    <View className="flex-col items-start gap-2">
      <Text className="text-textblack">{title}</Text>
      <View className="flex-row">
        <View
          style={{
            width: width * 0.21,
            borderWidth: 1,
            height: height * 0.05,
            shadowColor: "#101828",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 3
          }}
          className="flex-col text-textinputtext text-[14px] rounded-t-l-b-l justify-center  border-customgray items-center"
        >
          <FlatList
            data={optionSelect}
            keyExtractor={(item) => item}
            className="rounded shadow-lg"
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setDropdownVisible(!isDropdownVisible)}
              >
                <View
                  style={{
                    height: height * 0.05,
                    width: width * 0.21,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    paddingLeft: 2,
                    paddingTop: 3,
                    flexDirection: "row", // Use flexDirection here
                    alignItems: "center", // Align items vertically
                    justifyContent: "center"
                  }}
                  className="flex-row text-textinputtext items-center text-[14px] border-customgray justify-center"
                >
                  <Image source={eng} />
                  <Text style={{ marginHorizontal: 2 }}>Eng</Text>
                  <Image source={downcarat} />
                </View>
              </TouchableOpacity>
            )}
            horizontal // Set FlatList to horizontal
            showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
          />
          {isDropdownVisible && (
            <View
              className="flex-row z-1000"
              style={{
                paddingHorizontal: width * 0.1,
                marginTop: height * 0.01
              }}
            >
              <BlurView
              
                style={{
                  maxHeight: 150,
                  position: "absolute", // Absolute positioning
                  left: 0,
                  right: 0,
                  zIndex: 1001 // Ensure it appears above other components
                }}
                
                intensity={100} // Adjust the intensity of the blur
                tint="dark" // You can use 'light', 'dark', or 'default'
              >
                <FlatList
                  data={options}
                  keyExtractor={(item) => item}
                  className="rounded shadow-lg"
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelect(item)}>
                      <View
                        style={{
                          height: height * 0.05,
                          borderWidth: 1,
                          width: width * 0.21,
                          // borderTopLeftRadius: 10,
                          // borderBottomLeftRadius: 10,
                          paddingLeft: 2,
                          paddingTop: 3,
                          flexDirection: "row", // Use flexDirection here
                          alignItems: "center", // Align items vertically
                          justifyContent: "center"
                        }}
                        className="flex-row text-textinputtext items-center text-[14px] border-customgray justify-center bg-primary"
                      >
                        <Image source={eng} />
                        <Text
                          style={{ marginHorizontal: 2 }}
                          className="text-white"
                        >
                          Eng
                        </Text>
                        <Image source={downcarat} />
                      </View>
                    </TouchableOpacity>
                  )}
                  style={{
                    maxHeight: 150,
                    position: "absolute", // Absolute positioning
                    left: 0,
                    right: 0,
                    zIndex: 1001 // Ensure it appears above other components
                  }}
                />
              </BlurView>
            </View>
          )}
        </View>
        <TextInput
          style={{
            width: width * 0.7,
            borderWidth: 1,
            height: height * 0.05,
            paddingLeft: 30
          }}
          className="text-textinputtext text-[14px] rounded-t-r-b-l  border-customgray p-2"
          placeholder={"Enter your phone number"}
        />
      </View>
    </View>
  );
};

export default SelectAndText;
