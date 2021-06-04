import { useState, useEffect } from "react";

import { API_BASE_URL } from "../util/constants";

export const useFundraiserProgress = () => {
  const [progress, setProgress] = useState([]);
  useEffect(async () => {
    const res = await fetch(`${API_BASE_URL}/instrument_drive/`);
    if (res.ok) {
      const progressData = await res.json();
      setProgress(progressData);
    }
  }, []);
  return progress;
};
