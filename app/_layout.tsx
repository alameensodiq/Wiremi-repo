import "react-native-gesture-handler";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [fontsLoaded, error] = useFonts({
    "Be Vietnam Pro": require("../assets/fonts/BeVietnamPro-Regular.ttf")
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  if (!fontsLoaded) return null;
  if (!fontsLoaded && !error) return null;

  return (
    //
    <GestureHandlerRootView>
          <BottomSheetModalProvider>
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
      <Stack.Screen name="PersonalAccountReg" options={{ headerShown: false }} />
      <Stack.Screen name="(PersonalAccount)" options={{ headerShown: false }} />
      <Stack.Screen name="TransactionDeposit" options={{ headerShown: false }} />
      <Stack.Screen name="TransactionSendMoney" options={{ headerShown: false }} />
    </Stack>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
