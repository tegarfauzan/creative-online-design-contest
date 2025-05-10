export const TransactionsTopupApproved = () => {
  const data = {
    user: {
      name: "Arin Supian",
      ktp: "12930912412",
      role: "Owner",
      walletSecurity: "High Secured",
      status: "Approved",
    },
    transaction: {
      approved: true,
      paymentAt: "25 Mar 2025",
      subTotal: 22190000,
      tax: 22000,
      grandTotal: 41123000,
      insurance: true,
      loyalty: "50% Off",
      paymentMethod: "Manual Payment",
      paymentLevel: "High Standard",
      imageProofUrl: "#", // replace with actual URL if needed
    },
  };

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
          <h1 className="text-3xl font-bold mb-6">Top Up details</h1>
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

        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
            <div>
              <p className="font-semibold text-lg">{data.user?.name ?? "-"}</p>
              <p className="text-sm text-gray-700">KTP {data.user?.ktp ?? "-"}</p>
            </div>
            <div className="ml-auto flex gap-8 text-sm font-semibold">
              <span>Role {data.user?.role ?? "-"}</span>
              <span>Wallet {data.user?.walletSecurity ?? "-"}</span>
              <span>Status {data.user?.status ?? "-"}</span>
            </div>
          </div>

          <hr className="border-t border-gray-300 my-4" />

          {data.transaction?.approved && <div className="bg-blue-600 text-white font-medium px-4 py-2 w-max rounded mb-6">Transaksi sudah disetujui</div>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Payment At</span>
                <span>{data.transaction?.paymentAt ?? "-"}</span>
              </div>
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>Rp {data.transaction?.subTotal.toLocaleString() ?? "-"}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax 11%</span>
                <span>Rp {data.transaction?.tax.toLocaleString() ?? "-"}</span>
              </div>
              <div className="flex justify-between">
                <span>Grand Total</span>
                <span className="font-semibold">Rp {data.transaction?.grandTotal.toLocaleString() ?? "-"}</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance</span>
                <span>{data.transaction?.insurance ? "Included" : "Not Included"}</span>
              </div>
              <div className="flex justify-between">
                <span>Loyalty Member</span>
                <span>{data.transaction?.loyalty ?? "-"}</span>
              </div>
              <div className="flex justify-between">
                <span>Status</span>
                <span className="font-semibold">{data.user?.status ?? "-"}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-300"></div>
                <div>
                  <p className="font-semibold">{data.transaction?.paymentMethod ?? "-"}</p>
                  <p className="text-sm text-gray-600">{data.transaction?.paymentLevel ?? "-"}</p>
                </div>
              </div>

              <hr className="border-t border-gray-300" />

              <div className="w-full h-64 bg-gray-300 flex flex-col justify-center items-center text-sm">
                <p className="mb-2 font-medium">Image proof payment</p>
                <a href={data.transaction?.imageProofUrl ?? "#"} target="_blank" rel="noopener noreferrer" className="underline text-blue-800">
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
