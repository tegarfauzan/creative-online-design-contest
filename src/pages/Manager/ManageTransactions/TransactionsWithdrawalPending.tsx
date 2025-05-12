import { SidebarManager } from "../../../components/SidebarManager";

type WithdrawalData = {
  user: {
    name: string;
    ktp: string;
    role: string;
    wallet: string;
    status: string;
  };
  message: string;
  requestedAt: string;
  amount: string;
  insurance: string;
  paymentStatus: string;
  bank: {
    name: string;
    accountName: string;
    accountNumber: string;
  };
  paymentMethod: {
    name: string;
    description: string;
  };
};

const withdrawalData: WithdrawalData | null = {
  user: {
    name: 'Arin Supian',
    ktp: '12930912412',
    role: 'Designer',
    wallet: 'High Secured',
    status: 'Pending',
  },
  message: 'Withdrawal masih pending, silahkan tunggu dulu hingga uang anda dikirimkan',
  requestedAt: '25 Mar 2025',
  amount: 'Rp 22.190.000',
  insurance: 'Included',
  paymentStatus: 'Pending',
  bank: {
    name: 'BWA Asia',
    accountName: 'Arina Maritia',
    accountNumber: '19928308883912',
  },
  paymentMethod: {
    name: 'Manual Payment',
    description: 'High Standard',
  },
};

export const TransactionsWithdrawalPending = () => {
  if (!withdrawalData) {
    return (
      <div className="text-center text-gray-500 p-8">
        <p>No withdrawal data available.</p>
      </div>
    );
  }

  const {
    user,
    message,
    requestedAt,
    amount,
    insurance,
    paymentStatus,
    bank,
    paymentMethod,
  } = withdrawalData;

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <SidebarManager/>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold mb-6">Withdrawal details</h1>
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

        <div className="max-w-6xl mx-auto px-6 py-8">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b pb-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-300" />
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">KTP {user.ktp}</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-4 text-sm font-medium text-black">
          <span>Role {user.role}</span>
          <span>Wallet {user.wallet}</span>
          <span>Status {user.status}</span>
        </div>
      </div>

      <div className="bg-gray-100 text-sm text-gray-700 px-4 py-3 mb-6 rounded">
        {message}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-4 text-sm text-black">
          <div className="flex justify-between">
            <span className="font-medium">Requested At</span>
            <span>{requestedAt}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total Amount</span>
            <span>{amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Insurance</span>
            <span>{insurance}</span>
          </div>
          <div className="flex justify-between border-b pb-4">
            <span className="font-medium">Status</span>
            <span>{paymentStatus}</span>
          </div>

          <div className="mt-4">
            <h2 className="font-semibold mb-2">Send payment to</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Bank Name</span>
                <span>{bank.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bank Account</span>
                <span>{bank.accountName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bank Acc No</span>
                <span>{bank.accountNumber}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gray-300 flex-shrink-0 rounded" />
            <div>
              <p className="font-medium">{paymentMethod.name}</p>
              <p className="text-sm text-gray-600">{paymentMethod.description}</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Update the withdrawal</h3>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center text-xs font-medium text-black text-center">
                Add<br />Photo
              </div>
              <button className="border border-black text-black px-4 py-2 rounded">
                Delete photo
              </button>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded">
            Approve Now
          </button>
        </div>
      </div>
    </div>
      </main>
    </div>
  );
};



