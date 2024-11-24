// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Profiles = () => {
  return (
    <Stack>
      <Stack.Screen name="ProfileDashboard" options={{ headerShown: false }} />
      <Stack.Screen name="ProfileInfo" options={{ headerShown: false }} />
      {/* <Stack.Screen name="RegularSavings" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="BlockSavings" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="RecurrentSavings" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="GroupSavings" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen
        name="RegularSavingsSummary"
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="RegularEditInstance"
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="RegularInstanceSuccess"
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen name="RegularWithdraw" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen
        name="RegularWithdrawSuccess"
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen name="RegularHistory" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen
        name="GroupSavingsSummary"
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen name="GroupMembers" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen
        name="NonContributionMember"
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen name="GroupHistory" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="GroupEditInstance" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen
        name="GroupInstanceSuccess"
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen name="Delete" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="SimulateSavings" options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="GroupSavingsSummary" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default Profiles;
