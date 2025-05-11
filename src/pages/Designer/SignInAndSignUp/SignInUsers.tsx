export const SignInUsers = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    console.log('Submitted:', { email, password });
  };

  return (
    <div className="h-screen bg-[#FFFFFF] flex items-center justify-center">
      <form onSubmit={handleSubmit}>
        <main className="w-[306px] flex flex-col gap-[20px]">
          <header>
            <h1 className="text-[32px] font-bold text-[#000000]">Sign in as owner / designer</h1>
          </header>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border border-[#000000] px-[10px] py-[10px] bg-transparent text-[#404040] text-[16px] font-semibold"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-[#000000] px-[10px] py-[10px] bg-transparent text-[#404040] text-[16px] font-semibold"
            required
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
