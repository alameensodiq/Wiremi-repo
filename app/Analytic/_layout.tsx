// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';



const AnalyticLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="Analyticdashboard" options={{ headerShown: false }} />
      {/* <Stack.Screen name="CardSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="MyCard" options={{ headerShown: false }} />
      <Stack.Screen name="ChangeCardPin" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default AnalyticLayout;
