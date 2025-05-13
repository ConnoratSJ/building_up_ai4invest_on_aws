'use client';
import Link from 'next/link';
import {useAuthenticator } from "@aws-amplify/ui-react";


export default function Navbar() {
  //.const { signOut } = useAuthenticator();
  const { signOut } = useAuthenticator();

  return (
    <nav className="bg-black text-white px-6 py-3 flex justify-between items-center">
      <div className="text-green-400 font-bold text-lg">
        AI<span className="text-white">4</span>INVEST
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className="text-sm">Home</Link>
        <button onClick={signOut} className="text-xs text-red-400 hover:text-red-300">Log out</button>
      </div>
    </nav>
  );
}