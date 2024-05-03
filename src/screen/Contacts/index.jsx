import {
  Button,
  Container,
  FormContacts,
  IconSocial,
  Input,
  Label,
  ListServices,
  TexTarea,
} from "./style";

export const Contacts = () => {
  return (
    <Container>
     
      <FormContacts>
        <Label>Nome:</Label>
        <Input />
        <Label>E-mail:</Label>
        <Input />
        <Label>Telefone:</Label>
        <Input />
        <Label>Mensagem:</Label>
        <TexTarea></TexTarea>
        <Button>Enviar</Button>
        <ListServices>
          <IconSocial />
          <IconSocial />
          <IconSocial />
          <IconSocial />
        </ListServices>
      </FormContacts>
    </Container>
  );
};
