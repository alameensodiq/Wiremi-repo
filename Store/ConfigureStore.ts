import { CreateCardsSlice } from './Reducers/CreateCard';
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
import { GetCardSlice } from './Reducers/GetCard';
import { FreezeCardSlice } from './Reducers/FreezeCard';
import { UnfreezeCardSlice } from './Reducers/Unfreezecard';
import { CardTransactionsSlice } from './Reducers/TransactionCard';
import { SavingDashboardSlice } from './Reducers/SavingDashboard';
import { SavingActiveSlice } from './Reducers/SavingActive';
import { GetSavingSlice } from './Reducers/GetSaving';
import { GetGroupSavingSlice } from './Reducers/GetGroupSaving';
import { CreatingSavingsSlice } from './Reducers/CreateSavings';
import { AllwithdrawalBanksSlice } from './Reducers/AllwithdrawalBanks';
import { CreateGroupSavingsSlice } from './Reducers/CreateGroupSavings';
import { GetSavingAnalyticsSlice } from './Reducers/GetSavingAnalytics';
import { SavingsPayoutSlice } from './Reducers/SavingsPayout';
import { EditSavingsPayoutSlice } from './Reducers/EditSavingsPayout';
import { VerificationCodeSlice } from './Reducers/VerificationCode';
import { ForgetPinSlice } from './Reducers/ForgetPin';

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
    openednotification: OpenedNotificationSlice?.reducer,
    createcards: CreateCardsSlice?.reducer,
    getcards: GetCardSlice?.reducer,
    freezecards: FreezeCardSlice?.reducer,
    unfreezecards: UnfreezeCardSlice?.reducer,
    cardtransactions: CardTransactionsSlice?.reducer,
    savedashboard: SavingDashboardSlice?.reducer,
    saveactive: SavingActiveSlice?.reducer,
    getgroupsaving : GetGroupSavingSlice?.reducer,
    getsaving: GetSavingSlice?.reducer,
    creatingsavings: CreatingSavingsSlice?.reducer,
    allwithdrawalbanks: AllwithdrawalBanksSlice?.reducer,
    creategroupsavings: CreateGroupSavingsSlice?.reducer,
    getsavinganalytics: GetSavingAnalyticsSlice?.reducer,
    savingspayout: SavingsPayoutSlice?.reducer,
    editsavingspayout: EditSavingsPayoutSlice?.reducer,
    verification: VerificationCodeSlice?.reducer,
    forgetpin: ForgetPinSlice?.reducer
  },
});

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
