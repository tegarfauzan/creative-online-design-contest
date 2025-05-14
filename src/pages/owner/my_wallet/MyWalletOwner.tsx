import { Link } from 'react-router-dom';
import type { SidebarSection } from "../../../types/type";
import { Sidebar } from "../../../components/Sidebar";

export const sidebarSections: SidebarSection[] = [
  {
    links: [{ label: "My Contests", path: "/owner/contests" }],
  },
  {
    links: [{ label: "My Wallet", path: "/owner/wallet" }],
  },
];
type Transaction = {
  id: number;
  type: "Top Up" | "Contest";
  date: string;
  amount: number;
  status: "Pending" | "Approved" | "Declined";
  method: string;
};

export const MyWalletOwner = () => {
  const walletBalance = 18_000_000;

  const transactions: Transaction[] = [
    {
      id: 1,
      type: "Top Up",
      date: "15 May 2030",
      amount: 18_000_000,
      status: "Pending",
      method: "Manual Payment",
    },
    {
      id: 2,
      type: "Contest",
      date: "15 May 2030",
      amount: -66_000_000,
      status: "Approved",
      method: "Manual Payment",
    },
    {
      id: 3,
      type: "Top Up",
      date: "15 May 2030",
      amount: 66_000_000,
      status: "Declined",
      method: "Manual Payment",
    },
  ];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-bold">My Wallet</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div className="text-right">
              <p className="font-semibold">Irama Manji</p>
              <p className="text-sm">Role Owner</p>
              <a href="#" className="text-sm underline">
                Logout
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white text-black">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div className="bg-[#1D0F39] text-white p-6 rounded-2xl w-full md:w-[350px] mb-6 md:mb-0">
          <p className="text-lg font-semibold">Irama Wallet</p>
          <p className="text-sm text-gray-300 mb-4">Active</p>
          <p className="text-2xl font-bold">Rp {walletBalance.toLocaleString("id-ID")}</p>
        </div>
        <div className="md:ml-8">
          <p className="mb-4">You are owner role so you can topup wallet to open new contests</p>
          <Link to="/owner/wallet/topup">
          <div className="bg-blue-600 text-white px-4 py-2 rounded">Topup Wallet</div>
          </Link>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Transactions</h2>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-sm">No transactions available.</p>
      ) : (
        <div className="space-y-6">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-lg" />
                <div>
                  <p className="font-semibold">{tx.type}</p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">{tx.amount < 0 ? `- Rp${Math.abs(tx.amount).toLocaleString("id-ID")}` : `Rp${tx.amount.toLocaleString("id-ID")}`}</p>

                <p className="text-sm">{tx.status}</p>
                <p className="text-sm">{tx.method}</p>
              </div>

              <button className="border px-4 py-1 text-sm hover:bg-gray-100 ml-4">Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
      </main>
    </div>
  );
};


