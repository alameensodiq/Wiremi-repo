// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';

const Notification = () => {
  return (
    <Stack>
      <Stack.Screen name="NotificationList" options={{ headerShown: false }} />
      {/* <Stack.Screen name="CardDeposits" options={{ headerShown: false }} /> */}
    </Stack>

  );
};

export default Notification;
