import { Link, useLocation } from "react-router-dom";
import { resourceColumns } from "./resourcesMenuData";

type ResourcesMenuProps = {
  onNavigate?: () => void;
};

export default function ResourcesMenu({ onNavigate }: ResourcesMenuProps) {
  const location = useLocation();

  const handleLinkClick = (to: string) => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (onNavigate) onNavigate();
  };

  return (
    <div className="absolute top-[calc(100%+18px)] right-[clamp(28px,4vw,78px)] w-[min(1238px,calc(100vw-96px))] border border-black/10 bg-white shadow-[0_24px_48px_rgba(0,0,0,0.12)] backdrop-blur-[18px] z-50 overflow-hidden">
      {/* Accent Line */}
      <div className="h-1 bg-[#0B527B]" aria-hidden="true" />

      <div className="grid grid-cols-3 gap-12 p-[42px_44px_34px] max-[1280px]:gap-7 max-[1280px]:p-7">
        {resourceColumns.map((column) => (
          <div key={column.title} className="flex flex-col">
            <h3 className="m-0 mb-7 font-sans text-base font-bold text-black uppercase tracking-wide">
              {column.title}
            </h3>

            <ul className="m-0 p-0 list-none space-y-[22px]">
              {column.items.map((resource) => (
                <li key={resource.label}>
                  {resource.to ? (
                    <Link
                      to={resource.to}
                      className={`inline-flex items-start gap-2.5 p-0 font-sans text-[0.96rem] leading-[1.45] transition-colors
                        ${resource.featured ? "text-[#0B527B] font-bold" : "text-black/80 hover:text-black"}
                      `}
                      onClick={() => handleLinkClick(resource.to!)}
                    >
                      {resource.featured && (
                        <span className="text-[#0B527B] text-[1.65rem] leading-[0.8] -translate-y-px" aria-hidden="true">*</span>
                      )}
                      <span>{resource.label}</span>
                    </Link>
                  ) : (
                    <button
                      className={`inline-flex items-start gap-2.5 p-0 font-sans text-[0.96rem] text-left leading-[1.45] transition-colors
                        ${resource.featured ? "text-[#0B527B] font-bold" : "text-black/80 hover:text-black"}
                      `}
                    >
                      {resource.featured && (
                        <span className="text-[#0B527B] text-[1.65rem] leading-[0.8] -translate-y-px" aria-hidden="true">*</span>
                      )}
                      <span>{resource.label}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
