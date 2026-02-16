"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "GenAI Agent – AI-Powered Codebase Analysis Platform",
    description: "Built an intelligent code analysis system that automatically analyzes repositories, detects code smells, and provides AI-powered refactoring recommendations. Supports multi-language analysis with real-time chat interface for codebase understanding.",
    technologies: ["FastAPI", "Next.js", "Python AST", "NetworkX", "FAISS", "Google Gemini API", "LangChain"],
    achievements: "Multi-language code analysis, AI-powered refactoring recommendations, Real-time chat interface",
    company: "Personal Project",
    github: "https://github.com/Dhiraj455/Codebase-Agent"
  },
  {
    id: 2,
    title: "AI Meeting Recorder – Android App with Real-Time Transcription",
    description: "Developed an AI-powered app for recording meetings, real-time transcription, and generating actionable summaries. Integrated Google Gemini AI API for accurate transcription and summarization.",
    technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Google Gemini AI API"],
    achievements: "Real-time transcription, AI-powered summaries, Production-ready Android app",
    company: "Personal Project",
    github: "https://github.com/Dhiraj455/TwinMind-App"
  },
  {
    id: 3,
    title: "Vitamin Deficiency Detection – Deep Learning Mobile Application",
    description: "Built a CNN model to detect vitamin deficiencies from images, integrated into an Android app for real-time analysis. Enabled early detection to assist users in seeking timely medical consultation.",
    technologies: ["Python", "TensorFlow", "Kotlin", "Android Studio", "Jetpack Compose"],
    achievements: "CNN deep learning model, Real-time image analysis, Early detection system",
    company: "Personal Project",
    github: "https://github.com/Dhiraj455/Vitamin-Deficiency-Recognition"
  },
  {
    id: 4,
    title: "Art Selling Website",
    description: "An e-commerce web application serves as a platform for painters and sketch artists to exhibit their artwork and offer it for sale. Customers can place orders via Razorpay payment gateway and monitor order progress.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
    achievements: "Secure payment integration, Order tracking system, E-commerce platform",
    company: "Personal Project",
    github: "https://github.com/Dhiraj455/Art-Selling-Website",
    liveUrl: "https://art-selling-website.vercel.app"
  },
  {
    id: 5,
    title: "College Student Portal",
    description: "Developed a website application to spread information about campus events and encourage community among college students. Features announcements, sharing notes, blogs, and a forum for interaction between alumni and students.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
    achievements: "Community platform, Alumni-student interaction, Led team of developers",
    company: "SIESGST",
    liveUrl: "https://portal.siesgst.ac.in/"
  },
  {
    id: 6,
    title: "Aim Assist (Final Year Project)",
    description: "An IoT project used for training and education purposes of shooting to improve the accuracy of aim or users' shooting skills and provide real-time feedback and suggestions to the users. It has a laser module in the gun instead of physical bullets to reduce training costs while maintaining accuracy and LDR sensors on shooting board to detect laser. The users' processed data with progress, feedback and suggestions are accessible to user from web and mobile application. The shooting board simulates real shooting scenarios with DC motors and wheels for movement.",
    technologies: ["Raspberry Pi", "Arduino Uno WIFI", "Next.js", "Flutter", "MongoDB"],
    achievements: "Real-time feedback system, Cost-effective training solution, IoT integration",
    company: "Final Year Project",
    github: "https://github.com/Aim-Assist"
  },
  {
    id: 7,
    title: "Automatic Egg Incubator",
    description: "Developed an IoT project for simulating avian incubation by keeping eggs warm at a particular temperature range and in the correct humidity with a turning mechanism to hatch them. A microcontroller, in conjunction with temperature and humidity sensors, facilitates automation while offering the ability to retrieve data via a web application and make manual adjustments using any device.",
    technologies: ["Raspberry Pi", "MongoDB", "Next.js"],
    achievements: "Automated incubation, Web-based monitoring and control, IoT sensors integration",
    company: "Personal Project",
    github: "https://github.com/Dhiraj455/Egg-Incubator"
  },
  {
    id: 8,
    title: "Arena Platform Editor and Compiler",
    description: "Arena is a platform for promoting competitive programming and organizing contests on website. During contests, an editor and compiler are utilized for code debugging and compilation. The editor supports various programming languages, including C++, C, Python, Java, Go, and JavaScript.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    achievements: "Multi-language support, Competitive programming platform, Real-time compilation",
    company: "Personal Project"
  },
  {
    id: 9,
    title: "Soil Analysis And Vendor Recommendation",
    description: "A Machine learning project for analysing soil type and accordingly provide details about the suitable crop for cultivation and total cost of cultivation. Comprehensive of the information provided by analysis the system recommends nearby vendor/ retailers with maximum profit margin.",
    technologies: ["Python", "Flask", "Bootstrap", "Machine Learning"],
    achievements: "Soil analysis, Crop recommendation, Vendor matching, ML-based predictions",
    company: "Personal Project",
    github: "https://github.com/Dhiraj455/Soil-Analysis-and-Vendor-Recommendation"
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Key Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Showcasing innovative projects spanning AI-powered systems, mobile applications, and full-stack solutions that demonstrate technical expertise and problem-solving capabilities.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-card rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-32 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <h4 className="font-semibold text-sm text-primary">{project.company}</h4>
                <p className="text-xs text-muted-foreground mt-1">Enterprise Project</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex items-center gap-2">
                  {(project as any).liveUrl && (
                    <a
                      href={(project as any).liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="Live Demo"
                      title="Live Demo"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                  {(project as any).github && (
                    <a
                      href={(project as any).github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      aria-label="GitHub"
                      title="GitHub"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-3">
                  🎯 {project.achievements}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}