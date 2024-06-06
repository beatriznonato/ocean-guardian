/// <reference types="vite-plugin-svgr/client" />

import "./Navigation.css";
import Chat from "../../assets/icons/chat.svg?react";
import Coral from "../../assets/icons/coral.svg?react";
import Home from "../../assets/icons/home.svg?react";
import Rubish from "../../assets/icons/rubish.svg?react";
import Settings from "../../assets/icons/settings.svg?react";
import Turtle from "../../assets/icons/turtle.svg?react";
import { IconButton } from "../IconButton/IconButton";

type SidebarProps = {
  tab: "home" | "animal" | "plant" | "trash" | "chat";
};

export const Navigation = ({ tab }: SidebarProps) => {
  return (
    <div className="navigation-menu-container">
      <div className="navigation-main-menu">
        <IconButton icon={Home} isActive={tab === "home"} />
        <IconButton icon={Turtle} isActive={tab === "animal"} />
        <IconButton icon={Rubish} isActive={tab === "trash"} />
        <IconButton icon={Coral} isActive={tab === "plant"} />
        <IconButton icon={Chat} isActive={tab === "chat"} />
      </div>

      <button className="navigation-settings">
        <Settings />
      </button>
    </div>
  );
};

export default Navigation;
