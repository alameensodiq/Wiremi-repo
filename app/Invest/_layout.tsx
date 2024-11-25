// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Invest = () => {
  return (
    <Stack>
      <Stack.Screen name="InvestDashboard" options={{ headerShown: false }} />
      <Stack.Screen name="Investing" options={{ headerShown: false }} />
      <Stack.Screen name="Stocks" options={{ headerShown: false }} />
      <Stack.Screen name="StockDetails" options={{ headerShown: false }} />
      <Stack.Screen
        name="BuyStock"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="BuySuccess" options={{ headerShown: false }} />
      {/* <Stack.Screen name="LoanStatus" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="LoanDetails" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="LoanPayment" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default Invest;
