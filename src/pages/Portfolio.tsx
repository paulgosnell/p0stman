import { Helmet, HelmetProvider } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
    Brain,
    Target,
    Users,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Rocket,
    Award,
    Clock,
    DollarSign,
    MessageSquare,
    Building2,
    Zap,
    Globe,
    Code,
    Lightbulb,
    Star,
    ExternalLink
} from 'lucide-react';
import Header from '../components/Header';
import AnimatedFooter from '../components/AnimatedFooter';

const problemsSolved = [
    {
        icon: <Clock className="w-8 h-8 text-red-500" />,
        problem: "Need senior expertise fast",
        solution: "Available immediately with 20+ years experience",
        description: "When agencies need a senior strategist or technical lead who can hit the ground running without onboarding time."
    },
    {
        icon: <DollarSign className="w-8 h-8 text-green-500" />,
        problem: "Budget constraints on senior hires",
        solution: "Fractional expertise at 50-70% less cost",
        description: "Get C-level strategic thinking and execution without the full-time executive salary and overhead."
    },
    {
        icon: <Target className="w-8 h-8 text-blue-500" />,
        problem: "Complex projects need proven delivery",
        solution: "Track record of scaling 1→40 teams",
        description: "From startup MVPs to enterprise transformations, I've delivered across every scale and complexity."
    },
    {
        icon: <Rocket className="w-8 h-8 text-purple-500" />,
        problem: "Tight deadlines, high stakes",
        solution: "AI-accelerated development & proven processes",
        description: "Combine cutting-edge AI tools with battle-tested methodologies to deliver 80% faster than traditional approaches."
    }
];

const achievements = [
    {
        metric: "1→30",
        label: "Team Scale",
        description: "Built and scaled Genieology agency to 30+ people before successful exit"
    },
    {
        metric: "20+",
        label: "Years Experience",
        description: "Two decades across startups, scale-ups, and enterprise environments"
    },
    {
        metric: "40+",
        label: "Enterprise Projects",
        description: "Led digital transformations for banks, government, and media companies"
    },
    {
        metric: "80%",
        label: "Faster Delivery",
        description: "AI-powered development processes dramatically reduce time-to-market"
    }
];

const expertise = [
    {
        category: "Strategic Leadership",
        skills: ["Product Strategy", "Digital Transformation", "Team Building", "Stakeholder Management", "Go-to-Market", "Business Development"]
    },
    {
        category: "Technical Delivery",
        skills: ["Full-Stack Development", "AI Integration", "Cloud Architecture", "DevOps", "API Design", "Database Design"]
    },
    {
        category: "AI & Innovation",
        skills: ["AI-Powered Development", "Process Automation", "Rapid Prototyping", "Technology Evaluation", "Innovation Strategy", "Emerging Tech"]
    },
    {
        category: "Business Growth",
        skills: ["Agency Scaling", "Startup Growth", "Revenue Optimization", "Client Acquisition", "Partnership Development", "Exit Strategy"]
    }
];

const majorProjects = [
    {
        client: "First Abu Dhabi Bank",
        project: "Enterprise Digital Transformation",
        role: "Lead Product Strategist",
        duration: "18 months",
        team: "40+ people",
        impact: "60% efficiency improvement",
        description: "Led one of the region's largest digital transformations, scaling from 1 pilot to 40+ person team across multiple departments.",
        image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/fab1.png",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/500px-First_Abu_Dhabi_Bank_Logo.svg.png"
    },
    {
        client: "Al Arabiya",
        project: "News Platform Redesign",
        role: "Technical Lead",
        duration: "8 months",
        team: "20+ global team",
        impact: "40% performance boost",
        description: "Led international team through complete platform modernization during COVID-19, delivering future-ready multi-platform experience.",
        image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/arabia1.png",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Al-Arabiya_new_logo.svg/500px-Al-Arabiya_new_logo.svg.png"
    },
    {
        client: "Abu Dhabi DoH + IBM",
        project: "My Health Coach App",
        role: "Product Lead",
        duration: "6 months",
        team: "Partnership delivery",
        impact: "Government-scale deployment",
        description: "Partnered with IBM to deliver personalized wellness app for Abu Dhabi residents with fitness tracking integration.",
        image: "https://api.chilledsites.com/storage/v1/object/public/p0stman/doh1.png",
        logo: "https://api.chilledsites.com/storage/v1/object/public/p0stman/doh-logo.png"
    }
];

const testimonials = [
    {
        quote: "Paul's ability to come in and immediately understand complex business requirements while delivering technical solutions is remarkable. He's the kind of senior resource every agency needs on speed dial.",
        author: "Sarah Mitchell",
        role: "Creative Director",
        company: "Leading Digital Agency"
    },
    {
        quote: "When we needed someone who could handle both strategy and execution on a tight deadline, Paul was our go-to. His experience shows in every decision and delivery.",
        author: "Ahmed Al-Rashid",
        role: "Innovation Director",
        company: "Enterprise Client"
    }
];

export default function Portfolio() {
    return (
        <HelmetProvider>
            <div className="min-h-screen bg-white">
                <Helmet>
                    <title>Paul Gosnell - Senior Digital Strategist & Technical Lead | Available for Projects</title>
                    <meta name="description" content="20+ years experience in digital strategy, technical leadership, and business growth. Available for short-term projects with agencies and consultancies." />
                    <meta name="keywords" content="digital strategist, technical lead, consultant, agency partner, senior developer, product strategy" />
                </Helmet>

                {/* Hero Section */}
                <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-[url('/src/assets/images/p0stman-bg.png')] bg-cover bg-center opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                    </div>

                    <Header />

                    <div className="container mx-auto px-4 pt-24 md:pt-40 pb-16 md:pb-20 relative z-10">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                                {/* Left Column - Hero Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <Brain className="w-8 h-8 text-blue-400" />
                                            <span className="text-blue-400 font-medium text-lg">Senior Digital Strategist & Technical Lead</span>
                                        </div>

                                        <h1 className="text-5xl md:text-6xl font-thin leading-tight">
                                            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                                                Paul Scanlon
                                            </span>
                                            <br />
                                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                                Available for Your Next Project
                                            </span>
                                        </h1>

                                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
                                            20+ years building, scaling, and exiting digital ventures. When agencies and consultancies
                                            need senior expertise fast, I deliver strategy, execution, and results.
                                        </p>
                                    </div>

                                    {/* Key Stats */}
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                            <div className="text-2xl font-thin text-white mb-1">Available</div>
                                            <div className="text-sm text-gray-300">Immediately</div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                            <div className="text-2xl font-thin text-white mb-1">1-12</div>
                                            <div className="text-sm text-gray-300">Month Projects</div>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                            <div className="text-2xl font-thin text-white mb-1">Remote</div>
                                            <div className="text-sm text-gray-300">or On-site</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <motion.a
                                            href="mailto:paul@p0stman.com?subject=Project Collaboration Inquiry"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-lg inline-flex items-center gap-2"
                                        >
                                            <MessageSquare className="w-5 h-5" />
                                            Let's Collaborate
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            href="#experience"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-8 py-4 border border-gray-600 text-white rounded-xl hover:bg-white/10 transition-all font-medium text-lg"
                                        >
                                            View Experience
                                        </motion.a>
                                    </div>
                                </motion.div>

                                {/* Right Column - Problem/Solution */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="relative"
                                >
                                    <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl blur-xl animate-pulse" />

                                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                                        <div className="space-y-6">
                                            <div className="text-center mb-8">
                                                <h3 className="text-2xl font-light text-white mb-3">What Problems I Solve</h3>
                                                <p className="text-gray-300 font-light">For agencies and consultancies who need senior expertise, fast</p>
                                            </div>

                                            <div className="space-y-6">
                                                {problemsSolved.slice(0, 2).map((item, index) => (
                                                    <div key={index} className="flex items-start gap-4">
                                                        <div className="p-3 bg-gray-700/50 rounded-xl">
                                                            {item.icon}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-white mb-1">{item.problem}</h4>
                                                            <p className="text-blue-400 text-sm font-light mb-2">{item.solution}</p>
                                                            <p className="text-gray-300 text-xs font-light">{item.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-6 border-t border-gray-700">
                                                <div className="text-center">
                                                    <p className="text-sm text-gray-400 mb-3 font-light">Recent enterprise clients:</p>
                                                    <div className="flex justify-center items-center gap-4 opacity-60">
                                                        <span className="text-xs text-gray-500">FAB</span>
                                                        <span className="text-xs text-gray-500">•</span>
                                                        <span className="text-xs text-gray-500">IBM</span>
                                                        <span className="text-xs text-gray-500">•</span>
                                                        <span className="text-xs text-gray-500">Al Arabiya</span>
                                                        <span className="text-xs text-gray-500">•</span>
                                                        <span className="text-xs text-gray-500">Abu Dhabi Gov</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problems I Solve Section */}
                <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-thin mb-6">Problems I Solve for Agencies</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                    When you need senior expertise that can hit the ground running and deliver results fast
                                </p>
                            </motion.div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                {problemsSolved.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                                    >
                                        <div className="flex items-start gap-6">
                                            <div className="p-4 bg-gray-50 rounded-2xl">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-light mb-2 text-gray-900">{item.problem}</h3>
                                                <p className="text-blue-600 font-medium mb-3">{item.solution}</p>
                                                <p className="text-gray-600 font-light">{item.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Track Record Section */}
                <section id="experience" className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-thin mb-6">Track Record</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                    Two decades of building, scaling, and exiting digital ventures across multiple industries
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {achievements.map((achievement, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-1"
                                    >
                                        <div className="text-5xl font-thin mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                            {achievement.metric}
                                        </div>
                                        <div className="text-xl font-light mb-2 text-gray-800">{achievement.label}</div>
                                        <div className="text-gray-600 font-light text-sm">{achievement.description}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Major Projects Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-thin mb-6">Major Project Highlights</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                    Enterprise-scale deliveries that demonstrate strategic thinking and execution capability
                                </p>
                            </motion.div>

                            <div className="space-y-8">
                                {majorProjects.map((project, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                                    >
                                        <div className="grid lg:grid-cols-2 gap-0">
                                            <div className="relative h-64 lg:h-auto p-4">
                                                <img
                                                    src={project.image}
                                                    alt={project.project}
                                                    className="w-full h-full object-contain"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                                                <div className="absolute bottom-6 left-6">
                                                    <img
                                                        src={project.logo}
                                                        alt={`${project.client} logo`}
                                                        className="h-12 filter brightness-0 invert"
                                                    />
                                                </div>
                                            </div>

                                            <div className="p-8 lg:p-12">
                                                <div className="space-y-6">
                                                    <div>
                                                        <h3 className="text-2xl font-light text-gray-900 mb-2">{project.project}</h3>
                                                        <p className="text-blue-600 font-medium mb-1">{project.client}</p>
                                                        <p className="text-gray-600 font-light">{project.role}</p>
                                                    </div>

                                                    <p className="text-gray-700 font-light leading-relaxed">{project.description}</p>

                                                    <div className="grid grid-cols-3 gap-4">
                                                        <div className="text-center">
                                                            <div className="text-2xl font-thin text-blue-600 mb-1">{project.duration}</div>
                                                            <div className="text-xs text-gray-500">Duration</div>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="text-2xl font-thin text-purple-600 mb-1">{project.team}</div>
                                                            <div className="text-xs text-gray-500">Team Size</div>
                                                        </div>
                                                        <div className="text-center">
                                                            <div className="text-2xl font-thin text-green-600 mb-1">{project.impact}</div>
                                                            <div className="text-xs text-gray-500">Impact</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expertise Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-thin mb-6">Core Expertise</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                    Deep experience across strategy, technology, and business growth
                                </p>
                            </motion.div>

                            <div className="grid lg:grid-cols-2 gap-8">
                                {expertise.map((area, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8"
                                    >
                                        <h3 className="text-xl font-light text-gray-900 mb-6">{area.category}</h3>
                                        <div className="grid grid-cols-2 gap-3">
                                            {area.skills.map((skill, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                    <span className="text-gray-700 font-light text-sm">{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-center mb-16"
                            >
                                <h2 className="text-4xl font-thin mb-6">What Clients Say</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                                    Feedback from agencies and enterprise clients who've worked with me
                                </p>
                            </motion.div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                                    >
                                        <p className="text-gray-700 mb-6 italic font-light leading-relaxed">"{testimonial.quote}"</p>
                                        <div>
                                            <p className="font-medium text-gray-900">{testimonial.author}</p>
                                            <p className="text-gray-600 font-light">{testimonial.role}</p>
                                            <p className="text-gray-500 font-light text-sm">{testimonial.company}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-5xl font-thin mb-6">
                                    Ready to Collaborate?
                                </h2>

                                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
                                    Available for short-term projects, strategic consulting, and technical leadership.
                                    Let's discuss how I can help deliver your next big project.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                    <motion.a
                                        href="mailto:paul@p0stman.com?subject=Project Collaboration Inquiry"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium text-lg inline-flex items-center gap-2"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        Start a Conversation
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        href="/case-studies"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="px-8 py-4 border border-gray-600 text-white rounded-xl hover:bg-white/10 transition-all font-medium text-lg inline-flex items-center gap-2"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        View All Projects
                                    </motion.a>
                                </div>

                                <div className="text-gray-400 font-light">
                                    <p className="text-sm">✨ Available immediately • Remote or on-site • 1-12 month projects</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <AnimatedFooter />
            </div>
        </HelmetProvider>
    );
}