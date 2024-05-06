"use client";
import Image from "next/image";
import type { Pair } from "@/interfaces";
import Modal from "@/components/molecules/Modal";
import { Fragment, useCallback, useEffect, useState } from "react";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";
import Button from "@/components/atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleDoubleDown,
} from "@fortawesome/free-solid-svg-icons";
import CurrencySelectModal from "@/components/organisms/CurrencySelectModal";
import usePairs from "@/hooks/usePairs";
import LoadingArea from "@/components/molecules/LoadingArea";

interface RateConversionModalProps {
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
}

const RateConversionModal: React.FC<RateConversionModalProps> = ({
  visible = false,
  setVisible = (v) => console.log(v),
}) => {
  const { data: pairs, isLoading } = usePairs();

  const [prevPair, setPrevPair] = useState<Pair | undefined>();
  const [nextPair, setNextPair] = useState<Pair | undefined>();
  const [prevAmount, setPrevAmount] = useState(0);
  const [nextAmount, setNextAmount] = useState(0);
  const [
    isPrevCurrencySelectModalVisible,
    setIsPrevCurrencySelectedModalVisible,
  ] = useState(false);
  const [
    isNextCurrencySelectModalVisible,
    setIsNextCurrencySelectedModalVisible,
  ] = useState(false);

  const onPrevAmountChange = useCallback(
    (v: string) => {
      if (prevPair !== undefined && nextPair !== undefined) {
        const n = Number(v);
        if (!Number.isNaN(Number(n))) {
          setPrevAmount(n);
          const ratio =
            (((nextPair.twd_price * 100) / prevPair.twd_price) * 100) /
            100 /
            100;
          const amount_decimal = Number(nextPair.amount_decimal);
          setNextAmount(Number((ratio * n).toFixed(amount_decimal)));
        }
      }
    },
    [nextPair, prevPair]
  );

  useEffect(() => {
    setPrevPair(pairs[0]);
    setNextPair(pairs[1]);
  }, [pairs]);

  useEffect(() => {
    onPrevAmountChange("1");
  }, [prevPair, nextPair, onPrevAmountChange]);

  return (
    <>
      <Modal title="Rate Conversion" visible={visible} setVisible={setVisible}>
        <Col className="w-full h-full justify-between p-6">
          {isLoading || prevPair === undefined || nextPair === undefined ? (
            <LoadingArea></LoadingArea>
          ) : (
            <Fragment>
              <Row className="justify-between items-center">
                <Button
                  onClick={() => setIsPrevCurrencySelectedModalVisible(true)}
                >
                  <Row className="flex-1 justify-center items-center">
                    <Image
                      className="rounded-full mr-4"
                      src={prevPair.currency_icon}
                      alt={`icon-${prevPair.currency}`}
                      width={16}
                      height={16}
                    />
                    <span className="mr-4">{prevPair.currency}</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </Row>
                </Button>
                <div>
                  <input
                    value={prevAmount}
                    onChange={(e) => onPrevAmountChange(e.target.value)}
                    className="w-[120px] h-[36px] p-2 bg-black text-right border border-solid border-while focus:border-blue-500 focus:text-blue-500 transition-colors duration-300"
                  ></input>
                </div>
              </Row>
              <div className="relative">
                <span className="absolute right-0 top-[-1.4rem]">
                  1&nbsp;{prevPair.currency}&nbsp;≈&nbsp;
                  {(nextPair.twd_price / prevPair.twd_price).toFixed(
                    Number(nextPair.amount_decimal)
                  )}
                  &nbsp;{nextPair.currency}
                </span>
                <hr className="w-full"></hr>
                <div className="absolute top-[-20px] left-[35px] w-[40px] h-[40px] rounded-full border border-solid border-while flex justify-center items-center bg-black">
                  <FontAwesomeIcon icon={faAngleDoubleDown} />
                </div>
              </div>
              <Row className="justify-between items-center">
                <Button
                  onClick={() => setIsNextCurrencySelectedModalVisible(true)}
                >
                  <Row className="flex-1 justify-center items-center">
                    <Image
                      className="rounded-full mr-4"
                      src={nextPair.currency_icon}
                      alt={`icon-${nextPair.currency}`}
                      width={16}
                      height={16}
                    />
                    <span className="mr-4">{nextPair.currency}</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </Row>
                </Button>
                <div>
                  <span>{nextAmount}</span>
                </div>
              </Row>
            </Fragment>
          )}
        </Col>
      </Modal>
      <CurrencySelectModal
        visible={isPrevCurrencySelectModalVisible}
        setVisible={setIsPrevCurrencySelectedModalVisible}
        onSelected={setPrevPair}
        valuePair={prevPair}
      />
      <CurrencySelectModal
        visible={isNextCurrencySelectModalVisible}
        setVisible={setIsNextCurrencySelectedModalVisible}
        onSelected={setNextPair}
        valuePair={nextPair}
      />
    </>
  );
};

export default RateConversionModal;
