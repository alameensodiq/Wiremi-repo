// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Loan = () => {
  return (
    <Stack>
      <Stack.Screen name="LoanDashboard" options={{ headerShown: false }} />
      <Stack.Screen name="LoanOffer" options={{ headerShown: false }} />
      <Stack.Screen name="LoanAccepted" options={{ headerShown: false }} />
      <Stack.Screen name="Loans" options={{ headerShown: false }} />
      <Stack.Screen
        name="ApplicationSummary"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LoanSuccessful" options={{ headerShown: false }} />
      <Stack.Screen name="LoanStatus" options={{ headerShown: false }} />
      <Stack.Screen name="LoanDetails" options={{ headerShown: false }} />
      <Stack.Screen name="LoanPayment" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Loan;
