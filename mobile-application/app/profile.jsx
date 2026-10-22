import { Redirect } from "expo-router";
import { useAuth } from "../src/context/AuthContext";
import { ROLES, isPartner } from "../src/utils/roles";

const ACCOUNT_BY_ROLE = {
  [ROLES.B2C_PARTNER_DRIVER]: "/b2c-driver/account",
  [ROLES.B2B_PARTNER_DRIVER]: "/b2b-driver/account",
  [ROLES.CORPORATE_DRIVER]: "/corp-driver/account",
  [ROLES.CORPORATE_EMPLOYEE]: "/employee/account",
};

export default function Profile() {
  const { user, ready, isAuthenticated } = useAuth();
  if (ready && !isAuthenticated) return <Redirect href="/(auth)/login" />;
  if (ACCOUNT_BY_ROLE[user?.role]) return <Redirect href={ACCOUNT_BY_ROLE[user.role]} />;
  return <Redirect href={isPartner(user) ? "/partner/account" : "/(tabs)/more"} />;
}
