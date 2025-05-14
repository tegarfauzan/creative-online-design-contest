import type { Contest, OverviewData, SidebarSection, User, Withdrawal } from "../../../types/type";
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

const overviewData: OverviewData = {
  prize: 190394593,
  contests: 189.3948,
  owners: 193.493,
  designers: 22.394,
  categories: 22.394,
  testimonials: 22.394,
};

const latestContests: Contest[] = [
  {
    user: "Carolina John",
    category: "Logo",
    amount: 5190000,
  },
  {
    user: "Carolina John",
    category: "Logo",
    amount: 5190000,
  },
  {
    user: "Carolina John",
    category: "Logo",
    amount: 5190000,
  },
  {
    user: "Carolina John",
    category: "Logo",
    amount: 5190000,
  },
];

const latestWithdrawals: Withdrawal[] = [
  {
    user: "Samarina",
    date: "5 May 2022",
    amount: 12405333,
  },
  {
    user: "Samarina",
    date: "5 May 2022",
    amount: 12405333,
  },
  {
    user: "Samarina",
    date: "5 May 2022",
    amount: 12405333,
  },
  {
    user: "Samarina",
    date: "5 May 2022",
    amount: 12405333,
  },
];

const user: User = {
  name: "Ayunda Shayna",
  role: "Role Manager",
  avatarUrl: "https://via.placeholder.com/40", // placeholder image
};

const formatRupiah = (value: number) => `Rp ${value.toLocaleString("id-ID")}`;

export const Overview = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold">Overview</h1>
          <Profile user={user} />
        </div>

        {/* Summary Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{formatRupiah(overviewData.prize)}</div>
            <div className="text-sm text-gray-600">Prize</div>
          </div>
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{overviewData.contests}</div>
            <div className="text-sm text-gray-600">Contests</div>
          </div>
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{overviewData.owners}</div>
            <div className="text-sm text-gray-600">Owners</div>
          </div>
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{overviewData.designers}</div>
            <div className="text-sm text-gray-600">Designers</div>
          </div>
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{overviewData.categories}</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{overviewData.testimonials}</div>
            <div className="text-sm text-gray-600">Testimonials</div>
          </div>
        </div>

        {/* Latest Contests & Withdrawals */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-bold mb-4">Latest Contests</h2>
            {latestContests.length === 0 ? (
              <p className="text-gray-500">No contest data available.</p>
            ) : (
              <ul className="space-y-4">
                {latestContests.map((item) => (
                  <li key={item.user} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300"></div>
                    <div>
                      <div className="font-semibold">{item.user}</div>
                      <div className="text-sm">{formatRupiah(item.amount)}</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">Latest Withdrawals</h2>
            {latestWithdrawals.length === 0 ? (
              <p className="text-gray-500">No withdrawal data available.</p>
            ) : (
              <ul className="space-y-4">
                {latestWithdrawals.map((item) => (
                  <li key={item.user} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300"></div>
                    <div className="flex-1">
                      <div className="font-semibold">{item.user}</div>
                      <div className="text-sm text-gray-500">{item.date}</div>
                    </div>
                    <div className="font-semibold">{formatRupiah(item.amount)}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
