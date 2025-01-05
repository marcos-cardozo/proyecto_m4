import { ICredentialUser } from "./ICredentialUser";

export interface IUser {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  credentials: ICredentialUser;
  orders: [];
}
