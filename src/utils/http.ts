import { Pairs } from "@/interfaces";

export async function httpGetPairs(): Promise<Pairs[]> {
  const res = await fetch(
    "https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/pairs"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}