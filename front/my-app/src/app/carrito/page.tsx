"use client";
import { NEXT_PUBLIC_API_URL } from "@/config/envs";
import "./carrito.css";

import { useCart } from "@/context/CartContext";
import { IProduct } from "@/interfaces/UserInterfaces/IProduct";
import axios from "axios";
import Swal from "sweetalert2";
import { useAuth } from "@/context/AuthContext";

const Carrito = () => {
  const { items, removeItemFromCart, emptyCart } = useCart();
  const { token, user, isAuthenticated } = useAuth();

  const emptyCartHandler: () => void = () => {
    Swal.fire({
      title: "¿Estas seguro que quieres borrar todos productos?",
      showDenyButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("¡Productos borrados!", "", "success");
        emptyCart();
      }
    });
  };

  const checkOutHandher: () => void = () => {
            if (!isAuthenticated) {
                Swal.fire({
                  title: "Error",
                  text: "Debes estar autenticado para comprar.",
                  icon: "error",
                });
                return;
              }

    Swal.fire({
      title: "¿Estas seguro que quieres comprar?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sí, comprar!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(
            `${NEXT_PUBLIC_API_URL}/orders`,
            {
              userId: user?.id,
              products: items.map((product) => product.id),
            },
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((res) => {
            console.log(res); 
          
          })
          .catch((error) => console.log(error));

          Swal.fire({
            title: "¡Comprado!",
            text: "Tu compra ha sido realizada.",
            icon: "success",
          });
      }
    });
  };

  const groupedItems = items.reduce(
    (
      acc: { [key: number]: { product: IProduct; quantity: number } },
      product
    ) => {
      if (acc[product.id]) {
        acc[product.id].quantity += 1;
      } else {
        acc[product.id] = { product, quantity: 1 };
      }
      return acc;
    },
    {}
  );

  const groupedArray = Object.values(groupedItems);

  return (
    <div className="mt-24 p-6 bg-electricPurple text-white rounded-lg shadow-md w-3/5 m-auto font-satoshi boxshadow-purple">
      <h1 className="text-3xl font-bold text-green-400 mb-6 text-center underline">
        Carrito
      </h1>
      <div>
        {groupedArray.length ? (
          <div>
            <table className="w-full border-collapse text-left">
              <thead className="bg-smeraldGreen">
                <tr>
                  <th className="p-4 text-white font-semibold border-b border-gray-700">
                    Producto
                  </th>
                  <th className="p-4 text-white font-semibold border-b border-gray-700">
                    Precio
                  </th>
                  <th className="p-4 text-white font-semibold border-b border-gray-700">
                    Cantidad
                  </th>
                  <th className="p-4 text-white font-semibold border-b border-gray-700">
                    Total
                  </th>
                  <th className="p-4 text-white font-semibold border-b border-gray-700">
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                {groupedArray.map(({ product, quantity }) => (
                  <tr key={product.id} className="hover:bg-purple-900">
                    <td className="p-4 border-b border-green-700">
                      {product.name}
                    </td>
                    <td className="p-4 border-b border-green-700">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="p-4 border-b border-green-700">
                      {quantity}
                    </td>
                    <td className="p-4 border-b border-green-700">
                      ${(quantity * product.price).toFixed(2)}
                    </td>
                    <td className="p-4 border-b border-green-700">
                      <button
                        className="bg-obsidian text-white px-3 py-1 rounded hover:bg-gray-600 transition"
                        onClick={() => removeItemFromCart(product.id)}
                      >
                        Quitar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-5 gap-4 flex justify-end">
              <button
                onClick={emptyCartHandler}
                className="bg-orange-500 rounded-[10px] p-2 hover:bg-orange-300 transition ease-in-out delay-100 font-[900] text-obsidian"
              >
                LIMPIAR CARRITO
              </button>
              <button
                onClick={checkOutHandher}
                className="bg-smeraldGreen rounded-[10px] p-2 hover:bg-green-300 transition ease-in-out delay-100 font-[900] text-obsidian"
              >
                PAGAR YA
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <span className="text-obsidian text-lg font-semibold ">
              No hay productos agregados al carrito
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrito;
