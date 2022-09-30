import { Field, FieldAttributes, FieldProps } from 'formik';
import React from 'react';
import styles from './SimpleField.module.scss';

interface SimpleFieldProps {
  name: string;
  label: string;
  icon?: React.ReactNode;
  error?: string;
  touched?: boolean;
  as?: string | React.ComponentType<FieldProps['field']>;
  // eslint-disable-next-line
  FieldProps?: FieldAttributes<any>;
}

const SimpleField = ({
  name,
  label,
  icon,
  error,
  touched,
  as,
  ...FieldProps
}: SimpleFieldProps) => {
  return (
    <div className={styles.simpleField}>
      <label className={`${styles.fieldLabel} ${touched && styles.touched}`}>{label}</label>
      <Field className={styles.fieldInput} name={name} as={as} {...FieldProps}></Field>
      {icon && <span className={styles.icon}>{icon}</span>}

      {error && touched && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default SimpleField;
