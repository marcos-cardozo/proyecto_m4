"use client";

import "./register.css";
import { registerConfig, RegisterConfig } from "@/data/registerConfig";
import { useState } from "react";
import FormInput from "../FormInput/FormInput";

const RegisterForm = () => {
  interface FormState {
    email: string;
    password: string;
    repeatPassword: string;
    name: string;
    address: string;
    phone: string;
  }

  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    repeatPassword: "",
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.name;

    const value = e.target.value;

    setForm({ ...form, [property]: value });
  };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      alert("Registro de usuario realizado con éxito");
    };

  return (
    <form className="flex flex-col bg-electricPurple px-10 py-10 rounded-[10px] shadow-goals h-[34rem] w-[50.625rem] mb-10 gap-10"
          onSubmit={handleSubmit}
    >
      <span className="text-obsidian underline font-mono text-3xl text-center">Registrate</span>
      <div className="flex flex-wrap justify-between">
        {registerConfig.map(
          ({ name, label, type, placeholder }: RegisterConfig) => {
            return (
              <FormInput
                key={name}
                name={name}
                label={label}
                type={type}
                value={form[name as keyof FormState]}
                placeholder={placeholder}
                handleChange={handleChange}
              />
            );
          }
        )}
      </div>

      <div className="flex justify-center">
        <button
          className="bg-smeraldGreen text-white duration-500 font-mono rounded-[10px] h-10  shadow-goals-green hover:bg-green-600 transition ease-in-out delay-75 shadow-goals-green w-1/2"
          type="submit"
        >
          Registrarse
        </button>
      </div>
      
    </form>
  );
};

export default RegisterForm;
