import avatar from '../../assets/img/image.png'
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
} from './style.header'

export function Header() {
  return (
    <>
      <Menu />
      <ContainerContent>
        <ContentLeft>
          <ImagePerson>
            <img src={avatar} />
          </ImagePerson>
          <H1>
            DESENVOLVEDOR<span> WEB</span>
          </H1>
        </ContentLeft>
        <ContentRight>
          <div>
            <H2Name>Hércules Chaves</H2Name>
            <TextApresentation>
              Apaixonado por tecnologias e inovações, com sua cratividade e
              soluções desenvolve sites, e-commerce, landpages, sistemas,
              chatbot e realizo manutenções dos mesmos.
            </TextApresentation>
          </div>
          <div>
            <TextApresentation>
              <span>
                {' '}
                Esta precisando de um especialista em desenvolvimento?
              </span>
            </TextApresentation>
            <Button>Entre em contato!</Button>
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
