// app/TransactionDeposits/_layout.js
import { Stack } from 'expo-router';



const CardLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="CreateCard" options={{ headerShown: false }} />
      <Stack.Screen name="CardSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="MyCard" options={{ headerShown: false }} />
      <Stack.Screen name="ChangeCardPin" options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmChangePin" options={{ headerShown: false }} />
      <Stack.Screen name="ChangePinSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="DeactivateSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="DeactivateCard" options={{ headerShown: false }} />
      <Stack.Screen name="AllCardsTransactions" options={{ headerShown: false }} />
      {/* <Stack.Screen name="DeactivateCard" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default CardLayout;
