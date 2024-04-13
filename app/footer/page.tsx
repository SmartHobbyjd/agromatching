import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationMenu = () => {
  const router = useRouter();
  const handleNavigate = (path: string) => router.push(path);

  return (
    <nav className="bg-green-800 text-white py-4 px-8 flex items-center justify-between">
      <div className="font-bold text-xl">Agromatching</div> 
      <ul className="flex space-x-6">
        <li>
          <Link href="#">
            <a onClick={() => handleNavigate('/components/Login')} className="hover:text-green-500">Login</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a onClick={() => handleNavigate('/components/Registration')} className="hover:text-green-500">Registration</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a onClick={() => handleNavigate('/components/Welcome')} className="hover:text-green-500">Welcome</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
