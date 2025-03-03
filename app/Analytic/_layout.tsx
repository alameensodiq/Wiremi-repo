// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';



const AnalyticLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="SetBudgetSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="Expenses" options={{ headerShown: false }} />
      {/* <Stack.Screen name="ChangeCardPin" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default AnalyticLayout;
