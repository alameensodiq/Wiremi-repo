import React from "react";
import { Stack } from "expo-router";

const NoToken = () => {
  return (
    <Stack>
      {/* <Stack.Screen name="PersonalAccount" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="firstIndex" options={{ headerShown: false }} />
      <Stack.Screen name="getStarted" options={{ headerShown: false }} />
      <Stack.Screen name="SignInPage" options={{ headerShown: false }} />
      <Stack.Screen name="MainForgotPinCode" options={{ headerShown: false }} />
      <Stack.Screen
        name="MainForgotSixDigitPinCode"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainForgotConfirmSixDigit"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ForgetSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="ChooseAccountType" options={{ headerShown: false }} />
      <Stack.Screen
        name="BusinessAccountFirstStep"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="BusinessSuccess" options={{ headerShown: false }} />

      <Stack.Screen
        name="PersonalAccountReg"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default NoToken;
