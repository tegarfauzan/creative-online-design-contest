import { Link } from "react-router-dom";
import type { SidebarSection, User, WalletInfo, WalletTransactionResult } from "../../../types/type";
import { Sidebar } from "../../../components/Sidebar";
import { Profile } from "../../../components/Profile";

export const sidebarSections: SidebarSection[] = [
  {
    links: [{ label: "My Submissions", path: "/designer/submissions" }],
  },
  {
    links: [{ label: "My Wallet", path: "/designer/wallet" }],
  },
];

const user: User = {
  name: "Irama Manji",
  role: "Designer",
  avatarUrl: "https://via.placeholder.com/40", // placeholder image
};

const WalletInfo: WalletInfo = {
  walletName: "Irama Wallet",
  bankName: "BWA Asia",
  bankAccountName: "Irama Manji",
  bankAccountNumber: "19928308883912",
  isActive: true,
  balance: 18000000,
};

const WalletTransactionResult: WalletTransactionResult[] = [
  {
    id: 1,
    amount: 66000000,
    status: "Pending",
    method: "Manual Payment",
    name: "Withdrawal",
    bankName: WalletInfo.bankName,
    bankAccountName: WalletInfo.bankAccountName,
    bankAccountNumber: WalletInfo.bankAccountNumber,
    proofOfPaymentUrl: "https://via.placeholder.com/40",
    date: "15 May 2030",
  },
  {
    id: 2,
    amount: 66000000,
    status: "Approved",
    method: "Manual Payment",
    name: "Prize",
    bankName: WalletInfo.bankName,
    bankAccountName: WalletInfo.bankAccountName,
    bankAccountNumber: WalletInfo.bankAccountNumber,
    proofOfPaymentUrl: "https://via.placeholder.com/40",
    date: "15 May 2030",
  },
  {
    id: 3,
    amount: 66000000,
    status: "Pending",
    method: "Manual Payment",
    name: "Withdrawal",
    bankName: WalletInfo.bankName,
    bankAccountName: WalletInfo.bankAccountName,
    bankAccountNumber: WalletInfo.bankAccountNumber,
    proofOfPaymentUrl: "https://via.placeholder.com/40",
    date: "15 May 2030",
  },
];

export const MyWalletDesigner = () => {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold mb-4">My Wallet</h1>
          {/* User Info */}
          <Profile user={user} />
        </div>
        <div className="flex items-center gap-[72px">
          {/* Wallet Info */}
          <div className="bg-[#10042C] text-white rounded-2xl px-6 py-6 mb-6 w-96 flex-1">
            <div className="font-bold">{WalletInfo.walletName}</div>
            <div className="text-sm text-violet-200">{WalletInfo.isActive ? "Active" : "Non Active"}</div>
            <div className="text-3xl font-bold mt-4">Rp {WalletInfo.balance.toLocaleString("id-ID")}</div>
          </div>

          {/* Description & Button */}
          <div className="mb-8 flex flex-col justify-center flex-1 gap-[25px]">
            <p className="text-center">You are designer role so you can withdraw wallet</p>
            <Link to="/designer/wallet/withdrawal" className="bg-[#4F46E5] mx-auto text-white px-4 py-2 rounded font-semibold text-sm">
              Request Withdrawal
            </Link>
          </div>
        </div>

        {/* Transactions */}
        <h2 className="text-xl font-bold mb-4">Transactions</h2>

        {WalletTransactionResult.length > 0 ? (
          <div className="space-y-4">
            {WalletTransactionResult.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between border-b pb-4 flex-wrap md:flex-nowrap gap-4">
                {/* Left Info */}
                <div className="flex items-center gap-4 min-w-[278px] grow">
                  <div className="w-12 h-12 bg-gray-300 rounded-xl"></div>
                  <div>
                    <p className="font-bold">{tx.name}</p>
                    <p className="text-sm">{tx.date}</p>
                  </div>
                </div>

                {/* Middle Info */}
                <p className="font-bold min-w-[164px] grow">{tx.amount.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</p>

                <div className="min-w-[179px] grow">
                  <p className={`text-sm font-semibold ${tx.status === "Pending" ? "text-yellow-600" : tx.status === "Approved" ? "text-green-600" : "text-red-600"}`}>{tx.status}</p>
                  <p className="text-sm">{tx.method}</p>
                </div>

                {/* Button */}
                <div className="min-w-[120px] grow">{tx.status !== "Approved" && <button className="border border-black px-3 py-1 text-sm font-semibold">Details</button>}</div>
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
