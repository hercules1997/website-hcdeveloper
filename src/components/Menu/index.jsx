import imageLogo from '../../assets/img/logo.png'
import { Links } from '../../components'
import { ContainerMenu, Icone, Logo, Navigator } from './style'

export const Menu = () => {
  return (
    <ContainerMenu>
      <Logo>
        <img src={imageLogo} />
      </Logo>
      <Navigator>
        <Links isActive={false} href="#">
          Projetos
        </Links>
        <Links isActive={true} href="#">
          Serviços
        </Links>
        <Links isActive={false} href="#">
          Contatos
        </Links>
        {/* <LinkNav isActive name="Serviços" href="#" />
        <LinkNav isActive name="Contatos" href="#" /> */}

        <Icone></Icone>
      </Navigator>
    </ContainerMenu>
  )
}
