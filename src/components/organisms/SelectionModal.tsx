"use client";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/molecules/Modal";

function SelectionModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("selection_modal");
  return (
    <>
      {modal && (
        <Modal>
          SelectionModal
        </Modal>
      )}
    </>
  );
}

export default SelectionModal;
