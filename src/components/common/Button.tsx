import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  variant?: string;
  boxShadow?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const VARIANTS: { [name: string]: string } = {
  primary: styles.primary,
  primaryOutline: styles.primaryOutline,
};

const Button = ({ variant, boxShadow, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`${variant ? VARIANTS[variant] : VARIANTS.primary} ${
        boxShadow ? styles.boxShadow : ''
      } ${styles.btn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
