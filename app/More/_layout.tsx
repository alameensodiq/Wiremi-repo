// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';



const MoreLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="MoreList" options={{ headerShown: false }} />
      <Stack.Screen name="Withdraw" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MoreLayout;
