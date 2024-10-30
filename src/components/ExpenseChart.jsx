import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  //   const total = transactions.reduce(
  //     (acc, transaction) => (acc += transaction.amount),
  //     0
  //   );

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100);
  //console.log(totalExpensePercentage);

  const totalIncomePercentage = 100 - totalExpensePercentage;
  //console.log(totalIncomePercentage);

  //   console.log(total);
  //   console.log(totalIncome);
  //   console.log(totalExpense);

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expense", y: totalExpensePercentage },
        { x: "Incomes", y: totalIncomePercentage },
      ]}
      animate={{ duration: 200 }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
  );
}

export default ExpenseChart;
