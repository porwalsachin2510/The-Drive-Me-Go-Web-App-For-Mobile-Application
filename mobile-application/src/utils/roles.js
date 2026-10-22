export const ROLES = {
  COMMUTER: "COMMUTER",
  B2C_PARTNER: "B2C_PARTNER",
  B2C_PARTNER_DRIVER: "B2C_PARTNER_DRIVER",
  B2B_PARTNER_DRIVER: "B2B_PARTNER_DRIVER",
  CORPORATE_DRIVER: "CORPORATE_DRIVER",
  CORPORATE_EMPLOYEE: "CORPORATE_EMPLOYEE",
};

export const ROLE_LABELS = {
  COMMUTER: "Commuter",
  B2C_PARTNER: "B2C Partner",
  B2C_PARTNER_DRIVER: "B2C Partner Driver",
  B2B_PARTNER_DRIVER: "B2B Partner Driver",
  CORPORATE_DRIVER: "Corporate Driver",
  CORPORATE_EMPLOYEE: "Corporate Employee",
};

export const isPartner = (user) => user?.role === ROLES.B2C_PARTNER;

export const HOME_BY_ROLE = {
  [ROLES.B2C_PARTNER]: "/partner/home",
  [ROLES.B2C_PARTNER_DRIVER]: "/b2c-driver/home",
  [ROLES.B2B_PARTNER_DRIVER]: "/b2b-driver/home",
  [ROLES.CORPORATE_DRIVER]: "/corp-driver/home",
  [ROLES.CORPORATE_EMPLOYEE]: "/employee/home",
};

export const isStaffRole = (user) => !!HOME_BY_ROLE[user?.role] && user.role !== ROLES.B2C_PARTNER;

export const homeHref = (user) => HOME_BY_ROLE[user?.role] || "/(tabs)";
