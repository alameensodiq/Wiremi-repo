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
      <Stack.Screen name="InteracDetails" options={{ headerShown: false }} />
      <Stack.Screen name="InteracTransactionSummary" options={{ headerShown: false }} />
      <Stack.Screen name="InteracSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="InteracTransactionReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="BankDepositDetails" options={{ headerShown: false }} />
      <Stack.Screen name="LinkBankDetails" options={{ headerShown: false }} />
      <Stack.Screen name="BankDepositSummary" options={{ headerShown: false }} />
      {/* Add other screens if necessary */}
    </Stack>
  );
};

export default TransactionDeposit;
