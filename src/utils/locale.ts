const LANG = "lang";

export const setLang = (lang: string): void => {
  localStorage.setItem(LANG, lang);
};

export const getLang = (): string | null => localStorage.getItem(LANG);
