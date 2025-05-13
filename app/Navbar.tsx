
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";


Amplify.configure(outputs);
const client = generateClient<Schema>();
const { signOut } = useAuthenticator();

export default function Navbar() {
    return (

        <nav className="bg-black text-white px-6 py-3 flex justify-between items-center">
            <div className="text-green-400 font-bold text-lg">AI<span className="text-white">4</span>INVEST</div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm">
                    <button onClick={signOut} className="text-xs text-red-400 hover:text-red-300">Log out</button>
                </div>
            </div>
        </nav>
    );
}