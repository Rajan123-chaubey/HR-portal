// // Table.jsx

// import React from "react";

// const Table = () => {
//   return (
//     <div className="pt-4 py-5 mx-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-100">
//           <tr>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
//                 Job ID
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
//                 Name
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
//                 Position
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
//                 1st Level
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
//                 2nd Level
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
//                 3rd Level
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
//                 4th Level
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
//                 Total Marks
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
//                 Status
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">
//                 Actions
//               </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           <tr>
//             <td className="px-6 py-4 whitespace-nowrap">#281209</td>
//             <td className="px-6 py-4 whitespace-nowrap">Successful</td>
//             <td className="px-6 py-4 whitespace-nowrap">TRX123456</td>
//             <td className="px-6 py-4 whitespace-nowrap">Today, 8:45 PM</td>
//             <td className="px-6 py-4 whitespace-nowrap">₹1125.00</td>
//           </tr>
//           <tr>
//             <td className="px-6 py-4 whitespace-nowrap">#281210</td>
//             <td className="px-6 py-4 whitespace-nowrap">Processing</td>
//             <td className="px-6 py-4 whitespace-nowrap">TRX789012</td>
//             <td className="px-6 py-4 whitespace-nowrap">Tomorrow, 10:00 AM</td>
//             <td className="px-6 py-4 whitespace-nowrap">₹950.50</td>
//           </tr>
//           <tr>
//             <td className="px-6 py-4 whitespace-nowrap">#281211</td>
//             <td className="px-6 py-4 whitespace-nowrap">Successful</td>
//             <td className="px-6 py-4 whitespace-nowrap">TRX345678</td>
//             <td className="px-6 py-4 whitespace-nowrap">Yesterday, 3:30 PM</td>
//             <td className="px-6 py-4 whitespace-nowrap">₹750.00</td>
//           </tr>
//           <tr>
//             <td className="px-6 py-4 whitespace-nowrap">#281212</td>
//             <td className="px-6 py-4 whitespace-nowrap">Successful</td>
//             <td className="px-6 py-4 whitespace-nowrap">TRX901234</td>
//             <td className="px-6 py-4 whitespace-nowrap">Today, 11:20 AM</td>
//             <td className="px-6 py-4 whitespace-nowrap">₹2000.00</td>
//           </tr>
//           <tr>
//             <td className="px-6 py-4 whitespace-nowrap">#281213</td>
//             <td className="px-6 py-4 whitespace-nowrap">Processing</td>
//             <td className="px-6 py-4 whitespace-nowrap">TRX567890</td>
//             <td className="px-6 py-4 whitespace-nowrap">Tomorrow, 9:00 AM</td>
//             <td className="px-6 py-4 whitespace-nowrap">₹1800.00</td>
//           </tr>
//           <tr>
//             <td className="px-6 py-4 whitespace-nowrap">#281214</td>
//             <td className="px-6 py-4 whitespace-nowrap">Processing</td>
//             <td className="px-6 py-4 whitespace-nowrap">TRX098765</td>
//             <td className="px-6 py-4 whitespace-nowrap">Yesterday, 2:00 PM</td>
//             <td className="px-6 py-4 whitespace-nowrap">₹500.00</td>
//           </tr>
//           <tr>
//             <td className="px-6 py-4 whitespace-nowrap">#281215</td>
//             <td className="px-6 py-4 whitespace-nowrap">Successful</td>
//             <td className="px-6 py-4 whitespace-nowrap">TRX456789</td>
//             <td className="px-6 py-4 whitespace-nowrap">Today, 10:30 AM</td>
//             <td className="px-6 py-4 whitespace-nowrap">₹3000.00</td>
//           </tr>
//           <tr>
//             <td className="px-6 py-4 whitespace-nowrap">#281216</td>
//             <td className="px-6 py-4 whitespace-nowrap">Processing</td>
//             <td className="px-6 py-4 whitespace-nowrap">TRX987654</td>
//             <td className="px-6 py-4 whitespace-nowrap">Tomorrow, 11:30 AM</td>
//             <td className="px-6 py-4 whitespace-nowrap">₹1200.00</td>
//           </tr>
//           <tr>
//             <td className="px-6 py-4 whitespace-nowrap">#281217</td>
//             <td className="px-6 py-4 whitespace-nowrap">Processing</td>
//             <td className="px-6 py-4 whitespace-nowrap">TRX654321</td>
//             <td className="px-6 py-4 whitespace-nowrap">Yesterday, 4:00 PM</td>
//             <td className="px-6 py-4 whitespace-nowrap">₹900.00</td>
//           </tr>
//           <tr>
//             <td className="px-6 py-4 whitespace-nowrap">#281218</td>
//             <td className="px-6 py-4 whitespace-nowrap">Successful</td>
//             <td className="px-6 py-4 whitespace-nowrap">TRX234567</td>
//             <td className="px-6 py-4 whitespace-nowrap">Today, 9:45 AM</td>
//             <td className="px-6 py-4 whitespace-nowrap">₹1500.00</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
import React from "react";

const jobs = [
  {
    id: "#001",
    name: "John Doe",
    position: "Designer",
    levels: ["6/10", "7/10", "3/10", null],
    totalMarks: null,
    status: "Active",
    actions: "",
  },
  {
    id: "#002",
    name: "John Smith",
    position: "Angular Developer",
    levels: ["6/10", "5/10", "5/10", "8/10"],
    totalMarks: "24/40",
    status: "Hired",
    actions: "",
  },
  {
    id: "#003",
    name: "Johnson Smith",
    position: "Python Developer",
    levels: ["6/10", "7/10", "3/10", null],
    totalMarks: null,
    status: "Active",
    actions: "",
  },
  {
    id: "#004",
    name: "Stella",
    position: "Android Developer",
    levels: ["6/10", "2/10", "X", "X"],
    totalMarks: "8/40",
    status: "Reject",
    actions: "",
  },
  {
    id: "#005",
    name: "Randy",
    position: "IOS Developer",
    levels: ["6/10", "7/10", "3/10", null],
    totalMarks: null,
    status: "Active",
    actions: "",
  },
  {
    id: "#006",
    name: "John Doe",
    position: "Junior Designer",
    levels: ["6/10", "7/10", "3/10", null],
    totalMarks: null,
    status: "Active",
    actions: "",
  },
];

const Table = () => {
  return (
    <div className="jobtable overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            <th className="px-4 py-2 text-xs font-medium text-black tracking-wider">
              Job ID
            </th>
            <th className="px-4 py-2 text-xs font-medium text-black tracking-wider">
              Name
            </th>
            <th className="px-4 py-2 text-xs font-medium text-black tracking-wider">
              Position
            </th>
            <th className="px-4 py-2 text-xs font-medium text-black tracking-wider">
              1st Level
            </th>
            <th className="px-4 py-2 text-xs font-medium text-black tracking-wider">
              2nd Level
            </th>
            <th className="px-4 py-2 text-xs font-medium text-black tracking-wider">
              3rd Level
            </th>
            <th className="px-4 py-2 text-xs font-medium text-black tracking-wider">
              4th Level
            </th>
            <th className="px-4 py-2 text-xs font-medium text-black tracking-wider">
              Total Marks
            </th>
            <th className="px-4 py-2 text-xs font-medium text-black tracking-wider">
              Status
            </th>
            <th className="px-4 py-2 text-xs font-medium text-black tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-b border-gray-200">
              <td className="px-4 py-2 text-xs text-gray-700">{job.id}</td>
              <td className="px-4 py-2 text-xs text-gray-700">{job.name}</td>
              <td className="px-4 py-2 text-xs text-gray-700">
                {job.position}
              </td>
              {job.levels.map((level, index) =>
                !level ? (
                  <div className="px-6 py-2 text-xs text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                ) : (
                  <td key={index} className="px-4 py-2 text-xs text-gray-700">
                    {level}
                  </td>
                )
              )}
              <td className="px-4 py-2 text-xs text-gray-700">
                {!job.totalMarks ? (
                  <div className="px-6 py-2 text-xs text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </div>
                ) : (
                  job.totalMarks
                )}
              </td>
              <td className={`px-4 py-2 text-xs ${getStatusColor(job.status)}`}>
                <div className="px-2 py-3">{job.status}</div>
              </td>
              <td className="px-6 py-2 text-xs text-gray-700">
                {
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-yellow-50 text-yellow-500'; // Green background for active status
      case 'Hired':
        return 'bg-green-50 text-green-500'; // Blue background for hired status
      case 'Reject':
        return 'bg-red-50 text-red-500'; // Red background for reject status
      default:
        return 'text-gray-700'; // Default gray for unknown status
    }
  };

export default Table;
