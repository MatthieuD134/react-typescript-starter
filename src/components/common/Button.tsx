import React from 'react';
import styles from './Button.module.scss';

export interface ButtonProps {
  label: string;
  size?: string;
  variant?: string;
  boxShadow?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const SIZES: { [name: string]: string } = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

const VARIANTS: { [name: string]: string } = {
  primary: styles.primary,
  primaryOutline: styles.primaryOutline,
};

const Button = ({ label, size, variant, boxShadow, onClick }: ButtonProps) => {
  return (
    <button
      className={`${size && SIZES[size]} ${variant ? VARIANTS[variant] : VARIANTS.primary} ${
        boxShadow && styles.boxShadow
      } ${styles.btn}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
