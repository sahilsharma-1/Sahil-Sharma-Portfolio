const TOKEN = process.env.VIMEO_ACCESS_TOKEN;
const SHOWCASE = process.env.VIMEO_SHOWCASE_ID;

export async function getVideos() {
  const res = await fetch(
    `https://api.vimeo.com/albums/${SHOWCASE}/videos`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Vimeo videos");
  }

  const data = await res.json();

  return data.data.map((video) => ({
    id: video.uri.split("/").pop(),
    title: video.name,
    thumb:
      video.pictures?.sizes?.at(-1)?.link ||
      "/images/placeholder.jpg",
    duration: video.duration,
    url: video.link,

    // Default category
    category: "All",
  }));
}