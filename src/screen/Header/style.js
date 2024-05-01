import styled from "styled-components";
import { theme } from "../../styles/theme";
import imageLogo from "../../assets/img/logo.png";

// CABEÇALHO

const Container = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: solid 1px white;

  color: ${theme.colors.light};
`;
const Logo = styled.img`
  background-image: url("${imageLogo}");
  background-size: cover;
  border: solid 1px white;
  width: 4rem;
  height: 4rem;
`;
const Navigator = styled.nav`
  display: flex;
  gap: 3rem;
  border: solid 1px white;
`;
const Links = styled.a`
  font-size: 2rem;
  cursor: pointer;
  border: solid 1px white;
`;
const Icone = styled.span`
  border: solid 1px white;
`;

// CONTEÚDOS

const ContainerContent = styled.aside`
  border: solid 1px red;
  display: flex;
  width: 100%;
  color: ${theme.colors.light};
  min-height: calc(100vh - 6rem);
`;

// Lado esquerdo
const ContentLeft = styled.div`
  border: solid 1px red;
  position: relative;
  width: 50%;
`;
const ImagePerson = styled.img`
  border: solid 1px yellow;
  width: 80%;
  height: 90%;
  left: 7rem;
  position: absolute;
  z-index: -1;
`;
const H1 = styled.h1`
  border: solid 1px green;
  width: 100%;
  font-size: 3rem;
  position: absolute;
  bottom: 13rem;
`;

// Lado direito
const ContentRight = styled.div`
  border: solid 1px red;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TextApresentation = styled.p`
  border: solid 1px greenyellow;
  width: 100%;
  font-size: 2rem;
`;
const H2Name = styled.h2`
  border: solid 1px green;
  width: 100%;
  font-size: 4rem;
`;
const Button = styled.button`
  border: solid 1px gray;
  width: 60%;
  font-size: 2rem;
`;

const ContentCarousel = styled.section`
  display: flex;
  flex-direction: column;
  border: solid 1px green;
  width: 100%;

  justify-content: center;
`;
const CarouselProjectsDetach = styled.article`
  border: solid 1px red;
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 2rem;
`;

const CardProjects = styled.span`
  border: solid 1px gray;
  width: 100%;

  height: 8rem;
`;

export {
  Container,
  Icone,
  Logo,
  Navigator,
  Links,
  ContainerContent,
  ContentLeft,
  ContentRight,
  ImagePerson,
  H1,
  Button,
  CarouselProjectsDetach,
  CardProjects,
  H2Name,
  TextApresentation,
  ContentCarousel,
};
