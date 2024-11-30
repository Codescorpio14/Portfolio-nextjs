const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-yellow-300 rounded-lg uppercase text-neutral-900 font-semibold shadow-lg shadow-slate-600/30 hover:rounded-full hover:bg-yellow-400 dark:bg-yellow-400 dark:hover:bg-yellow-500 transition-all; ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
