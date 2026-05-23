import { MacModal } from "@/components/ui/WindowModal";

export default function FunctionModal() {
  return (
    <MacModal.WindowModal>
      <MacModal.WindowModalTitle>index.ts</MacModal.WindowModalTitle>
      <MacModal.WindowModalContent>
        <span className="text-blue-400">function </span>
        <span className="t  ext-[#FACC15]">greet ():</span>
        <span className="text-gray-300"> string {"{"}</span>
        <br />
        <span className="text-purple-400">return </span>
        <span className="text-green-400">"hello"</span>
        <span>;</span>
        <br />
        <span>{"}"}</span>
      </MacModal.WindowModalContent>
    </MacModal.WindowModal>
  );
}
