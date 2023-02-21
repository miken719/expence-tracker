import { fetchDelete, fetchExpense } from "@/function/api"
import { generateDynamicHeader, messageNotification } from "@/function/utils"
import NoRecords from "@/pages/NoRecords"
import moment from "moment"

const ExpanceListening = ({
  expenseList,
  setUpdatedExpense,
  hide,
  fetchTotalExpanceBalance,
  setExpenses,
}) => {
  const deleteExpense = async (id) => {
    const data = await fetchDelete(id)
    if (data.status === 1) {
      messageNotification(data?.message, "success")
      const resp = await fetchExpense()
      fetchTotalExpanceBalance()
      setExpenses(resp?.expenses)
    } else {
      messageNotification(data?.error, "error")
    }
    return data
  }
  const header = ["Price", "Title", "Date", "Update", "Delete"]
  return (
    <table>
      {generateDynamicHeader(header)}
      <tbody>
        {expenseList && expenseList?.length ? (
          expenseList?.map((exp) => (
            <tr
              data-ng-repeat="customer in people | filter: table"
              key={exp?._id}
            >
              <td> {exp?.price}</td>
              <td> {exp?.title}</td>
              <td>{moment(exp?.date).format("dddd, DD/MM/YYYY")}</td>
              <td>
                {" "}
                <div className="cursor-pointer">
                  <button
                    type="button"
                    className="btn btn-primary "
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => {
                      setUpdatedExpense(exp), hide(true)
                    }}
                  >
                    Update
                  </button>
                </div>
              </td>
              <td>
                {" "}
                <div className="cursor-pointer">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteExpense(exp?._id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <NoRecords />
        )}
      </tbody>
    </table>
  )
}

export default ExpanceListening
