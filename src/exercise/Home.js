import React from "react";
import { useDocumentTitle } from "./useDocumentTitle";

export default function Home() {
  // ✅ Use the custom hook
  useDocumentTitle("Welcome to the home page!");

  return (
    <div>
      <h1>Home Page</h1>
      <p>
        To see the title change in the browser tab, click the 'Open in new tab'
        link above
      </p>
    </div>
  );
}
