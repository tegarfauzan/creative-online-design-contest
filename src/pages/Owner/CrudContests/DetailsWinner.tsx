import { useState } from "react";

export const DetailsWinner = () => {
  const [activeTab, setActiveTab] = useState<"brief" | "submissions" | "others">("submissions");

  // Static mock data
  const winner = {
    image: "Preview Image",
    name: "Angga Risky",
    prize: "Rp 190.000.000",
  };

  const submissions = [
    { image: "Preview Image", name: "Angga Risky" },
    { image: "Preview Image", name: "Angga Risky" },
    { image: "Preview Image", name: "Angga Risky" },
    { image: "Preview Image", name: "Angga Risky" },
  ];

  const renderBriefTab = () => <div />;

  const renderSubmissionsTab = () => (
    <div className="space-y-8">
      {/* Submit Section */}
      <div className="flex justify-between items-center">
        <p className="text-sm">Are you ready to submit your design work?</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700">
          Submit Design
        </button>
      </div>

      {/* Winner Section */}
      <div>
        <h3 className="font-semibold text-sm border-b pb-2 mb-4">Winner</h3>
        {winner ? (
          <div className="flex items-center gap-6 border-b pb-6">
            <div className="w-32 h-32 bg-gray-300 flex items-center justify-center text-sm underline">
              {winner.image}
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Prize</p>
              <p className="text-2xl font-bold text-black">{winner.prize}</p>
              <p className="text-xs text-gray-600 mt-2">by {winner.name}</p>
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-500">No winner has been selected yet.</p>
        )}
      </div>

      {/* Contest Submissions */}
      <div>
        <h3 className="font-semibold text-sm border-b pb-2 mb-4">Contest Submissions</h3>
        {submissions.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {submissions.map((submission, index) => (
              <div key={index} className="space-y-2">
                <div className="w-full aspect-square bg-gray-300 flex items-center justify-center text-sm underline">
                  {submission.image}
                </div>
                <p className="text-xs text-gray-600">by {submission.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No submissions yet.</p>
        )}
      </div>
    </div>
  );

  const renderOthersTab = () => <div />;

  const renderTabContent = () => {
    switch (activeTab) {
      case "brief":
        return renderBriefTab();
      case "submissions":
        return renderSubmissionsTab();
      case "others":
        return renderOthersTab();
      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto text-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-sm text-gray-600">
            Contest details - category Web Design
          </p>
          <h1 className="text-2xl font-bold leading-snug">
            Landing Page design for Saas Digital Marketing Techno
          </h1>
        </div>
        <div className="text-right">
          <p className="font-semibold">Irama Manji</p>
          <a
            href="#"
            className="text-xs text-gray-600 hover:text-gray-800 underline"
          >
            Logout
          </a>
        </div>
      </div>

      {/* Image Header */}
      <div className="w-full h-64 bg-gray-300 mb-6" />

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("brief")}
          className={`px-4 py-2 border text-sm font-semibold ${
            activeTab === "brief"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          Tabs Brief
        </button>
        <button
          onClick={() => setActiveTab("submissions")}
          className={`px-4 py-2 border text-sm font-semibold ${
            activeTab === "submissions"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          Tabs Submissions
        </button>
        <button
          onClick={() => setActiveTab("others")}
          className={`px-4 py-2 border text-sm font-semibold ${
            activeTab === "others"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          Tabs Others
        </button>
      </div>

      {/* Content */}
      {renderTabContent()}
    </div>
  );
};
