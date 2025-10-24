import { useEffect } from "react";

// ✅ Must be a named export
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]); // runs again if title changes
}
