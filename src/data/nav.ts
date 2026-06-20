export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

export const footerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];
