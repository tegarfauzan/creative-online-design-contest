import { Link } from 'react-router-dom';
export const SidebarOwner = () => {
  return (
    <aside className="w-48 p-4">
      <nav className="space-y-4">
        <Link to={'/owner/contests'}>
        <div className="border border-black px-4 py-2 font-semibold">My Contests</div>
        </Link>
        <Link to={'/owner/wallet'}>
        <div className="border border-black px-4 py-2 font-semibold">My Wallet</div>
        </Link>
      </nav>
    </aside>
  );
};
