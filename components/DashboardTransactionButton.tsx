import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import SendMoney from '../assets/sendmoney.svg'
import Deposit from '../assets/deposit.svg'

interface DashboardTransactionButtonProps {
  onPress: () => void;
  title: string;
  color1?: boolean;
}

const { height, width } = Dimensions.get("window");

const DashboardTransactionButton = ({
  title,
  onPress,
  color1
}: DashboardTransactionButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row"
      style={{
        height: height * 0.055,
        width: width * 0.4,
        borderRadius: 30, // Rounded corners
        backgroundColor:  '#B2CDFD', // Change background based on color1 prop
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.4,
        borderWidth: 0.5,
        borderColor: '#B2CDFD',
        shadowColor: '#105CE2',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        gap: 2
      }}
    >
        {
            color1 ? <SendMoney /> : <Deposit />
        }
      <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'white' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DashboardTransactionButton;
