"use client"

import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    <html lang="en">
      <body>
        <nav className="bg-black text-white px-6 py-3 flex justify-between items-center">
          <div className="text-green-400 font-bold text-lg">AI<span className="text-white">4</span>INVEST</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <button onClick={signOut} className="text-xs text-red-400 hover:text-red-300">Log out</button>
            </div>
          </div>
        </nav>
        <Authenticator>
          {children}
        </Authenticator>
      </body>
    </html>
  );
}
