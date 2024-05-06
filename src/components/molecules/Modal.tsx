import { useRouter } from "next/navigation";
import Row from "@/components/atoms/Row";
import Col from "@/components/atoms/Col";

interface ModalProps {
  visible?: boolean;
  setVisible?: (visible: boolean) => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  visible = false,
  setVisible,
  title = "modal-title",
  children,
}) => {
  const router = useRouter();

  function onDismiss() {
    if (setVisible) {
      setVisible(false);
    } else {
      router.back();
    }
  }

  return (
    <dialog open={visible}>
      <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-90 z-50 overflow-auto backdrop-blur flex flex-col justify-center items-center">
        <Col className="relative max-w-[600px] max-h-[600px] min-w-[320px] min-h-[320px] overflow-hidden border border-solid border-while rounded-xl text-white bg-black">
          <Row className="w-full h-[57px] px-4 py-4 justify-center items-center border-b border-solid border-while">
            <span>{title}</span>
            <button
              onClick={onDismiss}
              type="button"
              className="absolute right-4 border border-solid border-while text-white w-[30px] h-[30px] rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors duration-300 flex justify-center items-center"
            >
              X
            </button>
          </Row>
          {children}
        </Col>
      </div>
    </dialog>
  );
};

export default Modal;
