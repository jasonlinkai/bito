import Image from "next/image";
import { httpGetPairs } from "../../utils/http";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";

export default async function ExchangeTable() {
  const pairsData = await httpGetPairs();
  return (
    <div className="relative w-[600px] min-w-[320px] max-h-full overflow-hidden border border-solid border-while rounded-xl">
      <Row className="sticky w-full justify-between border-b border-solid border-while py-4">
        <Row className="flex-1 justify-center items-center">Currency</Row>
        <Row className="flex-1 justify-center items-center">Price</Row>
      </Row>
      <Col className="h-[calc(100%-57px)] overflow-scroll pt-4">
        {pairsData.map(
          ({ id, currency, currency_icon, twd_price, amount_decimal }) => {
            return (
              <Row
                key={`${id}-${currency}`}
                className="w-full justify-between pb-4"
              >
                <Row className="flex-1 justify-center items-center">
                  <Image
                    className="rounded-full mr-4"
                    src={currency_icon}
                    alt={`icon-${id}-${currency}`}
                    width={16}
                    height={16}
                  />
                  <span>{currency} / TWD</span>
                </Row>
                <Row className="flex-1 justify-center items-center">
                  <span>{twd_price}</span>
                </Row>
              </Row>
            );
          }
        )}
      </Col>
    </div>
  );
}
