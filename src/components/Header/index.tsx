import { HeaderContainer, NavigationContainer } from "./styles";
import logoMobile from '../../assets/logo-mobile.svg'
import logoDesktop from '../../assets/logo-desktop.svg'
import menuOpen from '../../assets/menu-buguer-open.svg'
import { useContext } from "react";
import { MyContext } from "../../DefaultLayout";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";


export function Header() {

  const { BrowserWidthSmall } = useContext(MyContext)

  return (
    <div>{BrowserWidthSmall ? (
      <HeaderContainer>
        <img src={logoMobile} alt="" height={28} />
        <NavLink to="/menu" title="Home">
          <img src={menuOpen} alt="" width={22} />
        </NavLink>
      </HeaderContainer>)
      : (
        <HeaderContainer>
          <div>
            <img src={logoDesktop} alt="" height={50} />
          </div>
          <NavigationContainer>
            <NavLink to="/" title="Home">
              Home
            </NavLink>
            <NavLink to="/menu" title="Menu">
              Menu
            </NavLink>
            <NavLink to="/rewards" title="Recompensas">
              Recompensas
            </NavLink>
            <NavLink to="/giftcards" title="Gift Cards">
              Gift Cards
            </NavLink>
            <NavLink to="/stores" title="Lojas">
              Lojas
            </NavLink>
          </NavigationContainer>
          <Button />
        </HeaderContainer>
      )
    }</div>
  )
}