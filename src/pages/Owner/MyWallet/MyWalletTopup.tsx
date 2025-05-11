import { useState } from "react";

type BankInfo = {
  name: string;
  accountName: string;
  accountNumber: string;
};

export const MyWalletTopup = () => {
  const [amount, setAmount] = useState<number>(19000000);
  const [proofPhoto, setProofPhoto] = useState<File | null>(null);

  const taxRate = 0.11;
  const taxAmount = amount * taxRate;
  const grandTotal = amount + taxAmount;

  const walletBalance = 18000000;

  const bankInfo: BankInfo = {
    name: "BWA Asia",
    accountName: "Kreativa Inc",
    accountNumber: "2341293128491",
  };


  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProofPhoto(event.target.files[0]);
    }
  };

  const handleDeletePhoto = () => {
    setProofPhoto(null);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-48 p-4">
        <nav className="space-y-4">
          <button className="border border-black px-4 py-2 font-semibold">My Contests</button>
          <button className="border border-black px-4 py-2 font-semibold">My Wallet</button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-bold">Top Up Wallet</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div className="text-right">
              <p className="font-semibold">Irama Manji</p>
              <p className="text-sm">Role Owner</p>
              <a href="#" className="text-sm underline">
                Logout
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white text-black grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Form Section */}
          <div>
            <div className="mb-6">
              <h2 className="font-semibold mb-2">Send payment to</h2>
              <p>
                <strong>Bank Name:</strong> {bankInfo.name}
              </p>
              <p>
                <strong>Bank Account:</strong> {bankInfo.accountName}
              </p>
              <p>
                <strong>Bank Acc No:</strong> {bankInfo.accountNumber}
              </p>
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-1">Top up amount</label>
              <input type="number" className="w-full border border-gray-400 px-4 py-2" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="type amount" />
            </div>

            <div className="mb-6 space-y-1">
              <p>
                <strong>Amount</strong> <span className="ml-2">Rp {amount.toLocaleString("id-ID")}</span>
              </p>
              <p>
                <strong>Tax 11%</strong> <span className="ml-2">Rp {taxAmount.toLocaleString("id-ID")}</span>
              </p>
              <p>
                <strong>Grand Total</strong> <span className="ml-2">Rp {grandTotal.toLocaleString("id-ID")}</span>
              </p>
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Proof of payment</label>
              {proofPhoto ? (
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 bg-gray-300 flex items-center justify-center text-sm text-gray-700">Photo added</div>
                  <button onClick={handleDeletePhoto} className="border px-4 py-2 text-sm hover:bg-gray-100">
                    Delete photo
                  </button>
                </div>
              ) : (
                <label className="w-24 h-24 bg-gray-300 flex items-center justify-center text-sm text-gray-700 cursor-pointer">
                  Add Photo
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
              )}
            </div>

            <button className="w-full bg-blue-600 text-white py-2 font-semibold rounded hover:bg-blue-700">Submit My Top Up</button>
          </div>

          {/* Right Wallet Summary */}
          <div className="space-y-6">
            <div className="bg-[#1D0F39] text-white p-6 rounded-2xl w-full">
              <p className="text-lg font-semibold">Irama Wallet</p>
              <p className="text-sm text-gray-300 mb-4">Active</p>
              <p className="text-2xl font-bold">Rp {walletBalance.toLocaleString("id-ID")}</p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Follow Terms & Rules</h2>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                <li>lorem dolor si amet makan ayam biar sehat</li>
                <li>lorem dolor si amet makan ayam biar sehat</li>
                <li>lorem dolor si amet makan ayam biar sehat</li>
                <li>lorem dolor si amet makan ayam biar sehat</li>
                <li>lorem dolor si amet makan ayam biar sehat</li>
                <li>lorem dolor si amet makan ayam biar sehat</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
