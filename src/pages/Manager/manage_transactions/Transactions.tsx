import { Link } from "react-router-dom";
import type { SidebarSection, User, Transaction } from "../../../types/type";
import { Sidebar } from "../../../components/Sidebar";
import { Profile } from "../../../components/Profile";

export const sidebarSections: SidebarSection[] = [
  {
    links: [{ label: "Overview", path: "/manager/overview" }],
  },
  {
    title: "Contest",
    links: [
      { label: "Categories", path: "/manager/categories" },
      { label: "Contests", path: "/manager/contests" },
    ],
  },
  {
    title: "Members",
    links: [
      { label: "Owners", path: "/manager/owners" },
      { label: "Designers", path: "#" },
    ],
  },
  {
    title: "Payment",
    links: [
      { label: "Transactions", path: "/manager/transactions" },
      { label: "Wallets", path: "/manager/wallets" },
    ],
  },
  {
    title: "Users",
    links: [
      { label: "Users", path: "#" },
      { label: "Assign Role", path: "#" },
    ],
  },
];



const transactions: Transaction[] = [
  {
    id: 1,
    photo: "",
    type: "Top Up",
    date: "15 May 2030",
    amount: 18000000,
    status: "Pending",
    method: "Manual Payment",
    userName: "Arin Supina",
    role: "Owner",
  },
  {
    id: 2,
    photo: "",
    type: "Prize",
    date: "15 May 2030",
    amount: 66000000,
    status: "Approved",
    method: "Manual Payment",
    userName: "Arin Supina",
    role: "Designer",
  },
  {
    id: 3,
    photo: "",
    type: "Withdrawal",
    date: "15 May 2030",
    amount: 66000000,
    status: "Declined",
    method: "Manual Payment",
    userName: "Arin Supina",
    role: "Designer",
  },
  {
    id: 4,
    photo: "",
    type: "Top Up",
    date: "15 May 2030",
    amount: 18000000,
    status: "Approved",
    method: "Manual Payment",
    userName: "Arin Supina",
    role: "Owner",
  },
  {
    id: 5,
    photo: "",
    type: "Top Up",
    date: "15 May 2030",
    amount: 18000000,
    status: "Pending",
    method: "Manual Payment",
    userName: "Arin Supina",
    role: "Owner",
  },
  {
    id: 6,
    photo: "",
    type: "Top Up",
    date: "15 May 2030",
    amount: 18000000,
    status: "Pending",
    method: "Manual Payment",
    userName: "Arin Supina",
    role: "Owner",
  },
];

const user: User = {
  name: "Ayunda Shayna",
  role: "Role Manager",
  avatarUrl: "https://via.placeholder.com/40", // placeholder image
};

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export const Transactions = () => {
  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold mb-6">Transactions</h1>
          <Profile user={user} />
        </div>

        {transactions.length === 0 ? (
          <p className="text-gray-500">No transactions available.</p>
        ) : (
          <div className="space-y-6">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between bg-white shadow-sm rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-xl" />
                  <div>
                    <p className="font-semibold">{tx.type}</p>
                    <p className="text-sm text-gray-500">{tx.date}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">{formatRupiah(tx.amount)}</p>
                  <p className="text-sm text-gray-500">{tx.method}</p>
                </div>

                <div className="text-right">
                  <p className={`font-semibold ${tx.status === "Approved" ? "text-green-600" : tx.status === "Pending" ? "text-yellow-600" : "text-red-600"}`}>{tx.status}</p>
                  <p className="text-sm text-gray-500">{tx.method}</p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">{tx.userName}</p>
                  <p className="text-sm text-gray-500">{tx.role}</p>
                </div>

                <Link to={`/manager/transactions/${tx.id}`} className="border border-gray-800 text-sm px-3 py-1 rounded hover:bg-gray-100">
                  Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
