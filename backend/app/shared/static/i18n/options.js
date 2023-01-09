import { buildResources } from "./utils";
import ptBR from "./locales/pt-BR.json";
import enUS from "./locales/en-US.json";

export const i18nextOptions = {
  detection: {
    lookupQuerystring: "lang",
  },
  debug: true,
  fallbackLng: "pt",
  resources: buildResources([
    ["en", enUS],
    ["pt", ptBR],
  ]),
};
