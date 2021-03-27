import { CurrentCourse } from "../CurrentCourse/CurrentCourse";
import { RefreshCourse } from "../RefreshCourse";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      Курс доллара на сегодня:
      <CurrentCourse />
      <RefreshCourse />
    </header>
  );
}
