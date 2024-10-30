import React from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-1 py-2 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm px-2">{transaction.description}</p>
      <div>
        <span>${transaction.amount}</span>
        <button
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
          className="bg-slate-500 rounded-md px-2 py-1 mx-1 inline-flex items-center justify-center text-gray-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          x
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
