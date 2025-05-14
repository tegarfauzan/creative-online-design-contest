import { useState } from "react";
import type { ManageContest, SidebarSection, User } from "../../../types/type";
import { Sidebar } from "../../../components/Sidebar";
import { Profile } from "../../../components/Profile";

export const sidebarSections: SidebarSection[] = [
  {
    links: [{ label: "Overview", path: "/manager/overview" }],
  },
  {
    title: "Contest",
    links: [
      { label: "Categories", path: "/manager/categories" },
      { label: "Contests", path: "/manager/contests" },
    ],
  },
  {
    title: "Members",
    links: [
      { label: "Owners", path: "/manager/owners" },
      { label: "Designers", path: "#" },
    ],
  },
  {
    title: "Payment",
    links: [
      { label: "Transactions", path: "/manager/transactions" },
      { label: "Wallets", path: "/manager/wallets" },
    ],
  },
  {
    title: "Users",
    links: [
      { label: "Users", path: "#" },
      { label: "Assign Role", path: "#" },
    ],
  },
];



const dummyContests: ManageContest[] = [
  { id: 1, title: "Landing page eat catering healthy", category: "Web Design", owner: "Adriana", photo:"" },
  { id: 2, title: "Landing page eat catering healthy", category: "Web Design", owner: "Adriana", photo:"" },
  { id: 3, title: "Landing page eat catering healthy", category: "Web Design", owner: "Adriana", photo:"" },
  { id: 4, title: "Landing page eat catering healthy", category: "Web Design", owner: "Adriana", photo:"" },
];

const user: User = {
  name: "Ayunda Shayna",
  role: "Role Manager",
  avatarUrl: "https://via.placeholder.com/40", // placeholder image
};

export const Contests = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedContestId, setSelectedContestId] = useState<number | null>(null);

  const handleDeleteClick = (id: number) => {
    setSelectedContestId(id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    // Simulasi delete
    console.log(`Delete contest id: ${selectedContestId}`);
    setShowModal(false);
  };

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <h1 className="text-3xl font-bold">Contests</h1>
          <Profile user={user} />
        </div>

        {/* Contest List */}
        <div className="space-y-6">
          {dummyContests.map((contest) => (
            <div key={contest.id} className="flex justify-between items-center border-b pb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-300"></div>
                <div>
                  <p className="font-semibold">{contest.title}</p>
                  <p className="text-sm">{contest.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                  <span className="font-semibold">{contest.owner}</span>
                </div>
                <button className="border px-4 py-1">Details</button>
                <button className="border px-4 py-1" onClick={() => handleDeleteClick(contest.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-[#07071E66] backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-md w-80 text-center">
            <p className="text-lg font-semibold mb-6">Are you sure you want to delete this?</p>
            <div className="flex justify-center gap-4">
              <button className="border px-4 py-2" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="bg-red-600 text-white px-4 py-2" onClick={handleConfirmDelete}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
