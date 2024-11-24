// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';



const MoreLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="MoreList" options={{ headerShown: false }} />
      <Stack.Screen name="Withdraw" options={{ headerShown: false }} />
      <Stack.Screen name="Crypto" options={{ headerShown: false }} />
      <Stack.Screen name="Escrow" options={{ headerShown: false }} />
      <Stack.Screen name="Swap" options={{ headerShown: false }} />
      <Stack.Screen name="PayQr" options={{ headerShown: false }} />
      <Stack.Screen name="Tuition" options={{ headerShown: false }} />
      <Stack.Screen name="Agents" options={{ headerShown: false }} />
      <Stack.Screen name="Flight" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MoreLayout;
