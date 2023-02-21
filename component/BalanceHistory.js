const BalanceHistory = ({ totalExpense }) => {
  return (
    <>
      {" "}
      <div className="header">
        <img src="https://i.ibb.co/jfScDTC/budget.png" alt="Expense Tracker" />
        <div className="balance-container cursor-pointer">
          <h2>Your Balance</h2>
          <h2 id="balance" className="balance">
            ${totalExpense?.balance}
          </h2>
        </div>
      </div>
      <div className="inc-exp-container cursor-pointer">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +${totalExpense?.income}
          </p>
        </div>
        <div className="cursor-pointer">
          <h4>Expenses</h4>
          <p id="money-minus" className="money minus">
            -${totalExpense?.total}
          </p>
        </div>
      </div>
    </>
  )
}
export default BalanceHistory
