type ProjectItems = {
  id: number;
  img: string;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  techStackIcons: {
    svg: string;
    viewbox: string;
  }[];
  /* toolsUsed: {
    svg: string;
    viewbox: string;
    color: string;
  }[]; */
  colors: string[];
  projectLink: string;
  code: string;
};

export type ProjectSectionProps = {
  projects: ProjectItems[];
};
