import styles from "./AuthButton.module.css";

const AuthButton = (props) => {
  return <button className={styles.authButton}>{props.text}</button>;
};

export default AuthButton;
