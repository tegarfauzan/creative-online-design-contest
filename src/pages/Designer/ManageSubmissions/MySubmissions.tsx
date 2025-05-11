
type Submission = {
  id: number;
  title: string;
  category: string;
  status: "In Review" | "Eliminated" | "Winner";
  state: "Open" | "Closed";
  totalSubmissions: number;
};

const submissions: Submission[] = [
  {
    id: 1,
    title: "Landing page eat catering healthy",
    category: "Web Design",
    status: "In Review",
    state: "Open",
    totalSubmissions: 142,
  },
  {
    id: 2,
    title: "Landing page eat catering healthy",
    category: "Web Design",
    status: "In Review",
    state: "Open",
    totalSubmissions: 142,
  },
  {
    id: 3,
    title: "Landing page eat catering healthy",
    category: "Web Design",
    status: "Eliminated",
    state: "Closed",
    totalSubmissions: 142,
  },
  {
    id: 4,
    title: "Landing page eat catering healthy",
    category: "Web Design",
    status: "Eliminated",
    state: "Closed",
    totalSubmissions: 142,
  },
  {
    id: 5,
    title: "Landing page eat catering healthy",
    category: "Web Design",
    status: "Winner",
    state: "Closed",
    totalSubmissions: 142,
  },
];

export const MySubmissions = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-48 p-4">
        <nav className="space-y-4">
          <button className="border border-black px-4 py-2 font-semibold">My Submissions</button>
          <button className="border border-black px-4 py-2 font-semibold">My Wallet</button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-bold">My submissions</h1>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div className="text-right">
              <p className="font-semibold">Irama Manji</p>
              <p className="text-sm">Role Designer</p>
              <a href="#" className="text-sm underline">
                Logout
              </a>
            </div>
          </div>
        </div>

        {submissions.length === 0 ? (
          <p className="text-gray-500">You have no submissions yet.</p>
        ) : (
          <div className="space-y-6">
            {submissions.map((submission) => (
              <div
                key={submission.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-300" />
                  <div>
                    <h2 className="font-bold">{submission.title}</h2>
                    <p className="text-gray-600">{submission.category}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="text-right">
                    <p className="font-semibold">{submission.status}</p>
                    <p className="font-semibold">{submission.state}</p>
                    <p className="font-semibold">{submission.totalSubmissions} submissions</p>
                  </div>
                  <button className="border border-black px-4 py-2 font-semibold">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
