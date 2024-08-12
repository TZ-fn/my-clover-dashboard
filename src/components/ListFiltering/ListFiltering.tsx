import styles from "./ListFiltering.module.scss";

export default function ListFiltering() {
  return (
    <div className={styles.mainContainer}>
      <label htmlFor="withChildren">
        <input name="withChildren" type="checkbox" />
        Klienci z dziećmi.
      </label>
      <label htmlFor="birthday">
        <input name="birthday" type="checkbox" />
        Klienci obchodzący urodziny.
      </label>
      <label htmlFor="indemnityMonth">
        <input name="indemnityMonth" type="checkbox" />
        Indemnity miesiąc.
      </label>
      <label htmlFor="indemnityYear">
        <input name="indemnityYear" type="checkbox" />
        Indemnity rok.
      </label>
    </div>
  );
}
