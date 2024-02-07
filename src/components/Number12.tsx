"use client";

import { useState } from "react";

const Number12 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // permetre de faire une incrémentation de 4 à chaque cliquage
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={handleClick}>count is {count}</button>
    </>
  );
};

export default Number12;
