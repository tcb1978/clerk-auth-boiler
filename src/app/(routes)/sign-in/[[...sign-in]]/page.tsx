import type { FC } from 'react';
import { SignIn } from '@clerk/nextjs';

interface PageProps {

}

const Page: FC<PageProps> = ({ }) => {
  return (
    <section className='py-24'>
      <div className='container flex items-center justify-center'>
        <SignIn />
      </div>
    </section>
  );
};

export default Page;