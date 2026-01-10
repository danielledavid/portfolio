import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AnimatedOutlet from "../components/AnimatedOutlet";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1">
        <main className="flex-1">
  <AnimatedOutlet />
</main>
      </main>

      <Footer />
    </div>
  );
}
