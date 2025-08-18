import React, { useState } from 'react';
import { ChevronDownIcon, ArrowTrendingUpIcon, BuildingOffice2Icon, HeartIcon, BanknotesIcon, BoltIcon, TruckIcon, AcademicCapIcon, ShoppingBagIcon, ShieldCheckIcon, ExclamationTriangleIcon, EyeIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';
import AIAnimatedBackground from './AIAnimatedBackground';
import AIPlaybookSEO from './AIPlaybookSEO';
import { TableOfContents } from './AIReportSections';
import DynamicReportSection from './DynamicReportSection';
import { generatedSections, getSectionOrder } from '../data/generatedContent';

const AIFullReport: React.FC = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    React.useEffect(() => {
        setIsVisible(true);
    }, []);

    const sections = [
        'cover',
        'abstract',
        'by-the-numbers',
        'table-of-contents',
        'government',
        'healthcare',
        'financial-services',
        'energy',
        'transport',
        'education',
        'retail',
        'infrastructure',
        'talent',
        'regulation',
        'cybersecurity',
        'bias-trust',
        'regulatory-gaps',
        'vision-2030',
        'business-actions',
        'government-actions',
        'boardroom-checklist',
        'startup-checklist',
        'statistical-appendix',
        'quotes-appendix',
        'executive-summary',
        'call-to-action'
    ];

    // Navigation
    const navigateToSection = (sectionIndex: number) => {
        setCurrentSection(sectionIndex);
        const element = document.getElementById(sections[sectionIndex]);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <AIPlaybookSEO page="presentation" />
            <div className="bg-black text-white overflow-hidden">

                {/* Fixed Navigation */}
                <nav className="fixed top-20 right-8 z-40 hidden lg:block">
                    <div className="bg-black/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-4">
                        <div className="space-y-2">
                            {sections.slice(0, 8).map((section, index) => (
                                <button
                                    key={section}
                                    onClick={() => navigateToSection(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSection === index
                                        ? 'bg-blue-500 scale-125'
                                        : 'bg-gray-600 hover:bg-gray-500'
                                        }`}
                                    title={section.replace('-', ' ').toUpperCase()}
                                />
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Cover Section */}
                <section id="cover" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
                    <AIAnimatedBackground />
                    <div className="absolute inset-0 bg-[url('/ai-infrastructure-bg.jpg')] bg-cover bg-center opacity-20"></div>
                    <div className="relative z-10 text-center px-8 max-w-6xl">
                        <h1 className={`text-7xl md:text-9xl font-thin tracking-tight mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            AI in the
                            <span className="block font-light text-gray-300">Middle East</span>
                            <span className="block text-5xl md:text-7xl text-blue-400 font-extralight">2025</span>
                        </h1>
                        <p className={`text-2xl md:text-3xl font-light text-gray-400 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            The Playbook for People & Business
                        </p>
                        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button
                                onClick={() => navigateToSection(1)}
                                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                            >
                                <span>Begin Reading</span>
                                <ChevronDownIcon className="w-6 h-6 animate-bounce" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Executive Abstract */}
                <section id="abstract" className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center relative overflow-hidden">
                    <AIAnimatedBackground />
                    <div className="container mx-auto px-8 py-20 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-6xl font-thin mb-12 text-white">Executive Abstract</h2>
                                <div className="space-y-8">
                                    <StatBlock number="$320B" label="Economic Impact by 2030" />
                                    <StatBlock number="$7.2B" label="AI Investment by 2026" />
                                    <StatBlock number="18,000" label="Blackwell GPUs in HUMAIN" />
                                    <StatBlock number="854MW" label="Compute Infrastructure Growth" />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-12 rounded-2xl border border-gray-800">
                                    <blockquote className="text-2xl font-light leading-relaxed text-gray-300">
                                        "AI is going to be the new lifeblood for governments and the private sector as well."
                                    </blockquote>
                                    <cite className="block mt-6 text-lg text-blue-400 font-medium">
                                        — H.E. Omar Sultan Al Olama, UAE AI Minister
                                    </cite>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* By the Numbers */}
                <section id="by-the-numbers" className="min-h-screen bg-black relative overflow-hidden">
                    <AIAnimatedBackground />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
                    <div className="relative z-10 container mx-auto px-8 py-20">
                        <h2 className="text-7xl font-thin text-center mb-20">By the Numbers</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                            <BigNumberCard
                                number="$320B"
                                subtitle="by 2030"
                                description="Regional AI Economic Impact"
                                trend="+2,400%"
                            />
                            <BigNumberCard
                                number="$7.2B"
                                subtitle="by 2026"
                                description="AI Investment Forecast"
                                trend="+340%"
                            />
                        </div>

                        <div className="mt-20 text-center">
                            <div className="inline-flex items-center space-x-4 bg-gray-900/50 px-8 py-4 rounded-full border border-gray-800">
                                <ArrowTrendingUpIcon className="w-6 h-6 text-green-400" />
                                <span className="text-xl font-light">Exponential Growth Trajectory</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Table of Contents */}
                <div id="table-of-contents">
                    <TableOfContents />
                </div>

                {/* Dynamic Report Sections */}
                {getSectionOrder().slice(1).map((sectionId, index) => {
                    const section = generatedSections[sectionId];
                    if (!section) return null;

                    // Map section IDs to icons
                    const iconMap: Record<string, React.ReactNode> = {
                        'government': <BuildingOffice2Icon className="w-16 h-16 text-blue-400" />,
                        'healthcare': <HeartIcon className="w-16 h-16 text-blue-400" />,
                        'financial-services': <BanknotesIcon className="w-16 h-16 text-blue-400" />,
                        'energy': <BoltIcon className="w-16 h-16 text-blue-400" />,
                        'transport': <TruckIcon className="w-16 h-16 text-blue-400" />,
                        'education': <AcademicCapIcon className="w-16 h-16 text-blue-400" />,
                        'retail': <ShoppingBagIcon className="w-16 h-16 text-blue-400" />,
                        'defence': <ShieldCheckIcon className="w-16 h-16 text-blue-400" />,
                        'challenges': <ExclamationTriangleIcon className="w-16 h-16 text-red-400" />,
                        'future-outlook': <EyeIcon className="w-16 h-16 text-blue-400" />,
                        'action-playbook': <ClipboardDocumentCheckIcon className="w-16 h-16 text-green-400" />
                    };

                    return (
                        <div key={sectionId} id={sectionId}>
                            <DynamicReportSection 
                                section={section} 
                                icon={iconMap[sectionId]}
                            />
                        </div>
                    );
                })}

                {/* Call to Action */}
                <section id="call-to-action" className="min-h-screen bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10 flex items-center">
                    <div className="container mx-auto px-8 py-20 text-center">
                        <h2 className="text-6xl font-thin mb-12">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
                            Download the complete AI in the Middle East 2025 Playbook and get your strategic roadmap for AI adoption.
                        </p>
                        <div className="space-y-6">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-4 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105 mr-6">
                                Download Full Report
                            </button>
                            <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-12 py-4 rounded-full text-xl font-medium transition-all duration-300">
                                Book Strategy Call
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

// Component definitions
const StatBlock: React.FC<{ number: string; label: string }> = ({ number, label }) => (
    <div className="border-l-4 border-blue-400 pl-6 group hover:border-blue-300 transition-all duration-300">
        <div className="text-4xl font-thin text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">{number}</div>
        <div className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{label}</div>
    </div>
);

const BigNumberCard: React.FC<{ number: string; subtitle: string; description: string; trend: string }> = ({ number, subtitle, description, trend }) => (
    <div className="relative group hover-lift">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 animate-ai-breathe"></div>
        <div className="relative bg-gray-900/80 p-12 rounded-3xl border border-gray-800 group-hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
            <div className="text-7xl font-thin text-white mb-4">{number}</div>
            <div className="text-2xl text-gray-400 mb-6">{subtitle}</div>
            <div className="text-lg text-gray-300 mb-4">{description}</div>
            <div className="inline-flex items-center space-x-2 text-green-400 animate-pulse">
                <ArrowTrendingUpIcon className="w-5 h-5 animate-bounce" />
                <span className="font-medium">{trend}</span>
            </div>
        </div>
    </div>
);

export default AIFullReport;