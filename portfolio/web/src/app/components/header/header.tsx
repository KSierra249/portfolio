import { FC } from 'react';


export const Header: FC = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-green-600">KSIERRA</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-green-600 font-medium">
                HOME
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-600 font-medium">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-green-600 font-medium">
                EXPERIENCE
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-600 font-medium">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </header>
  )
};

export default Header;