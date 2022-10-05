import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <img src="./logo.jpg" alt="" />
      <ul className={styles.list}>
        <li className={styles.item}>Galeri</li>
        <li className={styles.item}>Cara order</li>
        <li className={styles.item}>Kontak</li>
      </ul>
    </header>
  );
}
