import { Link, useLocation } from "react-router-dom";
import { resourceColumns } from "./resourcesMenuData";

type ResourcesMenuProps = {
  onNavigate?: () => void;
};

const renderLabel = (text: string) => {
  if (text.includes("(TM)")) {
    const [main, ...rest] = text.split("(TM)");
    const suffix = rest.join("");
    const isAiswitchFramework = main.trim() === "AISWITCH" && suffix === " Framework";
    const loweredTm = /^(MINDSETMATTERS|AISWITCH)/.test(main.trim()) && !isAiswitchFramework;
    return (
      <>
        {main}
        <sup
          className={`ml-0.5 font-medium ${
            isAiswitchFramework
              ? "resources-tm-mark-framework"
              : loweredTm
                ? "resources-tm-mark-lower"
                : "resources-tm-mark"
          }`}
        >
          TM
        </sup>
        {suffix || ""}
      </>
    );
  }
  return text;
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
      <style>{`
        .resources-tm-mark {
          display: inline-block;
          vertical-align: text-top;
          font-size: 0.72em;
          line-height: 1;
          position: relative;
          top: 0.02em;
        }

        .resources-tm-mark-lower {
          display: inline-block;
          vertical-align: text-top;
          font-size: 0.72em;
          line-height: 1;
          position: relative;
          top: 0.28em;
        }

        .resources-tm-mark-framework {
          display: inline-block;
          vertical-align: text-top;
          font-size: 0.72em;
          line-height: 1;
          position: relative;
          top: 0.14em;
        }

        @media only screen and (min-width: 768px) and (max-width: 853px) {
          .resources-tm-mark {
            font-size: 0.66em;
            top: 0;
          }

          .resources-tm-mark-lower {
            font-size: 0.66em;
            top: 0.22em;
          }

          .resources-tm-mark-framework {
            font-size: 0.66em;
            top: 0.08em;
          }
        }

        @media only screen and (min-width: 1024px) and (max-width: 1024px) {
          .resources-tm-mark-framework {
            top: 0.22em;
          }
        }
      `}</style>

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
                      <span>{renderLabel(resource.label)}</span>
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
                      <span>{renderLabel(resource.label)}</span>
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


