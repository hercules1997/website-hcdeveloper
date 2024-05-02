
import { Container, ContainerContentProjects, H2Title, ListProjects } from "./style";
import { Cards} from '../.'
export const Projects = () => {
  return (
    <Container>
      <H2Title>Projetos</H2Title>
      <ContainerContentProjects>
        <ListProjects>
          <Cards/>
        </ListProjects>
      </ContainerContentProjects>
    </Container>
  );
};
