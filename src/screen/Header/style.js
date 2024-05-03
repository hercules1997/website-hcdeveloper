import styled from "styled-components";
import { theme } from "../../styles/theme";

// CABEÇALHO

const Container = styled.header`
z-index: 1000;
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  backdrop-filter: blur(18px);
  color: ${theme.colors.light};
`;
const Logo = styled.span`
  width: 4rem;
  height: 4rem;
  > img {
    width: 100%;
  }
`;
const Navigator = styled.nav`
  display: flex;
  gap: 3rem;
`;
const Links = styled.a`
  font-size: 2rem;
  cursor: pointer;
`;
const Icone = styled.span``;

// CONTEÚDOS

const ContainerContent = styled.aside`
  margin-top: 4rem;
  display: flex;
  width: 100%;
  color: ${theme.colors.light};
  min-height: calc(100vh - 6rem);
`;

// Lado esquerdo
const ContentLeft = styled.div`
  position: relative;
  width: 50%;

  
`;
const ImagePerson = styled.span`
  width: 70%;
  height: 100%;

  left: 10rem;
  position: absolute;
  z-index: -1;

  >img {
    width: 100%;
   
  }
`;
const H1 = styled.h1`
  width: 100%;
  font-size: 3rem;
  position: absolute;
  bottom: 13rem;
`;

// Lado direito
const ContentRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const TextApresentation = styled.p`
  width: 100%;
  font-size: 1.5rem;
`;
const H2Name = styled.h2`
  width: 100%;
  font-size: 3rem;
`;
const Button = styled.button`
  background-color: transparent;
  margin-top: 2rem;
  color: ${theme.colors.light};

  border: solid 1px gray;
  width: 60%;
  font-size: 1.6rem;
`;

const ContentCarousel = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  justify-content: center;
`;
const CarouselProjectsDetach = styled.article`
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
