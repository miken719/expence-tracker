import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
/******************* 
@Purpose : Used for show message notification
@Parameter : text, type, autoClose, position
@Author : INIC
******************/
export const messageNotification = (
  text,
  type = "success",
  autoClose = 1500,
  position = "top-right"
) => {
  toast[type](text, {
    className: "text-capitalize",
    position: position,
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
}

export const generateDynamicHeader = (array) => {
  return (
    <>
      <tr>
        {array.map((e, index) => {
          return (
            <th key={index}>
              <p>{e}</p>
            </th>
          )
        })}
      </tr>
    </>
  )
}
