import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}


        {/* Background Effects */}
        <StarBackground />

        {/* NavBar */}
        <NavBar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <AboutSection />


        </main>


        {/* Footer */}

        <Footer />
    </div>
};