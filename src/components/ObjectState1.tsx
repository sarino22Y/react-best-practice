import { useState } from "react";

type User = {
  name: string;
  city: string;
  age: number;
};

const ObjectState1 = () => {
  const [user, setUser] = useState({ name: "", city: "Tana", age: 30 });

  console.log(user);
  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          onChange={handleChange}
        />
      </form>
      <p></p>
      <p>name: {user.name}</p>
      <p>city: {user.city}</p>
      <p>age: {user.age}</p>
    </>
  );
};

export default ObjectState1;
