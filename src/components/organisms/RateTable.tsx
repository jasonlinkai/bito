import Image from "next/image";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";
import { Pair } from "@/interfaces";

const HEADER_HEIGHT = 57;
const TABLE_HEADER_HEIGHT = 44;
const FOOTER_HEIGHT = 57;

interface RateTableProps {
  pairs?: Pair[]
  children?: React.ReactNode
}

const RateTable: React.FC<RateTableProps> = ({
  pairs = [],
  children,
}) => {
  return (
    <div className="relative w-[600px] min-w-[320px] max-h-full overflow-hidden border border-solid border-while rounded-xl">
      <Row
        className={`w-full h-[${HEADER_HEIGHT}px] justify-between items-center border-b border-solid border-while`}
      >
        <Row className="flex-1 justify-center items-center">
          <span>Rate Table(TWD)</span>
        </Row>
      </Row>
      <Row
        className={`w-full h-[${TABLE_HEADER_HEIGHT}px] justify-between items-center border-b border-solid border-while py-2`}
      >
        <Row className="flex-1 justify-center items-center">
          <span>Currency</span>
        </Row>
        <Row className="flex-1 justify-center items-center">
          <span>Price</span>
        </Row>
      </Row>
      <Col className={`h-[calc(100%-158px)] overflow-scroll pt-4`}>
        {pairs.map(
          ({ id, currency, currency_icon, twd_price }) => {
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
        {children}
      </Row>
    </div>
  );
}

export default RateTable;