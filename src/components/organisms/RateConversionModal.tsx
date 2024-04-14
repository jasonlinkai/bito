"use client";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/molecules/Modal";

function RateConversionModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("rate_conversion_modal");
  return (
    <>
      {modal && (
        <Modal>
          RateConversionModal
        </Modal>
      )}
    </>
  );
}

export default RateConversionModal;
