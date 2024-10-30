import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";
import { createPortal } from "react-dom";
import TransactionHistory from "./TransactionHistory";

function TransactionList() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-lg block mb-2 w-full"
      >
        Detalles
      </button>
      <div>
        {showModal &&
          createPortal(
            <TransactionHistory onClose={() => setShowModal(false)} />,
            document.body
          )}
      </div>
    </>
  );
}

export default TransactionList;
