
import Link from 'next/link';
import type { FC } from 'react';
import { ModeToggle } from './mode-toggle';

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
  return (
    <header>
      <div className='flex items-center justify-between py-4 px-8'>
        <Link href='/'>Home</Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;