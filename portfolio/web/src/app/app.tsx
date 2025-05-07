
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Experience } from "./components/experience/experience";
import { Contact } from "./components/contact/contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Home />
      <About />
      <Experience />
      <Contact />
      <button
        id="back-to-top"
        className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to Top
      </button>
    </div>
  );
}

export default App;
