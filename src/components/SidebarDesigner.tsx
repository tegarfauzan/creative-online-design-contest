import { Link } from "react-router-dom";

export const SidebarDesigner = () => {
  return (
    <div className="w-1/6 flex flex-col gap-4">
      <Link to={'/designer/submissions'}>
        <div className="border border-black px-4 py-2 font-bold text-sm">My Submissions</div>
        </Link>
        <Link to={'/designer/wallet'}>
        <div className="border border-black px-4 py-2 text-sm">My Wallet</div>
        </Link>
      </div>
  );
};