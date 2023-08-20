import { Member } from "@/lib/types/member";

interface Rows {
  rows: Member[];
  on_click: (id: number) => void;
}

export const Table: React.FC<Rows> = ({ rows, on_click }): JSX.Element => {
  const sortedRows = rows.slice().sort((a, b) => a.id - b.id);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Student ID
            </th>
            <th scope="col" className="px-6 py-3">
              Student Email
            </th>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Active Member
            </th>
            <th scope="col" className="px-6 py-3">
              <button className="sr-only">Edit</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedRows && sortedRows.map((row, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {row.id}
              </th>
              <td className="px-6 py-4">
                {row.student_id}
              </td>
              <td className="px-6 py-4">
                {row.student_email}
              </td>
              <td className="px-6 py-4">
                {row.first_name}
              </td>
              <td className="px-6 py-4">
                {row.last_name}
              </td>
              <td className={`px-6 py-4 ${row.active_member ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {row.active_member ? "true" : "false"}
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => on_click(row.id)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
