import { IRegister } from "@/interfaces/UserInterfaces/IRegister";
import axios from "axios"

export default async function RegisterUser (singUpForm: IRegister) {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, singUpForm)
}