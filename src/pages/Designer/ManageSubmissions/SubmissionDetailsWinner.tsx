import { useState } from "react";

type SubmissionWinner = {
  title: string;
  category: string;
  status: "Closed" | "Open";
  totalSubmissions: number;
  prize: number;
  finalStatus: "Winner" | "In Review" | string;
  description: string;
  previewImageUrl?: string;
  masterFileUrl?: string;
  message?: string;
};

export const SubmissionDetailsWinner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [masterLink, setMasterLink] = useState("");

  const data: SubmissionWinner = {
    title: "Landing page eat catering healthy",
    category: "Web Design",
    status: "Closed",
    totalSubmissions: 142,
    prize: 190_000_000,
    finalStatus: "Winner",
    description: "We are looking at redesigning the existing cover pages for the field service reports we submit to Customers. The same cover is utilized for different types of reports, so the Title and Subtitle lines. We are looking at redesigning the existing cover pages for the field service reports we submit to Customers. The same cover is utilized for different types of reports, so the Title and Subtitle lines.",
    message: "Selamat, anda memenangkan kontes ini, uang hadiah telah masuk kepada wallet anda saat ini",
    previewImageUrl: "", // Add a preview image URL if needed
    masterFileUrl: "",
  };

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
          <h1 className="text-2xl font-bold">Submission details</h1>
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

        <div className="p-8 bg-white text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-gray-300" />
              <div>
                <p className="font-semibold">{data.title}</p>
                <p className="text-sm text-gray-600">{data.category}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm">
                <span className="font-semibold">{data.status}</span> | {data.totalSubmissions} submissions
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
              {data.message && <div className="bg-gray-100 border border-gray-300 p-3 text-sm text-gray-800">{data.message}</div>}

              <div>
                <p className="font-semibold">URL File Master</p>
                <p className="text-sm text-gray-700 mb-2">Berikan link master untuk di download oleh pemilik kontes, pastikan dapat diakses</p>
                <input type="text" placeholder="Type link master google drive" value={masterLink} onChange={(e) => setMasterLink(e.target.value)} className="w-full border border-gray-400 p-2 text-sm" />
              </div>

              <div>
                <p className="font-semibold">Prize</p>
                <p>Rp {data.prize.toLocaleString("id-ID")}</p>
              </div>

              <div>
                <p className="font-semibold">Status</p>
                <p>{data.finalStatus}</p>
              </div>

              <div>
                <p className="font-semibold">About</p>
                <p className="text-sm text-gray-700">{data.description}</p>
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
                    <p className="text-gray-700 text-sm">We are looking at redesigning the existing cover pages for the field service reports we submit to Customers. The same cover is utilized for different types of reports, so the Title and Subtitle lines.</p>
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
