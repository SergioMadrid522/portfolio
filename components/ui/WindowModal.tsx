export function WindowModal({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 inline-block rounded-lg bg-[#151515] border border-white/10 shadow-2xl overflow-hidden ">
      {children}
    </div>
  );
}

export function WindowModalTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#1E1E1E] px-4 py-2 flex items-center gap-2 border-b border-white/5">
      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      <span className="ml-4 text-[12px] font-mono text-gray-500">
        {children}
      </span>
    </div>
  );
}

export function WindowModalContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 font-mono text-sm leading-relaxed">{children}</div>
  );
}

export const MacModal = Object.assign(WindowModal, {
  WindowModal,
  WindowModalTitle,
  WindowModalContent,
});
