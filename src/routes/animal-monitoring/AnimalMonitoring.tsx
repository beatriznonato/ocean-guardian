import Form, { InputField } from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import "./AnimalMonitoring.css";
import Navigation from "../../components/Navigation/Navigation";

export const AnimalMonitoring = () => {
    return <Navigation tab="animal" />;
};

export default AnimalMonitoring;