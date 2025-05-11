type TransactionStatus = "Pending" | "Approved" | "Declined";

interface Transaction {
  id: number;
  type: "Withdrawal" | "Prize";
  date: string;
  amount: string;
  status: TransactionStatus;
  method: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    type: "Withdrawal",
    date: "15 May 2030",
    amount: "Rp 66.000.000",
    status: "Pending",
    method: "Manual Payment",
  },
  {
    id: 2,
    type: "Prize",
    date: "15 May 2030",
    amount: "Rp 66.000.000",
    status: "Approved",
    method: "Manual Payment",
  },
  {
    id: 3,
    type: "Withdrawal",
    date: "15 May 2030",
    amount: "Rp 66.000.000",
    status: "Declined",
    method: "Manual Payment",
  },
];

export const MyWallet = () => {
  return (
    <div className="flex min-h-screen font-sans p-8">
      {/* Sidebar */}
      <div className="w-1/6 flex flex-col gap-4">
        <button className="border border-black px-4 py-2 font-bold text-sm">My Submissions</button>
        <button className="border border-black px-4 py-2 text-sm">My Wallet</button>
      </div>

      {/* Main Content */}
      <div className="w-5/6 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold mb-4">My Wallet</h1>

            {/* Wallet Info */}
            <div className="bg-[#10042C] text-white rounded-2xl px-6 py-6 mb-6 w-96">
              <p className="font-semibold text-sm">Irama Wallet</p>
              <p className="text-sm text-gray-300">Active</p>
              <p className="text-2xl font-bold mt-2">Rp 18.000.000</p>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="flex flex-col">
              <p className="font-semibold">Irama Manji</p>
              <p className="text-sm">Role Designer</p>
              <a href="#" className="text-sm underline">
                Logout
              </a>
            </div>
          </div>
        </div>

        {/* Description & Button */}
        <div className="mb-8 flex items-center justify-between max-w-3xl">
          <p>You are designer role so you can withdraw wallet</p>
          <button className="bg-[#4F46E5] text-white px-4 py-2 rounded font-semibold text-sm">Request Withdrawal</button>
        </div>

        {/* Transactions */}
        <h2 className="text-xl font-bold mb-4">Transactions</h2>

        {transactions.length > 0 ? (
          <div className="space-y-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between border-b pb-4">
                {/* Left Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                  <div>
                    <p className="font-bold">{tx.type}</p>
                    <p className="text-sm">{tx.date}</p>
                  </div>
                </div>

                {/* Middle Info */}
                <div className="text-right">
                  <p className="font-bold">{tx.amount}</p>
                  <p className={`text-sm font-semibold ${tx.status === "Pending" ? "text-yellow-600" : tx.status === "Approved" ? "text-green-600" : "text-red-600"}`}>{tx.status}</p>
                  <p className="text-sm">{tx.method}</p>
                </div>

                {/* Button */}
                {tx.status !== "Approved" && <button className="border border-black px-3 py-1 text-sm font-semibold">Details</button>}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No transactions available.</p>
        )}
      </div>
    </div>
  );
};
