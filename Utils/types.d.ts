export type AppContextType = {
    isAuthenticated?:boolean;
    toggleIsAuthenticated: () => void;
    loading: boolean;
    checkUser: () => void;
}