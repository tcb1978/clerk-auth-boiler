
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import type { FC } from 'react';
import { ModeToggle } from './mode-toggle';
import { Button } from './button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from './dropdown-menu';
import { MenuIcon } from 'lucide-react';

interface HeaderProps {

}

const Header: FC<HeaderProps> = ({ }) => {
  return (
    <header className='flex flex-row items-center justify-between px-8 py-4 bg-gray-800'>
      <nav>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href='/'>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/protected/server'>Server Page</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/protected/client'>Client Page</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/api/me'>Who am I?</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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