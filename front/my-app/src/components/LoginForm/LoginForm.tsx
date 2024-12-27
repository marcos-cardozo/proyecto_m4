"use client";
import { useState } from "react";
import "./login.css";
import { loginConfig } from "@/data/loginConfig";
import FormInput from "../FormInput/FormInput";

const LoginForm = () => {
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.name;

    const value = e.target.value;

    setForm({ ...form, [property]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Inicio Sesión con exito");
  };

  return (
    <form
      className="flex flex-col bg-electricPurple p-14 rounded-[10px] shadow-goals"
      onSubmit={handleSubmit}
    >
      <span className="text-obsidian text-center font-satoshi font-[900] text-4xl underline">
        Inicio de sesión
      </span>

      <div>
        {loginConfig.map(({ name, label, type, placeholder }) => {
          return (
            <FormInput
              key={name}
              name={name}
              label={label}
              type={type}
              placeholder={placeholder}
              handleChange={handleChange}
              value={form[name as keyof typeof form]}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="bg-smeraldGreen text-white transition ease-in-out duration-500 font-cabinet font-bold rounded-[10px] h-10 mt-8 shadow-goals-green w-[40%] hover:bg-green-600 "
          type="submit"
        >
          Iniciar Sesion
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
