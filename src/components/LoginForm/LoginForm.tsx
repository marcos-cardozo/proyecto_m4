/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import "./login.css";
import { loginConfig } from "@/data/loginConfig";
import FormInput from "../FormInput/FormInput";
import Link from "next/link";
import Toast from "../Toast/Toats";
import { ILogin } from "@/interfaces/UserInterfaces/ILoginUser";
import { useAuth } from "@/context/AuthContext";
import { usePublic } from "@/hook/usePublic";

const initialForm: ILogin = {
  email: "",
  password: "",
};

const LoginForm = () => {
  usePublic();
  const [form, setForm] = useState<ILogin>(initialForm);
  const [error, setError] = useState<ILogin>(initialForm);
  const [formValid, setFormValid] = useState<boolean>(false);

  const { login } = useAuth();

  const validateForm = () => {
    let valid = true;
    const newError = { ...error };

    if (!form.email.includes("@")) {
      newError.email = "Email invalido";
      valid = false;
    } else {
      newError.email = "";
    }
    if (form.password.length < 6) {
      newError.password = "La contraseña debe tener al menos 6 caracteres";
      valid = false;
    } else {
      newError.password = "";
    }

    setError(newError);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.name;

    const value = e.target.value;

    setForm({ ...form, [property]: value });

    const newError = { ...error };

    switch (property) {
      case "email":
        newError.email = "";
        break;
      case "password":
        newError.password = "";
        break;
    }
    setError(newError);

    setFormValid(
      value.trim() !== "" &&
        ((property === "email" && value.includes("@")) ||
          form.email.includes("@")) &&
        ((property === "password" && value.length >= 6) ||
          form.password.length >= 6)
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { ...form };
    console.log(data);
    if (validateForm()) {
      try {
        await login(data);
        Toast.fire("Inicio de sesión exitoso", "", "success");
      } catch (error: any) {
        console.log(error);

        Toast.fire(
          "Hubo un error al iniciar sesión",
          error.response.data.message,
          "error"
        );
      }
    }
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
              errorMessage={error[name as keyof ILogin]}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center flex-col">
        <button
          className="btn- bg-smeraldGreen text-white transition ease-in-out duration-500 font-cabinet font-bold rounded-[10px] h-10 mt-8 shadow-goals-green w-[40%] hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!formValid}
        >
          Iniciar Sesion
        </button>

        <p className="text-obsidian font-satoshi font-[500] mt-5">
          No tienes una cuenta aun?
          <Link href={"/auth/register"}>
            <span className="hover:font-[800] hover:underline ml-1 transition-all duration-300 ease-in-out">
              Registrate
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
