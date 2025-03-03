// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Tuition = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="TuitionFaculty" options={{ headerShown: false }} />
      <Stack.Screen name="TuitionBank" options={{ headerShown: false }} />
      <Stack.Screen name="TuitionTransactionSummary" options={{ headerShown: false }} />
      <Stack.Screen name="TuitionSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="TuitionReceipt" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Tuition;
