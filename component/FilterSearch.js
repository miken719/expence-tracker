import { fetchFilter } from "@/function/api"

const FilterSearch = ({ setExpenses }) => {
  const filterExpenses = async (searchText) => {
    const resp = await fetchFilter(JSON.stringify({ search: searchText }))
    setExpenses(resp?.expenses)
  }
  return (
    <div className="row">
      <div className="col-md-2">Search:</div>
      <div className="col-md-10">
        <input
          type="text"
          className="search"
          onChange={(e) => filterExpenses(e.target.value)}
          data-ng-model="table"
        />
      </div>
    </div>
  )
}
export default FilterSearch
