import { useState } from "react";
import styles from "./Converter.module.css";

export function Converter() {
  const [rub, setRub] = useState(100);
  const [usd, setUsd] = useState(1);

  return (
    <form className={styles.converter}>
      <label>
        <p>Сумма в рублях</p>
        <input
          type="number"
          name="rub"
          min="0"
          step="1"
          value={rub}
          onChange={(e) => setRub(e.target.value)}
        />
      </label>

      <label>
        <p>Сумма в долларах</p>
        <input
          type="number"
          name="usd"
          min="0"
          step="1"
          value={usd}
          onChange={(e) => setUsd(e.target.value)}
        />
      </label>
    </form>
  );
}
