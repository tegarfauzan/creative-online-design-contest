import type { SidebarSection, Owner, User } from "../../../types/type";
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

export const Owners = () => {
  const owners: Owner[] = [
    {
      id: 1,
      name: "Windia Putri",
      email: "windia@putri.com",
      ktp: "18239182312",
      gender: "Female",
      role: "Owner",
      photo: "",
    },
    {
      id: 2,
      name: "Windia Putri",
      email: "windia@putri.com",
      ktp: "18239182312",
      gender: "Female",
      role: "Owner",
      photo: "",
    },
    {
      id: 3,
      name: "Windia Putri",
      email: "windia@putri.com",
      ktp: "18239182312",
      gender: "Female",
      role: "Owner",
      photo: "",
    },
    {
      id: 4,
      name: "Windia Putri",
      email: "windia@putri.com",
      ktp: "18239182312",
      gender: "Female",
      role: "Owner",
      photo: "",
    },
    {
      id: 5,
      name: "Windia Putri",
      email: "windia@putri.com",
      ktp: "18239182312",
      gender: "Female",
      role: "Owner",
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
          {owners.map((owner) => (
            <div key={owner.id} className="flex items-center bg-transparent p-4">
              {/* Gambar Profil */}
              <div className="w-[89px] h-[89px] rounded-full bg-[#D9D9D9]" />

              {/* Nama dan Email */}
              <div className="min-w-[242px] flex-1 ml-4">
                <div className="font-bold text-[22px] text-black">{owner.name}</div>
                <div className="font-normal text-[22px] text-black">{owner.email}</div>
              </div>

              {/* KTP */}
              <div className="min-w-[196px] flex-1">
                <div className="font-bold text-[22px] text-black">KTP {owner.ktp}</div>
              </div>

              {/* Gender */}
              <div className="min-w-[78px] flex-1">
                <div className="font-bold text-[22px] text-black">{owner.gender}</div>
              </div>

              {/* Role */}
              <div className="min-w-[78px] flex-1">
                <div className="font-bold text-[22px] text-black">{owner.role}</div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
