import { useStorage } from "@vueuse/core";

const storage = useStorage<Languages>("language", (() => {
  const language = useNavigatorLanguage().language?.value;
  if (!language || language === "ja") return "ja";
  return "en";
})());


export default () => storage;
