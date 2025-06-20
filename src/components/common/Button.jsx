export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex cursor-pointer items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary-gradient text-primary-foreground hover:bg-primary-gradient/90 focus:ring-primary",
    secondary:
      "bg-white text-primary hover:bg-gray-50 focus:ring-primary border border-gray-200",
    outline:
      "border border-border bg-background hover:bg-accent hover:text-accent-foreground focus:ring-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
