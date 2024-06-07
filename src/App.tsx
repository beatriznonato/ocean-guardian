import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomeSlider from "./routes/welcome/WelcomeSlider";
import Login from "./routes/login/Login";
import { SignUp } from "./routes/signup/SignUp";
import { Dashboard } from "./routes/dashboard/Dashboard";
import AnimalMonitoring from "./routes/animal-monitoring/AnimalMonitoring";
import PolutionMonitoring from "./routes/polution-monitoring/PolutionMonitoring";
import VegetationMonitoring from "./routes/vegetation-monitoring/VegetationMonitoring";
import Signal from "./routes/signal/Signal";
import Settings from "./routes/settings/Settings";
import { AuthProvider } from "./firebase/AuthProvider";

const router = createBrowserRouter([
  { path: "/", element: <WelcomeSlider /> },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/monitoramento-animais", element: <AnimalMonitoring /> },
  { path: "/monitoramento-poluicao", element: <PolutionMonitoring /> },
  { path: "/monitoramento-vegetacao", element: <VegetationMonitoring /> },
  { path: "/sinais", element: <Signal /> },
  { path: "/configuracoes", element: <Settings /> },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
