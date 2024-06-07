import "./VegetationMonitoring.css";
import Navigation from "../../components/Navigation/Navigation";
import Form, { InputField } from "../../components/Form/Form";
import { db } from "../../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import ConfirmPopup from "../../components/ConfirmPopup/ConfirmPopup";

type UserData = {
  species: string;
  date_time: string;
  description: string;
  location: string;
  condition: string;
  notes?: string;
  health: string;
};

export const VegetationMonitoring = () => {
  const [popupDisplay, setPopUpDisplay] = useState("none");
  const [isLoading, setIsLoading] = useState(false);
  const vegetationCollectionRef = collection(db, "vegetation_monitoring");

  const [form, setForm] = useState<UserData>({
    species: "",
    date_time: "",
    description: "",
    location: "",
    condition: "",
    notes: "",
    health: "",
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
      name: "species",
      type: "text",
      placeholder: "Espécie",
      required: true,
      onChange: handleChange,
      error: errors["species"],
    },
    {
      name: "date_time",
      type: "datetime-local",
      placeholder: "Data e Hora",
      required: true,
      onChange: handleChange,
      error: errors["date_time"],
    },
    {
      name: "description",
      type: "text",
      placeholder: "Descrição da Vegetação",
      required: true,
      onChange: handleChange,
      error: errors["description"],
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
      name: "condition",
      type: "text",
      placeholder: "Condições Ambientais",
      required: true,
      onChange: handleChange,
      error: errors["condition"],
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
      name: "health",
      type: "text",
      placeholder: "Condições de Saúde",
      required: true,
      onChange: handleChange,
      error: errors["health"],
    },
  ];

  const createAnimalMonitoring = async () => {
    const userData: UserData = {
      species: form.species,
      date_time: form.date_time,
      description: form.description,
      location: form.location,
      condition: form.condition,
      health: form.health,
    };

    // Add notes only if it's not empty
    if (form.notes && form.notes !== "") {
      userData.notes = form.notes;
    }

    try {
      await addDoc(vegetationCollectionRef, form);
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
    await createAnimalMonitoring();
  };

  return (
    <div className="vegetation-monitoring-container">
      <Navigation tab="vegetation" />
      <div className="vegetation-monitoring-form">
        <h1>Monitoramento de Vegetação Marinha</h1>
        <Form
          cols={2}
          inputFields={input}
          btnVariant={"blue"}
          btnClassName="vegetation-monitoring-form-btn"
          onSubmit={handleSubmit}
          method={"post"}
          isLoading={isLoading}
        />
      </div>

      <ConfirmPopup display={popupDisplay} />
    </div>
  );
};

export default VegetationMonitoring;
