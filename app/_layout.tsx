import "react-native-gesture-handler";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "@/Store/ConfigureStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginProvider from "@/components/LoginProvider";
import { useAppContext } from "@/Context/useAppContext";
// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [fontsLoaded, error] = useFonts({
    "Be Vietnam Pro": require("../assets/fonts/BeVietnamPro-Regular.ttf")
  });
   

  // const {isAuthenticated, checkUser} = useAppContext()

  // useEffect(() => {
  //   checkUser();
  // }, []);

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);
  if (!fontsLoaded) return null;
  if (!fontsLoaded && !error) return null;

  return (
    <LoginProvider>
      <SafeAreaProvider className="flex-1">
        <Provider store={store}>
          <NavigationContainer>
          {/* <MainNavigator /> */}
            <Stack>
              {/* <Stack.Screen name="PersonalAccount" options={{ headerShown: false }} /> */}
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen
                name="firstIndex"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="getStarted"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignInPage"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MainForgotPinCode"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MainForgotSixDigitPinCode"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MainForgotConfirmSixDigit"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgetSuccess"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ChooseAccountType"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BusinessAccountFirstStep"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="BusinessSuccess"
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="PersonalAccountReg"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="(PersonalAccount)"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransactionDeposit"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TransactionSendMoney"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Notification"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="More" options={{ headerShown: false }} />
              <Stack.Screen name="Cards" options={{ headerShown: false }} />
              <Stack.Screen name="Analytic" options={{ headerShown: false }} />
              <Stack.Screen name="Profiles" options={{ headerShown: false }} />
              <Stack.Screen name="Transactions" options={{ headerShown: false }} />
              <Stack.Screen name="Save" options={{ headerShown: false }} />
              <Stack.Screen name="Loan" options={{ headerShown: false }} />
              <Stack.Screen name="Invest" options={{ headerShown: false }} />
            </Stack>
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </LoginProvider>
  );
}
