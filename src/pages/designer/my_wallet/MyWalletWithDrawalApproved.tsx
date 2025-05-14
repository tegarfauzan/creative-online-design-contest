import type { SidebarSection } from "../../../types/type";
import { Sidebar } from "../../../components/Sidebar";

export const sidebarSections: SidebarSection[] = [
  {
    links: [{ label: "My Submissions", path: "/designer/submissions" }],
  },
  {
    links: [{ label: "My Wallet", path: "/designer/wallet" }],
  },
];

type WithdrawalData = {
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
  imageProofUrl: string;
};

const withdrawalData: WithdrawalData | null = {
  message: "Transaksi sudah disetujui",
  requestedAt: "25 Mar 2025",
  amount: "Rp 22.190.000",
  insurance: "Included",
  paymentStatus: "approved",
  bank: {
    name: "BWA Asia",
    accountName: "Arina Maritia",
    accountNumber: "19928308883912",
  },
  paymentMethod: {
    name: "Manual Payment",
    description: "High Standard",
  },
  imageProofUrl: "#", // replace with actual URL if needed
};

export const MyWalletWithDrawalApproved = () => {
  if (!withdrawalData) {
    return (
      <div className="text-center text-gray-500 p-8">
        <p>No withdrawal data available.</p>
      </div>
    );
  }

  const { message, requestedAt, amount, insurance, paymentStatus, bank, paymentMethod } = withdrawalData;

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold mb-6">withdraw Wallet</h1>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="font-bold">Irama Manji</div>
              <div className="text-sm">Role Designer</div>
              <a href="#" className="underline text-sm">
                Logout
              </a>
            </div>
          </div>
        </div>

        <div className="px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4 text-sm text-black">
              <div className="bg-[#363EFB] text-sm text-white px-4 py-3 mb-6 rounded">{message}</div>
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
                <div className="w-[131px] h-[100px] bg-gray-300 flex-shrink-0 rounded" />
                <div>
                  <p className="font-medium">{paymentMethod.name}</p>
                  <p className="text-sm text-gray-600">{paymentMethod.description}</p>
                </div>
              </div>
              <hr />
              <p className="font-semibold">Proof of payment</p>
              <div className="w-full h-64 bg-gray-300 flex flex-col justify-center items-center text-sm">
                <p className="mb-2 font-medium">Image proof payment</p>
                <a href={withdrawalData.imageProofUrl ?? "#"} target="_blank" rel="noopener noreferrer" className="underline text-blue-800">
                  preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
