import React, { useState } from 'react';

export const AddCategories = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleDeletePhoto = () => {
    setPhoto(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi submit
    console.log({ name, about, photo });
  };

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
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <h1 className="text-3xl font-bold">Add new category</h1>
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

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4 items-center">
            <label className="w-32 h-32 bg-gray-300 flex items-center justify-center text-sm font-semibold cursor-pointer">
              Add Photo
              <input type="file" className="hidden" onChange={handlePhotoChange} />
            </label>
            <button
              type="button"
              onClick={handleDeletePhoto}
              className="border px-4 py-2 text-sm"
            >
              Delete photo
            </button>
          </div>

          <input
            type="text"
            placeholder="Name"
            className="w-full border px-4 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="about"
            className="w-full border px-4 py-2"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />

          <button type="submit" className="bg-blue-600 text-white px-6 py-2">
            Save data
          </button>
        </form>
      </main>
    </div>
  );
};
