import { Link } from "react-router-dom";
import { resourceColumns } from "./resourcesMenuData";

type ResourcesMenuProps = {
  onNavigate?: () => void;
};

export default function ResourcesMenu({ onNavigate }: ResourcesMenuProps) {
  return (
    <div className="absolute top-[calc(100%+18px)] right-[clamp(28px,4vw,78px)] w-[min(1238px,calc(100vw-96px))] border border-white/12 bg-[#061234]/58 shadow-[0_24px_48px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[18px] z-50 overflow-hidden">
      {/* Accent Line */}
      <div className="h-2 bg-gradient-to-r from-[#2bb8e9]/90 to-[#73e0ff]/65" aria-hidden="true" />

      <div className="grid grid-cols-3 gap-12 p-[42px_44px_34px] max-[1280px]:gap-7 max-[1280px]:p-7">
        {resourceColumns.map((column) => (
          <div key={column.title} className="flex flex-col">
            <h3 className="m-0 mb-7 font-sans text-base font-bold text-[#f3f7fc]/80 uppercase tracking-wide">
              {column.title}
            </h3>
            
            <ul className="m-0 p-0 list-none space-y-[22px]">
              {column.items.map((resource) => (
                <li key={resource.label}>
                  {resource.to ? (
                    <Link
                      to={resource.to}
                      className={`inline-flex items-start gap-2.5 p-0 font-sans text-[0.96rem] leading-[1.45] transition-colors
                        ${resource.featured ? "text-white" : "text-[#f3f7fc]/75 hover:text-white"}
                      `}
                      onClick={onNavigate}
                    >
                      {resource.featured && (
                        <span className="text-[#2bb8e9] text-[1.65rem] leading-[0.8] -translate-y-px" aria-hidden="true">*</span>
                      )}
                      <span>{resource.label}</span>
                    </Link>
                  ) : (
                    <button
                      className={`inline-flex items-start gap-2.5 p-0 font-sans text-[0.96rem] text-left leading-[1.45] transition-colors
                        ${resource.featured ? "text-white" : "text-[#f3f7fc]/75 hover:text-white"}
                      `}
                    >
                      {resource.featured && (
                        <span className="text-[#2bb8e9] text-[1.65rem] leading-[0.8] -translate-y-px" aria-hidden="true">*</span>
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