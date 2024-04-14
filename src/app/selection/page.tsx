import { httpGetPairs } from "../../utils/http";

export default async function SelectionPage() {
  const priceData = await httpGetPairs();
  return (
    <div>SelectionPage</div>
  );
}
