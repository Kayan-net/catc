// src/components/UserGreeting.js
'use client';

import { useSession } from 'next-auth/react';

export default function UserGreeting() {
  const { data: session } = useSession();

  if (session?.user?.name) {
    return <p>Hello, {session.user.name}!</p>;
  } else {
    return <p>Hello, Guest!</p>;
  }
}