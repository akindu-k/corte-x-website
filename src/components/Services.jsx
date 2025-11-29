import { ArrowRight, Zap, Target, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Strategic Brand Development",
    description: "AI-powered brand psychology and positioning that creates emotional connection and drives conversion through intelligent market analysis."
  },
  {
    icon: Zap,
    title: "Automated Marketing Systems",
    description: "24/7 marketing engines that optimize campaigns, nurture leads, and scale revenue without manual intervention or constant oversight."
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Real-time data insights and predictive analytics that guide decision-making and maximize ROI across all marketing channels."
  },
  {
    icon: Users,
    title: "Social Media Automation",
    description: "Intelligent social media campaigns that engage audiences, build communities, and convert followers into loyal customers."
  }
];

export default function Services() {
return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                    <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                        Our 
                    </span>
                    <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {" "}Services
                    </span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Comprehensive AI-driven solutions designed to transform your business operations and accelerate growth through intelligent automation.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                                    <service.icon className="w-6 h-6 text-blue-400" />
                                </div>
                                
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                
                                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Section */}
                <div className="relative order-first lg:order-last">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl transition-all duration-500" />
                        
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 group-hover:border-blue-500/30 transition-all duration-300">
                            <div className="flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                                <img 
                                    src="src/assets/services.png" 
                                    alt="Digital Marketing Services" 
                                    className="w-full h-full object-contain animate-in slide-in-from-bottom duration-700 delay-200"
                                />
                            </div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/15 rounded-full blur-xl animate-pulse delay-1000" />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center space-x-2 cursor-pointer">
                        <span>Get Started Today</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    
                    <p className="text-gray-400 text-sm">
                        Ready to transform your business? Let's discuss your goals.
                    </p>
                </div>
            </div>
        </div>
    </section>
);
}