import { Pair } from "@/interfaces";
import { httpGetPairs } from "@/utils/http";
import { useState, useCallback, useEffect } from "react";

const usePairs = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [pairs, setPairs] = useState<Pair[]>([]);
  const load = useCallback(async () => {
    try {
      setLoading(true);
      const data = await httpGetPairs();
      setPairs(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {
    loading,
    error,
    pairs,
  };
};

export default usePairs;