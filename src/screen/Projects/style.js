import styled from "styled-components";
import { theme } from "../../styles/theme";

const Container = styled.section`
margin-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: solid 1px white;

  color: ${theme.colors.light};
`;

const H2Title = styled.h2`
  border: solid 1px green;
  width: 100%;
  font-size: 4rem;
  text-align: center;
`;

const ContainerContentProjects = styled.aside`
  border: solid 1px red;
  display: flex;
  width: 100%;
  color: ${theme.colors.light};
  min-height: calc(100vh - 6rem);
`;

const ListProjects = styled.li`

`


export { Container, H2Title, ContainerContentProjects, ListProjects };
