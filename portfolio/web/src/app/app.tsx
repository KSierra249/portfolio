
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Experience } from "./components/experience/experience";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Home />
      <About />
      <Experience />
      <section
        id="contact"
        className="container mx-auto px-4 py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">GET IN TOUCH</h2>
        <p className="text-gray-700 mb-4">Feel free to reach out!</p>

      </section>
    </div>
  );
}

export default App;
