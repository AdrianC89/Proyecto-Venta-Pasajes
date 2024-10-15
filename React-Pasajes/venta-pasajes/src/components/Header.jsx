import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between w-full box-border">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-white">Viajes</h1>
        <ul className="flex gap-x-4 ml-6">
          <li>
            <Link to="/" className="text-white hover:bg-gray-700 px-4 py-2 rounded">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/pasajes" className="text-white hover:bg-gray-700 px-4 py-2 rounded">
              Pasajes
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center ml-auto">
        <ul className="flex gap-x-4">
          <li>
            <Link to="/login" className="text-white hover:bg-blue-600 bg-blue-500 px-4 py-2 rounded">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-white hover:bg-blue-600 bg-blue-500 px-4 py-2 rounded">
              Registrate
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
