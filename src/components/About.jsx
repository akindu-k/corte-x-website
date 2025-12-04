import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";
import { Search, Zap, Megaphone, TrendingUp } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    number: "1",
    title: "Understand",
    subtitle: "Analyze the business, spot problems, uncover opportunities.",
    description: "Map out what's holding growth back.",
//     codeSnippet: `async function analyzeGrowthBarriers() {
//   const analysis = await ai.businessAnalysis({
//     market: "competitive landscape",
//     performance: "current metrics",
//     opportunities: "growth potential"
//   });
  
//   return analysis.recommendations;
// }`,
//     type: "code"
  },
  {
    icon: Zap,
    number: "2", 
    title: "Automate",
    subtitle: "Build AI systems to handle repetitive tasks & optimize workflows.",
    description: "Make the business faster, smarter, and more efficient.",
//     codeSnippet: `async function automateMarketing() {
//   const leads = await ai.captureLeads();
//   const campaigns = await ai.createSequences({
//     audience: leads.segments,
//     goal: "conversion"
//   });  
//   return workflows.deploy(campaigns);
// }`,
//         type: "code"
      },
  {
    icon: Megaphone,
    number: "3",
    title: "Market & Create", 
    subtitle: "Craft irresistible brand stories and content.",
    description: "Publish and promote on social media with AI-powered precision.",

  },
  {
    icon: TrendingUp,
    number: "4",
    title: "Scale",
    subtitle: "Double down on what works, expand to new channels & markets.",
    description: "Use AI insights to continuously grow and dominate.",
//     codeSnippet: `async function scaleSuccessfulCampaigns() {
//   const topPerformers = await ai.identifyWinners({
//     metrics: ["conversion", "roi", "engagement"],
//     timeframe: "last_30_days"
//   });
  
//   return ai.amplifyAndExpand(topPerformers);
// }`,
//     type: "code"
  }
];

const features = [
  {
    title: "AI-Powered Brand Psychology",
    description:
      "We merge intelligent systems with persuasive brand psychology to build identities that attract, influence, and convert. Your brand becomes emotionally magnetic and strategically scalable.",
//     codeSnippet: `async function generateBrandMessage(product) {
//   // AI analyzes psychology triggers + brand tone
//   const response = await ai.createCopy({
//     input: product,
//     tone: "emotional",
//     intent: "conversion"
//   });

//   // AI returns persuasive brand messaging
//   return response.message;
// }`,
//     type: "code",
//     imagePosition: "left",
  },
  {
    title: "Automated Growth Systems",
    description:
      "We engineer marketing engines and business workflows that run 24/7—automating operations, optimizing decisions, and driving consistent revenue without manual effort.",

  },
  {
    title: "Precision-Driven Storytelling",
    description:
      "We combine machine-level precision with emotional storytelling to turn complexity into clarity. CORTE X transforms brands into powerful, globally competitive forces.",

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
              A systematic approach to transforming your business with AI-powered solutions
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                    </div>
                    {index < processSteps.length  && (
                      <div className="w-px h-16 sm:h-20 bg-gradient-to-b from-blue-500/50 to-transparent hidden md:block" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {step.number}.
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-300 font-medium mb-2 text-base sm:text-lg">
                      {step.subtitle}
                    </p>
                    
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Code or Visual Element */}
                    {step.type === "code" && step.codeSnippet && (
                      <div className="bg-gray-950/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 sm:p-4 group-hover:border-blue-600/50 transition-all duration-300">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                          </div>
                          <span className="text-gray-400 text-xs">ai-analysis.js</span>
                        </div>
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            background: "transparent",
                            fontSize: "0.75rem",
                            lineHeight: "1.4",
                          }}
                        >
                          {step.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    )}

                    {step.type === "image" && step.image && (
                      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 group-hover:border-blue-600/50 transition-all duration-300">
                        <div className="h-32 sm:h-40 flex items-center justify-center rounded-lg overflow-hidden bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                          <img 
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
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