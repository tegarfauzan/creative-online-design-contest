import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import type { Role } from "../../../types/type";

export const SignInUsers = () => {
   const navigate = useNavigate();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    // ✅ You can do validation / API calls here
    const isValid = true;

    if (isValid) {
      // Navigate to another route
      navigate("/owner/wallet");
    }
  };


  const role:Role = {
  id: 1,
  name: "owner / designer"
};

  return (
    <div className="h-screen bg-[#FFFFFF] flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <main className="w-[306px] flex flex-col gap-[20px]">
          <header>
            <h1 className="text-[32px] font-bold text-[#000000]">Sign in as {role.name} </h1>
          </header>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border border-[#000000] px-[10px] py-[10px] bg-transparent text-[#404040] text-[16px] font-semibold"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-[#000000] px-[10px] py-[10px] bg-transparent text-[#404040] text-[16px] font-semibold"
          />

          <button
            type="submit"
            className="bg-[#363EFB] w-[189px] py-[10px] text-white text-[16px] font-semibold self-end text-center"
          >
            Sign In
          </button>
        </main>
      </form>
    </div>
  );
};
