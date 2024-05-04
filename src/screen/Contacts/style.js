import styled from 'styled-components'

import { theme } from '../../styles/theme'

const Container = styled.section`
  margin-top: 10rem;
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
  font-size: 4rem;
  text-align: center;
`

const FormContacts = styled.form`
  position: relative;
  display: flex;
  width: 60%;
  flex-direction: column;
  color: ${theme.colors.light};
  min-height: calc(100vh - 2rem);
`

const Label = styled.label`
  width: 100%;
  font-size: 1.2rem;
`
const Button = styled.button`
  width: 100%;
  margin-top: 2rem;
  font-size: 2rem;
`

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  display: flex;
  font-size: 4rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`
const TexTarea = styled.textarea`
  width: 100%;
  background-color: transparent;
  display: flex;
  font-size: 4rem;
  min-height: 10rem;
  max-height: 2rem;
`
const ListServices = styled.div`
  padding: 1rem;
  display: flex;
  width: 100%;
  height: 10rem;
  justify-content: space-between;
  margin-top: 12rem;
`
const IconSocial = styled.span`
  width: 5rem;
  border: solid 1px blue;
  height: 5rem;
`
export {
  Container,
  FormContacts,
  H2Title,
  ListServices,
  Label,
  Input,
  Button,
  TexTarea,
  IconSocial
}
