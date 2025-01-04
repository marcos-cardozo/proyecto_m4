import { NEXT_PUBLIC_API_URL } from "@/config/envs";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import axios from "axios";
import Swal from "sweetalert2";

const { token, user } = useAuth();
const {items} = useCart()

  export const checkOutHandher: () => void = () => {
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