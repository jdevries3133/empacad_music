import { useState, useEffect } from "react";
import { ProgressBar } from "./progress_bar";

export const InstrumentDriveProgress = () => {
  const [progress, setProgress] = useState([]);
  useEffect(async () => {
    const res = await fetch("/api/instrument_drive/");
    if (res.ok) {
      const progressData = await res.json();
      setProgress(progressData);
    }
  }, []);
  return (
    <article id="music_instrument_drive_goals">
      <h2>Music Instrument Drive</h2>
      {progress.map((item, index) => (
        <ProgressBar
          key={item.name + index}
          itemName={item.name}
          current={item.current}
          target={item.target}
        />
      ))}
    </article>
  );
};
