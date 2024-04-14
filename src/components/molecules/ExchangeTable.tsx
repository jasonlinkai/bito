import Image from "next/image";
import Link from "next/link";
import { httpGetPairs } from "@/utils/http";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";
import Button from "@/components/atoms/Button";

const HEADER_HEIGHT = 57;
const TABLE_HEADER_HEIGHT = 57;
const FOOTER_HEIGHT = 57;
const BODY_HEIGHT_CALSS = `h-[calc(100%-${HEADER_HEIGHT}px-${TABLE_HEADER_HEIGHT}px-${FOOTER_HEIGHT}px)]`;

export default async function ExchangeTable() {
  const pairsData = await httpGetPairs();
  return (
    <div className="relative w-[600px] min-w-[320px] max-h-full overflow-hidden border border-solid border-while rounded-xl">
      <Row
        className={`w-full h-[${HEADER_HEIGHT}px] justify-between items-center border-b border-solid border-while`}
      >
        <Row className="flex-1 justify-center items-center">
          <span>Currency</span>
        </Row>
      </Row>
      <Row
        className={`w-full h-[${TABLE_HEADER_HEIGHT}px] justify-between items-center border-b border-solid border-while`}
      >
        <Row className="flex-1 justify-center items-center">
          <span>Currency</span>
        </Row>
        <Row className="flex-1 justify-center items-center">
          <span>Price</span>
        </Row>
      </Row>
      <Col className={`${BODY_HEIGHT_CALSS} overflow-scroll pt-4`}>
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
      <Row
        className={`w-full h-[${FOOTER_HEIGHT}px] justify-center items-center border-t border-solid border-while`}
      >
        <Link href="?rate_conversion_modal=true">
          <Button>Rate Conversion</Button>
        </Link>
      </Row>
    </div>
  );
}
