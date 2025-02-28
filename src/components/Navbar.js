// src/components/Navbar.js
'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Link from 'next/link';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-500 p-4 text-white flex items-center justify-between">
      <Link href="/" className="text-lg font-bold">CATC Travel</Link>
      <div className="flex items-center space-x-4">
        <Link href="/visa" className="hover:text-blue-200">Visa Services</Link>
        <Link href="/hajj-umrah" className="hover:text-blue-200">Hajj & Umrah</Link>
        <Link href="/tours" className="hover:text-blue-200">Tours</Link>
        {session ? (
          <>
            <span>{session?.user?.name || session?.user?.email}</span>
            <button onClick={() => signOut()} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Out</button>
          </>
        ) : (
          <Link href="/login" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sign In</Link>
        )}
      </div>
    </nav>
  );
}