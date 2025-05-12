import React, { useState } from 'react';
import { SidebarManager } from '../../../components/SidebarManager';
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";

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

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // ✅ You can do validation / API calls here
    const isValid = true;

    if (isValid) {
      // Navigate to another route
      navigate("/manager/categories");
    }
  };

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <SidebarManager/>

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
