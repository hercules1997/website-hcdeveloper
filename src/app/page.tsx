import { Apresentation } from "@/pages/apresentation";
import { Menu } from "./components/menu";
import "./page.css";

export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <p>Crie agora sua landing Page, 
          <br /> e-commerce de
          <br /> qualidade!</p>
        <Apresentation />
      </main>
    </>
  );
}
