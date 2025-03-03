// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Crypto = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="CryptoSend" options={{ headerShown: false }} />
      <Stack.Screen name="CryptoSendSummary" options={{ headerShown: false }} />
      <Stack.Screen name="CryptoSendSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="CryptoSendReceipt" options={{ headerShown: false }} />
      <Stack.Screen
        name="CryptoReceiveBarcode"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CryptoSwap" options={{ headerShown: false }} />
      <Stack.Screen name="CryptoConvert" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Crypto;
