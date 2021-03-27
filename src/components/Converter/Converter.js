import styles from "./Converter.module.css";

export function Converter() {
  return (
    <form className={styles.converter}>
      <label>
        <p>Сумма в рублях</p>
        <input type="number" name="rub" min="0" step="1" />
      </label>

      <label>
        <p>Сумма в долларах</p>
        <input type="number" name="usd" min="0" step="1" />
      </label>
    </form>
  );
}
