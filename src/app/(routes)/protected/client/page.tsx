'use client';

import type { FC } from 'react';
import { useUser } from '@clerk/nextjs';

interface PageProps {

}

const Page: FC<PageProps> = ({ }) => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const { firstName, lastName, emailAddresses } = user || {};
  const email = emailAddresses?.[0].emailAddress || '';

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3m font-bold'>
          Protected Client Page
        </h1>
        <p>Welcome {firstName} {lastName}</p>
        <p>{email}</p>
      </div>
    </section>
  );
};

export default Page;