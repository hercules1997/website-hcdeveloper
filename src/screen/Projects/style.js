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
  /* border: solid 1px white; */

  color: ${theme.colors.light};
`;

const H2Title = styled.h2`
  /* border: solid 1px green; */
  width: 100%;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 5rem;
`;

const ContainerContentProjects = styled.aside`
  /* border: solid 1px red; */
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  color: ${theme.colors.light};
  margin-bottom: 10rem;
  min-height: calc(100vh - 10rem);
`;

const ListProjects = styled.li`

  display: flex;

margin-top: 15rem;
  /* width: 100%; */

`;

const DivisorLineTime = styled.div`
display: flex;
  flex-direction: column;
  /* border: solid 1px beige; */
  justify-content: center;
align-items: center;
  width: 50%;
  padding: 1rem;
`;

const LineTime = styled.line`
  width: 5px;
  margin-top: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: gray;
  position: absolute;
  left: 50.3%;
`

const Circle = styled.circle`
  width: 20px;
  margin-top: 3rem;
  height: 20px;
  display: flex;
  border-radius: 50%;
  flex-direction: column;
  background-color: gray;
  position: absolute;
  left: 49.7%;
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
