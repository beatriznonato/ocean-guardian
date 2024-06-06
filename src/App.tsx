import "./App.css";
import { Dashboard } from "./routes/dashboard/Dashboard";
import Login from "./routes/login/Login";
import { SignUp } from "./routes/signup/SignUp";
import WelcomeSlider from "./routes/welcome/WelcomeSlider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <WelcomeSlider /> },
  { path: "/login", element: <Login /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "sign-up", element: <SignUp /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
