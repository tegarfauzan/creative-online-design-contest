import type { SidebarSection, User } from "../../../types/type";
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

type Wallet = {
  id: number;
  amount: number;
  security: string;
  user: {
    photo: string;
    name: string;
    role: string;
    avatar?: string;
  };
};

const wallets: Wallet[] = [
  {
    id: 1,
    amount: 190000000,
    security: "High secured",
    user: {
      photo: "",
      name: "Adriana Justine",
      role: "Designer",
    },
  },
  {
    id: 2,
    amount: 190000000,
    security: "High secured",
    user: {
      photo: "",
      name: "Adriana Justine",
      role: "Designer",
    },
  },
  {
    id: 3,
    amount: 190000000,
    security: "High secured",
    user: {
      photo: "",
      name: "Adriana Justine",
      role: "Designer",
    },
  },
  {
    id: 4,
    amount: 190000000,
    security: "High secured",
    user: {
      photo: "",
      name: "Adriana Justine",
      role: "Designer",
    },
  },
];

const user: User = {
  name: "Ayunda Shayna",
  role: "Role Manager",
  avatarUrl: "https://via.placeholder.com/40", // placeholder image
};
const formatRupiah = (value: number) => `Rp ${value.toLocaleString("id-ID")}`;

export const ManageWallets = () => {
  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold mb-6">Wallets</h1>
          <Profile user={user} />
        </div>

        {wallets.length === 0 ? (
          <p className="text-gray-500">No wallet data available.</p>
        ) : (
          <div className="space-y-6 mt-4">
            {wallets.map((wallet) => (
              <div key={wallet.id} className="flex items-center space-x-6">
                {/* Wallet Placeholder */}
                <div className="w-20 h-20 bg-gray-300"></div>

                {/* Amount & Security */}
                <div>
                  <div className="font-bold text-lg">{formatRupiah(wallet.amount)}</div>
                  <div className="text-gray-600">{wallet.security}</div>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3 ml-auto">
                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  <div className="font-semibold">{wallet.user.name}</div>
                  <div className="font-bold">{wallet.user.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
