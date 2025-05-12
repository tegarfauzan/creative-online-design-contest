import { SidebarDesigner } from "../../../components/SidebarDesigner";
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";

export const MyWalletWithDrawal = () => {
  const walletData = {
    name: "Irama Manji",
    role: "Role Designer",
    walletName: "Irama Wallet",
    status: "Active",
    balance: 18000000,
    rules: [
      "lorem dolor si amet makan ayam biar sehat",
      "lorem dolor si amet makan ayam biar sehat",
      "lorem dolor si amet makan ayam biar sehat",
      "lorem dolor si amet makan ayam biar sehat",
      "lorem dolor si amet makan ayam biar sehat",
    ],
  };
  const navigate = useNavigate();

 const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault(); // Prevent page reload
 
     // ✅ You can do validation / API calls here
     const isValid = true;
 
     if (isValid) {
       // Navigate to another route
       navigate("/designer/wallet/withdrawal/pending");
     }
   };

  return (
    <div className="flex min-h-screen p-8 gap-12 font-sans text-black bg-white">
      {/* Sidebar */}
      <SidebarDesigner/>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row w-full gap-12">
        {/* Left Form Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">withdraw Wallet</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold mb-1">top up amount</label>
              <input
                type="text"
                placeholder="type amount"
                className="w-full border border-black px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">your bank name</label>
              <input
                type="text"
                placeholder="type bank name"
                className="w-full border border-black px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                your bank account name
              </label>
              <input
                type="text"
                placeholder="type bank account"
                className="w-full border border-black px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">your bank acc no</label>
              <input
                type="text"
                placeholder="type bank acc number"
                className="w-full border border-black px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2"
            >
              Request withdrawal now
            </button>
          </form>
        </div>

        {/* Right Info Section */}
        <div className="flex-1 space-y-6">
          {/* Profile */}
          <div className="flex justify-end items-center gap-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <div className="text-right">
              <div className="font-bold">{walletData.name}</div>
              <div className="text-sm text-gray-600">{walletData.role}</div>
              <a href="#" className="text-sm underline">
                Logout
              </a>
            </div>
          </div>

          {/* Wallet Card */}
          <div className="bg-[#15003A] text-white p-6 rounded-2xl">
            <div className="font-bold">{walletData.walletName}</div>
            <div className="text-sm text-violet-200">{walletData.status}</div>
            <div className="text-3xl font-bold mt-4">
              Rp {walletData.balance.toLocaleString("id-ID")}
            </div>
          </div>

          {/* Terms & Rules */}
          <div>
            <h2 className="text-lg font-bold mb-2">Follow Terms & Rules</h2>
            {walletData.rules.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1">
                {walletData.rules.map((rule, index) => (
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
  );
};
