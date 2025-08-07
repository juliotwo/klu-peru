const SpecialText = ({ children, Component = 'p', className }) => {
    return (
        <div className="relative">
            <Component
                className={className}
            >
                {children}
            </Component>
            <Component
                className={`${className} absolute -bottom-1 opacity-20`}
            >
                {children}
            </Component>
        </div>
    );
};

export default SpecialText;
