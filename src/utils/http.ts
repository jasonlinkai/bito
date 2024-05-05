import { Pair } from "@/interfaces";

export async function httpGetPairs(): Promise<Pair[]> {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const res = await fetch(
        "https://65efcc68ead08fa78a50f929.mockapi.io/api/v1/pairs"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      resolve(res.json());
    }, 3000);
  });
}
