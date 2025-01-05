export interface LoginConfig {
    name: string;
    label: string;
    type: string;
    placeholder: string;
  }

export const loginConfig: LoginConfig[] = [
    {
        name: "email",
        type: "email",
        label: "Correo electrónico",
        placeholder: "Ejemplo: juancarlos@mail.com"
    },
    {
        name: "password",
        type: "password",
        label: "Contraseña",
        placeholder: "********"
    }
]