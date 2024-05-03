
import imageLogo from "../../assets/img/logo.png";
import avatar from "../../assets/img/avatar.jpg";

import {
  Button,
  CardProjects,
  CarouselProjectsDetach,
  Container,
  ContainerContent,
  ContentCarousel,
  ContentLeft,
  ContentRight,
  H1,
  H2Name,
  Icone,
  ImagePerson,
  Links,
  Logo,
  Navigator,
  TextApresentation,
} from "./style";

export const Header = () => {
  return (
    <>
      <Container>
        <Logo >
           <img src={imageLogo}/>
        </Logo>
        <Navigator>
          <Links>Projetos</Links>
          <Links>Serviços</Links>
          <Links>Contatos</Links>
        </Navigator>
        <Icone>III</Icone>
      </Container>
      <ContainerContent>
        <ContentLeft>
        <ImagePerson >
            <img src={avatar}/>
          </ImagePerson>
          <H1>DESENVOLVEDOR WEB</H1>
          
        </ContentLeft>
        <ContentRight>
          <div>
            <TextApresentation>Olá, seja bem vindo(a)! Sou o</TextApresentation>
            <H2Name>Hércules Chaves</H2Name>
            <TextApresentation>
              apaixonado por tecnologia e inovação. Crio sites, e-commerce,
              landpages, sistemas, chatbot e realizo manutenções dos mesmos.
            </TextApresentation>
          </div>
          <div>
    
            <TextApresentation>
              Precisa de um especialista em desenvolvimento?
            </TextApresentation>
            <Button>Fale Comigo!</Button>
          </div>

          <ContentCarousel>
            <TextApresentation>Últimos projetos em destaque</TextApresentation>
            <CarouselProjectsDetach>
              <CardProjects />
              <CardProjects />
              <CardProjects />
            </CarouselProjectsDetach>
          </ContentCarousel>
        </ContentRight>
      </ContainerContent>
    </>
  );
};
