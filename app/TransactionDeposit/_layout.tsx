// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';
import ListofDeposits from './ListofDeposits'; // Adjust the path

const TransactionDeposit = () => {
  return (
    <Stack>
      <Stack.Screen name="ListofDeposits" options={{ headerShown: false }} />
      <Stack.Screen name="CardDeposits" options={{ headerShown: false }} />
      {/* Add other screens if necessary */}
    </Stack>
  );
};

export default TransactionDeposit;
