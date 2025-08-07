const Input = ({ className, disabled, ...rest }) => {
  return (
    <input
      style={{ opacity: disabled ? 0.5 : 1 }}
      disabled={disabled}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none block w-full p-2.5 ${className}`}
      {...rest}
    />
  );
};

export default Input;

