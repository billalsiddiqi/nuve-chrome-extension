import { useState, useEffect } from "react";

export const Clock = () => {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="text-white text-6xl font-light">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        <br />
        <span className="text-3xl">{time.toLocaleDateString()}</span>
      </div>
    );
  };