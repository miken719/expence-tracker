import { fetchExpense, fetchTotalBalance } from "@/function/api";
import { useEffect, useState } from "react";
import ExpenseList from "./expenseList";

export default function Home() {
  const [expense, setExpenses] = useState([]);
  const [sort, setSort] = useState(false);
  const fetchExpensess = async () => {
    const sorting = sort ? "-date" : "date";
    const api = await fetchExpense(sorting);
    setExpenses(api?.expenses);
  };
  useEffect(() => {
    fetchExpensess();
  }, [sort]);
  const [totalExpense, setTotalExpense] = useState({
    balance: 0,
    total: 0,
    income: 0,
  });
  useEffect(() => {
    fetchTotalExpanceBalance();
  }, []);

  const fetchTotalExpanceBalance = async () => {
    const resp = await fetchTotalBalance();

    setTotalExpense({
      balance: resp?.total?.balance,
      income: resp?.total?.income,
      total: resp?.total?.sum,
    });
  };
  return (
    <>
      <ExpenseList
        totalExpense={totalExpense}
        fetchTotalExpanceBalance={fetchTotalExpanceBalance}
        expenseList={expense}
        setExpenses={setExpenses}
        setSort={setSort}
        sort={sort}
      />
    </>
  );
}
