import { View, Text, TextInput, Dimensions } from "react-native";
import React from "react";
import Plus from '../assets/plussavings.svg'

interface GroupSavingsParticipantProps {
  label: string;
  placeholder: string;
  reduce?:string;
}

const GroupSavingsParticipant = ({ label, placeholder, reduce }: GroupSavingsParticipantProps) => {
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
      <Text className="text-textblack">{label}</Text>
      <TextInput
        style={{ width: reduce ? width * 0.4   : width * 0.9, borderWidth: 1, height: height * 0.06, position: 'relative'}}
        className="text-textinputtext text-[14px] rounded-ten border-customgray  p-2"
        placeholder={placeholder}
      />
      <View style={{position:'absolute', top: 43, right: 10}}>
        <Plus/>
      </View>
    </View>
  );
};

export default GroupSavingsParticipant;
