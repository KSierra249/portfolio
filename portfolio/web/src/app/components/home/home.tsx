import { FC } from 'react';
import IMG from "../images/flower.jpg";
import RESUME from './Resume___Karla_Sierra_Mendoza.pdf'

export const Home: FC = () => {
  return (
    <div className="flex-grow">
      <section
        id="home"
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">KARLA SIERRA</h1>
          <h2 className="text-2xl font-medium mb-8">Developer</h2>
          <div className="space-x-4">
            <a 
            className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700 transition inline-block text-center"
            href={RESUME}
            download="Karla_Sierra_Resume.pdf"
            >
              Download CV
            </a>
            <button 
            className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700 transition"
            onClick={() => window.location.href = '#contact'}
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>
  </div>
  );
};

export default Home;