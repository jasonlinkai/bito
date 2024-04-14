import { httpGetPairs } from "../../utils/http";

export default async function ConversionPage() {
  const priceData = await httpGetPairs();
  return (
    <div>ConversionPage</div>
  );
}
