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
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${theme.colors.light};
  min-height: calc(100vh - 10rem);
`;

const ListProjects = styled.li`
  padding: 1rem;
  display: flex;
  width: 100%;

`;

const DivisorLineTime = styled.div`
  flex-direction: column;
  border: solid 1px beige;
  width: 50%;
  padding: 1rem;
`;

const LineTime = styled.line`
  width: 10px;
  margin-top: 2rem;
  height: 80%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  left: 49.5%;
`

const Circle = styled.circle`
  width: 30px;
  margin-top: 3rem;
  height: 30px;
  display: flex;
  border-radius: 50%;
  flex-direction: column;
  background-color: blue;
  position: absolute;
  left: 48.8%;
`;




export {
  Container,
  H2Title,
  ContainerContentProjects,
  ListProjects,
  DivisorLineTime,
  LineTime,
  Circle,
};
