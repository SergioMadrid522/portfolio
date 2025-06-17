export type ProjectItems = {
    img: string;
    imageAlt: string;
    projectName: string;
    projectDescription: string;
    techStackIcons: string[];
    projectLink: string;
};

export type ProjectSectionProps = {
    projects: ProjectItems[];
}