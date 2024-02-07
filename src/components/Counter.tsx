import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            console.log("Compteur :", count);            
            setCount((prev) => prev + 1); 
        }, 1000);
    });

  return (
    <div>
      <p>Compteur : {count}</p>
    </div>
  )
}

export default Counter
