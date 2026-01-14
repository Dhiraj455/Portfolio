"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Aim Assist",
    description: "An IoT project used for training and education purposes of shooting to improve the accuracy of aim or users' shooting skills and provide real-time feedback and suggestions to the users.",
    technologies: ["Raspberry Pi", "Arduino Uno WIFI", "Next.js", "Flutter", "MongoDB"],
    achievements: "Real-time feedback system, Cost-effective training solution",
    company: "Personal Project"
  },
  {
    id: 2,
    title: "Art Selling Website",
    description: "An e-commerce web application serves as a platform for painters and sketch artists to exhibit their artwork and offer it for sale. Customers can place orders via Razorpay payment gateway.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Razorpay"],
    achievements: "Secure payment integration, Order tracking system",
    company: "Personal Project"
  },
  {
    id: 3,
    title: "Vitamin Deficiency Detection",
    description: "Developed a deep learning model using TensorFlow and Keras to detect vitamin deficiencies from images of nails, eyes, etc. Built Android app using Kotlin and Jetpack Compose for real-time image analysis.",
    technologies: ["Python", "TensorFlow", "Keras", "Kotlin", "Android Studio", "Jetpack Compose"],
    achievements: "Deep learning model, Real-time image analysis, Android app",
    company: "Personal Project"
  },
  {
    id: 4,
    title: "College Student Portal",
    description: "Developed a website application to spread information about campus events and encourage a feeling of community among college students with features like announcements, sharing notes, blogs and more.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
    achievements: "Community platform, Alumni-student interaction, Led team of developers",
    company: "SIESGST"
  },
  {
    id: 5,
    title: "Automatic Egg Incubator",
    description: "Developed an IoT project for simulating avian incubation by keeping eggs warm at a particular temperature range and in the correct humidity with a turning mechanism to hatch them.",
    technologies: ["Raspberry Pi", "MongoDB", "Next.js", "IoT Sensors"],
    achievements: "Automated incubation, Web-based monitoring and control",
    company: "Personal Project"
  },
  {
    id: 6,
    title: "Arena Platform Editor and Compiler",
    description: "A platform for promoting competitive programming and organizing contests. The editor supports various programming languages, including C++, C, Python, Java, Go, and JavaScript.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    achievements: "Multi-language support, Competitive programming platform",
    company: "Personal Project"
  },
  {
    id: 7,
    title: "Soil Analysis And Vendor Recommendation",
    description: "A Machine learning project for analysing soil type and accordingly provide details about the suitable crop for cultivation and total cost of cultivation. The system recommends nearby vendors with maximum profit margin.",
    technologies: ["Python", "Flask", "Bootstrap", "Machine Learning"],
    achievements: "Soil analysis, Crop recommendation, Vendor matching",
    company: "Personal Project"
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
          Highlighting major engineering achievements and systems I&apos;ve built that delivered significant business impact.
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
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
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