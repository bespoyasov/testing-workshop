import { useSelector } from "react-redux";
import { selectCourse } from "../../store/features/course/slice";
import styles from "./CurrentCourse.module.css";

export function CurrentCourse() {
  const value = useSelector(selectCourse);
  return <div className={styles.value}>{value}₽</div>;
}
