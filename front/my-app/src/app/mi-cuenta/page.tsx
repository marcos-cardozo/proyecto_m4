"use client";
import { useAuth } from "@/context/AuthContext";
import "./miCuenta.css";

const MiCuenta = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <div className="mt-28 text-smeraldGreen bg-electricPurple w-[40%] m-auto p-3 rounded-[10px] shadow-goals">
        <h1 className="font-satoshi font-[900] underline text-2xl text-center">
          MI CUENTA
        </h1>
        <div className="font-cabinet flex flex-col gap-10 mt-5 text-xl font-semibold py-5">
          <div className="bg-smeraldGreen rounded-[10px] text-obsidian green-shadow-goals">
            <p className="p-1">Nombre: {user.name}</p>
          </div>
          <div className="bg-smeraldGreen rounded-[10px] text-obsidian green-shadow-goals">
            <p className="p-2">Email: {user.email}</p>
          </div>
          <div className="bg-smeraldGreen rounded-[10px] text-obsidian green-shadow-goals">
            <p className="p-2">Direccion: {user.address} </p>
          </div>
          <div className="bg-smeraldGreen rounded-[10px] text-obsidian green-shadow-goals">
            <p className="p-2">Telefono: {user.phone} </p>
          </div>
        </div>
      </div>
    );
  }
};

export default MiCuenta;
