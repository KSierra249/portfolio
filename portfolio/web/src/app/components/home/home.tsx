import { FC } from 'react';
import IMG from "../images/flower.jpg";

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
            <button className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700 transition">
              Download CV
            </button>
            <button className="bg-green-600 px-6 py-3 rounded-md hover:bg-green-700 transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>
  </div>
  );
};

export default Home;