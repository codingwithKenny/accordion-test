import Accordion from "./components/Accordion";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      {/* 🌗 Dark Mode Toggle Button */}
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="fixed top-4 right-4 bg-black text-white px-3 py-1 rounded z-50 text-sm sm:text-base"
      >
        Toggle Mode
      </button>

      {/* 🧾 Accordion Section */}
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#8800C8] font-bold mb-6 text-center">
          Frequently asked questions
        </h1>
        <Accordion />
      </div>
    </div>
  );
}
