import { IUser } from "./IUser";

export interface ILoginUser {
    login: boolean;
    user: IUser;
    orders: [];
    token: string;
}