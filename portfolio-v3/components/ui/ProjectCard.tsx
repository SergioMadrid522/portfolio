export function ProjectCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#FACC15]/40">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FACC15]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {children}
    </div>
  );
}

export function ProjectCardContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="relative z-10 flex h-full flex-col">{children}</div>;
}

export function ProjectCardTags({ children }: { children: React.ReactNode }) {
  return <div className="mb-6 flex flex-wrap gap-2">{children}</div>;
}

export function ProjectCardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-[#FACC15]">
      {children}
    </h4>
  );
}
export function ProjectCardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-400">
      {children}
    </p>
  );
}

export function ProjectCardBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-full border border-blue-400/20">
      {children}
    </div>
  );
}

export function ProjectCardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
      {children}
    </div>
  );
}

export const ProjectCardCompound = Object.assign(ProjectCard, {
  Content: ProjectCardContent,
  Tags: ProjectCardTags,
  Title: ProjectCardTitle,
  Description: ProjectCardDescription,
  Badge: ProjectCardBadge,
  Footer: ProjectCardFooter,
});
