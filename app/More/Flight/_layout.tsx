// app/TransactionDeposits/_layout.js
import { Stack } from "expo-router";

const Flight = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="SearchFlights" options={{ headerShown: false }} />
      <Stack.Screen name="AllFlights" options={{ headerShown: false }} />
      <Stack.Screen name="FlightDetails" options={{ headerShown: false }} />
      <Stack.Screen name="FlightDetailsAmount" options={{ headerShown: false }} />
      <Stack.Screen
        name="FlightPayment"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="FlightSuccess" options={{ headerShown: false }} />
      <Stack.Screen name="FlightDownload" options={{ headerShown: false }} />
      <Stack.Screen name="FlightReceipt" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Flight;
