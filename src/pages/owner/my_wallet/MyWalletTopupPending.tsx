import type { SidebarSection } from "../../../types/type";
import { Sidebar } from "../../../components/Sidebar";

export const sidebarSections: SidebarSection[] = [
  {
    links: [{ label: "My Contests", path: "/owner/contests" }],
  },
  {
    links: [{ label: "My Wallet", path: "/owner/wallet" }],
  },
];

type TopUpDetail = {
  user: {
    name: string;
    ktp: string;
    role: string;
    wallet: string;
    status: "Pending" | "Approved" | "Declined";
  };
  note: string;
  paymentAt: string;
  subTotal: number;
  tax: number;
  grandTotal: number;
  insurance: string;
  loyalty: string;
  method: {
    type: string;
    level: string;
  };
  proofImage: string;
};

const topUpData: TopUpDetail | null = {
  user: {
    name: "Arin Supian",
    ktp: "12930912412",
    role: "Owner",
    wallet: "High Secured",
    status: "Pending",
  },
  note: "Top up masih pending sehingga anda belum dapat membuka kontes terbaru, silahkan menunggu sesaat",
  paymentAt: "25 Mar 2025",
  subTotal: 22190000,
  tax: 22000,
  grandTotal: 41123000,
  insurance: "Included",
  loyalty: "50% Off",
  method: {
    type: "Manual Payment",
    level: "High Standard",
  },
  proofImage: "https://via.placeholder.com/400x300?text=Image+proof+payment",
};

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

export const MyWalletTopupPending = () => {
  if (!topUpData) {
    return <div className="p-8 text-center text-gray-500">No top up data available.</div>;
  }

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold mb-6">Top Up details</h1>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <div className="font-bold">Irama Manji</div>
              <div className="text-sm">Role Owner</div>
              <a href="#" className="underline text-sm">
                Logout
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 max-w-screen-xl mx-auto">
          <div className="bg-gray-200 text-sm text-black px-4 py-2 rounded mb-6 max-w-lg">{topUpData.note}</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">Payment At</span>
                <span>{topUpData.paymentAt}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Sub Total</span>
                <span>{formatRupiah(topUpData.subTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Tax 11%</span>
                <span>{formatRupiah(topUpData.tax)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Grand Total</span>
                <span>{formatRupiah(topUpData.grandTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Insurance</span>
                <span>{topUpData.insurance}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Loyalty Member</span>
                <span>{topUpData.loyalty}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Status</span>
                <span>{topUpData.user.status}</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-300" />
                <div>
                  <p className="font-semibold">{topUpData.method.type}</p>
                  <p className="text-sm text-gray-600">{topUpData.method.level}</p>
                </div>
              </div>

              <hr />

              <div className="bg-gray-300 w-full h-60 flex flex-col items-center justify-center text-sm font-medium text-black">
                Image proof payment
                <a href={topUpData.proofImage} target="_blank" rel="noopener noreferrer" className="underline mt-2">
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
