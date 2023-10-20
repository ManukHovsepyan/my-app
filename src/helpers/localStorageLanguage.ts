export const setLanguageInLocalStorage = (language: string) => {
  localStorage.setItem('language', language);
}

export const getLanguageFromLocalStorage = () => {

  const data = localStorage.getItem('language') || "";
  return typeof data === "string" ? data : JSON.parse(data)
}

export const clearLanguageFromLocalStorage = () => {
  localStorage.removeItem('language');
}