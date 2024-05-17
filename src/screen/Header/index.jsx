import avatar from '../../assets/img/av.png'
import { Menu } from '../../components'
import { Carousel } from '../../components/Carousel'
import {
  Button,
  // CardProjects,
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
            <TextApresentation>
              <span>Precisa de um especialista em desenvolvimento?</span>
            </TextApresentation>
          </div>
          <div>
            <H2Name>Hércules Chaves</H2Name>
            <TextApresentation>
              <p>
                Apaixonado por tecnologias e inovações, com sua cratividade e
                soluções desenvolve sites, e-commerce, landpages, sistemas,
                chatbot e realizo manutenções dos mesmos.
              </p>
            </TextApresentation>
            <Button>Entre em contato!</Button>
          </div>

          <ContentCarousel>
            <TextApresentation>Últimos projetos em destaque</TextApresentation>
            <CarouselProjectsDetach>
              <Carousel></Carousel>
              {/* <CardProjects />
              <CardProjects />
              <CardProjects /> */}
            </CarouselProjectsDetach>
          </ContentCarousel>
        </ContentRight>
      </ContainerContent>
    </>
  )
}
