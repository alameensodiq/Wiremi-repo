import { AppContext } from "@/Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const LoginProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  const checkUser = async () => {
    const user = await AsyncStorage.getItem("token");
    setTimeout(() => {
      if (user && user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        <Redirect href="/Auth/SignInPage" />;
      }
      SplashScreen.hideAsync();
    }, 3000);
  };

  const toggleIsAuthenticated = async () => {
    setLoading(true);
    isAuthenticated
      ? await AsyncStorage.removeItem("token")
      : await AsyncStorage.getItem("token");

    setTimeout(() => {
    //   setIsAuthenticated(!isAuthenticated);
      setLoading(false);
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{ isAuthenticated, toggleIsAuthenticated, loading, checkUser }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default LoginProvider;
