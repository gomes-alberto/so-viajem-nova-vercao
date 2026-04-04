import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import Testimonials from "./components/sections/Testimonials";
import CallToAction from "./components/sections/CallToAction";

function App() {
  return (
    <div className="min-h-screen bg-bg-page">
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <CallToAction />
      </main>

    </div>
  )
}

export default App;