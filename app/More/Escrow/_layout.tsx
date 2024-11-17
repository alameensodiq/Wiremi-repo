// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';



const Escrow = () => {
  return (
    <Stack>
      <Stack.Screen name="EscrowDashboard" options={{ headerShown: false }} />
      <Stack.Screen name="EscrowNotification" options={{ headerShown: false }} />
      <Stack.Screen name="EscrowActive" options={{ headerShown: false }} />
      <Stack.Screen name="EscrowDispute" options={{ headerShown: false }} />
      <Stack.Screen name="EscrowCompleted" options={{ headerShown: false }} />
      <Stack.Screen name="EscrowTypes" options={{ headerShown: false }} />
      <Stack.Screen name="NormalTransactions" options={{ headerShown: false }} />
      <Stack.Screen name="NormalSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="NormalSummary" options={{ headerShown: false }} />
      <Stack.Screen name="DigitalSummary" options={{ headerShown: false }} />
      <Stack.Screen name="DigitalSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="DigitalTransaction" options={{ headerShown: false }} />
      <Stack.Screen name="EscrowNormalTimeline" options={{ headerShown: false }} />
      <Stack.Screen name="NormalTimelineSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="EscrowDigitalTimeline" options={{ headerShown: false }} />
      <Stack.Screen name="DigitalTimelineSuccess" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Escrow;
