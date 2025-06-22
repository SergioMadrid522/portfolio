type ProjectItems = {
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
  }[]; */
  colors: string[];
  projectLink: string;
  code: string;
};

export type ProjectSectionProps = {
  projects: ProjectItems[];
};
