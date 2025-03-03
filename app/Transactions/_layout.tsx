// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';

const Transactions = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="TransactionReceipt" options={{ headerShown: false }} />
      {/* <Stack.Screen name="CardDeposits" options={{ headerShown: false }} /> */}
    </Stack>

  );
};

export default Transactions;
