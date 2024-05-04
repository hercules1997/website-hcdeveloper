import styled from 'styled-components'

import { theme } from '../../styles/theme'

const Container = styled.section`
  margin-top: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  color: ${theme.colors.light};
`

const H2Title = styled.h2`
  width: 100%;
  font-size: 2rem;
  text-align: center;
`

const ContainerContentServices = styled.aside`
  position: relative;
  display: flex;
  width: 90%;
  flex-direction: column;
  color: ${theme.colors.light};
  min-height: calc(100vh - 2rem);
  margin-bottom: 5rem;
`

const ListServices = styled.li`
  padding: 2rem;
  display: flex;
  width: 100%;
  height: 12rem;

  > div {
    display: flex;
    width: 100%;
    box-shadow: 0 0 1rem #fff;
  }
`
const ImageService = styled.img`
  border: solid 1px blue;
  width: 30%;
`

const TextService = styled.h2`
  width: 70%;
  display: flex;
  font-size: 2rem;
  border: solid 1px #fff;
  justify-content: center;
  align-items: center;
`
export {
  Container,
  ContainerContentServices,
  H2Title,
  ListServices,
  ImageService,
  TextService
}
