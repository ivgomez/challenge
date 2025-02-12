import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Button.module.scss";

interface Props {
  variant: "default" | "icon" | "success" | "disabled";
  showIcon?: boolean;
  textLines: 1 | 2;
  position: "center" | "top";
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({ variant, showIcon, textLines, position, children }) => {
  return (
    <div className={`${styles.wrapper} ${styles[position]}`}>
      <button className={`${styles.button} ${styles[variant]}`}>
        {showIcon && <FaSearch className={styles.icon} />}
        <span className={textLines === 2 ? styles.twoLines : styles.oneLine}>{children}</span>
      </button>
    </div>
  );
};

export default Button;
