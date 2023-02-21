import AddIncome from "@/component/Addincome"
import BalanceHistory from "@/component/BalanceHistory"
import ExpanseHistory from "@/component/ExpanceHistory"
import AddTodo from "../addTodo"
const ExpenseList = ({
  expenseList,
  setExpenses,
  totalExpense,
  fetchTotalExpanceBalance,
}) => {
  return (
    <>
      <div>
        <h1 className="header-center ">Expense Tracker</h1>
        <div className="container">
          <BalanceHistory totalExpense={totalExpense} />
          <h3>Add Income</h3>
          <AddIncome
            totalExpense={totalExpense}
            fetchTotalExpanceBalance={fetchTotalExpanceBalance}
          />
          <h3>Add new transaction</h3>
          <AddTodo
            setExpenses={setExpenses}
            fetchTotalExpanceBalance={fetchTotalExpanceBalance}
          />
          <h3>History</h3>

          <ExpanseHistory
            expenseList={expenseList}
            fetchTotalExpanceBalance={fetchTotalExpanceBalance}
            setExpenses={setExpenses}
          />
        </div>
      </div>
    </>
  )
}
export default ExpenseList
