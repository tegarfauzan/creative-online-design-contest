type Contest = {
  id: number;
  title: string;
  category: string;
  status: "Open" | "Closed";
  submissions: number;
  imageUrl?: string;
};

export const MyContests = () => {
  const contests: Contest[] = [
    {
      id: 1,
      title: "Landing page eat catering healthy",
      category: "Web Design",
      status: "Open",
      submissions: 142,
    },
    {
      id: 2,
      title: "Landing page eat catering healthy",
      category: "Web Design",
      status: "Closed",
      submissions: 142,
    },
    {
      id: 3,
      title: "Landing page eat catering healthy",
      category: "Web Design",
      status: "Open",
      submissions: 142,
    },
    {
      id: 4,
      title: "Landing page eat catering healthy",
      category: "Web Design",
      status: "Closed",
      submissions: 142,
    },
    {
      id: 5,
      title: "Landing page eat catering healthy",
      category: "Web Design",
      status: "Open",
      submissions: 142,
    },
  ];

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <aside className="w-48 p-4">
        <nav className="space-y-4">
          <button className="border border-black px-4 py-2 font-semibold">My Contests</button>
          <button className="border border-black px-4 py-2 font-semibold">My Wallet</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold mb-6">Contests</h1>
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

        <div className="p-8 bg-white text-black">
          <div className="flex justify-end mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add new</button>
          </div>

          {contests.length === 0 ? (
            <p className="text-sm text-gray-500">You have not created any contests.</p>
          ) : (
            <div className="space-y-6">
              {contests.map((contest) => (
                <div key={contest.id} className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-4 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gray-300 rounded" />
                    <div>
                      <p className="font-semibold">{contest.title}</p>
                      <p className="text-sm text-gray-600">{contest.category}</p>{" "}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <div className="text-sm">
                      <span className="font-semibold mr-2">{contest.status}</span>
                      {contest.submissions} submissions
                    </div>
                    <div className="flex gap-2">
                      <button className="border px-4 py-1 text-sm hover:bg-gray-100">Details</button>
                      <button className="border px-4 py-1 text-sm hover:bg-gray-100">Manage</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
