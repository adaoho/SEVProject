import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/images/loading-animation.json";

const Button = ({
  btnType,
  children,
  className,
  onClick,
  disabled,
  type,
  loading,
}) => {
  const ButtonTypes = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
    success: "success",
    danger: "danger",
  };

  const ButtonCondition = () => {
    switch (type) {
      case ButtonTypes.secondary:
        return (
          <button
            type={btnType || "button"}
            className={`button-secondary ${className}`}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        );
      case ButtonTypes.tertiary:
        return (
          <button
            type={btnType || "button"}
            className={`button-tertiary ${className}`}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        );
      default:
        return (
          <>
            <button
              type={btnType || "button"}
              className={`button-primary ${className}`}
              onClick={onClick}
              disabled={disabled}
            >
              {loading ? (
                <Lottie
                  animationData={loadingAnimation}
                  loop={true}
                  className="size-16 -m-6"
                />
              ) : (
                <>{children}</>
              )}
            </button>
          </>
        );
    }
  };
  return ButtonCondition();
};

export default Button;
