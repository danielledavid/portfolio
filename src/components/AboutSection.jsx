
import { Code } from "lucide-react";
import { Database } from "lucide-react";
import { User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="containter mx-auto max-w-5xl">
            <h2 className="text-3xl md:text=4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Data Processing, Automation, 
                        <br></br>& Problem-Solving</h3>
                        
                        <p className="text-muted-foreground">I've been building things I was 11.
                        What started as a simple HTML project about a game called "Angry Birds" turned into a full-blown passion: understand the messy, make it elegant, and automate the parts of life that don’t need to be difficult. </p>

                        <p className="text-muted-foreground">Today, I work as a Data Manager. From wrangling large datasets, to writing Python scripts that shave hours off repetitive workflows, and shaping dashboards in Google Cloud that help teams see their world more clearly. My guiding principle is simple: if something can run smoother, cleaner, or smarter, it should.</p>
                        
                        <p className="text-xs italic text-muted-foreground/60">When I'm not working: playing video games, chess, playing classical piano, and travelling with friends</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                        {" "}
                        Get in Touch
                        </a>

                        <a href="/danielle-david_resume.pdf" 
                        download="danielle-david_resume.pdf"
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                        {" "}
                        Download Resume
                        </a>
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6">

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 -6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Automation</h4>
                                <p className="text-muted-foreground">
                                    Eliminating repetitive work through Python scripts, process improvements, and smart workflows.
                                </p>
                            </div>
                    </div>
                        </div>



                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Database className="h-6 -6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Data Processing</h4>
                                <p className="text-muted-foreground">
                                    Cleaning, analyzing, and transforming raw data into insights that drive real decisions.
                                </p>
                            </div>
                    </div>
                    </div>


                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 -6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">User-Driven Solutions</h4>
                                <p className="text-muted-foreground">
                                    Building solutions centered on simplicity, clarity, and making people’s jobs easier.
                                </p>
                            </div>
                    </div>

                    </div>

                </div>

            </div>

        </div>
    </section>;
};