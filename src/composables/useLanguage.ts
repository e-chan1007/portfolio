import { useStorage } from "@vueuse/core";

export default () => useStorage<Languages>("language", (() => {
  const language = useNavigatorLanguage().language?.value;
  if (!language || language === "ja") return "ja";
  return "en";
})());
