import { useState } from "react";

export const SignUpUsers = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [role, setRole] = useState<string>("");

  const genders = ["Male", "Female", "Other"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold text-black mb-2">Sign Up Today</h1>
      <h2 className="text-xl font-semibold text-black mb-8">Create your account</h2>

      <div className="flex items-center gap-2 mb-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-center text-sm font-semibold text-black">
          {photo ? (
            <img
              src={photo}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <span>Add Photo</span>
          )}
        </div>
        {photo && (
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-full text-sm"
            onClick={() => setPhoto(null)}
          >
            Delete Photo
          </button>
        )}
      </div>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Complete Name"
          className="border rounded-full px-6 py-3 text-sm font-semibold text-center"
        />
        <select
          className="border rounded-full px-6 py-3 text-sm font-semibold text-center text-gray-500"
          defaultValue=""
        >
          <option value="" disabled>
            Select Gender
          </option>
          {genders.length > 0 ? (
            genders.map((gender) => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))
          ) : (
            <option disabled>No gender options</option>
          )}
        </select>

        <input
          type="email"
          placeholder="Email Address"
          className="border rounded-full px-6 py-3 text-sm font-semibold text-center"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border rounded-full px-6 py-3 text-sm font-semibold text-center"
        />

        <input
          type="password"
          placeholder="Password"
          className="border rounded-full px-6 py-3 text-sm font-semibold text-center"
        />
        <input
          type="password"
          placeholder="Password Confirmation"
          className="border rounded-full px-6 py-3 text-sm font-semibold text-center"
        />

        <div className="col-span-1 flex items-center gap-2 border rounded-full px-6 py-3">
          <input
            type="radio"
            name="role"
            value="contest_owner"
            checked={role === "contest_owner"}
            onChange={() => setRole("contest_owner")}
          />
          <label className="text-sm font-semibold">As a contest owner</label>
        </div>
        <div className="col-span-1 flex items-center gap-2 border rounded-full px-6 py-3">
          <input
            type="radio"
            name="role"
            value="designer"
            checked={role === "designer"}
            onChange={() => setRole("designer")}
          />
          <label className="text-sm font-semibold">As a designer</label>
        </div>
      </form>

      <button className="bg-[#5A32EA] text-white font-semibold px-8 py-3 mt-8 rounded-full">
        Sign Up Now
      </button>

      <div className="my-4 w-32 border-t border-gray-400"></div>

      <button className="bg-[#5A32EA] text-white font-semibold px-8 py-3 rounded-full">
        Sign in
      </button>
    </div>
  );
};
