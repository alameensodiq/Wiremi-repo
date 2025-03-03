// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';



const TransactionSendMoney = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferDetails" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferSummary" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferSchedule" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferScheduleReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferScheduleSummary" options={{ headerShown: false }} />
      <Stack.Screen name="DirectTransferSuccessSchedule" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireDetails" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireSummary" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireDetailsSchedule" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireSummarySchedule" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireSuccessSchedule" options={{ headerShown: false }} />
      <Stack.Screen name="BankWireReceiptSchedule" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiDetails" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiSummary" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiDetailsSchedule" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiSummarySchedule" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiSuccessSchedule" options={{ headerShown: false }} />
      <Stack.Screen name="WiremiReceiptSchedule" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoneySend" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoneySummary" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoneySuccess" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoneyReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoneySendSchedule" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoneySummarySchedule" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoneySuccessSchedule" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoneyReceiptSchedule" options={{ headerShown: false }} />
      {/* Add other screens if necessary */}
    </Stack>
  );
};

export default TransactionSendMoney;
