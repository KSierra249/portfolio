import { FC } from 'react';
import IMG from "../images/pic.jpg";
import { 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiRuby, 
  SiJavascript, 
  SiReact, 
  SiTypescript, 
  SiRedux,
  SiC, 
  SiPhp,
  SiGit,
  SiMysql,
  SiNodedotjs,
  SiExpress,
  SiAmazonwebservices,
  SiDocker,
  SiTailwindcss
} from 'react-icons/si';

export const About: FC = () => {
  return (
    <section 
      id="about" 
      className="container mx-auto px-4 py-16 bg-white"
    >
      <h2 className="text-3xl font-bold mb-8 text-center mb-8">ABOUT ME</h2>
      <div className="container mx-auto px-4 space-x-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img 
              src={IMG} 
              alt="Profile" 
              className="rounded-lg shadow-md w-3/4 mx-auto"
            />
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold mb-4 text-green-600">WHO AM I?</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Hi, I'm Karla Sierra, a student at the University of Nebraska - Lincoln, pursuing a degree in Software Engineering. 
              I am passionate about web development and software engineering. I enjoy learning new technologies and applying them 
              to create innovative solutions. In my free time, I love to read, do video editing, and watch anime.
            </p>

            <h3 className="text-xl font-semibold mb-4 text-green-600">SKILLS</h3>
            <h5 className="text-md font-semibold mb-4">Programming Languages / Libraries</h5>
            <div className="flex space-x-4 text-3xl mb-4">
              <SiPython className="text-green-600" />
              <SiHtml5 className="text-orange-600" />
              <SiCss3 className="text-blue-600" />
              <SiRuby className="text-red-600" />
              <SiJavascript className="text-yellow-400" />
              <SiPhp className="text-purple-600" />
              <SiC className="text-black" />
              <SiTypescript className="text-blue-700" />
              <SiReact className="text-blue-400" />
              <SiRedux className="text-purple-600" />
              <SiTailwindcss className="text-blue-400" />
            </div>
            <h5 className="text-md font-semibold mb-4">Technologies</h5>
            <div className="flex space-x-4 text-3xl mb-4">
              <SiGit className="text-orange-600" />
              <SiMysql className="text-blue-600" />
              <SiNodedotjs className="text-green-600" />
              <SiExpress className="text-gray-700" />
              <SiAmazonwebservices className="text-orange-400" />
              <SiDocker className="text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;