import translate from "~/res/translate";

export default () => <Group extends keyof TranslateMap>(group: Group, key?: keyof TranslateMap[Group]) => {
  const language = useLanguage().value;
  console.log({ language });
  if (key) return translate[language][group][key];
  return translate[language][group];
};
