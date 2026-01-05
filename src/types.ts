/*---------------------------------- NAVBAR ----------------------------------*/
type menuContent = {
  link: string;
  name: string;
};

export type FooterProps = {
  menu: menuContent[];
};

export type SideMenuBtnProps = {
  open: boolean;
  handleClick: () => void;
};

export type NavbarMenuProps = {
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
type TechIcon = {
  svg: string;
  viewbox: string;
  color: string;
  name: string;
};

//project section
export interface ProjectItems {
  id: number;
  slug: string;
  img: string;
  imageAlt: string;
  projectName: string;
  projectDescription: string;
  techStackIcons: TechIcon[];
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

export interface RenderIconsProps {
  stack: TechIcon[];
}
