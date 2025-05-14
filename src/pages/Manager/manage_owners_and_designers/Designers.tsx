import type { SidebarSection, Designer, User } from "../../../types/type";
import { Sidebar } from "../../../components/Sidebar";
import { Profile } from "../../../components/Profile";

export const sidebarSections: SidebarSection[] = [
  {
    links: [{ label: "Overview", path: "/manager/overview" }],
  },
  {
    title: "Contest",
    links: [
      { label: "Categories", path: "/manager/categories" },
      { label: "Contests", path: "/manager/contests" },
    ],
  },
  {
    title: "Members",
    links: [
      { label: "Owners", path: "/manager/owners" },
      { label: "Designers", path: "#" },
    ],
  },
  {
    title: "Payment",
    links: [
      { label: "Transactions", path: "/manager/transactions" },
      { label: "Wallets", path: "/manager/wallets" },
    ],
  },
  {
    title: "Users",
    links: [
      { label: "Users", path: "#" },
      { label: "Assign Role", path: "#" },
    ],
  },
];

const user: User = {
  name: "Ayunda Shayna",
  role: "Role Manager",
  avatarUrl: "https://via.placeholder.com/40", // placeholder image
};

export const Designers = () => {
  const designers: Designer[] = [
    {
      id: 1,
      name: "Bani Kuala",
      email: "windia@putri.com",
      ktp: "18239182312",
      gender: "Male",
      role: "Designer",
      photo: "",
    },
    {
      id: 2,
      name: "Bani Kuala",
      email: "windia@putri.com",
      ktp: "18239182312",
      gender: "Male",
      role: "Designer",
      photo: "",
    },
    {
      id: 3,
      name: "Bani Kuala",
      email: "windia@putri.com",
      ktp: "18239182312",
      gender: "Male",
      role: "Designer",
      photo: "",
    },
    {
      id: 4,
      name: "Bani Kuala",
      email: "windia@putri.com",
      ktp: "18239182312",
      gender: "Male",
      role: "Designer",
      photo: "",
    },
    {
      id: 5,
      name: "Bani Kuala",
      email: "windia@putri.com",
      ktp: "18239182312",
      gender: "Male",
      role: "Designer",
      photo: "",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#FFFFFF] text-black">
      {/* Sidebar */}
      <Sidebar sections={sidebarSections} />

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h1 className="text-[32px] font-bold">Overview</h1>
          <Profile user={user} />
        </div>

        {/* Content */}
        <section className="flex flex-col gap-[22px]">
          {designers.map((designer) => (
            <div key={designer.id} className="flex items-center bg-transparent p-4">
              {/* Gambar Profil */}
              <div className="w-[89px] h-[89px] rounded-full bg-[#D9D9D9]" />

              {/* Nama dan Email */}
              <div className="min-w-[242px] flex-1 ml-4">
                <div className="font-bold text-[22px] text-black">{designer.name}</div>
                <div className="font-normal text-[22px] text-black">{designer.email}</div>
              </div>

              {/* KTP */}
              <div className="min-w-[196px] flex-1">
                <div className="font-bold text-[22px] text-black">KTP {designer.ktp}</div>
              </div>

              {/* Gender */}
              <div className="min-w-[78px] flex-1">
                <div className="font-bold text-[22px] text-black">{designer.gender}</div>
              </div>

              {/* Role */}
              <div className="min-w-[78px] flex-1">
                <div className="font-bold text-[22px] text-black">{designer.role}</div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
