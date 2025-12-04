import { ArrowRight, Zap, Target, TrendingUp, Users, Bot, BarChart3, Megaphone, Video } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation & Workflow Optimization",
    description: "Streamline operations with intelligent automation systems that handle customer support, lead qualification, and complex workflows.",
    features: [
      "Automated customer support",
      "Lead qualification systems", 
      "Workflow automation",
      "Data extraction & reporting bots"
    ]
  },
  {
    icon: BarChart3,
    title: "AI-Driven Business Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics, competitor intelligence, and predictive forecasting.",
    features: [
      "Data analysis dashboards",
      "Market & competitor intelligence",
      "Predictive analytics",
      "Performance tracking & optimization"
    ]
  },
  {
    icon: Megaphone,
    title: "AI-Powered Marketing Systems",
    description: "Scale your marketing efforts with intelligent funnels, automated ad management, and deep audience behavior insights.",
    features: [
      "AI marketing funnels",
      "Automated ad management",
      "AI content scheduling",
      "Audience behavior insights"
    ]
  },
  {
    icon: Video,
    title: "High-End Content Creation",
    description: "Professional-grade content production enhanced by AI for maximum engagement and brand impact across all platforms.",
    features: [
      "High-production social content",
      "AI-enhanced video creation",
      "Brand storytelling assets",
      "AI influencer development"
    ]
  }
];

export default function Services() {
return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto relative">
            {/* Header Section */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-blue-300">AI-Powered Solutions</span>
                </div>
                
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

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-16 sm:mb-20">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-pointer"
                    >
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                                {service.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                                {service.description}
                            </p>
                            
                            {/* Features List */}
                            <ul className="space-y-3">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            
                            {/* Learn More Link */}
                            <div className="mt-6 pt-4 border-t border-gray-700/50 group-hover:border-blue-500/30 transition-colors duration-300">
                                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center space-x-2 transition-colors duration-300">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Professional Visual Section */}
            <div className="relative mb-16 sm:mb-20">
                <div className="relative group max-w-5xl mx-auto">
                    {/* Clean professional container */}
                    <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-8 sm:p-12 group-hover:border-gray-600/50 transition-all duration-300">
                    <div className="flex items-center justify-center">
    <img 
        src="/services.png" 
        alt="AI-Powered Services Visualization" 
        className="w-full max-w-xl h-auto object-contain opacity-95 group-hover:opacity-100 transition-opacity duration-300"
    />
</div>
                    </div>
                    
                    {/* Subtle floating elements */}
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-gray-500/10 rounded-full blur-xl animate-pulse" />
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-1000" />
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Ready to Transform Your Business?
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
                        Let's discuss how our AI-powered solutions can accelerate your growth and streamline your operations.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <button className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                            <span>Get Started Today</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        
                        <button className="group w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                            <span>View Case Studies</span>
                            <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                    </div>
                    
                    <p className="text-gray-500 text-sm mt-6">
                        Be among the first to experience the power of CORTE X AI solutions.
                    </p>
                </div>
            </div>
        </div>
    </section>
);
}