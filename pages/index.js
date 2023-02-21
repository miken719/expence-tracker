import { fetchTotalBalance } from "@/function/api"
import { useEffect, useState } from "react"
import ExpenseList from "./expenseList"
import { SERVER_URL } from "@/config"

export default function Home({ expenseList }) {
  const [expense, setExpenses] = useState(expenseList?.expenses)
  const [totalExpense, setTotalExpense] = useState({
    balance: 0,
    total: 0,
    income: 0,
  })
  useEffect(() => {
    fetchTotalExpanceBalance()
  }, [])

  const fetchTotalExpanceBalance = async () => {
    const resp = await fetchTotalBalance()

    setTotalExpense({
      balance: resp?.total?.balance,
      income: resp?.total?.income,
      total: resp?.total?.sum,
    })
  }
  return (
    <>
      <ExpenseList
        totalExpense={totalExpense}
        fetchTotalExpanceBalance={fetchTotalExpanceBalance}
        expenseList={expense}
        setExpenses={setExpenses}
      />
    </>
  )
}
export async function getServerSideProps() {
  const API_URL = SERVER_URL ?? "http://localhost:8080"
  const api = await fetch(API_URL)
  const resp = await api.json()
  return {
    props: {
      expenseList: resp,
    },
  }
}
