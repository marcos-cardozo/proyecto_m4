import "./formInput.css";

interface FormInputProps {
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}

const FormInput = ({
  name,
  label,
  value,
  handleChange,
  placeholder,
  type,
}: FormInputProps) => {
  return (
    <div key={name} className="">
      <div className="mb-4 font-mono">
        <label htmlFor={name} className="text-obsidian">
          <span className="text-obsidian underline">{label}</span>:
        </label>
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="input-class bg-obsidian rounded-[10px] w-80 h-10 pl-2 mb-4 font-mono shadow-goals-input focus:outline-none "
      />
    </div>
  );
};

export default FormInput;
