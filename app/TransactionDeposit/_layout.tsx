// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';
import ListofDeposits from './ListofDeposits'; // Adjust the path

const TransactionDeposit = () => {
  return (
    <Stack>
      <Stack.Screen name="ListofDeposits" options={{ headerShown: false }} />
      <Stack.Screen name="CardDeposits" options={{ headerShown: false }} />
      <Stack.Screen name="Banks" options={{ headerShown: false }} />
      <Stack.Screen name="Ewallets" options={{ headerShown: false }} />
      <Stack.Screen name="MobileMoney" options={{ headerShown: false }} />
      <Stack.Screen name="CardDepositDetails" options={{ headerShown: false }} />
      <Stack.Screen name="TransactionSummary" options={{ headerShown: false }} />
      <Stack.Screen name="CreditCard" options={{ headerShown: false }} />
      <Stack.Screen name="CardDepositSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="TransactionReceipt" options={{ headerShown: false }} />
      {/* Add other screens if necessary */}
    </Stack>
  );
};

export default TransactionDeposit;
