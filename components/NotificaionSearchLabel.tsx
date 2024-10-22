import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import Search from '../assets/search.svg'

interface NotificationSearchLabelProps {
  placeholder: string;
}

const NotificationSearchLabel = ({ placeholder }: NotificationSearchLabelProps) => {
  const { height, width } = Dimensions.get("window");

  return (
    <View
      className="flex-col items-start gap-2"
      style={{
        shadowColor: "#101828",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 3,
      }}
    >
      <TextInput
        style={{ width: width * 0.85,  height: height * 0.06 }}
        className="text-textinputtext text-[14px] rounded-ten border-customgray pl-10 py-2 relative"
        placeholder={placeholder}
      />
      <View className="absolute top-4 left-2">
         <Search />
      </View>
    </View>
  );
};

export default NotificationSearchLabel;
