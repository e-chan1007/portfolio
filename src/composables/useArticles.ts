import type htmlparser2 from "htmlparser2";

export default async () => {
  const articles = useState<htmlparser2.DomUtils.FeedItem[]>("articles", () => []);
  if (process.client) return articles.value;
  const htmlparser2 = await import("htmlparser2");
  const feeds = (await Promise.all([
    $fetch<string>("https://zenn.dev/e_chan1007/feed", { responseType: "text" }),
    $fetch<string>("https://qiita.com/e_chan1007/feed", { responseType: "text" })
  ])).flatMap(feed => htmlparser2.parseFeed(feed)!.items);
  articles.value = feeds.sort((a, b) => a.pubDate! < b.pubDate! ? 1 : 0);
  return articles.value;
};
