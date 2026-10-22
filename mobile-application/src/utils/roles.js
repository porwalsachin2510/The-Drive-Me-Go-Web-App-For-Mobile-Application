export const ROLES = {
  COMMUTER: "COMMUTER",
  B2C_PARTNER: "B2C_PARTNER",
};

export const isPartner = (user) => user?.role === ROLES.B2C_PARTNER;

export const homeHref = (user) => (isPartner(user) ? "/(partner)" : "/(tabs)");
