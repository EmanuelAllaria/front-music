import { resources } from "../i18n";

// Map language codes to resource keys (names) and vice versa
const CODE_TO_NAME = {
  es: "Español",
  en: "Ingles",
  pt: "Portugues",
  po: "Portugues",
  ca: "Catalan",
  it: "Italiano",
  fr: "Frances",
};

export function getLanguageResourceKey(raw) {
  const stored = raw || localStorage.getItem("language");
  if (!stored) return "Español";
  // If a resource key exists, use it directly
  if (resources[stored]) return stored;
  // If a code, convert to name
  const name = CODE_TO_NAME[stored];
  return resources[name] ? name : "Español";
}

export function setLanguage(lang) {
  // Accept both code or name, store as resource key name for consistency
  const name = resources[lang] ? lang : CODE_TO_NAME[lang] || "Español";
  localStorage.setItem("language", name);
}

export function getTranslate() {
  const key = getLanguageResourceKey();
  return resources[key].translation;
}

export const availableLanguages = Object.keys(resources);
