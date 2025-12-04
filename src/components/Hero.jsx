import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Interactive background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full animate-in slide-in-from-bottom duration-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Introducing CORTE X
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 animate-in slide-in-from-bottom duration-700 delay-100">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">
                <div className="mb-2">
                  <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Scale your business
                  </span>
                </div>
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-black">
                    10x faster
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    with AI-powered
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-black">
                    marketing solutions
                  </span>
                </div>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-in slide-in-from-bottom duration-700 delay-200">
              Unlock data-driven growth, automate your workflows, and turn every marketing effort into measurable results. CORTE X gives your business the AI advantage your competitors don't have.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-in slide-in-from-bottom duration-700 delay-300">
              <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 rounded-xl font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>Book Your Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3">
                <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors duration-300">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-6 animate-in slide-in-from-bottom duration-700 delay-400">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-blue-400">500+</div>
                <div className="text-sm text-gray-400">Clients Scaled</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-cyan-400">10x</div>
                <div className="text-sm text-gray-400">Average ROI</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">AI Automation</div>
              </div>
            </div> */}
          </div>
          
          {/* Right Visual */}
          <div className="lg:col-span-5 relative animate-in slide-in-from-bottom duration-700 delay-400">
            <div className="relative">
              {/* Main container */}
              <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <img 
                    src="/ai.png" 
                    alt="AI Technology Visualization" 
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
              
              {/* Tech badges */}
              <div className="absolute top-6 -left-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                <div className="text-xs font-semibold text-blue-300">AI Powered</div>
              </div>
              
              <div className="absolute bottom-6 -right-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                <div className="text-xs font-semibold text-cyan-300">Real-time Analytics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}