
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
    </div>
  );
}

export default App;
