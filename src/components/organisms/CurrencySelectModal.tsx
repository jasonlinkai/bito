"use client";
import Image from "next/image";
import clsx from "clsx";
import type { Pair } from "@/interfaces";
import Modal from "@/components/molecules/Modal";
import LoadingArea from "@/components/molecules/LoadingArea";
import Col from "@/components/atoms/Col";
import usePairs from "@/hooks/usePairs";

interface CurrencySelectModalProps {
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
  valuePair?: Pair;
  onSelected?: (pair: Pair) => void;
}

const CurrencySelectModal: React.FC<CurrencySelectModalProps> = ({
  visible = false,
  setVisible = (v) => console.log(v),
  valuePair,
  onSelected = (v) => console.log(v),
}) => {
  const { data: pairs, isLoading } = usePairs();
  return (
    <Modal title="Currency Select" visible={visible} setVisible={setVisible}>
      <div className="relative w-full h-full overflow-hidden">
        {isLoading ? (
          <LoadingArea></LoadingArea>
        ) : (
          <Col className={`h-full overflow-scroll pt-4`}>
            {pairs.map((pair) => {
              const { id, currency, currency_icon } = pair;
              return (
                <div
                  key={`${id}-${currency}`}
                  className={clsx([
                    "flex flex-row flex-1 justify-center items-center py-2 mb-4 cursor-pointer",
                    {
                      "bg-blue-500": valuePair?.id === id,
                    },
                  ])}
                  onClick={() => {
                    onSelected(pair);
                    setVisible(false);
                  }}
                >
                  <Image
                    className="rounded-full mr-4"
                    src={currency_icon}
                    alt={`icon-${id}-${currency}`}
                    width={16}
                    height={16}
                  />
                  <span>{currency} / TWD</span>
                </div>
              );
            })}
          </Col>
        )}
      </div>
    </Modal>
  );
};

export default CurrencySelectModal;
