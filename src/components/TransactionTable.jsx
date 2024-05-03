import Table from "./Table";
const TransactionTable = () => {
  return (
    <div className="bg-white border-slate-900/5 border-2 rounded-md px-4 py-4 p-5">
      <div className="flex justify-between">
        <div className="flex justify-start">
          <div className=" bg-white text-gray-800 font-semibold py-2 px-4">
            <div className="pt-1">Candidiate Status</div>
          </div>
          <div className=" bg-white text-gray-800 font-semibold py-2 px-4">
            <div className="pt-1 text-blue-500 hover:cursor-pointer underline">
              <a>View All</a>
            </div>
          </div>
        </div>
        <div className="flex px-2 py-1">
          <div>
            {/* <input
            className=" bg-white-500 border-slate-900/5 border-2 p-3 rounded-md w-35"
            placeholder="Search"
          ></input> */}
            <div className="relative">
              <input
                type="text"
                className="bg-white border border-gray-300 rounded-md py-2 pl-10 pr-4 w-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="px-4 ">
            <div className="flex justify-between hover:cursor-pointer bg-white border border-gray-300 rounded-md py-2 pl-2 pr-4 w-50 focus:outline-none focus:ring-2 focus:ring-gray-500">
              <div className="pt-2 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="pt-1 px-1">Filters</div>
            </div>
          </div>
        </div>
      </div>
      <Table />
    </div>
  );
};
export default TransactionTable;
