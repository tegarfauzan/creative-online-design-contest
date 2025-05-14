import { Link } from "react-router-dom";
import type { Designer, Owner, User } from "../types/type";


const owners: Owner[] = [
  { id: 1, user_id: 1 }
];

const designers: Designer[] = [
  { id: 1, user_id: 2 }
];

type Role = "Designer" | "Owner" | "Manager";

function getUserRole(userId: number): Role {
  const isOwner = owners.some(owner => owner.user_id === userId);
  if (isOwner) return "Owner";

  const isDesigner = designers.some(designer => designer.user_id === userId);
  if (isDesigner) return "Designer";

  return "Manager";
}
export const Profile = ({ user }: { user: User }) => {
  const role = getUserRole(user.id);
  return (
    <div className="flex justify-between items-start mb-8">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div className="text-right">
          <p className="font-semibold">{user.name}</p>
          <p className="text-sm">Role {role}</p>
          <Link to={"/"} className="text-sm underline">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
