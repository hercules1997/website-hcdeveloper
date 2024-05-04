import { ContainerLink } from './style'

export const Links = ({ children, href, active, ...rest }) => {
  return (
    // TODO VERIFICAR POSTERIOMENTE SE HÁ NECESSIDADE DA PASSAGEM DESSA PROPRIEDADE "ACTIVE"
    <ContainerLink {...rest} isActive={active} href={href}>
      {children}
    </ContainerLink>
  )
}
