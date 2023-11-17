import React, { useState } from "react";
import { toast } from "react-toastify";

import { blueGradient1 } from "components/tailwindClasses";

import usersData from "../../../data/user.json"; // Adjust the path as needed

function Index() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password2, setPassword2] = useState("");
  let [number, setNumber] = useState("");
  let [name, setName] = useState("");

  const generateUniqueId = () => {
    // This is a simple method to generate a unique ID.
    // In a production environment, you might want to use a library like uuid.
    return Math.random().toString(36).substr(2, 9);
  };

  const addUser = () => {
    if (usersData.users.some((user) => user.email === email)) {
      toast.error("Email already exists, please enter new email");
      return;
    }

    let newUser = {
      email,
      password,
      name,
      contact: number,
      id: generateUniqueId().toString(),
      creationDate: new Date().toString(),
    };

    usersData.users.push(newUser);

    console.log(usersData.users);

    // Set all attributes to null
    setEmail("");
    setPassword("");
    setPassword2("");
    setNumber("");
    setName("");

    toast.success("user added successfully");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = document.getElementById("userAdditionForm");

    if (form && form.checkValidity()) {
      if (password !== password2) {
        toast.warning("passwords dont match");
      } else addUser();
    } else {
      form.reportValidity();
    }
  };

  return (
    <div className=" bg-greyBg4 w-[500px] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-full p-10">
        <form
          onSubmit={handleFormSubmit}
          id="userAdditionForm"
          className="w-full"
        >
          <h1 className="mb-2 text-center text-xl">
            <b>Add User</b>
          </h1>
          <label htmlFor="name">
            <p className="font-medium text-base">Name</p>
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(() => e.target.value);
            }}
            type="text"
            className="text-sm  w-full p-3 h-10 bg-inputBg border-b2 border rounded-10"
            required
          />
          <label htmlFor="contact">
            <p className="font-medium text-base">Contact number</p>
          </label>
          <input
            value={number}
            onChange={(e) => {
              setNumber(() => e.target.value);
            }}
            placeholder="XXXX XXXX XX"
            type="tel"
            className="text-sm  w-full p-3 h-10 bg-inputBg border-b2 border rounded-10"
            pattern="^[1-9][0-9]{9}$"
            required
          />
          <label htmlFor="email">
            <p className="font-medium text-base">Email</p>
          </label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(() => e.target.value);
            }}
            type="email"
            required
            className="text-sm  w-full p-3 h-10 bg-inputBg border-b2 border rounded-10"
          />
          <label htmlFor="pass">
            <p className="font-medium text-base">Create Password</p>
          </label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(() => e.target.value);
            }}
            type="password"
            className="text-sm  w-full p-3 h-10 bg-inputBg border-b2 border rounded-10"
            required
            pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$" // Add the regex pattern here
          />
          <div className="text-xs ">
            Include all of the following:
            <ul class="list-disc ml-4">
              <li>An uppercase character</li>
              <li>A lowercase character</li>
              <li>A number</li>
              <li>A special character</li>
            </ul>
          </div>
          <label htmlFor="pass">
            <p className="font-medium text-base">Confirm Password</p>
          </label>
          <input
            value={password2}
            onChange={(e) => {
              setPassword2(() => e.target.value);
            }}
            type="password"
            className="text-sm  w-full p-3 h-10 bg-inputBg border-b2 border rounded-10"
            required
            pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$" // Add the regex pattern here
          />

          <button
            type="submit"
            className={blueGradient1 + " w-full h-12 rounded-10 font-bold mt-5"}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default Index;
