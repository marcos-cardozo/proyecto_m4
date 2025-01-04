/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { NEXT_PUBLIC_API_URL } from "@/config/envs";
import { ILogin } from "@/interfaces/UserInterfaces/ILoginUser";
import { IUser } from "@/interfaces/UserInterfaces/IUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface IAuthContext {
  user: IUser | null;
  isAuthenticated: boolean;
  login: (form: ILogin) => void;
  logout: () => void;
  token: string | null;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  isAuthenticated: false,
  login: (form: ILogin) => {},
  logout: () => {},
  token: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setToken(token);
      setUser(JSON.parse(user));
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setToken(null);
      setIsAuthenticated(false);
    }
  }, []);
  const login = async (data: ILogin) => {
    const response = await axios.post(
      `${NEXT_PUBLIC_API_URL}/users/login`,
      data
    );
    setUser(response.data.user);
    setToken(response.data.token);

    setIsAuthenticated(true);

    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", response.data.token);
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
