import { ShortUrlResponse } from './short-url.model';

export const shortenUrl = async (url: string): Promise<ShortUrlResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_CONVERT_API}/api/short-url`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("Failed to shorten URL");
  }

  const resJson = await response.json();

  // Ambil data dari response.data
  return {
    shortUrl: `${resJson.data.short_url}`,
  };
};
