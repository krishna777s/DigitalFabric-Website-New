export type ResourceMenuItem = {
  label: string;
  featured?: boolean;
  to?: string;
};

export type ResourceMenuColumn = {
  title: string;
  items: ResourceMenuItem[];
};

export const resourceColumns: ResourceMenuColumn[] = [
  {
    title: "Consulting Resources",
    items: [
      { label: "TI Framework", featured: true, to: "/resources/ti-framework" },
      { label: "Featured Insights", to: "/insights" },
      { label: "ISG Studies and Brochures", to: "/isg-studies-and-brochures" },
      { label: "MINDSETMATTERS™", to: "/resources/mindset-matters" },
    ],
  },
  {
    title: "AI Resources",
    items: [
      {
        label: "AISWITCH™ Framework",
        featured: true,
        to: "/resources/aiswitch-framework",
      },
      { label: "AISWITCH™ Storyboards", to: "/resources/aiswitch-storyboards" },
      { label: "White Papers" },
    ],
  },
  {
    title: "Marketing Resources",
    items: [
      { label: "Copygamie Framework", featured: true, to: "/copygamie-framework-free-use" },
      { label: "Success Stories", to: "/marketing-success-stories" },
    ],
  },
];
