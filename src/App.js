import styles from "./App.module.css";
import { Quote } from "./components/Quote";
import { Converter } from "./components/Converter";

export function App() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <Converter />
      <Quote />
    </main>
  );
}
