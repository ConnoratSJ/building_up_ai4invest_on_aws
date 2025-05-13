'use client';
import Link from 'next/link';
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function Navbar() {
  const { signOut } = useAuthenticator();

  return (
    <nav >
      <div >
        AI<span>4</span>INVEST
      </div>
      <div >
            <button onClick={signOut} className="text-xs text-red-400 hover:text-red-300">Log out</button>
      </div>
    </nav>
  );
}