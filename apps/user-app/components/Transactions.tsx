const transactions = [
  { id: 1, username: 'user1', time: '10:00 AM', credited: 500 },
  { id: 2, username: 'user2', time: '01:44 AM', debited: 200 },
	{ id: 2, username: 'user2', time: '1:00 PM', debited: 200 },
	{ id: 4, username: 'user1', time: '11:00 AM', credited: 20 },
	{ id: 9, username: 'user2', time: '12:00 AM', debited: 2578 },
	{ id: 2, username: 'user1', time: '11:37 AM', debited: 200 },
	{ id: 5, username: 'user2', time: '12:04 PM', credited: 10 },
	{ id: 9, username: 'user1', time: '11:23 AM', debited: 200 },
	{ id: 2, username: 'user2', time: '11:15 AM', debited: 200 }
  // Add more transactions as needed
];

export default function Transactions() {
  return (
    <div className="bg-[#191919] px-4 pt-3 pb-4 ml-2 rounded-xl flex-1 w-[50vw]">
      <strong className="text-gray-400 font-sm ">Recent Orders</strong>
      <div className="rounded-sm mt-3">
        <table className="table-auto w-full text-gray-300">
          <thead>
            <tr className=" bg-gray-800">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Username</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Debited</th>
              <th className="px-4 py-2 text-left">Credited</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-800">
                <td className="border-b border-gray-600 px-4 py-2">{transaction.id}</td>
                <td className="border-b border-gray-600 px-4 py-2">{transaction.username}</td>
                <td className="border-b border-gray-600 px-4 py-2">{transaction.time}</td>
                <td className="border-b border-gray-600 px-4 py-2">{transaction.debited || '-'}</td>
                <td className="border-b border-gray-600 px-4 py-2">{transaction.credited || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

