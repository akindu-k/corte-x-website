import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";

const Contact = () => {
    const [result, setResult] = useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };
    
    return (
        <section id='contact' className='py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative'>
            {/* Background Effects */}
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            
            <div className="max-w-7xl mx-auto relative">
                {/* Title Section */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 animate-in slide-in-from-bottom duration-700">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Let's Connect</span>
                    </div>
                    
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                            Ready to 
                        </span>
                        <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}Transform
                        </span>
                        <br />
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
                            Your Business?
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
                    {/* Left Section - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
                                Let's Start Your Journey
                            </h3>
                            <p className="text-lg text-gray-400 leading-relaxed mb-8">
                                Ready to scale your business with AI-powered marketing solutions? 
                                Get in touch with our team and discover how CORTE X can accelerate 
                                your growth and maximize your ROI.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                                    <Mail className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Email Us</p>
                                    <p className="text-gray-400">cortex.marketing.00@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                                    <Phone className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Call Us</p>
                                    <p className="text-gray-400">+94 (77) 529-7380</p>
                                </div>
                            </div>

                            {/* <div className="flex items-center space-x-4 group">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                                    <MapPin className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Visit Us</p>
                                    <p className="text-gray-400">San Francisco, CA</p>
                                </div>
                            </div> */}
                        </div>

                        {/* Stats or Features */}
                        <div className="grid grid-cols-2 gap-6 pt-8">
                            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                                <div className="text-2xl font-bold text-blue-400 mb-1">24/7</div>
                                <div className="text-sm text-gray-400">Support Available</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                                <div className="text-2xl font-bold text-cyan-400 mb-1">{"< 1hr"}</div>
                                <div className="text-sm text-gray-400">Response Time</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="relative">
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                            <form onSubmit={onSubmit} className="space-y-6">
                                {result && (
                                    <div className={`p-4 rounded-lg border ${
                                        result === "Form Submitted Successfully"
                                            ? 'bg-green-500/10 border-green-500/20 text-green-300' 
                                            : result === "Error"
                                            ? 'bg-red-500/10 border-red-500/20 text-red-300'
                                            : 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                                    } animate-in slide-in-from-top duration-300`}>
                                        {result}
                                    </div>
                                )}

                                <div>
                                    <label className="block text-white font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder='Enter your name' 
                                        name='name' 
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input 
                                        type="email" 
                                        placeholder='Enter your email' 
                                        name='email' 
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-medium mb-2">
                                        Your Message
                                    </label>
                                    <textarea 
                                        name="message" 
                                        rows="6" 
                                        placeholder='Tell us about your project and goals...' 
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    className="group w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                                >
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </form>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/15 rounded-full blur-xl animate-pulse delay-1000" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact