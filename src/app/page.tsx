import { Apresentation } from "@/pages/apresentation";
import { Projects } from "@/pages/Projects";
import { Menu } from "./components/menu";
import "./page.css";

export default function Home() {
  return (
    <>
      <Menu />
      <main>
        <span>
          <p>
            Crie agora sua landing Page,
            <br /> e-commerce de
            <br /> qualidade!
          </p>
          <button>hekko</button>
        </span>

        <Apresentation />
        <Projects />
      </main>
    </>
  );
}
