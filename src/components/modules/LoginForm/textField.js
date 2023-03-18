import styles from './text-field.module.css';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';

const TextField = ({ label, handleChange, ...props }) => {
  const id = useMemo(() => nanoid(), []);

  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default TextField;
