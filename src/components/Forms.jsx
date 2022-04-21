import { useState } from "react";
import { nanoid } from "nanoid";

export const Forms = () => {
  const [form, setForm] = useState({
    username: "",
    age: "",
    address: "",
    department: "",
    married:"false",
    single:"false",
  });

  const handleChange = (e) => {
    const { name, value,type,checked } = e.target;
    setForm({
      ...form,
      [name]: type==="checkbox" ?checked :value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="enter username"
        name="username"
      />
      <br />
      <input onChange={handleChange} type="number" placeholder="age" name="age" />
      <br />
      <input
        onChange={handleChange}
        type="text"
        placeholder="address"
        name="address"
      />
      <br />

      <label>
        Department:
        <select onChange={handleChange} name="department" >
          <option value="mechanical">Mechanical</option>
          <option value="electrical">Electriecal</option>
          <option value="civil">Civil</option>
          <option value="E&tc">E&TC</option>
        </select>
      </label>
     
      <br />

      <input
        onChange={handleChange}
        type="number"
        name="salary"
        placeholder="salary"
      />
      <br />
      <div >
        <label>
          <input onChange={handleChange} type="checkbox" name="single" />
          single
        </label>
        <label>
          <input onChange={handleChange} type="checkbox" name="married" />
          married
        </label>
        <br />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};
