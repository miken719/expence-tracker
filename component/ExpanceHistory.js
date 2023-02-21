import { useState } from "react"
import ExpanceListening from "./ExpanseListning"
import FilterSearch from "./FilterSearch"
import IncomeHistory from "./IncomeBalanceHistory"
import Modal from "./Modal"

const ExpanseHistory = ({
  setExpenses,
  fetchTotalExpanceBalance,
  expenseList,
}) => {
  const [show, hide] = useState(false)
  const [updatedExpense, setUpdatedExpense] = useState({ price: "", title: "" })
  return (
    <>
      <div>
        <div
          className="container"
          data-ng-app="myApp"
          data-ng-controller="myCtrl"
        >
          <FilterSearch setExpenses={setExpenses} />
          <br />
          <div className="tabs effect-4">
            {/* tab-title */}
            <input
              type="radio"
              id="tab-1"
              name="tab-effect-4"
              defaultChecked="checked"
            />
            <span>
              <i className="fa fa-home" />
              <span>Expense History</span>
            </span>
            <input type="radio" id="tab-2" name="tab-effect-4" />
            <span>
              <i className="fa fa-calendar" />
              <span>Income</span>
            </span>
            <input type="radio" id="tab-3" name="tab-effect-4" />
            <span>
              <i className="fa fa-bookmark" />
              <span>Book Mark</span>
            </span>
            <input type="radio" id="tab-4" name="tab-effect-4" />
            <span>
              <i className="fa fa-cloud-upload" />
              <span>Upload</span>
            </span>
            <input type="radio" id="tab-5" name="tab-effect-4" />
            <span>
              <i className="fa fa-cog" />
              <span>Settings</span>
            </span>
            {/* tab-content */}
            <div className="tab-content">
              <section id="tab-item-1">
                <div>
                  <ExpanceListening
                    setExpenses={setExpenses}
                    fetchTotalExpanceBalance={fetchTotalExpanceBalance}
                    expenseList={expenseList}
                    hide={hide}
                    setUpdatedExpense={setUpdatedExpense}
                  />
                </div>
              </section>
              <section id="tab-item-2">
                <div>
                  {" "}
                  <IncomeHistory />
                </div>
              </section>
              <section id="tab-item-3">
                <h1>Comming Soon...</h1>
              </section>
              <section id="tab-item-4">
                <h1>Comming Soon...</h1>
              </section>
              <section id="tab-item-5">
                <h1>Comming Soon...</h1>
              </section>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <Modal
          setExpenses={setExpenses}
          setUpdatedExpense={setUpdatedExpense}
          fetchTotalExpanceBalance={fetchTotalExpanceBalance}
          hide={hide}
          updatedExpense={updatedExpense}
        />
      )}
    </>
  )
}
export default ExpanseHistory
