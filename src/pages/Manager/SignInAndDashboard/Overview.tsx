import { SidebarManager } from "../../../components/SidebarManager";

export const Overview = () => {
  const summary = {
    prize: 190394593,
    contests: 189.3948,
    owners: 193.493,
    designers: 22394,
    categories: 22394,
    testimonials: 22394,
  };

  const latestContests = [
    { id: 1, name: "Carolina John", prize: 5190000 },
    { id: 2, name: "Carolina John", prize: 5190000 },
    { id: 3, name: "Carolina John", prize: 5190000 },
    { id: 4, name: "Carolina John", prize: 5190000 },
  ];

  const latestWithdrawals = [
    { id: 1, name: "Samarina", date: "5 May 2022", amount: 12405333 },
    { id: 2, name: "Samarina", date: "5 May 2022", amount: 12405333 },
    { id: 3, name: "Samarina", date: "5 May 2022", amount: 12405333 },
    { id: 4, name: "Samarina", date: "5 May 2022", amount: 12405333 },
  ];

  const formatRupiah = (value: number) => `Rp ${value.toLocaleString("id-ID")}`;

  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      {/* Sidebar */}
      <SidebarManager/>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="text-right">
            <div className="text-sm font-medium">Ayunda Shayna</div>
            <div className="text-xs text-gray-500">Role Manager</div>
            <button className="text-xs text-blue-500">Logout</button>
          </div>
        </div>

        {/* Summary Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{formatRupiah(summary.prize)}</div>
            <div className="text-sm text-gray-600">Prize</div>
          </div>
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{summary.contests}</div>
            <div className="text-sm text-gray-600">Contests</div>
          </div>
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{summary.owners}</div>
            <div className="text-sm text-gray-600">Owners</div>
          </div>
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{summary.designers}</div>
            <div className="text-sm text-gray-600">Designers</div>
          </div>
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{summary.categories}</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="border p-4 bg-white">
            <div className="text-lg font-semibold">{summary.testimonials}</div>
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
                  <li key={item.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300"></div>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm">{formatRupiah(item.prize)}</div>
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
                  <li key={item.id} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300"></div>
                    <div className="flex-1">
                      <div className="font-semibold">{item.name}</div>
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
