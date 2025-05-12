import { useState } from "react";
import { SidebarOwner } from "../../../components/SidebarOwner";

type Submission = {
  id: number;
  name: string;
  date: string;
  status: "In Review" | "Winner";
  image: string;
};

export const ManageContestDetails = () => {
  const contest = {
    title: "Landing page eat catering healthy",
    category: "Web Design",
    image: "Preview Image",
    submissions: 1892,
  };

  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: 1,
      name: "Angga Risky",
      date: "11 May 2025",
      status: "In Review",
      image: "Preview Image",
    },
    {
      id: 2,
      name: "Angga Risky",
      date: "11 May 2025",
      status: "In Review",
      image: "Preview Image",
    },
  ]);

  const handleMakeWinner = (id: number) => {
    setSubmissions((prev) =>
      prev.map((submission) =>
        submission.id === id
          ? { ...submission, status: "Winner" }
          : submission
      )
    );
  };

  return (
    <div className="p-8 max-w-5xl mx-auto text-black">
      <div className="flex gap-4 mb-10">
        {/* Sidebar */}
        <SidebarOwner/>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-8">
            <div className="flex gap-4 items-start">
              <div className="w-20 h-20 bg-gray-300 flex items-center justify-center text-xs underline">
                {contest.image}
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">{contest.title}</h2>
                <p className="text-sm text-gray-700">{contest.category}</p>
              </div>
            </div>
            <button className="border border-black px-4 py-1 text-sm font-medium">
              Details
            </button>
          </div>

          <hr className="border-gray-300 mb-6" />

          <h3 className="text-lg font-semibold mb-4">
            Contest Submissions: {contest.submissions} submission
          </h3>

          {submissions.length > 0 ? (
            <div className="space-y-6">
              {submissions.map((submission) => (
                <div
                  key={submission.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 bg-gray-300 flex items-center justify-center text-xs underline">
                      {submission.image}
                    </div>
                    <div>
                      <p className="font-bold">{submission.name}</p>
                      <p className="text-sm text-gray-600">
                        Submitted at {submission.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-800">
                      {submission.status}
                    </span>
                    <button className="border border-black px-4 py-1 text-sm font-medium">
                      Details
                    </button>
                    {submission.status !== "Winner" && (
                      <button
                        className="border border-black px-4 py-1 text-sm font-medium"
                        onClick={() => handleMakeWinner(submission.id)}
                      >
                        Make Winner
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No submissions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};
