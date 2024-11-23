// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const PayQr = () => {
  return (
    <Stack>
      <Stack.Screen name="PayQrScan" options={{ headerShown: false }} />
      <Stack.Screen name="PayQrAmount" options={{ headerShown: false }} />
      <Stack.Screen name="PayQrAmountPay" options={{ headerShown: false }} />
      <Stack.Screen name="PayQrSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="PayQrReceipt" options={{ headerShown: false }} />
    </Stack>
  );
};

export default PayQr;
