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
  method: string;
  cols?: 1 | 2;
};

const Form = ({ inputFields, btnVariant, method, cols = 1 }: FormProps) => {
  return (
    <div className="form-container">
      <form method={method} action="/submit-form">
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
            />
          ))}
        </div>
        <Button text="Entrar" type="submit" variant={btnVariant} />
      </form>
    </div>
  );
};

export default Form;
