import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { MyContext } from "../../DefaultLayout"
import { Home } from "../Home"
import { MenuContainer, MenuItemContent } from "./styles"

export function Menu() {
  const { BrowserWidthSmall } = useContext(MyContext)
  const menuList = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Menu',
      route: '/menu',
    },
    {
      name: 'Recompensas',
      route: '/rewards',
    },
    {
      name: 'Gift Cards',
      route: '/giftcards',
    },
    {
      name: 'Lojas',
      route: '/stores',
    },
  ]

  return (
    <div>
      {BrowserWidthSmall ? (
        <MenuContainer>
          <ul>
            {menuList.map(item => (
              <MenuItemContent key={item.name}>
                <NavLink to={item.route}>
                  <p>{item.name}</p>
                </NavLink>
              </MenuItemContent>
            ))}
          </ul>
        </MenuContainer>
      ) : (
        <Home />
      )
      }
    </div>
  )
}