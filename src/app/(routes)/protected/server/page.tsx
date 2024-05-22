import type { FC } from 'react';
import { auth, currentUser } from '@clerk/nextjs/server';

interface PageProps {

}

const Page: FC<PageProps> = async ({ }) => {
  const { userId } = auth();

  if (userId) {
    // Query DB for user specific information or display assets only to signed in users
  }

  const user = await currentUser();

  const { firstName, lastName, emailAddresses } = user || {};
  const email = emailAddresses?.[0].emailAddress || '';

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3m font-bold'>
          Protected Server Page
        </h1>
        <p>Welcome {firstName} {lastName}</p>
        <p>{email}</p>
      </div>
    </section>);
};

export default Page;