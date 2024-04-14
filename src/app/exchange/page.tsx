import ExchangeTable from "@/components/molecules/ExchangeTable";

export default async function ExchangePage() {
  return (
    <div className="w-full h-full px-4 py-4 flex flex-row justify-center">
      <ExchangeTable />
    </div>
  );
}
