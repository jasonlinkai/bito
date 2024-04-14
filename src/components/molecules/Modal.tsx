"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Row from "@/components/atoms/Row";

interface ModalProps {
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
      <Row>
        <Link href={pathname}>
          <button type="button" className="bg-red-500 text-white p-2">
            X
          </button>
        </Link>
      </Row>
      {children}
    </dialog>
  );
};

export default Modal;
