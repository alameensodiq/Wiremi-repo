import { AppContext } from "./AppContext";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from "react";
import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ThemeType = "light" | "dark";

export const ThemeProviderCustom = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<ThemeType>("light"); // default
  const toggleIsAuthenticated = () => {
    setIsAuthenticated((prev) => !prev);
  };
  const checkUser = async () => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setIsAuthenticated(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("theme");
      if (storedTheme === "light" || storedTheme === "dark") {
        setTheme(storedTheme);
      }
    };
    loadTheme();
  }, []);

  // Save theme when changed
  useEffect(() => {
    AsyncStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        toggleIsAuthenticated,
        loading,
        checkUser,
        theme,
        setTheme
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
