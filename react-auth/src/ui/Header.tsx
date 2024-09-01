import { Link, NavLink } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-slate-200 px-4 py-2 text-lg'>
      <Link to={'/'} className='font-bold'>
        Auth-App
      </Link>
      <NavBar>
        <div className='space-x-3'>
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/about'}>About</NavLink>
        </div>
        <div className='space-x-3'>
          <NavLink to={'/sign-up'}>Sign Up</NavLink>
          <NavLink to={'/sign-in'}>Sign In</NavLink>
        </div>
      </NavBar>
    </header>
  );
};

export default Header;
