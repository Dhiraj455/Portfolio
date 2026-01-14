"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">About Dhiraj</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              Software Engineer Intern at Fetch Rewards and Graduate Teaching Assistant at University of Illinois Chicago. Currently pursuing Master of Science in Computer Science with a 3.8 GPA, expected graduation in May 2026.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Passionate about mobile development using Kotlin and Jetpack Compose, full-stack engineering, and AI/ML applications. Previously completed Bachelor of Engineering in Information Technology with an outstanding CGPA of 9.63/10 from SIES Graduate School of Technology, Mumbai University.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-full">
                <Image
                  src="/DhirajPhoto.jpeg"
                  alt="Dhiraj Shelke"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
            <p className="text-muted-foreground mb-4">
              C++, Python, Java, TypeScript, Kotlin, Ruby
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Frontend & Mobile</h3>
            <p className="text-muted-foreground mb-4">
              HTML, CSS, JavaScript, React.js, Bootstrap, Flutter, Jetpack Compose
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-3">Backend & Data Science</h3>
            <p className="text-muted-foreground mb-4">
              Node.js, Django, Flask, MongoDB, PostgreSQL, MySQL, TensorFlow, Scikit-learn
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}