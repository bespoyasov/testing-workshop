import { quotes } from "./quotes";
import styles from "./Quote.module.css";

export function Quote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { author, text } = quotes[randomIndex];

  return (
    <footer className={styles.quote}>
      <blockquote>{text}</blockquote>
      <cite className={styles.author}>— {author}</cite>
    </footer>
  );
}
