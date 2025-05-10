export const Owners = () => {
  const owners = [
    {
      id: 1,
      name: "Windia Putri",
      email: "windia@putri.com",
      ktp: "KTP 18239182312",
      gender: "Female",
      role: "Owner",
    },
    {
      id: 2,
      name: "Windia Putri",
      email: "windia@putri.com",
      ktp: "KTP 18239182312",
      gender: "Female",
      role: "Owner",
    },
    {
      id: 3,
      name: "Windia Putri",
      email: "windia@putri.com",
      ktp: "KTP 18239182312",
      gender: "Female",
      role: "Owner",
    },
    {
      id: 4,
      name: "Windia Putri",
      email: "windia@putri.com",
      ktp: "KTP 18239182312",
      gender: "Female",
      role: "Owner",
    },
    {
      id: 5,
      name: "Windia Putri",
      email: "windia@putri.com",
      ktp: "KTP 18239182312",
      gender: "Female",
      role: "Owner",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#FFFFFF] text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 space-y-6">
        <div>
          <button className="font-bold mb-2 block text-[18px]">Overview</button>
          <div className="space-y-1">
            <p className="font-semibold text-[18px]">Contest</p>
            <button className="block text-[18px]">Categories</button>
            <button className="block text-[18px]">Contests</button>
          </div>
          <div className="mt-4 space-y-1">
            <p className="font-semibold text-[18px]">Members</p>
            <button className="block text-[18px]">Owners</button>
            <button className="block text-[18px]">Designers</button>
          </div>
          <div className="mt-4 space-y-1">
            <p className="font-semibold text-[18px]">Payment</p>
            <button className="block text-[18px]">Transactions</button>
            <button className="block text-[18px]">Wallets</button>
          </div>
          <div className="mt-4 space-y-1">
            <p className="font-semibold text-[18px]">Users</p>
            <button className="block text-[18px]">Users</button>
            <button className="block text-[18px]">Assign Role</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <h1 className="text-[32px] font-bold">Overview</h1>
          <div className="text-right">
            <div className="font-medium text-[18px]">Ayunda Shayna</div>
            <div className="text-gray-500">Role Manager</div>
            <button className="text-blue-500">Logout</button>
          </div>
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
                <div className="font-bold text-[22px] text-black">{owner.ktp}</div>
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
