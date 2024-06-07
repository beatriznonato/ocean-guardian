import Button from "../Button/Button";
import "./Form.css";

export type InputField = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  required: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | (() => Promise<void>);
  error?: string;
};

type FormProps = {
  inputFields: InputField[];
  btnVariant: "white" | "blue" | "outline";
  btnText?: string;
  btnClassName?: string;
  onClick?: () => void;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  method: string;
  cols?: 1 | 2;
};

const Form = ({
  inputFields,
  btnVariant,
  btnText = "Enviar",
  onClick,
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
            <div className="form-input-block" key={index}>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={field.onChange}
              />
              {field.required === true && field.error !== "" && (
                <span className="error-message">{field.error}</span>
              )}
            </div>
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
