import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/Auth" />; // ✅ Ensures app starts from Auth/index.tsx
}
