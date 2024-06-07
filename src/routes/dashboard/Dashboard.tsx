import "./Dashboard.css";
import Navigation from "../../components/Navigation/Navigation";
import FormAnimal from "../../assets/images/form-animal.png";
import FormPolution from "../../assets/images/form-polution.png";
import FormVegetation from "../../assets/images/form-vegetation.png";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="dashboard-container">
      <Navigation tab="home" />
      <div className="dashboard-content">
        <h1>Visão Geral</h1>
        <div className="dashboard-block-count-wrapper">
          <div className="block-count">
            <p>Vida Marinha</p>
            <p>123</p>
          </div>
          <div className="block-count">
            <p>Poluição</p>
            <p >56</p>
          </div>
          <div className="block-count">
            <p>Vegetação Marinha</p>
            <p>169</p>
          </div>
        </div>
        <div className="dashboard-btn-form-wrapper">
          <button className="btn-form" onClick={() => navigate("/monitoramento-animais")}>
            <img src={FormAnimal} alt="" />
            <p>Formulário de <br/>Vida Marinha</p>
          </button>
          <button className="btn-form" onClick={() => navigate("/monitoramento-poluicao")}>
            <img src={FormPolution} alt="" />
            <p>Formulário de <br/>Poluição</p>
          </button>
          <button className="btn-form" onClick={() => navigate("/monitoramento-vegetacao")}>
            <img src={FormVegetation} alt="" />
            <p>Formulário de <br/>Vegetação Marinha</p>
          </button>
        </div>
      </div>
    </div>
  );
};
