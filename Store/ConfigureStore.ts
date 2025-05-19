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
import { EmailVerifySlice } from './Reducers/EmailVerify';
import { EmailVerifyCodeSlice } from './Reducers/EmailVerifyCode';
import { VerifyEmailStatusSlice } from './Reducers/VerifyEmailStatus';
import { BankDepositSlice } from './Reducers/BankDeposit';
import { SummarySlice } from './Reducers/Summary';
import { MomoDepositSlice } from './Reducers/MomoDeposit';
import { AllInstitutionSlice } from './Reducers/AllInstitution';
import { DepositSlice } from './Reducers/Deposit';
import { WiremiTransactionSlice } from './Reducers/WiremiTransaction';
import { SupportedCountriesSlice } from './Reducers/SupportedCountries';
import { BankTransferInstitutionSlice } from './Reducers/BankTransferInstitution';
import { AccountNameSlice } from './Reducers/AccountName';
import { BankTransferSlice } from './Reducers/BankTransfer';
import { MobileTransferInstitutionSlice } from './Reducers/MobileTransferInstitution';
import { MobileTransferSlice } from './Reducers/MobileTransfer';
import { BankWithdrawalInstitutionSlice } from './Reducers/BankWithdrawalInstitution';
import { BankWithdrawalSlice } from './Reducers/BankWithdrawal';
import { MobileWithdrawInstitutionSlice } from './Reducers/MobileWithdrawInstitution';
import { MobileWithdrawsSlice } from './Reducers/MobileWithdraws';
import { AccountDetailsSlice } from './Reducers/AccountDetails';
import { GetAllPlansSlice } from './Reducers/GetAllPlans';
import { UpgradingPlanSlice } from './Reducers/UpgradingPlan';
import { ChangepinSlice } from './Reducers/Changepin';
import { TransactionChangeSlice } from './Reducers/TransactionChange';
import { CreateTransactionPinsSlice } from './Reducers/CreateTransactionPin';
import { ResetingpinSlice } from './Reducers/ResetingPin';
import { KycAddressSlice } from './Reducers/KycAddress';
import { GetAllwalletSlice } from './Reducers/GetAllwallet';
import { CreateWalletSlice } from './Reducers/CreateWallet';
import { HistorySavingSlice } from './Reducers/HistorySaving';

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
    forgetpin: ForgetPinSlice?.reducer,
    emailverify: EmailVerifySlice?.reducer,
    emailverifycode: EmailVerifyCodeSlice?.reducer,
    verifyemailstatus: VerifyEmailStatusSlice?.reducer,
    bankdeposit: BankDepositSlice?.reducer,
    summary: SummarySlice?.reducer,
    momodeposit: MomoDepositSlice?.reducer,
    allinstitution: AllInstitutionSlice?.reducer,
    deposit: DepositSlice?.reducer,
    wiremitransaction: WiremiTransactionSlice?.reducer,
    supportedcountries: SupportedCountriesSlice?.reducer,
    banktransferinstitution: BankTransferInstitutionSlice?.reducer,
    accountname: AccountNameSlice?.reducer,
    banktransfer: BankTransferSlice?.reducer,
    mobiletransferinstitution: MobileTransferInstitutionSlice?.reducer,
    mobiletransfer: MobileTransferSlice?.reducer,
    bankwithdrawalinstitution: BankWithdrawalInstitutionSlice?.reducer,
    bankwithdrawal: BankWithdrawalSlice?.reducer,
    mobilewithdrawinstitution: MobileWithdrawInstitutionSlice?.reducer,
    mobilewithdraws: MobileWithdrawsSlice?.reducer,
    accountdetails: AccountDetailsSlice?.reducer,
    getallplans: GetAllPlansSlice?.reducer,
    upgradingplan: UpgradingPlanSlice?.reducer,
    changepin: ChangepinSlice?.reducer,
    transactionchange: TransactionChangeSlice?.reducer,
    createtransactionpin: CreateTransactionPinsSlice?.reducer,
    resetingpin: ResetingpinSlice?.reducer,
    kycaddress: KycAddressSlice?.reducer,
    getallwallets: GetAllwalletSlice?.reducer,
    createwallet: CreateWalletSlice?.reducer,
    historysaving: HistorySavingSlice?.reducer
  },
});

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
