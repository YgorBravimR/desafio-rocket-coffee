import { HomeContainer, HomeContentContainer } from "./styles";

import rocketCoffeeImg from '../../assets/rocket-coffee.png'

import { useContext } from "react";
import { MyContext } from "../../DefaultLayout";
import { Button } from "../../components/Button";


export function Home() {
  const { BrowserWidthSmall } = useContext(MyContext)

  return (
    <div>
      {BrowserWidthSmall ? (
        <HomeContainer>
          <HomeContentContainer>
            <p className="firstText">
              O café que fará seu código decolar para o próximo nível.
            </p>
            <Button />
            <div>
              <p>Great Coffee</p>
              <p>{'<Great Code />'}</p>
            </div>
          </HomeContentContainer>
          <img src={rocketCoffeeImg} alt="" />
        </HomeContainer>
      ) : (
        <HomeContainer>
          <div>
            <p>Great Coffee</p>
            <p>{'<Great Code />'}</p>
          </div>
          <img src={rocketCoffeeImg} alt="" />
        </HomeContainer>
      )
      }
    </div>
  )
}