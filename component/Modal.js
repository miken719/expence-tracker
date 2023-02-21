import { fetchExpense, fetchUpdate } from "@/function/api"
import { messageNotification } from "@/function/utils"

const Modal = ({
  fetchTotalExpanceBalance,
  hide,
  updatedExpense,
  setUpdatedExpense,
  setExpenses,
}) => {
  const updateExpenseHandler = async (id) => {
    let body = JSON.stringify({
      price: updatedExpense.price,
      title: updatedExpense.title,
    })
    const data = await fetchUpdate(id, body)
    if (data?.status === 1) {
      messageNotification(data?.message, "success")
      const resp = await fetchExpense()
      setExpenses(resp?.expenses)
      fetchTotalExpanceBalance()
      hide(false)
    } else {
      messageNotification(data?.error, "error")
    }
  }

  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {" "}
              <input
                name="price"
                value={updatedExpense.price}
                onChange={(e) =>
                  setUpdatedExpense({
                    ...updatedExpense,
                    price: e.target.value,
                  })
                }
              />{" "}
              <input
                name="title"
                value={updatedExpense.title}
                onChange={(e) =>
                  setUpdatedExpense({
                    ...updatedExpense,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-dismiss={"modal"}
                className="btn btn-primary"
                onClick={() => updateExpenseHandler(updatedExpense?._id)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal
