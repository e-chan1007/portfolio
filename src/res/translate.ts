declare global {
  type Languages = "en" | "ja";

  interface TranslateMap {
    name: string,
    categories: {
      devtool: string,
      library: string,
      ml: string,
      webapp: string
    },
    headers: {
      articles: string,
      works: string
    }
  }
}

export default {
  en: {
    name: "e_chan1007",
    categories: {
      devtool: "Developer tool",
      library: "Library",
      ml: "Machine learning",
      webapp: "Web App"
    },
    headers: {
      articles: "Articles",
      works: "Works"
    }
  },
  ja: {
    name: "いーちゃん",
    categories: {
      devtool: "開発用ツール",
      library: "ライブラリ",
      ml: "機械学習",
      webapp: "Webアプリ"
    },
    headers: {
      articles: "執筆した記事",
      works: "開発したもの"
    }
  }
} as Record<Languages, TranslateMap>;
