import "./AnimalMonitoring.css";
import Form, { InputField } from "../../components/Form/Form";
import Navigation from "../../components/Navigation/Navigation";
import { useState } from "react";
import { db } from "../../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import ConfirmPopup from "../../components/ConfirmPopup/ConfirmPopup";

type UserData = {
  species: string;
  date_time: string;
  description: string;
  location: string;
  behavior: string;
  impact: string;
  animal_id?: string;
};

export const AnimalMonitoring = () => {
  const [popupDisplay, setPopUpDisplay] = useState("none");
  const [isLoading, setIsLoading] = useState(false);
  const animalCollectionRef = collection(db, "animal_monitoring");

  const [form, setForm] = useState<UserData>({
    species: "",
    date_time: "",
    description: "",
    location: "",
    behavior: "",
    impact: "",
    animal_id: "",
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
      placeholder: "Descrição do Animal",
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
      name: "behavior",
      type: "text",
      placeholder: "Comportamento Observado",
      required: true,
      onChange: handleChange,
      error: errors["behavior"],
    },
    {
      name: "impact",
      type: "text",
      placeholder: "Impacto Humano",
      required: true,
      onChange: handleChange,
      error: errors["impact"],
    },
    {
      name: "animal_id",
      type: "text",
      placeholder: "N° de Identificação",
      required: true,
      onChange: handleChange,
      error: errors["animal_id"],
    },
  ];

  const createAnimalMonitoring = async () => {
    try {
      const userData: UserData = {
        species: form.species,
        date_time: form.date_time,
        description: form.description,
        location: form.location,
        behavior: form.behavior,
        impact: form.impact,
      };

      // Add notes only if it's not empty
      if (form.animal_id && form.animal_id !== "") {
        userData.animal_id = form.animal_id;
      }

      await addDoc(animalCollectionRef, form);
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
      if (value === "" && key !== "animal_id") {
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
    <div className="animal-monitoring-container">
      <Navigation tab="animal" />
      <div className="animal-monitoring-form">
        <h1>Monitoramento de Animais Marítimos</h1>
        <Form
          cols={2}
          inputFields={input}
          btnVariant={"blue"}
          btnClassName="animal-monitoring-form-btn"
          onSubmit={handleSubmit}
          method={"post"}
          isLoading={isLoading}
        />
      </div>

      <ConfirmPopup display={popupDisplay} />
    </div>
  );
};

export default AnimalMonitoring;
