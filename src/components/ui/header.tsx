
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import type { FC } from 'react';
import { ModeToggle } from './mode-toggle';
import { Button } from './button';

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
  return (
    <header className='flex flex-row items-center justify-between px-8 py-4 bg-gray-800'>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul>
      </nav>
      <menu className='flex items-center space-x-4 py-4 px-8 justify-end'>
        <li>
          <SignedOut>
            <SignInButton>
              <Button variant='default'>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </li>
        <li>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li>
        <li>
          <ModeToggle />
        </li>
      </menu>
    </header>
  );
};

export default Header;