import Link from 'next/link';
import { useNavigation } from 'next/navigation';

const NavigationMenu = () => {
  const { navigate } = useNavigation();

  const handleNavigate = (path: string) => navigate(path);

  return (
    <nav className="bg-green-800 text-white py-4 px-8 flex items-center justify-between">
      <div className="font-bold text-xl">Agromatching</div> 
      <ul className="flex space-x-6">
        <li>
          <Link href="/components/Login">
            <a onClick={handleNavigate} className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">Login</a>
          </Link>
        </li>
        <li>
          <Link href="/components/Registration">
            <a onClick={handleNavigate} className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">Registration</a>
          </Link>
        </li>
        <li>
          <Link href="/components/Welcome">
            <a onClick={handleNavigate} className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md">Welcome</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
