import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";
import { Search, Zap, Megaphone, TrendingUp } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    number: "1",
    title: "Detect",
    subtitle: "Detect the bottleneck holding your business back",
  },
  {
    icon: Zap,
    number: "2",
    title: "Design",
    subtitle: "Design AI systems that remove friction",
  },
  {
    icon: Megaphone,
    number: "3",
    title: "Dominate",
    subtitle: "Dominate attention through strategic marketing",
  },
  {
    icon: TrendingUp,
    number: "4",
    title: "Scale",
    subtitle: "Scale with control and precision",
  },
];

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Mouse follower gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Background blur elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative">
        {/* Process Section */}
        <div className="mb-24 sm:mb-32">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                Our Growth
              </span>
              <br />
              <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to transforming your business with AI-powered
              solutions
            </p>
          </div>

          {/* Process Steps - Fixed Alignment */}
          {/* Changed 'max-w-3xl' to 'w-fit' so the container shrinks to content size, allowing mx-auto to center it properly */}
          <div className="w-fit mx-auto flex flex-col gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex items-start space-x-6">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300 z-10 bg-gray-950">
                      <step.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    {/* Connecting Line - Only show if not the last item */}
                    {index !== processSteps.length - 1 && (
                      <div className="w-px h-full min-h-[4rem] bg-gradient-to-b from-blue-500/50 to-transparent absolute top-16 left-8 -ml-px" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2 pb-8 max-w-md">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {step.number}.
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-300 font-medium mb-2 text-lg">
                      {step.subtitle}
                    </p>

                    {step.description && (
                       <p className="text-gray-400 text-base leading-relaxed mb-6">
                        {step.description}
                      </p>
                    )}

                    {/* Code or Visual Element */}
                    {step.type === "code" && step.codeSnippet && (
                      <div className="bg-gray-950/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 group-hover:border-blue-600/50 transition-all duration-300 mt-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                          </div>
                          <span className="text-gray-400 text-xs">
                            ai-analysis.js
                          </span>
                        </div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            background: "transparent",
                            fontSize: "0.85rem",
                            lineHeight: "1.5",
                          }}
                        >
                          {step.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}