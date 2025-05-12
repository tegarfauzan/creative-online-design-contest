import { Link } from "react-router-dom";

export const SidebarManager = () => {
  return (
    <aside className="w-64 bg-white border-r p-4 space-y-6">
        <div>
          <Link to={'/manager/overview'} className="font-bold mb-2 block">Overview</Link>
          <div className="space-y-1">
            <p className="font-semibold">Contest</p>
            <Link to={'/manager/categories'} className="block">Categories</Link>
            <Link to={'/manager/contests'} className="block">Contests</Link>
          </div>
          <div className="mt-4 space-y-1">
            <p className="font-semibold">Members</p>
            <Link to={'/manager/owners'} className="block">Owners</Link>
            <Link to={'#'} className="block">Designers</Link>
          </div>
          <div className="mt-4 space-y-1">
            <p className="font-semibold">Payment</p>
            <Link to={'/manager/transactions'} className="block">Transactions</Link>
            <Link to={'/manager/wallets'} className="block">Wallets</Link>
          </div>
          <div className="mt-4 space-y-1">
            <p className="font-semibold">Users</p>
            <Link to={'#'} className="block">Users</Link>
            <Link to={`#`} className="block">Assign Role</Link>
          </div>
        </div>
      </aside>
  );
};