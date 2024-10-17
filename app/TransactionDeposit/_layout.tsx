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
      <Stack.Screen name="BankDepositVerify" options={{ headerShown: false }} />
      <Stack.Screen name="BankDepositSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="BankDepositReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="ExistingBankDetails" options={{ headerShown: false }} />
      <Stack.Screen name="EwalletCreditCard" options={{ headerShown: false }} />
      <Stack.Screen name="EwalletSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="EwalletReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="MomoDetails" options={{ headerShown: false }} />
      <Stack.Screen name="MobilemoneyDetails" options={{ headerShown: false }} />
      <Stack.Screen name="MomoSummary" options={{ headerShown: false }} />
      <Stack.Screen name="MomoSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="MomoReceipt" options={{ headerShown: false }} />
      <Stack.Screen name="MobileSummary" options={{ headerShown: false }} />
      <Stack.Screen name="MobileSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="MobileReceipt" options={{ headerShown: false }} />
      {/* Add other screens if necessary */}
    </Stack>

  );
};

export default TransactionDeposit;
