import translate from "~/res/translate";

export default () => <Group extends keyof TranslateMap>(group: Group, key?: keyof TranslateMap[Group]) => {
  const language = useLanguage().value;
  if (key) return translate[language][group][key] as string;
  return translate[language][group] as string;
};
