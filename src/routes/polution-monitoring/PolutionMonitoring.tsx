import "./PolutionMonitoring.css";
import Navigation from "../../components/Navigation/Navigation";
import Form, { InputField } from "../../components/Form/Form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/FirebaseConfig";
import { useState } from "react";
import ConfirmPopup from "../../components/ConfirmPopup/ConfirmPopup";

type UserData = {
  type: string;
  data_time: string;
  state: string;
  location: string;
  impact: string;
  notes?: string;
  condition: string;
};

export const PolutionMonitoring = () => {
  const [popupDisplay, setPopUpDisplay] = useState("none");
  const [isLoading, setIsLoading] = useState(false);
  const polutionCollectionRef = collection(db, "polution_monitoring");

  const [form, setForm] = useState<UserData>({
    type: "",
    data_time: "",
    state: "",
    location: "",
    impact: "",
    notes: "",
    condition: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const input: InputField[] = [
    {
      name: "type",
      type: "text",
      placeholder: "Tipo de Poluição",
      required: true,
      onChange: handleChange,
      error: errors["type"],
    },
    {
      name: "data_time",
      type: "datetime-local",
      placeholder: "Data e Hora",
      required: true,
      onChange: handleChange,
      error: errors["data_time"],
    },
    {
      name: "state",
      type: "text",
      placeholder: "Estado da Poluição",
      required: true,
      onChange: handleChange,
      error: errors["state"],
    },
    {
      name: "location",
      type: "text",
      placeholder: "Localização",
      required: true,
      onChange: handleChange,
      error: errors["location"],
    },
    {
      name: "impact",
      type: "text",
      placeholder: "Impacto na Vida Marinha",
      required: true,
      onChange: handleChange,
      error: errors["impact"],
    },
    {
      name: "notes",
      type: "text",
      placeholder: "Notas",
      required: true,
      onChange: handleChange,
      error: errors["notes"],
    },
    {
      name: "condition",
      type: "text",
      placeholder: "Condições Ambientais",
      required: true,
      onChange: handleChange,
      error: errors["condition"],
    },
  ];

  const createAPolutionMonitoring = async () => {
    try {
      const userData: UserData = {
        type: form.type,
        data_time: form.data_time,
        state: form.state,
        location: form.location,
        impact: form.impact,
        notes: form.notes,
        condition: form.condition,
      };

      // Add notes only if it's not empty
      if (form.notes && form.notes !== "") {
        userData.notes = form.notes;
      }

      await addDoc(polutionCollectionRef, form);
      console.log("Monitoramento Adicionado!");
      setPopUpDisplay("flex");
    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    // Check for empty fields and set errors
    Object.entries(form).forEach(([key, value]) => {
      if (value === "" && key !== "notes") {
        newErrors[key] = "Campo obrigatório.";
      }
    });

    // Set errors state
    setErrors(newErrors);

    // If there are errors, return without further processing
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsLoading(true);
    await createAPolutionMonitoring();
  };

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
          onSubmit={handleSubmit}
          method={"post"}
          isLoading={isLoading}
        />
      </div>

      <ConfirmPopup display={popupDisplay} />
    </div>
  );
};

export default PolutionMonitoring;
