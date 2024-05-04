import styled from 'styled-components'

import { theme } from '../../styles/theme'

const ContainerMenu = styled.header`
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
`
const Logo = styled.span`
  width: 4rem;
  height: 4rem;
  > img {
    width: 100%;
  }
`
const Navigator = styled.nav`
  display: flex;
  gap: 3rem;
`

const Icone = styled.span``

export { ContainerMenu, Icone, Logo, Navigator }
