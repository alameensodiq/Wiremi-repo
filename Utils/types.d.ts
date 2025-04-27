export type ThemeType = "light" | "dark";

export type AppContextType = {
  isAuthenticated?: boolean;
  toggleIsAuthenticated: () => void;
  loading: boolean;
  checkUser: () => void;
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};
