import { ArrowUp } from "lucide-react";
import SocialLinks from "./SocialLinks"; // adjust path if needed

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 bg-card relative border-t border-border mt-12
      flex flex-col items-center justify-center gap-6 text-center"
    >
      {/* SOCIAL LINKS FIRST */}
      <SocialLinks />

      {/* COPYRIGHT */}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Danielle David, All rights reserved.
      </p>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20
                   text-primary transition-colors cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
