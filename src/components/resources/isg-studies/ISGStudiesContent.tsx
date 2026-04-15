import { useState, useMemo, useEffect, useRef } from "react";
import ashwinImg from "@/assets/ISG Ashwin Gaidhani.jpg";
import gaurangImg from "@/assets/ISG Gaurang Pagdi.jpg";
import tapatiImg from "@/assets/ISG Tapati.Bandopadhyay_US.jpg";

type Analyst = "Tapati Bandhopadhyay" | "Ashwin Gaidhani" | "Gaurang Pagdi";

interface StudyRow {
  title: string;
  link: string;
  region: string;
  analysts: Analyst[];
  year: string;
}

const tableData: StudyRow[] = [
  { title: "AWS 2024", link: "#", region: "US", analysts: ["Tapati Bandhopadhyay", "Ashwin Gaidhani"], year: "2024" },
  { title: "Intelligent Automation 2024", link: "#", region: "US", analysts: ["Ashwin Gaidhani"], year: "2024" },
  { title: "Google Cloud Platform 2024", link: "#", region: "US", analysts: ["Tapati Bandhopadhyay"], year: "2024" },
  { title: "Google Cloud Platform 2024", link: "#", region: "APAC", analysts: ["Ashwin Gaidhani"], year: "2024" },
  { title: "Finance and Accounting Outsourcing (FAO) BPO Services 2024", link: "#", region: "Global", analysts: ["Gaurang Pagdi"], year: "2024" },
  { title: "ServiceNow 2024", link: "#", region: "US", analysts: ["Tapati Bandhopadhyay"], year: "2024" },
  { title: "ServiceNow 2024", link: "#", region: "Europe", analysts: ["Ashwin Gaidhani"], year: "2024" },
  { title: "Workday 2024", link: "#", region: "US", analysts: ["Ashwin Gaidhani"], year: "2024" },
  { title: "Workday 2024", link: "#", region: "Europe", analysts: ["Gaurang Pagdi"], year: "2024" },
  { title: "Digital Engineering 2024", link: "#", region: "US & Europe", analysts: ["Tapati Bandhopadhyay", "Ashwin Gaidhani"], year: "2024" },
  { title: "Enterprise Service Management 2024", link: "#", region: "US", analysts: ["Ashwin Gaidhani"], year: "2024" }
];

const analystPortraits: Record<Analyst, string> = {
  "Tapati Bandhopadhyay": tapatiImg,
  "Ashwin Gaidhani": ashwinImg,
  "Gaurang Pagdi": gaurangImg
};

const ISGStudiesContent = () => {
  const [filterAnalyst, setFilterAnalyst] = useState<string>("All");
  const [filterRegion, setFilterRegion] = useState<string>("All");
  const [filterYear, setFilterYear] = useState<string>("All");

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rows = section.querySelectorAll<HTMLElement>('.table-row-animate');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-inview', 'true');
          }
        });
      },
      { threshold: 0.1 }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [filterAnalyst, filterRegion, filterYear]);

  // Derived filter options
  const analystOptions = ["All", "Tapati Bandhopadhyay", "Ashwin Gaidhani", "Gaurang Pagdi"];
  const regionOptions = ["All", "US", "APAC", "Global", "Europe", "US & Europe"];
  const yearOptions = ["All", "2024", "2023", "2022"];

  const filteredData = useMemo(() => {
    return tableData.filter(row => {
      const matchAnalyst = filterAnalyst === "All" || row.analysts.includes(filterAnalyst as Analyst);
      const matchRegion = filterRegion === "All" || row.region === filterRegion;
      const matchYear = filterYear === "All" || row.year === filterYear;
      return matchAnalyst && matchRegion && matchYear;
    });
  }, [filterAnalyst, filterRegion, filterYear]);

  return (
    <section ref={sectionRef} className="bg-[#ffffff] w-full px-[58px] py-24 max-[1100px]:px-[34px] max-[1100px]:py-20 max-[640px]:px-[18px] max-[640px]:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        
        {/* Filters */}
        <div className="grid grid-cols-3 max-[768px]:grid-cols-1 gap-8 opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className="flex flex-col gap-2">
            <label className="text-[#030919] font-sans font-semibold text-[0.85rem]">Filter by Analyst Name</label>
            <select 
              className="w-full border border-[#cbd2e0] rounded-md px-4 py-2.5 text-[#030919] font-sans bg-white outline-none focus:border-[#5ac8fa] transition-colors appearance-none cursor-pointer"
              value={filterAnalyst}
              onChange={(e) => setFilterAnalyst(e.target.value)}
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
            >
              {analystOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#030919] font-sans font-semibold text-[0.85rem]">Filter by Region</label>
            <select 
              className="w-full border border-[#cbd2e0] rounded-md px-4 py-2.5 text-[#030919] font-sans bg-white outline-none focus:border-[#5ac8fa] transition-colors appearance-none cursor-pointer"
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value)}
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
            >
              {regionOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[#030919] font-sans font-semibold text-[0.85rem]">Filter by Year</label>
            <select 
              className="w-full border border-[#cbd2e0] rounded-md px-4 py-2.5 text-[#030919] font-sans bg-white outline-none focus:border-[#5ac8fa] transition-colors appearance-none cursor-pointer"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
            >
              {yearOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="w-full rounded-md border border-[#0d1326] overflow-x-auto shadow-md opacity-0 translate-y-8 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#0b101c] text-white">
                <th className="font-sans font-bold text-[1rem] p-6 border-b border-[#0d1326] w-[45%]">Study Title</th>
                <th className="font-sans font-bold text-[1rem] p-6 border-b border-l border-[#0d1326] w-[15%]">Region</th>
                <th className="font-sans font-bold text-[1rem] p-6 border-b border-l border-[#0d1326] w-[25%]">Analyst Name</th>
                <th className="font-sans font-bold text-[1rem] p-6 border-b border-l border-[#0d1326] w-[15%]">Study Year</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr 
                  key={index} 
                  className={`table-row-animate opacity-0 translate-y-6 transition-all duration-700 ease-out data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0 ${index % 2 === 0 ? 'bg-zinc-100' : 'bg-white'} border-b border-zinc-200 hover:bg-sky-50 transition-colors`}
                  style={{ transitionDelay: `${(index % 10) * 50}ms` }}
                >
                  <td className="p-6 border-r border-[#e0e4eb]">
                    <h4 className="m-0 font-sans font-bold text-[#030919] text-[1.05rem]">{row.title}</h4>
                    <a href={row.link} className="inline-flex items-center gap-2 mt-1 text-[#2b00ff] font-sans font-medium text-[0.9rem] hover:text-[#5ac8fa] transition-colors">
                      Download ISG Brochure
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8 62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2l-17.1-17.1c-109.8-109.8-288.5-109.8-398.3 0-23.7 23.7-42 51.5-54 81.3-5.5 13.9 1.3 29.6 15.2 35.1 13.9 5.5 29.5-1.3 35-15.2zm264 89.4c-13.9-5.5-29.6 1.3-35.1 15.2-7.7 21.8-20.2 42.3-37.8 59.8-62.5 62.5-163.8 62.5-226.3 0L52.9 349.8H104c17.7 0 32-14.3 32-32s-14.3-32-32-32H-8c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32s32-14.3 32-32v-51.2l17.1 17.1c109.8 109.8 288.5 109.8 398.3 0 23.7-23.7 42-51.5 54-81.3 5.4-13.9-1.4-29.6-15.3-35.1z"></path>
                      </svg>
                    </a>
                  </td>
                  <td className="p-6 border-r border-[#e0e4eb] font-sans text-gray-800 text-[1rem]">
                    {row.region}
                  </td>
                  <td className="p-6 border-r border-[#e0e4eb]">
                    <div className="flex flex-col gap-3">
                      {row.analysts.map(analyst => (
                        <div key={analyst} className="flex items-center gap-4">
                          <img 
                            src={analystPortraits[analyst]} 
                            alt={analyst} 
                            className="w-10 h-10 rounded-full object-cover shadow-sm bg-gray-200"
                          />
                          <span className="font-sans text-[#030919] text-[0.95rem]">{analyst}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="p-6 font-sans text-[#030919] text-[1rem]">
                    {row.year}
                  </td>
                </tr>
              ))}
              
              {filteredData.length === 0 && (
                <tr className="bg-white">
                  <td colSpan={4} className="p-12 text-center text-gray-500 font-sans italic">
                    No results found for the selected filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default ISGStudiesContent;
