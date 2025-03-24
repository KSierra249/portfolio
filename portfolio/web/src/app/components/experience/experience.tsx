import { FC } from 'react';

export const Experience: FC = () => {
  return (
    <section
        id="experience"
        className="container mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center mb-8">EXPERIENCE</h2>
        <div className="container mx-auto px-4 space-x-4">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2">
              <h4 className="text-lg font-semibold mb-4 text-green-600">EDUCATION</h4>
              <ul className="space-y-4">
                <li>
                  <h5 className="font-semibold">2022-Present</h5>
                  <p className="text-gray-700">University of Nebraska - Lincoln - Software Engineering</p>
                </li>
                <li>
                  <h5 className="font-semibold">2021</h5>
                  <p className="text-gray-700">Concordia University</p>
                </li>
                <li>
                  <h5 className="font-semibold">2020-2022</h5>
                  <p className="text-gray-700">Southeast Community College</p>
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <h4 className="text-lg font-semibold mb-4 text-green-600">EXPERIENCE</h4>
              <ul className="space-y-4">
                <li>
                  <h5 className="font-semibold">2024-Present</h5>
                  <p className="text-gray-700">Firespring - Software Engineering Intern</p>
                </li>
                <li>
                  <h5 className="font-semibold">2024-Present</h5>
                  <p className="text-gray-700">PrivyAI - Software Developer</p>
                </li>
                <li>
                  <h5 className="font-semibold">2024</h5>
                  <p className="text-gray-700">University of Nebraska - Lincoln - Game Developer</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Experience;