"use client";
import Toast from "@/components/Toast/Toats";
import { NEXT_PUBLIC_API_URL } from "@/config/envs";
import { useAuth } from "@/context/AuthContext";
import { usePrivate } from "@/hook/usePrivate";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { IProduct } from "@/interfaces/UserInterfaces/IProduct";

interface IOrder {
  id: number;
  status: string;
  products: IProduct[];
  date: Date;
}

const MisCompras = () => {
  const { token } = useAuth();
  const [userOrders, setUserOrders] = useState<IOrder[]>([]);
  
  usePrivate();
  useEffect(() => {
    if (token) {
      axios
      .get(`${NEXT_PUBLIC_API_URL}/users/orders`, {
        headers: { Authorization: token },
      })
      .then((res) => setUserOrders(res.data))
      .catch((error) =>
        Toast.fire(
          "Error al obtener los productos del usuario",
          error,
          "error"
        )
      );
    }
  }, [token]);

  return (
    <div className="mt-24 p-6 bg-electricPurple text-white rounded-lg shadow-md w-4/5 m-auto font-satoshi boxshadow-purple">
      <h1 className="text-3xl font-bold text-green-400 mb-6 text-center underline">
        MIS PEDIDOS
      </h1>
      <div>
        {userOrders.length ? (
          <table className="w-full border-collapse text-left">
            <thead className="bg-smeraldGreen">
              <tr>
                <th className="p-4 text-white font-semibold border-b border-gray-700">
                  Productos
                </th>
                <th className="p-4 text-white font-semibold border-b border-gray-700">
                  Estado
                </th>
                <th className="p-4 text-white font-semibold border-b border-gray-700">
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody>
              {userOrders.map((orden: IOrder) => (
                <tr key={orden.id} className="hover:bg-purple-900">
                  <td className="p-4 border-b border-green-700">
                    {orden.products.map((product: IProduct, index: number) => (
                      <div
                        key={product.id}
                        className="inline-block mr-2 text-sm"
                      >
                        {product.name}
                        {index < orden.products.length - 1 && " -"}
                      </div>
                    ))}
                  </td>
                  <td className="p-4 border-b border-green-700">{orden.status}</td>
                  <td className="p-4 border-b border-green-700">
                    {moment(orden.date).format("YYYY-MM-DD")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center">
            <span className="text-obsidian text-lg font-semibold">
              No tengo pedidos
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MisCompras;
