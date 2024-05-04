import styled from 'styled-components'

import { theme } from '../../styles/theme'

const ContainerLink = styled.a`
  color: ${(props) =>
    props.isActive ? theme.colors.selected : theme.colors.light};
  font-size: 1.5rem;
  text-align: 50%;
  text-transform: translateX(-50%);
  transition: 0.5s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${theme.colors.selected};
    font-weight: 700;
  }
  &::after {
    content: '';
    height: 0.125rem;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background: ${theme.colors.selected};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
    height: 0.225rem;
  }
`

export { ContainerLink }
