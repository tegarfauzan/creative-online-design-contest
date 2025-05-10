
type Wallet = {
  id: number;
  amount: string;
  security: string;
  user: {
    name: string;
    role: string;
    avatar?: string;
  };
};

const wallets: Wallet[] = [
  {
    id: 1,
    amount: "Rp 190.000.000",
    security: "High secured",
    user: {
      name: "Adriana Justine",
      role: "Designer",
    },
  },
  {
    id: 2,
    amount: "Rp 190.000.000",
    security: "High secured",
    user: {
      name: "Adriana Justine",
      role: "Designer",
    },
  },
  {
    id: 3,
    amount: "Rp 190.000.000",
    security: "High secured",
    user: {
      name: "Adriana Justine",
      role: "Designer",
    },
  },
  {
    id: 4,
    amount: "Rp 190.000.000",
    security: "High secured",
    user: {
      name: "Adriana Justine",
      role: "Designer",
    },
  },
];

export const ManageWallets = () => {
  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <aside className="w-64 p-4 border-r border-gray-300">
        <button className="w-full mb-4 border border-black font-bold py-2">Overview</button>

        <div className="mb-6 border border-black">
          <div className="border-b border-black p-2 font-bold text-center">Contest</div>
          <div className="p-2 text-center">Categories</div>
          <div className="p-2 text-center">Contests</div>
        </div>

        <div className="mb-6 border border-black">
          <div className="border-b border-black p-2 font-bold text-center">Members</div>
          <div className="p-2 text-center">Owners</div>
          <div className="p-2 text-center">Designers</div>
        </div>

        <div className="mb-6 border border-black">
          <div className="border-b border-black p-2 font-bold text-center">Payment</div>
          <div className="p-2 text-center">Transactions</div>
          <div className="p-2 text-center">Wallets</div>
        </div>

        <div className="border border-black">
          <div className="border-b border-black p-2 font-bold text-center">Users</div>
          <div className="p-2 text-center">Users</div>
          <div className="p-2 text-center">Assign Role</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold mb-6">Wallets</h1>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="font-bold">Ayunda Shayna</div>
              <div className="text-sm">Role Manager</div>
              <a href="#" className="underline text-sm">
                Logout
              </a>
            </div>
          </div>
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
                  <div className="font-bold text-lg">{wallet.amount}</div>
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
