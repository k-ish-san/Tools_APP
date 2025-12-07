import { ArrowRight, WandSparklesIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 
        bg-linear-to-b from-[#0f1624] to-[#0b1120] text-center"
    >
      {/* Badge */}
      <span className="text-xs text-indigo-400 font-medium px-4 py-1.5 rounded-full bg-white/10  border border-white/10">
        <WandSparklesIcon className="inline-block mr-2 h-4 w-4" />
        Developer Tools Suite
      </span>

      {/* Heading */}
      <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-white">
        Essential Tools for <br />
        <span className="text-indigo-400">Modern Developers</span>
      </h1>

      {/* Sub-text */}
      <p className="mt-4 max-w-2xl text-white/60 text-sm md:text-base leading-relaxed">
        A collection of powerful, AI-free developer tools to help you debug,
        format, and generate code faster. Privacy-focused and built for
        developers.
      </p>

      {/* Button */}
      <button className="text-lg cursor-pointer relative px-6 py-3 mt-8 text-gray-800 bg-white border-2 border-indigo-900 rounded-lg overflow-hidden font-semibold group">
        <span className="absolute inset-0 bg-indigo-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
        <span className="relative z-10 group-hover:text-white">
          <a href="#tools">
            {" "}
            Explore Tools
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </a>
        </span>
      </button>
    </section>
  );
}
