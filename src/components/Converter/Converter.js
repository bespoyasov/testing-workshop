import { useSelector } from "react-redux";
import { selectCourse } from "../../store/features/course/slice";
import styles from "./Converter.module.css";
import { useConverter as converterHook } from "./useConverter";

export function Converter({ useConverter = converterHook }) {
  const initialCourse = useSelector(selectCourse);
  const { usd, rub, updateRub, updateUsd } = useConverter(100, initialCourse);

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
          onChange={(e) => updateRub(e.target.value)}
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
          onChange={(e) => updateUsd(e.target.value)}
        />
      </label>
    </form>
  );
}
