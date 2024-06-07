import Button from "../Button/Button";
import "./Form.css";

export type InputField = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  required: boolean;
};

type FormProps = {
  inputFields: InputField[];
  btnVariant: "white" | "blue" | "outline";
  btnText?: string;
  btnClassName?: string;
  onClick?: () => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | (() => Promise<void>);
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  method: string;
  cols?: 1 | 2;
};

const Form = ({
  inputFields,
  btnVariant,
  btnText = "Enviar",
  onClick,
  onChange,
  onSubmit,
  btnClassName,
  method,
  cols = 1,
}: FormProps) => {
  return (
    <div className="form-container">
      <form method={method} action="/submit-form" onSubmit={onSubmit}>
        <div
          className="fields-container"
          style={{
            gridTemplateColumns: cols === 2 ? "repeat(2, 1fr)" : "1fr",
          }}
        >
          {inputFields.map((field, index) => (
            <input
              key={index}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              onChange={onChange}
            />
          ))}
        </div>
        <Button
          text={btnText}
          type="submit"
          variant={btnVariant}
          className={btnClassName}
          onClick={onClick}
        />
      </form>
    </div>
  );
};

export default Form;
