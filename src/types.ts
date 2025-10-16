/*---------------------------------- NAVBAR ----------------------------------*/
type menuContent = {
  link: string;
  name: string;
};

export type NavbarContentProps = {
  menu: menuContent[];
};

export type SideMenuBtnProps = {
  open: boolean;
  handleClick: () => void;
};

export type NavbarMenuProps = {
  menu: menuContent[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
/*---------------------------------- HEADER ----------------------------------*/
export type HeaderContentProps = {
  link: string;
  icon: string;
  color: string;
}[];

/*---------------------------------- MAIN ----------------------------------*/
type tools = {
  svg: string;
  name: string;
  color: string;
  viewbox: string;
};
//tools section
export type ToolsSectionProps = {
  tools: tools[];
};
//tech section
type TechStack = {
  svg: string;
  name: string;
  color: string;
  viewbox: string;
};

export type TechSectionProps = {
  stack: TechStack[];
};

//project section
interface ProjectItems {
  id: number;
  img: string;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  techStackIcons: {
    svg: string;
    viewbox: string;
  }[];
  colors: string[];
  projectLink: string;
  code: string;
}

export type ProjectSectionProps = {
  projects: ProjectItems[];
};

export type ProjectTechStackProps = {
  project: ProjectItems;
};
//about me
export type HabilitiesProps = {
  about: string;
  skills: string[];
  languages: string[];
  learning: string[];
};
