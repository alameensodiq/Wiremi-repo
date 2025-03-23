import { View, TextInput, Dimensions } from "react-native";
import React, { useRef, useState } from "react";


interface SixDigitsProps {
  pin: string[]; // Receive PIN from parent
  onChangeText: (value: string) => void; // Function to update PIN in parent
}

const SixDigitsPin = ({ pin, onChangeText }: SixDigitsProps) => {
  const { height, width } = Dimensions.get("window");
  const inputRefs = Array.from({ length: 6 }, () => useRef<TextInput>(null));

  const handleTextChange = (index: number, text: string) => {
    const updatedPin = [...pin];
    updatedPin[index] = text;
    onChangeText(updatedPin.join("")); // Pass updated PIN to parent

    // Move to the next input field if text is entered and not at the last field
    if (text.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1]?.current?.focus();
    }
  };

  const handleKeyPress = (index: number, key: string) => {
    if (key === "Backspace" && pin[index] === "" && index > 0) {
      inputRefs[index - 1]?.current?.focus();
    }
  };

  return (
    <View
      style={{
        width: width,
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
      }}
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <TextInput
          key={index}
          ref={inputRefs[index]}
          maxLength={1}
          style={{
            width: width * 0.12,
            borderWidth: 2,
            height: height * 0.06,
            fontSize: 22,
            fontWeight: "600",
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: 12,
            // color: Colors.BLACK,
            borderColor: "rgba(242, 244, 245, 1)",
          }}
          onChangeText={(text) => handleTextChange(index, text)}
          onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
          value={pin?.[index] || ""}
        />
      ))}
    </View>
  );
};

export default SixDigitsPin;
