import { View, Text, Dimensions, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import downcarat from "../assets/downcarat.png";
import eng from "../assets/eng.png";
import { TextInput } from "react-native";

const optionSelect = ["Option 1"];
const options = ["Option 1", "Option 2", "Option 3"];

interface SelectAndTextProps {
  title ?: string
}

const SelectAndText = ({title}: SelectAndTextProps) => {
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
        <View style={{ width: width * 0.21 }}>
          <FlatList
            data={optionSelect}
            keyExtractor={(item) => item}
            className="rounded shadow-lg"
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setDropdownVisible(!isDropdownVisible)}
              >
                <Text
                  style={{
                    height: height * 0.06,
                    width: width * 0.23,
                    textAlign: "center",
                    lineHeight: height * 0.05,
                    borderWidth: 1,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10
                  }}
                  className="text-textinputtext items-center text-[14px] border-custom-gray justify-center"
                >
                  <Image source={eng} /> Eng <Image source={downcarat} />
                </Text>
              </TouchableOpacity>
            )}
            horizontal // Set FlatList to horizontal
            showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
          />
          {isDropdownVisible && (
            <View
              className="flex-row z-30"
              style={{
                paddingHorizontal: width * 0.13,
                marginTop: height * 0.02
              }}
            >
              <FlatList
                data={options}
                keyExtractor={(item) => item}
                className="absolute rounded shadow-lg"
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleSelect(item)}>
                    <Text
                      style={{
                        height: height * 0.06,
                        width: width * 0.23,
                        textAlign: "center",
                        lineHeight: height * 0.04,
                        borderWidth: 1,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        zIndex: 1000
                      }}
                      className="justify-center items-center rounded-six border-landingdrop border-borderwith text-textinputtext bg-white"
                    >
                      <Image source={eng} /> Eng{" "}
                    </Text>
                  </TouchableOpacity>
                )}
                style={{ maxHeight: 150 }}
              />
            </View>
          )}
        </View>
        <TextInput
          style={{
            width: width * 0.7,
            borderWidth: 1,
            height: height * 0.06,
            paddingLeft: 30
          }}
          className="text-textinputtext text-[14px] rounded-t-r-b-l  border-custom-gray p-2"
          placeholder={"Enter your phone number"}
        />
      </View>
    </View>
  );
};

export default SelectAndText;
