import { Apresentation } from "@/pages/apresentation";
import { Menu } from "./components/menu";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>


      <Menu  />

      <main className={styles.main}>
        <h1>Bem vindo!</h1>


        <Apresentation />
      </main>
    </>
  );
}
