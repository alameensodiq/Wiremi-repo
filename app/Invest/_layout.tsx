// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Invest = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Investing" options={{ headerShown: false }} />
      <Stack.Screen name="Stocks" options={{ headerShown: false }} />
      <Stack.Screen name="StockDetails" options={{ headerShown: false }} />
      <Stack.Screen name="BuyStock" options={{ headerShown: false }} />
      <Stack.Screen name="BuySuccess" options={{ headerShown: false }} />
      <Stack.Screen name="BuyandSell" options={{ headerShown: false }} />
      <Stack.Screen name="SellStock" options={{ headerShown: false }} />
      <Stack.Screen name="SellSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="StockHistory" options={{ headerShown: false }} />
      <Stack.Screen name="FundraiseInput" options={{ headerShown: false }} />
      <Stack.Screen name="FundraiseSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="Project" options={{ headerShown: false }} />
      <Stack.Screen name="MyProjectDetails" options={{ headerShown: false }} />
      <Stack.Screen name="ProjectAll" options={{ headerShown: false }} />
      <Stack.Screen
        name="OtherprojectDetails"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SeeallMainProject" options={{ headerShown: false }} />
      <Stack.Screen name="InvestPage" options={{ headerShown: false }} />
      <Stack.Screen name="DonatePage" options={{ headerShown: false }} />
      <Stack.Screen name="InvestPageSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="DonatePageSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="MyInvestment" options={{ headerShown: false }} />
      <Stack.Screen
        name="MyInvestmentDetails"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="WithdrawPage" options={{ headerShown: false }} />
      <Stack.Screen
        name="WithdrawPageSuccess"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="InvestmentHistory" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Invest;
