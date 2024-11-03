// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';

const Save = () => {
  return (
    <Stack>
      <Stack.Screen name="SaveDashboard" options={{ headerShown: false }} />
      <Stack.Screen name="CreateSavingsList" options={{ headerShown: false }} />
      <Stack.Screen name="RegularSavings" options={{ headerShown: false }} />
      <Stack.Screen name="BlockSavings" options={{ headerShown: false }} />
      <Stack.Screen name="RecurrentSavings" options={{ headerShown: false }} />
      <Stack.Screen name="GroupSavings" options={{ headerShown: false }} />
      <Stack.Screen name="RegularSavingsSummary" options={{ headerShown: false }} />
      <Stack.Screen name="RegularEditInstance" options={{ headerShown: false }} />
      <Stack.Screen name="RegularInstanceSuccess" options={{ headerShown: false }} />
      {/* <Stack.Screen name="RegularSavingsSummary" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="RegularSavingsSummary" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="RegularSavingsSummary" options={{ headerShown: false }} /> */}

    </Stack>

  );
};

export default Save;
