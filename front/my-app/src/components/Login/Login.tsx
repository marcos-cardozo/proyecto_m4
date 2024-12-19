"use client";
import "./login.css";

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-[10rem]">
      <form className="flex flex-col w-[30rem] bg-electricPurple rounded-[10px] p-8 shadow-goals ">
        
        <div className="flex justify-center items-center mb-10">
          <span className="text-2xl underline">Iniciar Sesion</span>
        </div>
        
        <div>
          <label htmlFor="email" className="text-cabinet font-sans">
            Correo electrónico: 
          </label>
          <input
            type="email"
            name="email"
            placeholder="juanperez@mail.com"
            className="rounded-[10px] pl-2 py-1 text-black shadow-goals-input mb-10 ml-3 text-[10px] w-[12rem]"
          />
        </div>

        <div>
          <label htmlFor="password" className="mt-5 font-sans">
            Contraseña: 
          </label>
          <input
            type="password"
            name="password"
            placeholder="********"
            className="mb-5 rounded-[10px] pl-2 py-1 text-black shadow-goals-input ml-3 text-[10px] w-[15rem]"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="transition duration-[500ms] ease-in-out text-black bg-white rounded-[10px] mt-5 w-[8rem] h-10 font-mono shadow-goals-input hover:bg-slate-400 hover:boxshadow-slate"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
