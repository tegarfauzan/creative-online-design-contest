import { Link,useLocation } from "react-router-dom";
import type { SidebarLink, SidebarSection } from '../types/type';

type SidebarProps = {
  sections: SidebarSection[];
};



export const Sidebar = ({ sections }: SidebarProps) => {
  const location = useLocation();
  return (
    <aside className="w-64 bg-white border-r p-4 space-y-6">
    {sections.map((section, index) => (
      <div key={index} className={section.title ? 'mt-4 space-y-1' : ''}>
        {section.title && <p className="font-semibold">{section.title}</p>}
        {section.links.map((link : SidebarLink, idx:number) => {
          const isActive = location.pathname === link.path;
          return(
            <Link
              key={idx}
              to={link.path}
              className={`block py-2 px-4 rounded ${isActive ? 'bg-blue-600 text-white' : ''}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    ))}
  </aside>
  );
};