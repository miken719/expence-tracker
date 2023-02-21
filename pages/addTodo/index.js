import { fetchExpense, fetchAddExpense } from "@/function/api"
import { messageNotification } from "@/function/utils"
import { useState } from "react"

const AddTodo = ({ setExpenses, fetchTotalExpanceBalance }) => {
  const [newExpense, setNewExpense] = useState({ price: "", title: "" })
  const createTodosHandler = async () => {
    let body = JSON.stringify({
      price: newExpense.price,
      title: newExpense.title,
    })
    const data = await fetchAddExpense(body)
    if (data.status === 1) {
      messageNotification(data?.message, "success")
      const resp = await fetchExpense()
      setExpenses(resp?.expenses)
      fetchTotalExpanceBalance()
      setNewExpense({ price: "", title: "" })
    } else {
      messageNotification(data?.error, "error")
    }
  }

  return (
    <div>
      {" "}
      <div>
        {" "}
        <label className="form-label ">
          {" "}
          Price:-
          <input
            className="form-control "
            name="price"
            value={newExpense.price}
            onChange={(e) =>
              setNewExpense({ ...newExpense, price: e.target.value })
            }
          />
        </label>
      </div>
      <div>
        <label className="form-label ">
          {" "}
          Expense:-
          <input
            name="title"
            className="form-control"
            value={newExpense.title}
            onChange={(e) =>
              setNewExpense({ ...newExpense, title: e.target.value })
            }
          />
        </label>
      </div>
      <button
        className="btn btn-success w-50"
        onClick={() => createTodosHandler()}
      >
        New Expense
      </button>
    </div>
  )
}
export default AddTodo
