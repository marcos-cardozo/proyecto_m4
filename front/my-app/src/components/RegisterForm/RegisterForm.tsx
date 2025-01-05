/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import "./register.css";
import { registerConfig, RegisterConfig } from "@/data/registerConfig";
import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import Link from "next/link";
import RegisterUser from "@/helpers/register";
import Toast from "../Toast/Toats";
import { useRouter } from "next/navigation";
import { IRegister } from "@/interfaces/UserInterfaces/IRegister";
import { usePublic } from "@/hook/usePublic";

const initialForm: IRegister = {
  email: "",
  password: "",
  repeatPassword: "",
  name: "",
  address: "",
  phone: "",
};

const RegisterForm = () => {
  usePublic();
  const [form, setForm] = useState<IRegister>(initialForm);
  const [error, setError] = useState<IRegister>(initialForm);
  const [formValid, setFormValid] = useState<boolean>(false);

  const validateForm = () => {
    let isValid = true;
    const newError = { ...error };

    if (!form.email.includes("@")) {
      newError.email = "Email invalido";
      isValid = false;
    } else {
      newError.email = "";
    }

    if (form.password.length < 6) {
      newError.password = "La contraseña debe tener al menos 6 caracteres";
      isValid = false;
    } else {
      newError.password = "";
    }

    if (form.password !== form.repeatPassword) {
      newError.repeatPassword = "Las contraseñas no coinciden";
      isValid = false;
    } else {
      newError.repeatPassword = "";
    }

    if (form.name.length < 3) {
      newError.name = "El nombre debe tener al menos 3 caracteres";
      isValid = false;
    } else {
      newError.name = "";
    }

    if (form.address.length < 3) {
      newError.address = "La direccion debe tener al menos 3 caracteres";
      isValid = false;
    } else {
      newError.address = "";
    }

    if (form.phone.length < 3) {
      newError.phone = "El telefono debe tener al menos 3 caracteres";
      isValid = false;
    } else {
      newError.phone = "";
    }

    setError(newError);
    return isValid;
  };

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [property]: value });

    const newError = { ...error };

    switch (property) {
      case "email":
        newError.email = value.includes("@") ? "" : "Email invalido";
        break;
      case "password":
        newError.password =
          value.length < 6
            ? "La contraseña debe tener al menos 6 caracteres"
            : "";
        newError.repeatPassword =
          value !== form.repeatPassword ? "Las contraseñas no coinciden" : "";
        break;
      case "repeatPassword":
        newError.repeatPassword =
          value !== form.password ? "Las contraseñas no coinciden" : "";
        break;
      case "name":
        newError.name =
          value.length < 3 ? "El nombre debe tener al menos 3 caracteres" : "";
        break;
      case "address":
        newError.address =
          value.length < 3
            ? "La direccion debe tener al menos 3 caracteres"
            : "";
        break;
      case "phone":
        newError.phone =
          value.length < 3
            ? "El telefono debe tener al menos 3 caracteres"
            : "";
        break;
    }
    setError(newError);
    setFormValid(
      value.trim() !== "" &&
        ((property === "email" && value.includes("@")) ||
          form.email.includes("@")) &&
        ((property === "password" && value.length >= 6) ||
          form.password.length >= 6) &&
        ((property === "repeatPassword" && value === form.password) ||
          form.repeatPassword === form.password) &&
        ((property === "name" && value.length > 3) || form.name.length > 3) &&
        ((property === "address" && value.length > 3) || form.address.length > 3) &&
        ((property === "phone" && value.length > 3) || form.phone.length > 3)
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const valid = validateForm();

    if (!valid) {
      return;
    }

    const data = { ...form };

    try {
      await RegisterUser(data);
      Toast.fire("Usuario registrado", "", "success");
      router.push("/auth/login");
    } catch (error: any) {
      Toast.fire(
        "Error al registrar usuario",
        error.response.data.message,
        "error"
      );
    }
  };

  return (
    <form
      className="flex flex-col bg-electricPurple p-3 rounded-[10px] shadow-goals h-[36rem] w-[48rem] gap-2"
      onSubmit={handleSubmit}
    >
      <span className="text-obsidian underline font-satoshi font-[900] text-5xl text-center">
        Registrate
      </span>
      <div className="flex flex-wrap justify-between px-8">
        {registerConfig.map(
          ({ name, label, type, placeholder }: RegisterConfig) => {
            return (
              <FormInput
                key={name}
                name={name}
                label={label}
                type={type}
                value={form[name as keyof IRegister]}
                placeholder={placeholder}
                handleChange={handleChange}
                errorMessage={error[name as keyof IRegister]}
              />
            );
          }
        )}
      </div>

      <div className="flex justify-center items-center flex-col">
        <button
          className="bg-smeraldGreen text-white transition ease-in-out duration-500 font-cabinet font-bold rounded-[10px] h-10 mt-2 shadow-goals-green w-[25%] hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!formValid}
        >
          Registrarse
        </button>

        <p className="text-obsidian font-satoshi font-[500] mt-5">
          Ya tienes una cuenta?
          <Link href={"/auth/login"}>
            <span className="hover:font-[800] hover:underline ml-1 transition-all duration-200 ease-in-out ">
              Inicia Sesión
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
