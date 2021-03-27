import { quotes } from "./quotes";
import styles from "./Quote.module.css";

export function Quote() {
  const { author, text } = quotes[0];

  return (
    <footer className={styles.quote}>
      <blockquote>{text}</blockquote>
      <cite className={styles.author}>— {author}</cite>
    </footer>
  );
}
