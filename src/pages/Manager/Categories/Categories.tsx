import React from 'react';

type Category = {
  id: number;
  title: string;
  description: string;
  contestCount: number;
};

const staticCategories: Category[] = [
  {
    id: 1,
    title: 'Logo Design',
    description: 'High Quality Pixel',
    contestCount: 193,
  },
  {
    id: 2,
    title: 'Logo Design',
    description: 'High Quality Pixel',
    contestCount: 193,
  },
  {
    id: 3,
    title: 'Logo Design',
    description: 'High Quality Pixel',
    contestCount: 193,
  },
  {
    id: 4,
    title: 'Logo Design',
    description: 'High Quality Pixel',
    contestCount: 193,
  },
  {
    id: 5,
    title: 'Logo Design',
    description: 'High Quality Pixel',
    contestCount: 193,
  },
];

export const Categories = () => {
  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <aside className="w-64 border-r p-4 space-y-6">
        <div>
          <button className="w-full border px-4 py-2 font-semibold">Overview</button>
        </div>
        <div>
          <p className="font-semibold">Contest</p>
          <div className="pl-2 border-t mt-2 pt-2 space-y-1">
            <p>Categories</p>
            <p>Contests</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Members</p>
          <div className="pl-2 border-t mt-2 pt-2 space-y-1">
            <p>Owners</p>
            <p>Designers</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Payment</p>
          <div className="pl-2 border-t mt-2 pt-2 space-y-1">
            <p>Transactions</p>
            <p>Wallets</p>
          </div>
        </div>
        <div>
          <p className="font-semibold">Users</p>
          <div className="pl-2 border-t mt-2 pt-2 space-y-1">
            <p>Users</p>
            <p>Assign Role</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold mb-6">Categories</h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold">Ayunda Shayna</p>
              <p className="text-sm">Role Manager</p>
              <a href="#" className="text-sm underline text-black">
                Logout
              </a>
            </div>
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 mb-6">Add new</button>

        {staticCategories.length > 0 ? (
          <div className="space-y-4">
            {staticCategories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between border p-4 rounded"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-300" />
                  <div>
                    <p className="font-bold">{category.title}</p>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>

                <p className="font-semibold">{category.contestCount} contests</p>

                <div className="flex gap-2">
                  <button className="border px-4 py-1">Details</button>
                  <button className="border px-4 py-1">Edit</button>
                  <button className="border px-4 py-1">Delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No categories found.</p>
        )}
      </main>
    </div>
  );
};
