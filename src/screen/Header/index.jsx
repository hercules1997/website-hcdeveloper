import avatar from '../../assets/img/avatar.png'
import { Menu } from '../../components'
import {
  Button,
  CardProjects,
  CarouselProjectsDetach,
  ContainerContent,
  ContentCarousel,
  ContentLeft,
  ContentRight,
  H1,
  H2Name,
  ImagePerson,
  TextApresentation
} from './style'

export function Header() {
  return (
    <>
      <Menu />
      <ContainerContent>
        <ContentLeft>
          <ImagePerson>
            <img src={avatar} />
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
  )
}
