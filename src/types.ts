/*---------------------------------- SHARED ----------------------------------*/
export type TechIcon = {
  svg: string;
  viewbox: string;
  name: string;
  color?: string;
};

/*---------------------------------- NAVBAR ----------------------------------*/
type MenuContent = {
  link: string;
  name: string;
};

export type FooterProps = {
  menu: MenuContent[];
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
// tools section
export type ToolsSectionProps = {
  tools: TechIcon[];
};

// tech section
export type TechSectionProps = {
  stack: TechIcon[];
};

/*---------------------------------- PROJECT SECTION ----------------------------------*/
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

/*---------------------------------- ABOUT ----------------------------------*/
export type HabilitiesProps = {
  about: string;
  skills: string[];
  languages: string[];
  learning: string[];
};

export interface RenderIconsProps {
  stack: TechIcon[];
}
