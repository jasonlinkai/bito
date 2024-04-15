"use client";
import { useCallback, useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import RateTable from "@/components/organisms/RateTable";
import { Pair } from "@/interfaces";
import { httpGetPairs } from "@/utils/http";
import RateConversionModal from "@/components/templates/RateConversionModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [isRateConversionModalVisible, setIsRateConversionModalVisible] =
    useState(false);
  const fetchPairs = useCallback(async () => {
    setLoading(true);
    try {
      const pairs = await httpGetPairs();
      setPairs(pairs);
      setLoading(false);
    } catch (e) {
      alert((e as Error).message);
    }
  }, []);
  useEffect(() => {
    fetchPairs();
  }, [fetchPairs]);
  return (
    <div className="w-full h-full px-4 py-4 flex flex-row justify-center">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-solid border-gray-200 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <RateTable pairs={pairs}>
            <Button onClick={() => setIsRateConversionModalVisible(true)}>
              Rate Conversion
            </Button>
          </RateTable>
          <RateConversionModal
            visible={isRateConversionModalVisible}
            setVisible={setIsRateConversionModalVisible}
            pairs={pairs}
          />
        </>
      )}
    </div>
  );
}
