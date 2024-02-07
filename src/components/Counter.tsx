"use client";

import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let i = setInterval(() => {           
            setCount((prev) => prev + 1); 
        }, 1000);

        return () => clearInterval(i);
    }, []);

  return (
    <div>
      <p>Compteur : {count}</p>
    </div>
  )
}

export default Counter
