// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Swap = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="SwapReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="SwapSuccess" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Swap;
