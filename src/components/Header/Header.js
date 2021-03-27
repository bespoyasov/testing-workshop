import { CurrentCourse } from "../CurrentCourse/CurrentCourse";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      Курс доллара на сегодня:
      <CurrentCourse />
    </header>
  );
}
