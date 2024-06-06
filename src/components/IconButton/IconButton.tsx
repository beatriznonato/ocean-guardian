import "./IconButton.css";

type IconButtonProps = {
  icon: React.ComponentType;
  isActive?: boolean;
  onClick?: () => void;
};

export const IconButton = ({
  icon: Icon,
  onClick,
  isActive = false,
}: IconButtonProps) => {
  return (
    <button
      className="icon-button-container"
      onClick={onClick}
      style={{
        backgroundColor: isActive
          ? "var(--color--tertiary-blue)"
          : "rgba(255, 255, 255, 0.00)",
      }}
    >
      <Icon />
    </button>
  );
};
