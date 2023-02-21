import { fetchPostIncome } from "@/function/api"
import { messageNotification } from "@/function/utils"
import { useState } from "react"

const AddIncome = ({ fetchTotalExpanceBalance }) => {
  const [income, setIncome] = useState(0)
  const updateIncomeHandler = async () => {
    let body = JSON.stringify({ income: income })
    const resp = await fetchPostIncome(body)
    if (resp?.status === 1) {
      messageNotification(resp?.message, "success")
      await fetchTotalExpanceBalance()
      setIncome(0)
    } else {
      messageNotification(resp?.error, "error")
    }
  }
  return (
    <div>
      <label className="form-label ">
        Income:-
        <input
          className="form-control "
          name="price"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </label>
      <button
        className="btn btn-success "
        onClick={() => updateIncomeHandler()}
      >
        Add Income
      </button>
    </div>
  )
}
export default AddIncome
