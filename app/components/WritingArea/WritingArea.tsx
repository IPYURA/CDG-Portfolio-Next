import React from "react";
import styles from "./WritingArea.module.css";

export const WritingArea = () => {
  return (
    <>
      <div className={styles.container}>
        <h3>Write!</h3>
        <form action="">
          <textarea name="" id=""></textarea>
          <input type="button" value={"SUBMIT"} className={styles.submitBtn} />
        </form>
      </div>
    </>
  );
};
