import { useState, useEffect } from "react";
export const useFundraiserProgress = () => {
  const [progress, setProgress] = useState([]);
  useEffect(async () => {
    const res = await fetch("/api/instrument_drive/");
    if (res.ok) {
      const progressData = await res.json();
      setProgress(progressData);
    }
  }, []);
  return progress;
};
