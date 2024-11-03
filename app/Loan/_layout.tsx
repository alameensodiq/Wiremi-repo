// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Loan = () => {
  return (
    <Stack>
      <Stack.Screen name="LoanDashboard" options={{ headerShown: false }} />
      {/* <Stack.Screen name="CreateSavingsList" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="RegularSavings" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="BlockSavings" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="RecurrentSavings" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="GroupSavings" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen
        name="RegularWithdrawSuccess"
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen name="GroupSavingsSummary" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default Loan;
