import "react-native-gesture-handler";
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
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
import { ThemeProviderCustom, useAppContext } from "@/Context/useAppContext";
// import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  // const { theme } = useAppContext(); // use your context theme
  // const [theme, setTheme] = useState(""); // use your context theme

  // const navigationTheme = theme === "dark" ? DarkTheme : DefaultTheme;
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
    <ThemeProviderCustom>
      <LoginProvider>
        <SafeAreaProvider className="flex-1">
          <Provider store={store}>
            <RootContent />
            {/* <ThemeProvider value={navigationTheme}>
              <Slot />
            </ThemeProvider> */}
          </Provider>
        </SafeAreaProvider>
      </LoginProvider>
    </ThemeProviderCustom>
  );
}

function RootContent() {
  const { theme } = useAppContext(); // 🛡️ Now it's safe, context is ready!
  const navigationTheme = theme === "dark" ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <ThemeProvider value={navigationTheme}>
      <Slot />
    </ThemeProvider>
  );
}


const CustomDarkTheme = {
  ...NavigationDarkTheme, // inherit base DarkTheme
  colors: {
    ...NavigationDarkTheme.colors,
    background: "#eee9e9",  // Your dark background color
    // background: "#000000",  
    card: "#1f1f1f",         // Navigation header color
    text: "#ffffff",         // Text color
    border: "#272727",       // Border color
    primary: "#bb86fc",      // Active item color
    notification: "#ff453a", // Badge color
  }
};

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: "#ffffff",
    card: "#f8f8f8",
    text: "#000000",
    border: "#dcdcdc",
    primary: "#6200ee",
    notification: "#ff453a",
  }
};
