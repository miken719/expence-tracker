import { fetchIncomeBalance } from "@/function/api"

import NoRecords from "@/pages/NoRecords"
import moment from "moment"
import { useEffect, useState } from "react"

const IncomeHistory = () => {
  const [incomeHistory, setIncomeHistory] = useState([])
  const fetchBalnce = async () => {
    const data = await fetchIncomeBalance()
    setIncomeHistory(data?.income)
  }

  useEffect(() => {
    fetchBalnce()
  }, [])
  return (
    <ul id="list " className="list ">
      {incomeHistory && incomeHistory?.length ? (
        incomeHistory?.map((income) => (
          <>
            <li key={income._id}>
              Income :{income.income},{"  "}
              {moment(income.date).format("dddd, DD/MM/YYYY")}
            </li>
          </>
        ))
      ) : (
        <NoRecords />
      )}
    </ul>
  )
}
export default IncomeHistory
