export const company = {
  about: {
    title: "Lorem ipsum dolor",
    lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    ],
  },

  values: [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    },
    {
      title: "Dolor sit amet",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      title: "Consectetur elit",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
  ],

  stats: [
    { label: "Lorem ipsum", value: "120+" },
    { label: "Dolor sit", value: "99" },
    { label: "Amet elit", value: "8" },
  ],
} as const;

export type Company = typeof company;
