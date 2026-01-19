import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ErrorBoundary } from "@/components/error-boundary";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" role="main">
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <Services />
        </ErrorBoundary>
        <ErrorBoundary>
          <Projects />
        </ErrorBoundary>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
