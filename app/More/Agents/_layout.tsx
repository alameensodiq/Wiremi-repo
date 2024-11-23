// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Agents = () => {
  return (
    <Stack>
      <Stack.Screen name="AgentDashboard" options={{ headerShown: false }} />
      <Stack.Screen name="AgentFundWallet" options={{ headerShown: false }} />
      <Stack.Screen name="AgentFundSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="AgentDepositSummary" options={{ headerShown: false }} />
      <Stack.Screen name="AgentDepositSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="AgentWithdrawalSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="AgentWithdrawalSummary" options={{ headerShown: false }} />
      <Stack.Screen name="AgentTransferSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="AgentTransferSummary" options={{ headerShown: false }} />
      <Stack.Screen name="AgentTransactions" options={{ headerShown: false }} />
      <Stack.Screen name="AgentTransactionDetails" options={{ headerShown: false }} />
      <Stack.Screen name="AgentCommissions" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Agents;
