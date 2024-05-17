import styled from 'styled-components'

import { theme } from '../../styles/theme'

// CONTEÚDOS

const ContainerContent = styled.aside`
  margin: 4rem 0 15rem;
  display: flex;
  width: 100%;
  text-shadow: 0 1px 10px #000;

  color: ${theme.colors.light};
  min-height: calc(100vh - 6rem);

  span {
    margin-left: 1rem;
    color: ${theme.colors.selected};
  }
`

// Lado esquerdo
const ContentLeft = styled.div`
  position: relative;
  width: 45%;
`
const ImagePerson = styled.span`
  width: 100%;
  margin-left: 4rem;
  position: absolute;
  z-index: -1;

  > img {
    width: 90%;
    opacity: 0.7;
  }
`
const H1 = styled.h1`
  width: 100%;
  font-size: 3rem;
  margin-top: 90%;
  display: flex;
`

// Lado direito
const ContentRight = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const TextApresentation = styled.p`
  width: 100%;
  font-size: 1.5rem;
  text-shadow: 0 0 2px #000;
  /* line-height: 2rem; */

  > span {
    font-size: 2.9rem;
    margin-left: 0;

    display: flex;
    text-align: center;
  }
  > p {
    margin-top: 1rem;
  }
`
const H2Name = styled.h2`
  width: 100%;
  font-size: 3rem;
  /* line-height: 6rem; */
`
const Button = styled.button`
  background-color: transparent;
  margin-top: 2rem;
  color: ${theme.colors.light};
  border: solid 1px gray;
  width: 100%;
  font-size: 2rem;
  padding: 0.5rem;
  text-shadow: 0 0 2px #000;

  transition: 1s ease-in-out;

  &:hover {
    background-color: ${theme.colors.selected};

    color: ${theme.colors.white};
    border: none;
    transition: 1s ease-in-out;
  }
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
