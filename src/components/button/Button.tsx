import React from 'react';
import styles from './Button.module.scss';
import  ButtonProps from "./Button.d";

const Button: React.FC<ButtonProps> = ({
  children,
  border,
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  radius,
  icon,
  className,
  ...props
}) => {
  const buttonClass = `${styles.button} ${styles[color]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`;
  const buttonStyle = { border, borderRadius: radius };

  return (
    <button
      className={buttonClass}
      style={buttonStyle}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
