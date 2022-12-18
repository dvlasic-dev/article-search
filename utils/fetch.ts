import { IPost } from "./types";

export async function getData(url: string): Promise<IPost[]> {
  const response = await fetch(url, { cache: "reload" });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
}
export const fetchPosts = async () => {
  const data = await getData(
    "https://www.alpha-orbital.com/last-100-news.json"
  );
  return data;
};
