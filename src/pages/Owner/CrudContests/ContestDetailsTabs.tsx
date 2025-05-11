import { useState } from "react";

export const ContestDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState<"brief" | "submissions" | "others">("brief");

  // Static mock data
  const contestData = {
    category: "Web Design",
    title: "Landing Page design for Saas Digital Marketing Techno",
    about:
      "We are looking at redesigning the existing cover pages for the field service reports we submit to Customers. The same cover is utilized for different types of reports, so the Title and Subtitle lines are mandatory. The design should be minimalistic but modern. Preference is towards \"less speak more\" approach, as such the design should not be heavy in graphics, etc. The company standard font is Montserrat.",
    references: new Array(5).fill("lorem dolor si amet makan ayam biar sehat"),
    attachments: new Array(5).fill("Nama Asset Logo Misal"),
    deliverables: ["Master .FIG", "Prototype", "Preview .PNG", "Fonts"],
    prize: "Rp 190.000.000",
    submissions: new Array(8).fill("Preview Image"), // Placeholder previews
  };

  const renderBriefTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold mb-1">About</h3>
        <p className="text-sm text-gray-800">{contestData.about}</p>
      </div>

      <div>
        <h3 className="font-bold mb-1">References</h3>
        {contestData.references.length > 0 ? (
          <ul className="list-disc pl-5 text-sm space-y-1">
            {contestData.references.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No references available.</p>
        )}
      </div>

      <div>
        <h3 className="font-bold mb-1">Contest Attachments</h3>
        <p className="text-sm text-gray-800 mb-2">
          Download the assets below to support your work
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {contestData.attachments.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 border rounded p-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div>
                <p className="text-sm font-semibold">{item}</p>
                <button className="text-xs text-blue-600 hover:underline">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-1">Content Deliverable</h3>
        <p className="text-sm text-gray-800 mb-2">
          Once you win please provide these files
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contestData.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 border rounded p-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <p className="text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold mb-1">Prize</h3>
        <p className="text-2xl font-bold text-black">{contestData.prize}</p>
      </div>
    </div>
  );

  const renderSubmissionsTab = () => (
    <div>
      <div className="flex justify-end mb-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold">
          Submit Design
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {contestData.submissions.length > 0 ? (
          contestData.submissions.map((item, idx) => (
            <div
              key={idx}
              className="w-full aspect-square bg-gray-300 flex items-center justify-center text-center text-sm underline"
            >
              {item}
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500">No submissions yet.</p>
        )}
      </div>
    </div>
  );

  const renderOthersTab = () => (
    <div className="text-sm text-gray-500">No additional content.</div>
  );

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
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-gray-600">
            Contest details - category {contestData.category}
          </p>
          <h1 className="text-2xl font-bold leading-snug">
            {contestData.title}
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

      {/* Image Placeholder */}
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

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};
