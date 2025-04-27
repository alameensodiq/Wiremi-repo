// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Profiles = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="ProfileKyc" options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmKycInfo" options={{ headerShown: false }} />
      <Stack.Screen name="ProfileKycAddress" options={{ headerShown: false }} />
      <Stack.Screen name="KycCertificates" options={{ headerShown: false }} />
      <Stack.Screen name="DriverLicense" options={{ headerShown: false }} />
      <Stack.Screen name="Residency" options={{ headerShown: false }} />
      <Stack.Screen name="Passport" options={{ headerShown: false }} />
      <Stack.Screen name="IdCard" options={{ headerShown: false }} />
      <Stack.Screen name="KycSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="CardSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="PassportSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="ResidencySuccess" options={{ headerShown: false }} />
      <Stack.Screen name="PaymentSettings" options={{ headerShown: false }} />
      <Stack.Screen name="InviteFriend" options={{ headerShown: false }} />
      <Stack.Screen name="TransactionHist" options={{ headerShown: false }} />
      <Stack.Screen name="Wallet" options={{ headerShown: false }} />
      <Stack.Screen name="TransactionPin" options={{ headerShown: false }} />
      <Stack.Screen
        name="TransactionChangepin"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TransactionChangepinSuccess"
        options={{ headerShown: false }}
      />

      <Stack.Screen name="ResetPin" options={{ headerShown: false }} />
      <Stack.Screen name="ResetPinNumber" options={{ headerShown: false }} />
      <Stack.Screen name="ResetPinConfirm" options={{ headerShown: false }} />
      <Stack.Screen name="ResetPinSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="ChangePinSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="ChangePin" options={{ headerShown: false }} />
      <Stack.Screen name="Biometric" options={{ headerShown: false }} />
      <Stack.Screen name="Language" options={{ headerShown: false }} />
      <Stack.Screen name="Theme" options={{ headerShown: false }} />
      <Stack.Screen name="About" options={{ headerShown: false }} />
      <Stack.Screen name="HelpSupport" options={{ headerShown: false }} />
      <Stack.Screen name="LiveChat" options={{ headerShown: false }} />
      <Stack.Screen name="Upgrade" options={{ headerShown: false }} />
      <Stack.Screen name="UpgradeDuration" options={{ headerShown: false }} />
      <Stack.Screen name="UpgradeSuccess" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Profiles;
