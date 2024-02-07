import { useState } from "react";

const ObjectState2 = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const fullName = `${form.firstName} ${form.lastName}`;

  console.log(form);

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h4>{fullName}</h4>
      <p>{form.email}</p>
      <form className="flex flex-col gap-y-2">
        <input
          type="text"
          name="firstName"
          placeholder="Prénom"
          className="px-4 py-2"
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Nom"
          className="px-4 py-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="px-4 py-2"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="px-4 py-2"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default ObjectState2;
