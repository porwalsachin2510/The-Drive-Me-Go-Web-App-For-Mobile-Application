import { MenuSheet } from "./MenuSheet";

const ITEMS = [
  { icon: "car-sport-outline", title: "Fleet & Drivers", href: "/partner/fleet" },
  { icon: "wallet-outline", title: "Earnings", href: "/partner/earnings" },
  { icon: "chatbox-ellipses-outline", title: "Route Requests", href: "/partner/requests" },
  { icon: "star-outline", title: "My Ratings", href: "/partner/ratings" },
  { icon: "pricetag-outline", title: "My Commission", href: "/partner/commission" },
  { icon: "business-outline", title: "Settlements", href: "/partner/settlements" },
  { icon: "notifications-outline", title: "Notifications", href: "/notifications" },
  { icon: "settings-outline", title: "Settings", href: "/settings" },
  { icon: "person-circle-outline", title: "Account", href: "/profile" },
];

export function PartnerMoreSheet({ visible, onClose }) {
  return <MenuSheet visible={visible} onClose={onClose} items={ITEMS} />;
}
