import { Container, ContainerContentServices, H2Title, ImageService, ListServices, TextService } from "./style"

export const Services = () => {
  return (
    <Container>
      <H2Title>Serviços</H2Title>
      <ContainerContentServices>
        <ListServices>
          <div>     <ImageService />
          <TextService>Criação de Sites</TextService></div>
     
        </ListServices>
        <ListServices>
          <div>      <ImageService />
          <TextService>Manutenção</TextService></div>
    
        </ListServices>
        <ListServices>
          <div>
            <ImageService />
            <TextService>Chatbots</TextService>
          </div>
        </ListServices>
        <ListServices>
          <div>    <ImageService />
          <TextService>E-Commerces</TextService></div>
      
        </ListServices>
      </ContainerContentServices>
      <H2Title>Faça já um orçamento!</H2Title>
    </Container>
  );
}

