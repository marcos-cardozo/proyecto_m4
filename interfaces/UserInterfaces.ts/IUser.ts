import { ICredentialUser } from "./ICredentialUser";

export interface IUser {
    name: string;
    email: string;
    address: string;
    phone: string;
    id: string;
    role: string;
    credentials: ICredentialUser
}



