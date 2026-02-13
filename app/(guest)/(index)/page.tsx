import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white">
            Romel Premacio
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
            Portfolio & Personal Projects
          </p>
        </div>
        
        <p className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed max-w-xl mx-auto">
          Welcome to my portfolio. Explore my work, projects, and learn more about my journey.
        </p>
        
        <div className="flex gap-4 justify-center pt-8">
          <Link href="/about">
            <Button className="px-8 py-3 text-lg">
              About Me
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="outline" className="px-8 py-3 text-lg">
              Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}