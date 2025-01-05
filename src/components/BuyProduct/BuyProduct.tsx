"use client";

import { NEXT_PUBLIC_API_URL } from "@/config/envs";
import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/interfaces/UserInterfaces/IProduct";
import axios from "axios";
import Swal from "sweetalert2";

export const BuyProduct = ({product}: {product: IProduct}) => {
    const {user, token} = useAuth()
    const checkOutHandher: () => void = () => {
        if (!user || !user.id) {
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
                  products: [product.id],
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
    return (
        <button onClick={checkOutHandher} className="btn bg-smeraldGreen p-3 rounded-[10px] font-satoshi font-[900] text-xl transition duration-300 ease-in-out hover:bg-green-200 hover:shadow-lg hover:scale-105">
        COMPRAR
      </button>
    )
}