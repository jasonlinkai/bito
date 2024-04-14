import clsx from "clsx";

interface ColProps {
  className?: string;
  children?: React.ReactNode;
}

const Col: React.FC<ColProps> = ({ className, children }) => {
  return <div className={clsx(["flex flex-col", className])}>{children}</div>;
};

export default Col;
