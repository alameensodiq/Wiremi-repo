import { Stack, useRouter } from "expo-router";
import "react-native-reanimated";
import React from "react";
import { useAppSelector } from "@/Store/ConfigureStore";

export default function Auth() {
  const router = useRouter();
  const { logins, authenticatinglogin, errors } = useAppSelector(
    (state) => state.logins
  );

  React.useEffect(() => {
    if (logins?.access_token) {
      router.push("/(PersonalAccount)");
    }
  }, [logins?.access_token]);

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
      {/* <Stack.Screen name="(PersonalAccount)" options={{ headerShown: false }} />
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
      <Stack.Screen name="Transactions" options={{ headerShown: false }} />
      <Stack.Screen name="Save" options={{ headerShown: false }} />
      <Stack.Screen name="Loan" options={{ headerShown: false }} />
      <Stack.Screen name="Invest" options={{ headerShown: false }} /> */}
    </Stack>
  );
}
