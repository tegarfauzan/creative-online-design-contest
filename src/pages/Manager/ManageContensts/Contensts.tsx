import { useState } from "react";

interface Contest {
  id: number;
  title: string;
  category: string;
  owner: string;
}

const dummyContests: Contest[] = [
  { id: 1, title: 'Landing page eat catering healthy', category: 'Web Design', owner: 'Adriana' },
  { id: 2, title: 'Landing page eat catering healthy', category: 'Web Design', owner: 'Adriana' },
  { id: 3, title: 'Landing page eat catering healthy', category: 'Web Design', owner: 'Adriana' },
  { id: 4, title: 'Landing page eat catering healthy', category: 'Web Design', owner: 'Adriana' },
];

export const ContestsPage = () => {
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
      <aside className="w-64 border-r p-4 space-y-6">
        <button className="w-full border px-4 py-2 font-semibold">Overview</button>
        <div>
          <p className="font-semibold">Contest</p>
          <div className="pl-2 border-t mt-2 pt-2 space-y-1">
            <p>Categories</p>
            <p>Contests</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Members</p>
          <div className="pl-2 border-t mt-2 pt-2 space-y-1">
            <p>Owners</p>
            <p>Designers</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Payment</p>
          <div className="pl-2 border-t mt-2 pt-2 space-y-1">
            <p>Transactions</p>
            <p>Wallets</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Users</p>
          <div className="pl-2 border-t mt-2 pt-2 space-y-1">
            <p>Users</p>
            <p>Assign Role</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <h1 className="text-3xl font-bold">Contests</h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold">Ayunda Shayna</p>
              <p className="text-sm">Role Manager</p>
              <a href="#" className="text-sm underline text-black">
                Logout
              </a>
            </div>
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Contest List */}
        <div className="space-y-6">
          {dummyContests.map((contest) => (
            <div
              key={contest.id}
              className="flex justify-between items-center border-b pb-4"
            >
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
                <button
                  className="border px-4 py-1"
                  onClick={() => handleDeleteClick(contest.id)}
                >
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
            <p className="text-lg font-semibold mb-6">
              Are you sure you want to delete this?
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="border px-4 py-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
