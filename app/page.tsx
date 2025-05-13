"use client";

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




export default function StartPage() {
  return(
    <main>
        <button onClick={() => window.location.href = '/edit-form'} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 text-sm"> Get Started </button>
    </main>
  )

}