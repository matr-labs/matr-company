export interface Service {
  title: string;
  description: string;
}

export const servicesIntro = {
  label: "What we do",
  title: "Services",
} as const;

export const services: Service[] = [
  {
    title: "Technology.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Production.",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Collaboration.",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },

];

// Derived: a zero-padded ordinal for each service ("01", "02", …).
export const servicesWithNo = services.map((service, i) => ({
  ...service,
  no: String(i + 1).padStart(2, "0"),
}));
