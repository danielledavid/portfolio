
import { StarBackground } from "../components/StarBackground";

import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";


export default function Home() {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


        {/* Background Effects */}
        <StarBackground />



        {/* Main Content */}
        <main>
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <AboutSection />


        </main>


        {/* Footer */}

    </div>
};