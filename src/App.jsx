import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";

function App() {
  return (
    <div className="min-h-screen bg-bg-page">
      <Header />

      <main>
        <Hero />
        <Benefits />
      </main>

    </div>
  )
}

export default App