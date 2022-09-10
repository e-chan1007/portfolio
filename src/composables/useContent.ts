import yaml from "yaml";

import profileJa from "~/res/profile.md?raw";
import profileEn from "~/res/profile_en.md?raw";

import worksJa from "~/res/works.yml?raw";
import worksEn from "~/res/works_en.yml?raw";

declare global {
  interface Work {
    title: string,
    repo?: string | null,
    url?: string | null,
    description: string,
    date: string,
    categories: (keyof TranslateMap["categories"])[],
    frontFramework?: string | null,
    languages: string[]
  }
}

const language = useLanguage();

const parsedMarkdowns = computed(() =>
  ({ profile: language.value === "ja" ? profileJa : profileEn })
);

const parsedWorks = computed<Record<string, Work>>(() => language.value === "ja" ? yaml.parse(worksJa) : yaml.parse(worksEn));

export default () => computed(() => ({
  ...parsedMarkdowns.value,
  works: parsedWorks.value
}));
