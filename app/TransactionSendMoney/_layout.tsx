// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';



const TransactionSendMoney = () => {
  return (
    <Stack>
      <Stack.Screen name="ListSendMoney" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferDetails" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferSummary" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireDetails" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireSummary" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiDetails" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiSummary" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoneySend" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoneySummary" options={{ headerShown: false }} />
      {/* Add other screens if necessary */}
    </Stack>
  );
};

export default TransactionSendMoney;
