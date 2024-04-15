interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="h-[42px] border border-solid border-while p-2 rounded-xl text-white hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
