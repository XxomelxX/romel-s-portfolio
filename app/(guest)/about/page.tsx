import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            Romel Premacio
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Developer & Creator
          </p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed">
              Hello! I'm Romel Premacio, a passionate developer focused on creating beautiful and functional digital experiences. 
              I enjoy working with modern technologies and continuously learning new skills.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              What I Do
            </h2>
            <ul className="text-lg text-slate-700 dark:text-slate-400 space-y-3">
              <li className="flex items-start gap-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl mt-1">→</span>
                <span>Build responsive and modern web applications</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl mt-1">→</span>
                <span>Work with cutting-edge technologies and frameworks</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl mt-1">→</span>
                <span>Create user-centered design solutions</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              My Interests
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed">
              I'm interested in web development, software engineering, and creating projects that make a positive impact. 
              When I'm not coding, you might find me exploring new technologies or working on personal projects.
            </p>
          </section>
        </div>

        <div className="flex gap-4 pt-8">
          <Link href="/">
            <Button variant="outline" className="px-8 py-3 text-lg">
              Back Home
            </Button>
          </Link>
          <Link href="/projects">
            <Button className="px-8 py-3 text-lg">
              View Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}