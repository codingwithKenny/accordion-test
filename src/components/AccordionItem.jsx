import { Plus, Minus } from "lucide-react";

export default function AccordionItem({ id, title, content, isOpen, onClick }) {
  return (
    <div className="border-b">
      <button
        onClick={() => onClick(id)}
        className="w-full flex items-center justify-between py-4 px-4 text-left"
      >
        <span className="font-semibold text-sm md:text-base">{title}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-sm text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out">
          {content}
        </div>
      )}
    </div>
  );
}
