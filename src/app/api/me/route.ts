import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

export async function GET() {
  const { userId } = auth();

  console.log('userId', userId)

  if (!userId) {
    return new Response('Unauthorized', {status: 401});
  }

  return NextResponse.json(
    {userId},
    {status: 200}
  );
}