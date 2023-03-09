import { fetchFilter } from "@/function/api";

const FilterSearch = ({ setExpenses, sort, setSort }) => {
  const filterExpenses = async (searchText) => {
    const resp = await fetchFilter(JSON.stringify({ search: searchText }));
    setExpenses(resp?.expenses);
  };

  return (
    <div className="row">
      <button className="btn btn-primary" onClick={() => setSort(!sort)}>
        {sort ? "Newest" : "Oldest"}
      </button>
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
  );
};
export default FilterSearch;
