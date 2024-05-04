import styled from 'styled-components'

import { theme } from '../../styles/theme'

// CONTEÚDOS

const ContainerContent = styled.aside`
  margin-top: 4rem;
  display: flex;
  width: 100%;
  color: ${theme.colors.light};
  min-height: calc(100vh - 6rem);
`

// Lado esquerdo
const ContentLeft = styled.div`
  position: relative;
  width: 50%;
`
const ImagePerson = styled.span`
  width: 100%;

  position: absolute;
  z-index: -1;

  > img {
    width: 90%;
  }
`
const H1 = styled.h1`
  width: 100%;
  font-size: 3rem;
  margin-top: 70%;
  display: flex;
`

// Lado direito
const ContentRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const TextApresentation = styled.p`
  width: 100%;
  font-size: 1.5rem;
`
const H2Name = styled.h2`
  width: 100%;
  font-size: 3rem;
`
const Button = styled.button`
  background-color: transparent;
  margin-top: 2rem;
  color: ${theme.colors.light};

  border: solid 1px gray;
  width: 60%;
  font-size: 1.6rem;
`

const ContentCarousel = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  justify-content: center;
`
const CarouselProjectsDetach = styled.article`
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 2rem;
`

const CardProjects = styled.span`
  border: solid 1px gray;
  width: 100%;

  height: 8rem;
`

export {
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
  ContentCarousel
}
