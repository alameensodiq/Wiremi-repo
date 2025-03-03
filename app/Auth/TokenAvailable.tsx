import React from "react";
import { Stack } from "expo-router";

const TokenAvailable = () => {
  return (
    <Stack>
      {/* <Stack.Screen name="PersonalAccount" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(PersonalAccount)" options={{ headerShown: false }} />
      <Stack.Screen
        name="TransactionDeposit"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TransactionSendMoney"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Notification" options={{ headerShown: false }} />
      <Stack.Screen name="More" options={{ headerShown: false }} />
      <Stack.Screen name="Cards" options={{ headerShown: false }} />
      <Stack.Screen name="Analytic" options={{ headerShown: false }} />
      <Stack.Screen name="Profiles" options={{ headerShown: false }} />
      <Stack.Screen name="Save" options={{ headerShown: false }} />
      <Stack.Screen name="Loan" options={{ headerShown: false }} />
      <Stack.Screen name="Invest" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TokenAvailable;
