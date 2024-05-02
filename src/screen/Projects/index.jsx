import {
  Circle,
  Container,
  ContainerContentProjects,
  DivisorLineTime,
  H2Title,
  LineTime,
  ListProjects,
} from "./style";
import { Cards } from "../../components/Cards";
import { DecriptionsProjects } from "../../components/DecriptionsProjects";
export const Projects = () => {
  return (
    <Container>
      <H2Title>Projetos</H2Title>
      <ContainerContentProjects>
        <LineTime />
        <ListProjects>
          <DivisorLineTime>
            <Cards />
          </DivisorLineTime>
          <Circle />
          <DivisorLineTime>
            <DecriptionsProjects />
          </DivisorLineTime>
        </ListProjects>
        <ListProjects>
          <DivisorLineTime>
            <DecriptionsProjects />
          </DivisorLineTime>
          <Circle />
          <DivisorLineTime>
            <Cards />
          </DivisorLineTime>
        </ListProjects>
        <ListProjects>
          <DivisorLineTime>
            <Cards />
          </DivisorLineTime>
          <Circle />
          <DivisorLineTime>
            <DecriptionsProjects />
          </DivisorLineTime>
        </ListProjects>
        <ListProjects>
          <DivisorLineTime>
            <DecriptionsProjects />
          </DivisorLineTime>
          <Circle />
          <DivisorLineTime>
            <Cards />
          </DivisorLineTime>
        </ListProjects>
  
      </ContainerContentProjects>
      <H2Title>Ver mais</H2Title>
    </Container>
  );
};
