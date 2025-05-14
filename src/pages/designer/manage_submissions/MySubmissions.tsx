import { Link } from "react-router-dom";
import type { SidebarSection } from "../../../types/type";
import { Sidebar } from "../../../components/Sidebar";

import type { SubmissionSection } from "../../../types/type";
import type { User } from "../../../types/type";
import { Profile } from "../../../components/Profile";

export const sidebarSections: SidebarSection[] = [
  {
    links: [{ label: "My Submissions", path: "/designer/submissions" }],
  },
  {
    links: [{ label: "My Wallet", path: "/designer/wallet" }],
  },
];

const user: User = {
  name: "Irama Manji",
  role: "Role Designer",
  avatarUrl: "https://via.placeholder.com/40", // placeholder image
};

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
    },
    {
      id: "2",
      title: "Landing page eat catering healthy",
      category: "Web Design",
      submissionStatus: "In Review",
      contestStatus: "Open",
      totalSubmissions: 142,
      photo: "",
    },
    {
      id: "3",
      title: "Landing page eat catering healthy",
      category: "Web Design",
      submissionStatus: "Eliminated",
      contestStatus: "Closed",
      totalSubmissions: 142,
      photo: "",
    },
    {
      id: "4",
      title: "Landing page eat catering healthy",
      category: "Web Design",
      submissionStatus: "Eliminated",
      contestStatus: "Closed",
      totalSubmissions: 142,
      photo: "",
    },
    {
      id: "5",
      title: "Landing page eat catering healthy",
      category: "Web Design",
      submissionStatus: "Winner",
      contestStatus: "Closed",
      totalSubmissions: 142,
      photo: "",
    },
  ],
};

export const MySubmissions = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-2xl font-bold">My submissions</h1>
          <Profile user={user} />
        </div>

        {submissionSection.submissions.length === 0 ? (
          <p className="text-gray-500">You have no submissions yet.</p>
        ) : (
          <div className="space-y-6">
            {submissionSection.submissions.map((submission) => (
              <div key={submission.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center space-x-4 min-w-[402px] grow">
                  <div className="w-20 h-20 bg-gray-300" />
                  <div>
                    <h2 className="font-bold">{submission.title}</h2>
                    <p className="text-gray-600">{submission.category}</p>
                  </div>
                </div>
                <p className="font-semibold min-w-[103px] grow">{submission.submissionStatus}</p>
                <p className="font-semibold min-w-[58px] grow">{submission.contestStatus}</p>
                <p className="font-semibold min-w-[181px] grow">{submission.totalSubmissions} submissions</p>
                <div className="min-w-[103px] flex justify-center">
                  <Link to={`/designer/submissions/details`} className="border border-black px-4 py-2 font-semibold">
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
