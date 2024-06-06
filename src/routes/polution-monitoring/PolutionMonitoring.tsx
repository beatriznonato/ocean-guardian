import "./PolutionMonitoring.css";
import Navigation from "../../components/Navigation/Navigation";
import Button from "../../components/Button/Button";
import Form, { InputField } from "../../components/Form/Form";

const input: InputField[] = [
  { name: "tipo", type: "text", placeholder: "Tipo de Poluição", required: true },
  {
    name: "data",
    type: "datetime-local",
    placeholder: "Data e Hora",
    required: true,
  },
  {
    name: "estado",
    type: "text",
    placeholder: "Estado da Poluição",
    required: true,
  },
  {
    name: "localizacao",
    type: "text",
    placeholder: "Localização",
    required: true,
  },
  {
    name: "impacto",
    type: "text",
    placeholder: "Impacto na Vida Marinha",
    required: true,
  },
  {
    name: "notas",
    type: "text",
    placeholder: "Notas",
    required: true,
  },
  {
    name: "condicoes",
    type: "text",
    placeholder: "Condições Ambientais",
    required: true,
  },
];

export const PolutionMonitoring = () => {
  return (
    <div className="polution-monitoring-container">
      <Navigation tab="polution" />
      <div className="polution-monitoring-form">
        <h1>Monitoramento de Poluição</h1>
        <Form
          cols={2}
          inputFields={input}
          btnVariant={"blue"}
          btnClassName="polution-monitoring-form-btn"
          onClick={() => undefined}
          method={"post"}
        />
        <Button
          className="polution-monitoring-return-btn"
          text="Voltar"
          variant="outline"
        />
      </div>
    </div>
  );
};

export default PolutionMonitoring;