import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";

const features = [
  {
    title: "AI-Powered Brand Psychology",
    description:
      "We merge intelligent systems with persuasive brand psychology to build identities that attract, influence, and convert. Your brand becomes emotionally magnetic and strategically scalable.",
    codeSnippet: `async function generateBrandMessage(product) {
  // AI analyzes psychology triggers + brand tone
  const response = await ai.createCopy({
    input: product,
    tone: "emotional",
    intent: "conversion"
  });

  // AI returns persuasive brand messaging
  return response.message;
}
`,
    type: "code",
    imagePosition: "left",
  },
  {
    title: "Automated Growth Systems",
    description:
      "We engineer marketing engines and business workflows that run 24/7—automating operations, optimizing decisions, and driving consistent revenue without manual effort.",
    image: "src/assets/grow.png",
    type: "image",
    imagePosition: "right",
  },
  {
    title: "Precision-Driven Storytelling",
    description:
      "We combine machine-level precision with emotional storytelling to turn complexity into clarity. CORTE X transforms brands into powerful, globally competitive forces.",
    image: "src/assets/story.png",
    type: "image",
    imagePosition: "left",
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
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative overflow-hidden"
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

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
            Your Complete Growth
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Workflow
            </span>
          </h2>
        </div>

        <div className="space-y-16 sm:space-y-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Code/Image Section */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                  rounded-xl sm:rounded-2xl transition-all duration-500"
                  />
                  <div
                    className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 
                  rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1 
                  group-hover:border-blue-600/50 transition-all duration-300"
                  >
                    {feature.type === "code" ? (
                      // Code Interface
                      <div className="bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm">
                        <div className="flex items-center sapce-x-1 sm:space-x-2 mb-3 sm:mb-4">
                          <div className="flex items-center space-x-1 sm:space-x-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                          </div>
                          <span className="text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm">
                            {feature.title}
                          </span>
                        </div>
                        <div>
                          <SyntaxHighlighter
                            language="javascript"
                            style={nightOwl}
                            customStyle={{
                              margin: 0,
                              background: "transparent",
                              borderRadius: "8px",
                              fontSize: "0.75rem",
                              lineHeight: "1.4",
                              height: "100%",
                            }}
                            wrapLines={true}
                          >
                            {feature.codeSnippet}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    ) : (
                      // Image Interface
                      <div className="flex items-center justify-center h-[280px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden">
                        <img 
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* text section */}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-4xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-base text-xl sm:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}