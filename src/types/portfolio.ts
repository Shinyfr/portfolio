export type Stat = {
  label: string;
  value: string;
};

export type Experience = {
  title: string;
  subtitle: string;
  description: string;
};

export type Community = {
  name: string;
  badge: string;
  description: string;
  href: string;
  buttonLabel: string;
  buttonVariant: "primary" | "secondary";
};

export type NavItem = {
  label: string;
  href: string;
};