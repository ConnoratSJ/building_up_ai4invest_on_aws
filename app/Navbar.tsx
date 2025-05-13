'use client';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import React from 'react';
import {useAuthenticator } from "@aws-amplify/ui-react";
import awsExports from './aws-exports';
Amplify.configure(awsExports);


export default function Navbar() {
  const { signOut } = useAuthenticator();
  //const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <nav >
      <div >
        AI<span>4</span>INVEST
      </div>
      <div >
          <button onClick={signOut}>Sign out</button>
        </div>
    </nav>
  );
}