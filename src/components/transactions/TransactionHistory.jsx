import React from "react";
import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

function TransactionHistory({ onClose }) {
  const { transactions } = useGlobalState();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-zinc-800 h-96 p-10 rounded-lg flex flex-col justify-between gap-5">
        <h3 className="text-slate-300 text-xl font-bold block">Historial</h3>
        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-800 p-2">
          <ul>
            {transactions.map((transaction) => (
              <TransactionItem transaction={transaction} key={transaction.id} />
            ))}
          </ul>
        </div>

        <button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg block mb-2"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default TransactionHistory;
