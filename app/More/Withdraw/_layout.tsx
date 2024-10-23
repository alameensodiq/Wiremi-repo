// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';



const Withdraw = () => {
  return (
    <Stack>
      <Stack.Screen name="WithdrawList" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawBankaccountDetails" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawSummary" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawMobileMoney" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawMobileMoneySummary" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawMobileMoneySuccess" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawMobileMoneyReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawInterac" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawInteracSummary" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawInteracSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="WithdrawInteracReceipt" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Withdraw;
