import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import type { SidebarSection, TermsConditionSection, User, WalletData, WalletInfo } from "../../../types/type";
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

const TermsConditionSection: TermsConditionSection = {
  items: ["lorem dolor si amet makan ayam biar sehat", "lorem dolor si amet makan ayam biar sehat", "lorem dolor si amet makan ayam biar sehat", "lorem dolor si amet makan ayam biar sehat", "lorem dolor si amet makan ayam biar sehat"],
};

const WalletInfo: WalletInfo = {
  walletName: "Irama Wallet",
  bankName: "BWA Asia",
  bankAccountName: "Irama Manji",
  bankAccountNumber: "19928308883912",
  isActive: true,
  balance: 18000000,
};

const user: User = {
  name: "Irama Manji",
  role: "Designer",
  avatarUrl: "https://via.placeholder.com/40", // placeholder image
};

export const MyWalletWithDrawal = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // ✅ You can do validation / API calls here
    const isValid = true;

    if (isValid) {
      // Navigate to another route
      navigate("/designer/wallet/withdrawal/status");
    }
  };

  return (
    <div className="flex min-h-screen p-8 gap-12 font-sans text-black bg-white">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Main Content */}
      <div className="flex flex-col w-full gap-12">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold mb-6">withdraw Wallet</h1>
          {/* Profile */}
          <Profile user={user} />
        </div>
        <div className="flex gap-12">
          {/* Left Form Section */}
          <div className="flex-1">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-semibold mb-1">top up amount</label>
                <input type="text" placeholder="type amount" className="w-full border border-black px-4 py-2" />
              </div>

              <div>
                <label className="block font-semibold mb-1">your bank name</label>
                <input type="text" placeholder="type bank name" className="w-full border border-black px-4 py-2" />
              </div>

              <div>
                <label className="block font-semibold mb-1">your bank account name</label>
                <input type="text" placeholder="type bank account" className="w-full border border-black px-4 py-2" />
              </div>

              <div>
                <label className="block font-semibold mb-1">your bank acc no</label>
                <input type="text" placeholder="type bank acc number" className="w-full border border-black px-4 py-2" />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2">
                Request withdrawal now
              </button>
            </form>
          </div>

          {/* Right Info Section */}
          <div className="flex-1 space-y-6">
            {/* Wallet Card */}
            <div className="bg-[#15003A] text-white p-6 rounded-2xl">
              <div className="font-bold">{WalletInfo.walletName}</div>
              <div className="text-sm text-violet-200">{WalletInfo.isActive? "Active" : "Non Active"}</div>
              <div className="text-3xl font-bold mt-4">Rp {WalletInfo.balance.toLocaleString("id-ID")}</div>
            </div>

            {/* Terms & Rules */}
            <div>
              <h2 className="text-lg font-bold mb-2">Follow Terms & Rules</h2>
              {TermsConditionSection.items && TermsConditionSection.items.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1">
                  {TermsConditionSection.items.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No rules available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
