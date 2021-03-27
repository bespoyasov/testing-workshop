import styles from "./App.module.css";
import { Quote } from "./components/Quote";
import { Converter } from "./components/Converter";
import { Header } from "./components/Header";

export function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Converter />
      <Quote />
    </main>
  );
}
