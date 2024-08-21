import mainLogo from "../../assets/mainLogo.webp";
import DataLoaderInput from "../DataLoaderInput/DataLoaderInput";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.mainContainer}>
      <a href="/">
        <div className={styles.mainLogoContainer}>
          <img src={mainLogo} alt="My Clover Logo" />
        </div>
      </a>
      <h1 className={styles.mainHeaderText}>🍀 Lista klientów 🍀</h1>
      <DataLoaderInput />
    </header>
  );
}
