import { useState } from "react";
import type { SidebarSection, SubmissionSection, User } from "../../../types/type";
import { Sidebar } from "../../../components/Sidebar";
import { Profile } from "../../../components/Profile";

export const sidebarSections: SidebarSection[] = [
  {
    links: [{ label: "My Submissions", path: "/designer/submissions" }],
  },
  {
    links: [{ label: "My Wallet", path: "/designer/wallet" }],
  },
];

export const SubmissionDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const submissionSection: SubmissionSection = {
    submissions: [
      {
        id: "1",
        title: "Landing page eat catering healthy",
        category: "Web Design",
        submissionStatus: "In Review",
        contestStatus: "Open",
        totalSubmissions: 142,
        photo: "",
        SubmissionDetail: {
          status: "Open",
          prize: 190_000_000,
          description: "We are looking at redesigning the existing cover pages for the field service reports we submit to Customers. The same cover is utilized for different types of reports, so the Title and Subtitle lines. We are looking at redesigning the existing cover pages for the field service reports we submit to Customers. The same cover is utilized for different types of reports, so the Title and Subtitle lines.",
          previewImageUrl: "",
        },
      },
    ],
  };

  const user: User = {
    name: "Ayunda Shayna",
    role: "Role Manager",
    avatarUrl: "https://via.placeholder.com/40", // placeholder image
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-bold">Submission details</h1>
          <Profile user={user} />
        </div>

        <div className="p-8 bg-white text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-gray-300" />
              <div>
                <p className="font-semibold">{submissionSection.submissions[0].title}</p>
                <p className="text-sm text-gray-600">{submissionSection.submissions[0].category}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">
                <span className="font-semibold">{submissionSection.submissions[0].SubmissionDetail?.status}</span> | {submissionSection.submissions[0].totalSubmissions} submissions
              </p>
              <button onClick={() => setIsModalOpen(true)} className="border px-4 py-1 text-sm hover:bg-gray-100">
                Details
              </button>
            </div>
          </div>

          <hr className="mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-300 h-64 flex items-center justify-center text-center text-sm text-gray-700">
              <a href="#" className="underline text-sm">
                Preview
              </a>
            </div>
            <div className="space-y-4">
              {submissionSection.submissions[0].submissionStatus === "Winner" && (
                <div className="flex flex-col gap-4">
                  <div className="bg-gray-100 border border-gray-300 p-3 text-sm text-gray-800">Selamat, anda memenangkan kontes ini, uang hadiah telah masuk kepada wallet anda saat ini</div>
                  <div>
                    <p className="font-semibold">URL File Master</p>
                    <p className="text-sm text-gray-700 mb-2">Berikan link master untuk di download oleh pemilik kontes, pastikan dapat diakses</p>
                    <input type="text" placeholder="Type link master google drive" value={`#`} className="w-full border border-gray-400 p-2 text-sm" />
                  </div>
                </div>
              )}
              {submissionSection.submissions[0].submissionStatus === "Eliminated" && (
                <div className="flex flex-col gap-4">
                  <div className="bg-gray-100 border border-gray-300 p-3 text-sm text-gray-800">Selamat, anda memenangkan kontes ini, uang hadiah telah masuk kepada wallet anda saat ini</div>
                </div>
              )}
              <div>
                <p className="font-semibold">Prize</p>
                <p>Rp {submissionSection.submissions[0].SubmissionDetail?.prize.toLocaleString("id-ID")}</p>
              </div>
              <div>
                <p className="font-semibold">Status</p>
                {submissionSection.submissions[0].submissionStatus === "Winner" && <p>Winner</p>}
                <p>In Review</p>
              </div>
              <div>
                <p className="font-semibold">About</p>
                <p className="text-sm text-gray-700">{submissionSection.submissions[0].SubmissionDetail?.description}</p>
              </div>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-[#07071E66] flex items-center justify-center z-50">
              <div className="bg-white flex p-[50px] max-w-4xl w-full mx-4">
                <div className="w-[678px] h-[452px] bg-gray-300 mr-8" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold mb-4">About</h2>
                    <p className="text-gray-700 text-sm">{submissionSection.submissions[0].SubmissionDetail?.description}</p>
                  </div>
                  <button onClick={() => setIsModalOpen(false)} className="mt-6 self-start px-4 py-2 border border-gray-400 rounded hover:bg-gray-100">
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
