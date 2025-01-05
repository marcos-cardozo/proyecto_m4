export interface RegisterConfig {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}

export const registerConfig: RegisterConfig[] = [
  {
    name: "email",
    label: "Correo electrónico",
    type: "email",
    placeholder: "Ejemplo: juancarlos@mail.com",
  },
  {
    name: "password",
    type: "password",
    label: "Contraseña",
    placeholder: "********",
  },
  {
    name: "name",
    type: "text",
    label: "Nombre",
    placeholder: "Ejemplo: Juan Carlos",
  },
  {
    name: "repeatPassword",
    type: "password",
    label: "Repetir contraseña",
    placeholder: "********",
  },

  {
    name: "address",
    type: "text",
    label: "Dirección",
    placeholder: "Ejemplo: Calle 1234",
  },
  {
    name: "phone",
    type: "tel",
    label: "Teléfono",
    placeholder: "Ejemplo: 1234567890",
  },
];
