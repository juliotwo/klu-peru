const Button = ({ className, children, gradient, flat, flatWhite, flatBlack, white,
  black, special, ...props }) => {

  const validateType = () => {
    if (gradient) {
      return "bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl text-white"
    }

    if (flat) {
      return 'bg-transparent hover:bg-third border-2 border-primary text-third hover:text-black'
    }

    if (flatWhite) {
      return 'bg-transparent hover:bg-white border-2 border-white text-white hover:text-black'
    }

    if (flatBlack) {
      return 'bg-transparent hover:bg-black border-2 border-black text-black hover:text-white'
    }

    if (special) {
      return 'bg-transparent border-2 border-black text-black'
    }

    if (white) {
      return "bg-white text-black"
    }

    if (black) {
      return "bg-black text-white"
    }

    return "bg-third text-black"
  }

  const classes = `${validateType()} transition-colors focus:ring-4 focus:ring-blue-300 font-bold rounded-full px-5 py-2 disabled:bg-gray-300 font-rocGrotesk ${className}`

  if (special) {
    return (
      <div className="relative">
        <button
          className={`${classes} hover:bg-black hover:text-white transition-transform -translate-y-2 hover:translate-y-0 z-10 absolute`}
          {...props}
        >
          {children}
        </button>
        <button
          className={`${classes} absolute left-0 top-0 opacity-20 z-0`}
          {...props}
        >
          {children}
        </button>
      </div>
    )
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};



export default Button;

