import { ReactNode } from 'react';

const NavBar = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex items-center justify-center space-x-8'>{children}</div>
  );
};

export default NavBar;
