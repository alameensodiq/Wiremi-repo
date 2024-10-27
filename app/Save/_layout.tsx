// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';

const Save = () => {
  return (
    <Stack>
      <Stack.Screen name="SaveDashboard" options={{ headerShown: false }} />
      {/* <Stack.Screen name="NotificationDetails" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="CardDeposits" options={{ headerShown: false }} /> */}
    </Stack>

  );
};

export default Save;
