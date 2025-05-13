'use client';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import awsExports from './aws-exports';
Amplify.configure(awsExports);


export default function Navbar() {
  const { signOut, user } = useAuthenticator();

  return (
    <nav >
      <div >
        AI<span>4</span>INVEST
      </div>
      <div >
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </div>
    </nav>
  );
}