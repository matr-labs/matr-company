import homeData from "@data/home.json";

export const home = homeData;

export type Home = typeof home;

export const servicesWithNo = home.services.items.map((service, i) => ({
  ...service,
  no: String(i + 1).padStart(2, "0"),
}));
