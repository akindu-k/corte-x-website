import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react";

const footerLinks = {
  Services: ["Brand Development", "Marketing Automation", "Performance Analytics", "Social Media", "AI Consultation"],
  Company: ["About", "Case Studies", "Careers", "Blog", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Success Stories",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Main footer content - hidden on mobile, visible on sm and up */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
              <div className="rounded-lg">
                {/* <img
                  src="/logo.png"
                  alt="CORTE X Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                /> */}
              </div>
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-white">CORTE</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> X</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Amplify your revenue growth with creative strategy engineered through AI intelligence. Scale your business 10x faster.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {/* <a
                href="#"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent transition-all duration-200"
              >
                <Twitter className="w-5 h-5 sm:w-5 sm:h-5" />
              </a> */}
              <a
                href="https://www.instagram.com/_cortex00_/?hl=en"
                target="_blank"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent transition-all duration-200"
              >
                <Instagram className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/corte-x2833/?viewAsMember=true"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent transition-all duration-200"
                target="_blank"
              >
                <Linkedin className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:cortex.marketing.00@gmail.com"
                className="p-2 sm:p-2.5 bg-slate-800 rounded-lg hover:bg-blue-600/20 hover:border-blue-500/30 border border-transparent transition-all duration-200"
              >
                <Mail className="w-5 h-5 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Footer links - visible on sm and up */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t-0 sm:border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2026 CORTE X. All rights reserved. AI-Powered Marketing Solutions.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}