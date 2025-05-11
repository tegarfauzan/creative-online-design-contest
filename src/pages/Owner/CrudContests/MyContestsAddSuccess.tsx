import { useState } from "react";

type Contest = {
  title: string;
  category: string;
  image: string;
};

export const MyContestsAddSuccess = () => {
  const [contest] = useState<Contest | null>({
    title: "Landing page eat catering healthy",
    category: "Web Design",
    image: "Preview",
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-2xl font-bold mb-8">Your contest is live</h1>

      {contest ? (
        <>
          <div className="w-32 h-32 bg-gray-300 flex items-center justify-center text-xs mb-6">{contest.image}</div>

          <div className="mb-6">
            <p className="font-bold text-lg">{contest.title}</p>
            <p className="text-sm text-gray-700">{contest.category}</p>
          </div>

          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded">View Details</button>
        </>
      ) : (
        <p className="text-sm text-gray-500">No contest found.</p>
      )}
    </div>
  );
};
