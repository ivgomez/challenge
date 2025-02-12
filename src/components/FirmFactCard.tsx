import React from "react";
import styles from "./FirmFactCard.module.scss";
import Button from "./Button";

interface Props {
  variant: "default" | "border";
  buttonVariant: "default" | "icon" | "success" | "disabled";
  showIcon?: boolean;
  textLines: 1 | 2;
  position: "center" | "top";
}

const FirmFactCard: React.FC<Props> = ({ variant, buttonVariant, showIcon, textLines, position }) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div className={`${styles.buttonWrapper} ${styles[position]}`}>
        <Button variant={buttonVariant} showIcon={showIcon} textLines={textLines}>
          {textLines === 2 ? "This is a two line button that terminates with ..." : "This is a one line button"}
        </Button>
      </div>
    </div>
  );
};

export default FirmFactCard;
