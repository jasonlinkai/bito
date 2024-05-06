import { pairsApi, useGetPairsQuery } from "@/utils/http";

const usePairs = () => {
  useGetPairsQuery();
  const { data = [], error, isLoading } = pairsApi.endpoints.getPairs.useQuery();
  return {
    data,
    isLoading,
    error,
  };
};

export default usePairs;
