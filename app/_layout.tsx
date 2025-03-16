import "react-native-gesture-handler";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Redirect, Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store, { useAppSelector } from "@/Store/ConfigureStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginProvider from "@/components/LoginProvider";
import { useAppContext } from "@/Context/useAppContext";
// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [fontsLoaded, error] = useFonts({
    "Be Vietnam Pro": require("../assets/fonts/BeVietnamPro-Regular.ttf")
  });

  // const {isAuthenticated, checkUser} = useAppContext()

  // useEffect(() => {
  //   checkUser();
  // }, []);

  // useEffect(() => {
  //   if (error) throw error;
  //   if (fontsLoaded) SplashScreen.hideAsync();
  // }, [fontsLoaded, error]);
  // if (!fontsLoaded) return null;
  // if (!fontsLoaded && !error) return null;

  useEffect(() => {
    const clearAndFetchToken = async () => {
      try {
        await AsyncStorage.removeItem("token"); // ✅ Clear token first
        console.log("Token removed successfully");
      } catch (error) {
        console.error("Error handling token:", error);
      } finally {
        setLoading(false);
      }
    };

    clearAndFetchToken();
  }, []);


  useEffect(() => {
    async function hideSplash() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplash();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;



  return (
    <LoginProvider>
      <SafeAreaProvider className="flex-1">
        <Provider store={store}>
          <Slot />
        </Provider>
      </SafeAreaProvider>
    </LoginProvider>
  );
}
