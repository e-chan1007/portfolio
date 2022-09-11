declare global {
  type Languages = "en" | "ja";

  interface TranslateMap {
    categories: {
      devtool: string,
      library: string,
      ml: string,
      webapp: string
    },
    colors: {
      light: string,
      dark: string,
      system: string
    }
    headers: {
      articles: string,
      works: string
    },
    languages: {
      en: string,
      ja: string
    },
    menu: {
      color: string,
      language: string
    },
    modal: {
      closeLabel: string
    }
    name: string,
    nav: {
      iconAlt: string,
      toggleLabel: string
    },
    siteDescription: string
  }
}

export default {
  en: {
    categories: {
      devtool: "Developer tool",
      library: "Library",
      ml: "Machine learning",
      webapp: "Web App"
    },
    colors: {
      dark: "Dark",
      light: "Light",
      system: "System"
    },
    headers: {
      articles: "Articles",
      works: "Works"
    },
    languages: {
      en: "English",
      ja: "Japanese(日本語)"
    },
    menu: {
      color: "Theme",
      language: "Language(言語)",
      terminal: "Terminal"
    },
    modal: { closeLabel: "Close" },
    name: "e_chan1007",
    nav: {
      iconAlt: "Profile image",
      toggleLabel: "Toggle menu"
    },
    siteDescription: "The portfolio of e_chan1007."
  },
  ja: {
    categories: {
      devtool: "開発用ツール",
      library: "ライブラリ",
      ml: "機械学習",
      webapp: "Webアプリ"
    },
    colors: {
      dark: "ダーク",
      light: "ライト",
      system: "システム"
    },
    headers: {
      articles: "執筆した記事",
      works: "開発したもの"
    },
    languages: {
      en: "英語(English)",
      ja: "日本語"
    },
    menu: {
      color: "テーマ",
      language: "言語(Language)",
      terminal: "Terminal"
    },
    modal: { closeLabel: "閉じる" },
    name: "いーちゃん",
    nav: {
      iconAlt: "プロフィール画像",
      toggleLabel: "メニューを開閉"
    },
    siteDescription: "いーちゃんのポートフォリオ"
  }
} as Record<Languages, TranslateMap>;
