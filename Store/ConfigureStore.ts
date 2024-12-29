import { configureStore } from '@reduxjs/toolkit';
import { RegisterUserSlice } from './Reducers/RegisterUser';
import { AccountRegisterSlice } from './Reducers/AccountRegister';
import { LoginSlice } from './Reducers/Login';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { CreatePinSlice } from './Reducers/CreatePin';
import { UserTransactionsSlice } from './Reducers/UserTransactions';
import { MainwalletSlice } from './Reducers/Mainwallet';
import { AllNotificationSlice } from './Reducers/AllNotification';
import { SingleNotificationSlice } from './Reducers/SingleNotification';
import { OpenedNotificationSlice } from './Reducers/OpenedNotification';

const store = configureStore({
  reducer: {
    logins: LoginSlice.reducer,
    registerusers: RegisterUserSlice.reducer,
    accountusers: AccountRegisterSlice.reducer,
    createpins: CreatePinSlice?.reducer,
    usertransactions: UserTransactionsSlice?.reducer,
    mainwallet: MainwalletSlice?.reducer,
    allnotification: AllNotificationSlice?.reducer,
    singlenotification: SingleNotificationSlice?.reducer,
    openednotification: OpenedNotificationSlice?.reducer
  },
});

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
