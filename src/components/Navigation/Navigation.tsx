/// <reference types="vite-plugin-svgr/client" />

import "./Navigation.css";
import Chat from "../../assets/icons/chat.svg?react";
import Coral from "../../assets/icons/coral.svg?react";
import Home from "../../assets/icons/home.svg?react";
import Rubish from "../../assets/icons/rubish.svg?react";
import Settings from "../../assets/icons/settings.svg?react";
import Turtle from "../../assets/icons/turtle.svg?react";
import { IconButton } from "../IconButton/IconButton";
import { useNavigate } from "react-router-dom";

type SidebarProps = {
  tab: "home" | "animal" | "vegetation" | "polution" | "signal" | undefined;
};

export const Navigation = ({ tab }: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <div className="navigation-menu-container">
      <div className="navigation-main-menu">
        <IconButton
          icon={Home}
          isActive={tab === "home"}
          onClick={() => navigate("/dashboard")}
        />
        <IconButton
          icon={Turtle}
          isActive={tab === "animal"}
          onClick={() => navigate("/monitoramento-animais")}
        />
        <IconButton
          icon={Rubish}
          isActive={tab === "polution"}
          onClick={() => navigate("/monitoramento-poluicao")}
        />
        <IconButton
          icon={Coral}
          isActive={tab === "vegetation"}
          onClick={() => navigate("/monitoramento-vegetacao")}
        />
        <IconButton
          icon={Chat}
          isActive={tab === "signal"}
          onClick={() => navigate("/sinais")}
        />
      </div>

      <button
        className="navigation-settings"
        onClick={() => navigate("/configuracoes")}
      >
        <Settings />
      </button>
    </div>
  );
};

export default Navigation;
