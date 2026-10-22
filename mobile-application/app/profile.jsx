import { Redirect } from "expo-router";
import { useAuth } from "../src/context/AuthContext";
import { isPartner } from "../src/utils/roles";

export default function Profile() {
  const { user, ready, isAuthenticated } = useAuth();
  if (ready && !isAuthenticated) return <Redirect href="/(auth)/login" />;
  return <Redirect href={isPartner(user) ? "/partner/account" : "/(tabs)/more"} />;
}
